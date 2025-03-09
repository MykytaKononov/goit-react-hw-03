import React from "react";

export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
}
