import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Joke extends Component {
  render () {
    return (
      <div>
        <h2>Food</h2>
        <img alt="ícone" src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"></img>
        <p>Chuck Norris drinks napalm to quell his heartburn.</p>
        <p>2016-05-01 10:51:41.584544</p>
        <h3><Link to='/'>Voltar para home</Link></h3>
      </div>
    );
  }
}