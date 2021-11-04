import React, { useState } from "react";
import axios from "axios";
import Preview from "./Preview";
import Progress from "./Progress";

const Uploader = () => {
  const [progress, setProgress] = useState(0);
  const [highLight, setHighlight] = useState(false);
  const [submit, setSubmit] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [url, setUrl] = useState(false);

  const dragEnter = (e) => {
    e.preventDefault();
    setHighlight(true);
  };
  const dragOver = (e) => {
    e.preventDefault();
    setHighlight(true);
  };
  const dragLeave = (e) => {
    e.preventDefault();
    setHighlight(false);
  };
  const drop = (e) => {
    e.preventDefault();
    setHighlight(false);
    let dropFile;
    if (e.dataTransfer && e.dataTransfer.files.length > 0) {
      dropFile = e.dataTransfer.files[0];
      uploadFile(dropFile);
    }
  };

  const changeHandler = (e) => {
    let file;
    if (e.target && e.target.files.length > 0) {
      file = e.target.files[0];
      uploadFile(file);
    }
  };

  const uploadFile = (file) => {
    setIsUploading(true);
    setSubmit(false);
    const formData = new FormData();
    formData.append("myFile", file);
    let config = {
      onUploadProgress: function (progressEvent) {
        let percentCompleted =
          (progressEvent.loaded / progressEvent.total) * 100;
        setProgress(percentCompleted);
      },
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/uploadFile`, formData, config)
      .then((result) => {
        if (result.status === 200 && result.data.status === "success") {
          setIsUploading(false);
          setIsUploaded(true);
          setUrl(result.data.fileUrl);
        }
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-wrap place-items-center h-screen justify-center">
      <div className="shadow-custom rounded-xl w-72 md:w-96 p-8 bg-white relative overflow-hidden text-center text-dark_text">
        {submit && (
          <>
            <h1 className="card__title text-xl mb-2">Upload your image</h1>
            <p className="card__description text-xs mb-6">
              File should be Jpeg, Png,...
            </p>
            <form>
              <div
                id="drag_drop"
                className={"dropArea " + (highLight ? "highlight" : "")}
                onDragEnter={dragEnter}
                onDragOver={dragOver}
                onDragLeave={dragLeave}
                onDrop={drop}
              >
                <img src="drop.svg" alt="drop" />
                <p className="text-sm">Drag & Drop your image here</p>
              </div>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={changeHandler}
                className="hidden"
              />
              <div className="mt-3">Or</div>
              <label
                className="bg-blue-shade1 px-4 text-center py-2 rounded-lg text-white inline-block mt-3 cursor-pointer"
                htmlFor="image"
              >
                Choose a file
              </label>
            </form>
          </>
        )}
        {isUploading && (
          <>
            <Progress />
          </>
        )}
        {isUploaded && (
          <>
            <Preview url={url} />
          </>
        )}
      </div>
    </div>
  );
};

export default Uploader;
