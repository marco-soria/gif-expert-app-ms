import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Jujutsu Kaisen', 'Kimetsu no Yaiba']);

    const handleAddCategory = (neWCategory) => {

        // if (categories.includes(neWCategory)) return;
        if (categories.find(category => category.toLowerCase() === neWCategory.toLowerCase())) return;

        setCategories([neWCategory, ...categories ]);
    }

    return (
        <>
          
            <h1>GifExpertApp</h1>
            
            <AddCategory 
                onNewCategory = {handleAddCategory} 
            />
           
            
            {categories.map(category => 
                (
                    <GifGrid 
                        key= {category} 
                        category={category}/>
                )
                
            )
        }
            
                
            
        </>
    )
}


