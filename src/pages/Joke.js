import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import Navigator from '../components/Navigator'

const url_api = 'https://api.chucknorris.io/jokes/random?category='

class Joke extends Component {
  render() {
    const jokeObj = this.state.joke
    return (
      <div className="joke-block">
        <Navigator></Navigator>
        <div className="row text-center">
          <div className="col-12 col-md-8 card">
            <img alt="ícone" src={jokeObj.icon_url}></img>
            <div className="title-card">
              <h2><i>Joke</i></h2>
            </div>
            <div className="content-card">
              <p className="joke-content">{jokeObj.value}</p>
              <p><i>Created on: </i>
                <Moment format="DD/MM/YYYY">{jokeObj.updated_at}</Moment><br />
              </p>
              <p className="text-right"><small>Category: {jokeObj.categories}</small></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  state = { joke: [] };

  componentDidMount() {
    fetch(url_api + (this.props.categoria ? this.props.categoria : 'animal'))
      .then(res => res.json())
      .then((data) => {
        this.setState({ joke: data })
      })
      .catch(console.log)
  }
}
export default connect(store => ({ categoria: store.categoria }))(Joke)