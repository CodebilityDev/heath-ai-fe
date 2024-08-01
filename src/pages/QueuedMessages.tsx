import CustomFields from "@/components/common/CustomFieldsv2";
import { apolloClient } from "@/graphql/client";
import {
  CancelPendingQueue,
  GetPendingQueue,
} from "@/graphql/declarations/queue";
import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const QueuedMessagePage = () => {
  const { gid } = useParams();

  const { data: messageQueueData } = useQuery(GetPendingQueue, {
    variables: {
      input: {
        groupID: gid!,
      },
    },
    skip: !gid,
  });

  const cancelMessage = async (args: { id: string }) => {
    await apolloClient.mutate({
      mutation: CancelPendingQueue,
      variables: {
        input: {
          groupID: gid!,
          ids: [args.id],
        },
      },
    });

    toast.success("Message cancelled");

    // Refetch the data
    await apolloClient.resetStore();
  };

  return (
    <div className="flex flex-col w-full px-8 py-8 mx-auto space-y-4">
      <h2 className="font-bold text-2xl text-left">Queued Messages</h2>
      <div className="p-4 rounded-md bg-slate-100 w-full flex flex-col gap-4">
        {messageQueueData?.queue_getPendingMessages?.queue?.length === 0 && (
          <div className="bg-white shadow-lg rounded-lg p-4 w-full">
            <p>No messages in queue</p>
          </div>
        )}
        {messageQueueData?.queue_getPendingMessages?.queue?.map((queue) => {
          if (!queue) return null;
          return (
            <div
              key={queue.id}
              className="bg-white shadow-lg rounded-lg p-4 w-full"
            >
              <p>
                <b>Receiver:</b> {queue.data.contactName}
              </p>
              <p>
                <b>Message</b>
              </p>
              <p className="bg-slate-200 p-2 font-mono text-xs">
                {queue.data.message}
              </p>
              <p>
                <b>Group:</b>
                {queue.data.groupName}
              </p>
              <p>
                <b>Will send in:</b> {queue.delayString}
              </p>
              <div className="text-sm flex gap-2">
                <button
                  className="border-red-500 border rounded-md p-2"
                  onClick={() => cancelMessage({ id: queue.id })}
                >
                  Cancel
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QueuedMessagePage;
