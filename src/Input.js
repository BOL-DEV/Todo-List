import { useState } from "react";
import "./Input.css";

const Input = ({  onAddList, theme}) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newLists = { id: Date.now(), description, solved: false };

    onAddList(newLists);

    setDescription("");
  };

  return (
    <form className={`input-container ${theme}-mode`} onSubmit={handleSubmit}>
      <label class="custom-checkbox">
        <input type="checkbox" />
        <span class={`checkmark ${theme}-mode`}></span>
      </label>
      <input
        type="text"
        className={`input ${theme}-mode`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
};

export default Input;
