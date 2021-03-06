import Header from "../components/Header"
import React, { Component } from 'react'
import { Row, Button, ListGroup } from "react-bootstrap"
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements'
import { AvatarGenerator } from 'random-avatar-generator';
import { Link, Redirect } from 'react-router-dom'
import { db } from "../services/firebase";
var humanNames = require('human-names');
export default class MessageThreads extends Component {
    constructor(props) {
        super(props);
        this.state = {
       redirect: false,
        };
    this.createChatRoom = this.createChatRoom.bind(this);
      }

   async createChatRoom(userName) {
    try {
      await db.ref("chatRoom").push({
        userName: userName
      })} catch (error) {
      console.log(error.message);
    }
  }
    handleOnClick = (chatItem) => {
        this.createChatRoom(chatItem.title)
        this.setState({ redirect: true, partnerName: chatItem.title  });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={{
                pathname: '/chat',
                state: { partnerName: this.state.partnerName, partnerImage: this.state.avatar }
            }} />;
        }
        const generator = new AvatarGenerator();
        return (<div>
            <Header /><ChatList
                className='chat-list'
                onClick={this.handleOnClick}
                dataSource={[
                    {
                        avatar: generator.generateRandomAvatar(),
                        alt: 'Reactjs',
                        title: humanNames.maleRandom(),
                        subtitle: 'On a scale of 1 to 10, you are 8',
                        date: new Date(),
                        unread: 1,
                    }, {
                        avatar: generator.generateRandomAvatar(),
                        alt: 'Reactjs',
                        title: humanNames.maleRandom(),
                        subtitle: 'I am ready to break the ice!',
                        date: new Date(),
                        unread: 2,
                    }, {
                        avatar: generator.generateRandomAvatar(),
                        alt: 'Reactjs',
                        title: humanNames.maleRandom(),
                        subtitle: 'It sucks all the good pickup lines are taken,',
                        date: new Date(),
                        unread: 5,
                    }, {
                        avatar: generator.generateRandomAvatar(),
                        alt: 'Reactjs',
                        title: humanNames.maleRandom(),
                        subtitle: 'Damn girl, are you climate change?',
                        date: new Date(),
                        unread: 2,
                    }, {
                        avatar: generator.generateRandomAvatar(),
                        alt: 'Reactjs',
                        title: humanNames.maleRandom(),
                        subtitle: 'Damn girl are you a toaster?',
                        date: new Date(),
                        unread: 2,
                    }, {
                        avatar: generator.generateRandomAvatar(),
                        alt: 'Reactjs',
                        title: humanNames.maleRandom(),
                        subtitle: 'is there a phone in your back pocket by any chance',
                        date: new Date(),
                        unread: 2,
                    }, {
                        avatar: generator.generateRandomAvatar(),
                        alt: 'Reactjs',
                        title: humanNames.maleRandom(),
                        subtitle: 'I am ready to break the ice!',
                        date: new Date(),
                        unread: 2,
                    }, {
                        avatar: generator.generateRandomAvatar(),
                        alt: 'Reactjs',
                        title: humanNames.maleRandom(),
                        subtitle: 'I am ready to break the ice!',
                        date: new Date(),
                        unread: 2,
                    }, {
                        avatar: generator.generateRandomAvatar(),
                        alt: 'Reactjs',
                        title: humanNames.maleRandom(),
                        subtitle: 'I am ready to break the ice!',
                        date: new Date(),
                        unread: 2,
                    }
                ]} /><div className="d-flex justify-content-center"><Link to='/matching'><Button>Match with new people!</Button></Link></div></div>
        )
    }
}