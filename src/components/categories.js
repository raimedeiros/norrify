import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import catActions from '../redux/catActions';
import { connect } from 'react-redux';
import Loading from '../components/Loading'

class Categories extends Component {
  state = {
    loading: true
  }
  setCategory(item) {
    this.props.dispatch(catActions.setCategoria(item))
  }
  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <Loading></Loading>
      )
    }
    return (
      <Fragment>
        <div className="row text-center">
          <div className="col-12 col-md-8 card">
            <div className="title-card">
              <h2>Escolha uma categoria</h2>
            </div>
            <div className="content-card">
              <div className="row">
                {this.state.categories.map(item => (
                  <div key={item} className="col-6 col-md-4 text-center">
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
    this.setState({ loading: true })
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then((data) => {
        this.setState({ categories: data })
        this.setState({ loading: false })
      })
      .catch(console.log)
  }
}

export default connect(store => ({ categoria: store.categoria }))(Categories)
