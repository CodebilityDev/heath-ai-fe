import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloudUpload } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import "@/styles/dragNdrop.css";

const DragNdrop = ({
  onFilesSelected,
  width,
}: {
  onFilesSelected: Function;
  width: string;
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: any) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles: any) => [...prevFiles, ...newFiles]);
    }
  };
  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles: any) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  return (
    <section className="drag-drop" style={{ width: width }}>
      <input
        type="file"
        hidden
        id="browse"
        onChange={handleFileChange}
        accept=".xlsx"
        multiple
      />
      <label htmlFor="browse">
        <div
          className={`document-uploader ${
            files.length > 0 ? "upload-box active" : "upload-box"
          }`}
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          <>
            <div className="upload-info">
              <AiOutlineCloudUpload className="text-primary" />
              <p className="text-xs mt-4">
                <span className="text-primary text-xs">Click to upload</span> or
                drag and drop
              </p>
              <p className="text-xs">Excel format</p>
            </div>
          </>

          {files.length > 0 && (
            <div className="file-list">
              <div className="file-list__container">
                {files.map((file, index) => (
                  <div className="file-item" key={index}>
                    <div className="file-info">
                      <p>{file.name}</p>
                      {/* <p>{file.type}</p> */}
                    </div>
                    <div className="file-actions">
                      <MdClear onClick={() => handleRemoveFile(index)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {files.length > 0 && (
            <div className="success-file">
              <AiOutlineCheckCircle
                style={{ color: "#6DC24B", marginRight: 1 }}
              />
              <p>{files.length} file(s) selected</p>
            </div>
          )}
        </div>
      </label>
    </section>
  );
};

export default DragNdrop;
