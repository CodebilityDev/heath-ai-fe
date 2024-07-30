import CustomFields from "@/components/common/CustomFields";
import React from "react";

const CustomFieldsPage = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl px-8 md:px-0 py-8 mx-auto space-y-4">
      <CustomFields />
    </div>
  );
};

export default CustomFieldsPage;
