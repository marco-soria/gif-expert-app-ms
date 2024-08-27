import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    /* const handleInputChange = (e) => {
        setInputValue(e.target.value);
      } */
    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form action="" onSubmit={handleSubmit} aria-label="form">
      <input type="text" 
              placeholder='Search...'
              value={inputValue}
              // onChange={ (e) => setInputValue(e.target.value) }
              onChange={ handleInputChange }
      />
      {/* <button type="submit">Add a series</button> */}
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}



