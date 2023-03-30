import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'
import './Categories.css'

const Categories = () => {
  const { fetchCategories, categories } = useContext(Context)

  useEffect(()=>{ // when the component is mounted, we will run the function fetchCategories
    fetchCategories()
  }, [fetchCategories]) // fetchCategories function as dependency

  return (
    <div className='categories'>
      {categories.map(category=>(
        <div key={category.idCategory}>
          <img src={category.strCategoryThumb} />
          <h4>{category.strCategory}</h4>
        </div>
      ))}
    </div>
  )
}

export default Categories