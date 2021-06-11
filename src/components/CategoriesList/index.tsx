import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { api } from "../../services/api"

export function CategoriesList(){

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    api.get('categories').then(response => setCategories(response.data))
  })

  return (
    <>
        <div className="row text-center">
          <div className="col-12 col-md-8 card">
            <div className="title-card">
              <h2>Escolha uma categoria</h2>
            </div>
            <div className="content-card">
              <div className="row">
                {categories.map(category=>(
                  <div key={category} className="col-6 col-md-4 text-center">
                    <Link className="link-category" to='/joke/'>{category}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
  )
}