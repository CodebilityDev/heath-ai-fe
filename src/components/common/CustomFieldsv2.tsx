import { Button } from "@/components/ui/button";
import { DeleteIcon, EditIcon, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { twMerge } from "tailwind-merge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "../ui/switch";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  BreakCustomFieldCache,
  GetCustomFields,
  ModifyCustomFields,
} from "@/graphql/declarations/customFields";
import { apolloClient } from "@/graphql/client";
import { toast } from "react-toastify";
import { GetGroup, UpdateGroup } from "@/graphql/declarations/geMe";
import { cn } from "@/lib/utils";
import { on } from "events";
import useDebounce from "@/hooks/useDebounce";

export const CustomField = ({ field, action }: any) => {
  return (
    <div className="p-2 border h-fit  bg-white">
      <p className="font-bold">{field.name}</p>
      <p>{field.dataType}</p>
      <p>{field.fieldKey}</p>
      {action}
    </div>
  );
};

const InsuranceFields: {
  name: string;
  dataType: string;
}[] = [
  {
    name: "DOB (Birthday)",
    dataType: "TEXT",
  },
  {
    name: "Mailing Is Home",
    dataType: "TEXT",
  },
  {
    name: "Work Phone",
    dataType: "TEXT",
  },
  {
    name: "Home Phone",
    dataType: "TEXT",
  },
  {
    name: "Cell Phone",
    dataType: "TEXT",
  },
  {
    name: "Mail Notifs",
    dataType: "TEXT",
  },
  {
    name: "Is Individual Or Group",
    dataType: "TEXT",
  },
  {
    name: "Is Looking For Coverage",
    dataType: "TEXT",
  },
  {
    name: "Is Interested For CostDiscount",
    dataType: "TEXT",
  },
  {
    name: "Husband/Spouse Name",
    dataType: "TEXT",
  },
];

const CustomFields = () => {
  const { gid } = useParams();

  const { data: groupData } = useQuery(GetGroup, {
    variables: {
      where: {
        id: gid,
      },
    },
    skip: !gid,
  });

  const [onContext, setOnContext] = useState<string[]>([]);

  useEffect(() => {
    if (groupData?.group?.user_contextFields) {
      setOnContext(groupData?.group?.user_contextFields ?? []);
    }
  }, [groupData]);

  const { data: fieldData } = useQuery(GetCustomFields, {
    variables: {
      input: {
        groupID: gid!,
      },
    },
    skip: !gid,
  });

  const toggleContext = async (args: { id: string }) => {
    if (!gid) return;

    let context = onContext;

    if (context.includes(args.id)) {
      context = context.filter((id) => id !== args.id);
      setOnContext(context);
    } else {
      context = [...context, args.id];
      setOnContext(context);
    }

    await apolloClient.mutate({
      mutation: UpdateGroup,
      variables: {
        where: {
          id: gid!,
        },
        data: {
          contactConfigs: context,
        },
      },
    });

    // toast.success("Context saved successfully");
  };

  const deleteField = async (args: { id: string }) => {
    if (!gid) return;
    await apolloClient.mutate({
      mutation: ModifyCustomFields,
      variables: {
        input: {
          groupID: gid!,
          customFields: [
            {
              action: "delete",
              id: args.id,
            },
          ],
        },
      },
    });

    await apolloClient.mutate({
      mutation: BreakCustomFieldCache,
      variables: {
        input: {
          groupID: gid!,
        },
      },
    });

    toast.success("Field deleted successfully");
    apolloClient.resetStore();
  };

  const addNewField = async (args: { name: string }) => {
    if (!gid) return;
    await apolloClient.mutate({
      mutation: ModifyCustomFields,
      variables: {
        input: {
          groupID: gid!,
          customFields: [
            {
              action: "create",
              name: args.name,
            },
          ],
        },
      },
    });

    await apolloClient.mutate({
      mutation: BreakCustomFieldCache,
      variables: {
        input: {
          groupID: gid!,
        },
      },
    });
    toast.success("Field " + args.name + " added successfully");
    apolloClient.resetStore();
  };

  let currentCustomFields = [
    ...(fieldData?.ghl_getCustomFields?.customFields ?? []),
  ];

  // sort the fields so that those included in the context are at the top
  currentCustomFields.sort((a: any, b: any) => {
    if (onContext.includes(a.name) && !onContext.includes(b.name)) {
      return -1;
    } else if (!onContext.includes(a.name) && onContext.includes(b.name)) {
      return 1;
    } else {
      return 0;
    }
  });

  let availableFields = InsuranceFields.filter(
    (field) => !currentCustomFields.map((f: any) => f.name).includes(field.name)
  );

  return (
    <div className="w-full px-16 flex flex-col gap-2">
      <h2 className="text-xl font-bold">Contact Fields</h2>
      <p className="w-3/4">
        To get the fullest from our FederalPlans Bot, we recommend you to import
        our custom fields so that we can use this to build the Insurance profile
        of your client.
      </p>

      <div className="p-4 rounded-md bg-slate-100 w-full flex flex-col gap-4">
        <h3 className="font-bold">Included In Context While Conversing</h3>
        <div className="flex gap-2 flex-wrap">
          {onContext.map((field) => (
            <div className="border p-2 rounded-md shadow-md bg-white">
              <p>
                {field}{" "}
                <span
                  className="text-red-600 cursor-pointer"
                  onClick={() => {
                    toggleContext({ id: field });
                  }}
                >
                  x
                </span>
              </p>
            </div>
          ))}
        </div>
        <p className="px-2 text-xs mt-3">
          On top of the custom context provided, the bot will automatically
          fetch the following information from the user in your GHL Contact
          Info: location_id, first_name, last_name, agent_first_name,
          agent_last_name, emailLowerCase, timezone, companyName, phone, type,
          source, address1, city, state, country, postalCode, website,
          dateOfBirth, gender
        </p>
      </div>

      <div className="p-4 rounded-md bg-slate-100 w-full flex flex-col gap-4">
        <h3 className="font-bold">Existing Fields</h3>
        <p>You have {currentCustomFields.length ?? 0} custom fields</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-2 h-[50vh] overflow-y-auto ">
          {currentCustomFields.map((field) => (
            <CustomField
              key={field?.id}
              field={field}
              action={
                <div className="flex gap-2">
                  <button
                    className={cn(
                      " text-xs",
                      onContext.includes(field?.name!)
                        ? "bg-blue-600  text-white"
                        : "text-blue-600"
                    )}
                    onClick={() => {
                      toggleContext({ id: field?.name! });
                    }}
                  >
                    {onContext.includes(field?.name!)
                      ? "On Context"
                      : "Add to Context"}
                  </button>
                  <button
                    className="text-red-600 text-xs"
                    onClick={() => {
                      deleteField({ id: field?.id! });
                    }}
                  >
                    Delete
                  </button>
                </div>
              }
            />
          ))}
        </div>
      </div>

      <div className="p-4 rounded-md bg-slate-100 w-full flex flex-col gap-4">
        <h3 className="font-bold">Recommended Fields</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-2 h-[50vh] overflow-y-auto">
          {availableFields.map((field) => (
            <CustomField
              key={field?.name}
              field={field}
              action={
                <>
                  <button
                    className="text-blue-600 text-xs"
                    onClick={() => addNewField({ name: field.name })}
                  >
                    Install
                  </button>
                </>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomFields;
