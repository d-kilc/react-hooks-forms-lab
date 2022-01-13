import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm(props) {

  const [addingName, setAddingName] = useState('')
  const [addingCategory, setAddingCategory] = useState('Produce')
  console.log(addingName, addingCategory)

  function handleAddingNameChange(e) {
    setAddingName(e.target.value)
  }

  function handleAddingCategoryChange(e) {
    setAddingCategory(e.target.value)
  }


  return (
    <form className="NewItem" onSubmit={(e) => {
      e.preventDefault()
      const newItem = {
        id: uuid(),
        name: addingName,
        category: addingCategory
      }
      props.onItemFormSubmit(newItem)
    }}>
      <label>
        Name
        <input type="text" name="name" value={addingName} onChange={handleAddingNameChange}/>
      </label>

      <label>
        Category
        <select name="category" value={addingCategory} onChange={handleAddingCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
