import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { api } from "../../services/api"
import { Loading } from "../Loading"

export function CategoriesList(){

  const [categories, setCategories] = useState([])
  const [loadingStatus, setLoadingStatus] = useState(true)

  useEffect(()=>{
    api.get('categories').then(response => {
      setCategories(response.data)
    })
    setLoadingStatus(false)
  },[])

  return (
    <>
      {loadingStatus===true&&<Loading></Loading>}
      
      {loadingStatus===false && (
        <div className="row text-center">
          <div className="col-12 col-md-8 card">
            <div className="title-card">
              <h2>Select a category</h2>
            </div>
            
            <div className="content-card">
              <div className="row">
                {categories.map(category=>(
                  <div key={category} className="col-6 col-md-4 text-center">
                    <Link 
                    className="link-category" 
                    to={
                      {
                        pathname: '/joke/',
                        state:{selectedCategory:category}
                      }
                    }>
                      {category}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}