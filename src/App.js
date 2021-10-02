import "./App.css";
import { useState } from "react";
import OtpInput from "react-otp-input";
import Button from "./components/Button";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (otp) => {
    setValue(otp);
  };
  const handlePaste = (event) => {
    setValue(event.clipboardData.getData("Text"));
  };
  return (
    <div className="App" onPaste={handlePaste}>
      <OtpInput
        value={value}
        onChange={handleChange}
        numInputs={7}
        separator={<span>-</span>}
        inputStyle={{
          width: "50px",
          height: "50px",
          margin: "10px",
          textAlign: "center",
          border: "4px solid #00008B",
        }}
      />
      <Button otp={value} />
    </div>
  );
}

export default App;
