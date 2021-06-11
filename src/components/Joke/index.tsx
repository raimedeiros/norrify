import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Moment from 'react-moment'
import { api } from "../../services/api"

import {Navigator} from '../Navigator'

interface JokeProps{
  selectedCategory:string
}

interface Joke{
  categories: [],
  icon_url: string,
  id: string,
  url: string,
  value: string,
  updated_at: string,
  created_at: string,
}

export function Joke(){
  const location = useLocation<JokeProps>()
  const {selectedCategory} = location.state

  const [joke, setJoke] = useState<Joke>()
  const [loadingStatus, setLoadingStatus] = useState(false)
  
  async function loadJoke(): Promise<void>{
    setLoadingStatus(true)
    const response = await api.get('random?category=' + selectedCategory)
    const joke = response.data
    setJoke(joke)
    setLoadingStatus(false)
  }
  
  useEffect(()=>{
    loadJoke()
  },[selectedCategory])

  return(
    <div className="joke-block">
      <Navigator></Navigator>
      <div className="row text-center">
        <div className="col-12 col-md-8 card">
          <img alt="ícone" src={joke?.icon_url}></img>
          <div className="title-card">
            <h2><i>Joke</i></h2>
          </div>
          <div className="content-card">
            <p className="joke-content">{joke?.value}</p>
            <p><i>Created on: </i>
              <Moment format="DD/MM/YYYY">{(joke?.created_at)}</Moment><br />
            </p>
            <p className="text-right"><small>Categories: {joke?.categories}</small></p>
          </div>
          <div className='footer-card'>
            <p className='carregar-outra' onClick={() => loadJoke()}>
              {loadingStatus == true && <span>Loading</span>}
              {loadingStatus == false && <span>Load another joke</span>}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        </div>
      </div>
    </div>
  )
}