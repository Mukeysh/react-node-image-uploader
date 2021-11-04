import React, { useState, useRef } from "react";

function Preview({ url }) {
  const copyRef = useRef();
  const [copyText, setCopyText] = useState(false);
  const copyToClipBoard = () => {
    const copyText = copyRef.current;
    copyText.contenteditable = true;
    copyText.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    copyText.contenteditable = false;
    setCopyText(true);
  };
  return (
    <>
      <img src="check.png" className="block mb-3 mx-auto w-10" alt="success" />
      <h1 className="text-xl mb-4">Uploaded Successfully!</h1>
      <img
        className="h-48 object-center object-cover rounded-xl"
        src={`${process.env.REACT_APP_API_URL}/${url}`}
        alt="preview"
      />
      <div className="flex border flex mt-2 p-1 items-center bg-customGray-normal border-customGray-dark rounded-lg text-dark_text">
        <span
          contentEditable="true"
          ref={copyRef}
          className="truncate"
        >{`${process.env.REACT_APP_API_URL}/${url}`}</span>
        <button
          className="bg-blue-shade1 px-2 py-1 rounded-lg text-white"
          onClick={copyToClipBoard}
        >
          {copyText ? "copied" : "copy"}
        </button>
      </div>
    </>
  );
}

export default Preview;
