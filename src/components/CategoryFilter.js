import React from "react";

function CategoryFilter({categories, selectedCategory, onCategorySelect}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => ( 
        //categoy form above is the name we made up cause we are looping though CATEGORIES array one by one
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
