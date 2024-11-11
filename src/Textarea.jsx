import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");
  const handleChange = (e) => {
    let newText = e.target.value;
    //basic validationss

    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ tag allowed");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter Your Text "
        spellCheck="false"
      />
      <Warning warningText={warningText} />
    </div>
  );
}
