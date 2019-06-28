import React, { Fragment } from 'react'
import Categories from '../components/Categories'

const Home = () => (
  <Fragment>
    <div className="header-block text-center">
      <img alt="Chuck Norris icon" src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"></img>
      <h1>
        <span>Hey Norris,</span>
        <span>make a joke!</span>
      </h1>
    </div>
    <Categories></Categories>
  </Fragment>
)

export default Home;