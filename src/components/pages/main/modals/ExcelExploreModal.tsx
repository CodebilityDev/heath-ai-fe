import IconUpload from "@svgs/IconUpload";

const ExcelExploreModal = ({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: any;
  onSave: any;
}) => {
  return (
    <div
      className={`modal-container ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="modal-content md:w-[60%] w-full">
        <div className="flex flex-col gap-[30px]">
          <div className="w-full">
            <p className="font-bold">Health Sherpa Excel Explore</p>
          </div>
          <div className="divider-x"></div>
          <div className="flex flex-col gap-[20px]">
            <div className="w-full">
              <p className="form-label">Description</p>
              <textarea
                rows={6}
                placeholder="How many click"
                className="form-input"
              ></textarea>
            </div>
            <div className="flex flex-col md:w-[50%] w-full">
              <p className="mb-2">Select Type</p>
              <select className="form-input hci-select">
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>
          <div className="divider-x"></div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center md:w-[60%] w-full h-40 border-2 border-primary border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <IconUpload />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-bold text-primary">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <div className="w-full">
            <div className="flex gap-[24px] justify-end content-center font-bold items-center">
              <div>
                <button className="flex items-center" onClick={onClose}>
                  Cancel
                </button>
              </div>
              <div>
                <button className="btn-submit" onClick={onSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelExploreModal;
