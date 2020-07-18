import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import logo from './images/_Logo.jpg';


export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <section>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
            <img class = "logo" src={logo} height="500px" width="500px"/>
              <div className="mt-4">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                <p><Link className="btn px-5" to="/login">Login</Link></p>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}
