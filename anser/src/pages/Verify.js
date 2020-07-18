import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub, signInWithFacebook } from "../helpers/auth";
import { db } from "../services/firebase";
import ImageUploader from 'react-images-upload';

export default class Verify extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
      pictures: []
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    console.log("picture");
    this.setState({
        pictures: this.state.pictures.concat(picture),
     });
    }   

  render() {
    return (
      <div className="container">
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            Verify your identity
          </h1>
          <p className="lead">
            Please upload an image of a valid piece of ID
          </p>
          <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
            />
          
          <div className="form-group">
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <Link to={'/matching'}>Submit</Link>
          </div>
        </form>
      </div>
    )
  }
}
