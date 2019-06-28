import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import appActions from '../redux/appActions';
import { connect } from 'react-redux';

class Categories extends Component {
  setCategory(item) {
    this.props.dispatch(appActions.setCategoria(item))
  }
  render() {
    return (
      <Fragment>
        <div className="row text-center">
          <div className="col-12 col-md-8 card">
            <div className="title-card">
              <h2>Escolha uma categoria</h2>
            </div>
            <div className="content-card">
              <div class="row">
                {this.state.categories.map(item => (
                  <div class="col-6 col-md-4 text-center">
                    <Link className="link-category" to='/joke/' onClick={() => this.setCategory(item)}>{item}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  state = {
    categories: []
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then((data) => {
        this.setState({ categories: data })
      })
      .catch(console.log)
  }
}

export default connect(store => ({ categoria: store.categoria }))(Categories)
