import axios from "axios";
import React, { useState } from "react";
import VerificationStatus from "./VerificationStatus";

const Button = ({ otp }) => {
  const [message, setMessage] = useState("");
  const verifyOtp = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "https://74xvrpsl61.execute-api.ap-southeast-1.amazonaws.com/dev/verifyOtp",
        data: {
          otp: parseInt(otp),
        },
      });
      setMessage("VERIFICATION SUCCESSFUL");
      console.log("res from axios", res);
    } catch (error) {
      console.log("error", error.message);
      setMessage("VERIFICATION FAILED");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          backgroundColor: "#00008B",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={verifyOtp}
      >
        Verify
      </button>
      <VerificationStatus message={message} />
    </div>
  );
};

export default Button;
