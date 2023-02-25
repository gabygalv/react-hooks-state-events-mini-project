import React from "react";

function CategoryFilter({categories, setCurrentCategory, currentCategory}) {
  
const categoryButtons = categories.map ((category) => {
  const selectedClass = ((currentCategory===category) ? "selected" : "");
  return <button 
    key={category} 
    className ={selectedClass} 
    onClick={() => setCurrentCategory(category)}
    >
    {category}
    </button>
});

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
