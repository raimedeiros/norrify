import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import Navigator from '../components/navigator'
import jokeActions from '../redux/jokeActions';
import Loading from '../components/loading';

const url_api = 'https://api.chucknorris.io/jokes/random?category='

class Joke extends Component {
  state = {
    loading: true
  }
  setJoke(item) {
    item = item.joke
    this.props.dispatch(jokeActions.setJoke(item.created_at, item.icon_url, item.value, item.categories))
  }
  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <Loading></Loading>
      )
    }
    return (
      <div className="joke-block">
        <Navigator></Navigator>
        <div className="row text-center">
          <div className="col-12 col-md-8 card">
            <img alt="ícone" src={this.props.jokeItem.icon}></img>
            <div className="title-card">
              <h2><i>Joke</i></h2>
            </div>
            <div className="content-card">
              <p className="joke-content">{this.props.jokeItem.value}</p>
              <p><i>Created on: </i>
                <Moment format="DD/MM/YYYY">{(this.props.jokeItem.created)}</Moment><br />
              </p>
              <p className="text-right"><small>Categories: {this.props.jokeItem.categories}</small></p>
            </div>
            <div className='footer-card'>
              {this.state.loading === true && <div>loading</div>}
              <p className='carregar-outra' onClick={() => this.getJoke()}>Carregar outra</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getJoke()
  }

  getJoke() {
    this.setState({ loading: true })
    fetch(url_api + (this.props.categoria.categoria ? this.props.categoria.categoria : 'animal'))
      .then(res => res.json())
      .then((data) => {
        this.setJoke({ joke: data })
        this.setState({ loading: false })
      })
      .catch(console.log)
  }
}
export default connect(store => ({ categoria: store.categoria, jokeItem: store.joke }))(Joke)