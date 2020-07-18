import React, { Component } from "react";
import Header from "../components/Header";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import { MessageBox, SystemMessage } from 'react-chat-elements';
import questions from '../resources/questions.json'
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      chats: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false,
      questionTime: true,
      question: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.myRef = React.createRef();
  }

  async componentDidMount() {
    this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;
    try {
      db.ref("chats").on("value", snapshot => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        if (chats.length === 0 && this.state.question === '') {
          this.setState({
            question: this.getRandomQuestion()
          })
        }
        
        chats.sort(function (a, b) { return a.timestamp - b.timestamp })
        this.setState({ chats });
        chatArea.scrollBy(0, chatArea.scrollHeight);
        this.setState({ loadingChats: false });
      });
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  getRandomQuestion() {
    const keys = Object.keys(questions)
    const randIndex = Math.floor(Math.random() * keys.length)
    const randKey = keys[randIndex]
    return questions[randKey]
  }
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;
    try {
      await db.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid
      });
      this.setState({ content: '' });
      chatArea.scrollBy(0, chatArea.scrollHeight);
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  nextQuestion() {
    this.setState({
      question: this.getRandomQuestion()
    })
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  render() {
    return (
      <div>
        <Header />

        <div className="chat-area" ref={this.myRef}>
          {/* loading indicator */}
          {this.state.loadingChats ? <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div> : ""}
          {/* chat area */}
          <div style={{position: "sticky", top: '0px'}}>
          {(this.state.question) &&
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
            <div
              style={{width: '85%', border: '2px solid black', borderRadius:'10px', padding:'10px', backgroundColor: 'rgba(255,222,89,0.2)', fontWeight:'bolder'}}>{'Question time: "' + this.state.question}</div>
              <div style={{width: "12%", textAlign: 'center', marginLeft:'3%'}}><button onClick={this.nextQuestion} className="btn btn-secondary">Next Question</button></div>
              </div>
              }
              
              </div>
          {this.state.chats.map(chat => {
            return <p key={chat.timestamp}>
              {this.state.user.uid !== chat.uid}{

              }
              <MessageBox
                position={(this.state.user.uid === chat.uid) ? "right" : "left"}
                title={(this.state.user.uid !== chat.uid) ? this.props.location.state.partnerName : "you"}
                type={'text'}
                date={chat.timestamp}
                text={chat.content}
              />
              <br />
            </p>
          })}
        </div>
        <form onSubmit={this.handleSubmit} className="mx-3">
          <textarea className="form-control" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
          {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
          <button type="submit" className="btn btn-primary px-5 mt-4">Send</button>
        </form>
        <div className="py-5 mx-3">
          Login in as: <strong className="text-info">{this.state.user.email}</strong>
        </div>
      </div>
    );
  }
}
