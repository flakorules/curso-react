import React, {useState} from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';


const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertAppp</h2>
            <AddCategory setCategories={setcategories}/>
            <hr/>
            <ul>
                {
                    categories.map( (category, i) => 
                        <GifGrid 
                        key={category}
                        category={category}/>
                    )
                }
            </ul>       

            
        </>);

};

export default GifExpertApp;

