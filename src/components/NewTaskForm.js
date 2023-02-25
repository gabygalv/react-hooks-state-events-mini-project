import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
const [text, setText] = useState("");
const [category, setCategory] = useState("");
  const categoryOption = categories.map((category) => {
    return <option value={category} key={category}>{category}</option>
  })
function handleTextChange (e) {
  setText(e.target.value)
}

function handleCategoryChange (e) {
  setCategory(e.target.value)
}

function handleFormSubmit(e) {
  e.preventDefault();
  onTaskFormSubmit({ text, category });
  setText("");
  setCategory("All");
}

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categoryOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
