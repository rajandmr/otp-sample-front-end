import React from "react";

const VerificationStatus = ({ message }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        color: message === "VERIFICATION SUCCESSFUL" ? "green" : "red",
        margin: "10px",
        fontSize: "20px",
      }}
    >
      {message}
    </div>
  );
};

export default VerificationStatus;
