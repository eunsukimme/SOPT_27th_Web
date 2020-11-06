import React, { useState } from "react";

export default function SearchInput({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form id="form">
      <input
        type="text"
        id="input"
        className="changable"
        placeholder="Github 프로필을 검색해보세요"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>검색</button>
    </form>
  );
}
