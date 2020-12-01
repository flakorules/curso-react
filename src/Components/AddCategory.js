import React, {useState} from 'react';
import PropTypes from 'prop-types';



const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('Hola tereso');

    const handleInputChange = (e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories((cats) => [inputValue,...cats]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange }
            />
        </form>

    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;