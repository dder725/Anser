import Header from "../components/Header"
import React, { Component } from 'react'
import { Row, Button, ListGroup } from "react-bootstrap"
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements'
import { AvatarGenerator } from 'random-avatar-generator';
import { Link, Redirect } from 'react-router-dom'
var humanNames = require('human-names');
export default class MessageThreads extends Component {
   state = {
       redirect: false
   }
    
    handleOnClick = () => {
        this.setState({ redirect: true });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/chat" />;
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
                        subtitle: 'What are you doing?',
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
                    }, {
                        avatar: generator.generateRandomAvatar(),
                        alt: 'Reactjs',
                        title: humanNames.maleRandom(),
                        subtitle: 'I am ready to break the ice!',
                        date: new Date(),
                        unread: 2,
                    }
                ]} /><div class="d-flex justify-content-center"><Link to='/matching'><Button>Match with new people!</Button></Link></div></div>
        )
    }
}