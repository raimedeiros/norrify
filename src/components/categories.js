import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Categories extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.state.categories.map(item => (
            <li key={item}>
              <Link to={{
                pathname: '/joke/',
                state: {
                  categories: true
                }
              }}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  state = {
    categories: []
  }

  componentDidMount () {
    fetch('https://api.chucknorris.io/jokes/categories')
      //fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ categories: data })
      })
      .catch(console.log)
  }
}