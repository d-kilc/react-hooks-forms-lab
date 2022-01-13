import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddingNameChange, onAddingCategoryChange, onItemFormSubmit, addingName, addingCategory }) {
  const [selectedName, setSelectedName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
    console.log(e.target.value)
  }

  function handleNameChange(e) {
    setSelectedName(e.target.value)
  }

  //filter logic
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && selectedName === '') {
      //unfiltered category and null input -> show everything
      return true
    } else if (selectedCategory !== 'All' && selectedName === '') {
      //filtered category and null input -> show items w/matching category
      return item.category === selectedCategory
    } else if (selectedCategory !== 'All' && selectedName !== '') {
      //filtered category and non-null input -> show items w/matching cat and name
      return item.category === selectedCategory && item.name.toUpperCase().includes(selectedName.toUpperCase())
    } else {
      //unfiltered category and non-null input -> show items w/matching name only
      return item.name.toUpperCase().includes(selectedName.toUpperCase())
    }
  })

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleNameChange}
        category={selectedCategory}
        search={selectedName}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
