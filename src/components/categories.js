import React, { Component } from 'react'

export default class Categories extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.state.categories.map(item => (
            <li key={item}>
              {item}
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