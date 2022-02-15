import React, { useState } from "react";

function ShowMessage() {
  const [message, setMessage] = useState("");
  const toggleMessage = () => {
    if (message === "") {
      setMessage("Hello World!");
    } else {
      setMessage("");
    }
  };

  return (
    <div>
      <button onClick={toggleMessage} className={""}>
        Show Message!
      </button>
      <div className="text-red-50">{message}</div>
    </div>
  );
}

export default ShowMessage;
