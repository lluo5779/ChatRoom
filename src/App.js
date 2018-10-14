import React, { Component } from 'react';
import MessageList from './MessageList'
import ResponseForm from './ResponseForm'
import logo from './logo.svg';
import './App.css';

/*
import Chatkit from '@pusher/chatkit'
*/

import { tokenUrl, instanceLocator } from './config'

const ladypic = 'http://www.ahalsiyakhat.com/wp-content/uploads/2016/07/profile-unknown-female-2.jpeg.png';
const manpic = 'https://image.freepik.com/vector-gratis/perfil-de-avatar-de-hombre-en-icono-redondo_24640-14044.jpg';
const guypic = 'https://image.flaticon.com/icons/svg/74/74276.svg';

const DUMMY_MESSAGE=[
    {messageName: 'Ami',
    messageContent: 'Hello Underworld!',
    profilesrc: ladypic,
    fromUser: false},
    {messageName: 'Underworld',
    messageContent:'Online',
    profilesrc: manpic,
    fromUser: false},
    {messageName: 'Ami',
    messageContent: 'Who lives in a pineapple under the sea?',
    profilesrc: ladypic,
    fromUser: false},
    {messageName: 'Underworld',
    messageContent: 'SpongeBob SquarePants!',
    profilesrc: manpic,
    fromUser: false},
    {messageName: 'Louis',
    messageContent: 'I hope this works!',
    profilesrc:guypic,
    fromUser: true},

];

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            messageList: DUMMY_MESSAGE,
            currentInput: '',
            userID: 'Louis',
            userProfileSrc: guypic
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }
    
    /*componentDidMount(){
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: 'lluo5779',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl,
            })
        })
        
        chatManager.connect()
        .then(currentUser=>{
            currentUser.subscribeToRoom({
                roomId:18543349,
                hooks: {
                    onNewMessage: message =>{
                        this.state({
                            messageList: [...this.state.messageList, message]
                        })
                    }
                }
            })
        })
    }*/
    
    changeHandler(e){
        e.preventDefault()
        this.setState({
            currentInput: e.target.value,
        })
    }
    
    submitHandler(e){
        e.preventDefault()
        if (this.state.currentInput !== ''){
            if (this.state.currentInput === 'Hello world'){
                let newMessage = {messageName: this.state.userID,
                                 messageContent: this.state.currentInput,
                                 profilesrc:guypic,
                                 fromUser:true}
                
                let newMessage2 = {messageName: 'Underworld',
                                 messageContent: 'No, my name is Underworld',
                                 profilesrc:manpic,
                                 fromUser:false}
                this.setState({
                    messageList: [...this.state.messageList, newMessage, newMessage2],
                    currentInput: '',
                })
            } else{
                let newMessage = {messageName: this.state.userID,
                                 messageContent: this.state.currentInput,
                                 profilesrc:guypic,
                                 fromUser:true}
            
                this.setState({
                    messageList: [...this.state.messageList, newMessage],
                    currentInput: '',
                })
            }

        }   
    }
    
    
    autoResponse(){
        if (this.state.currentInput === 'Hello world'){
                let newMessage = {messageName: 'Underworld',
                         messageContent: 'No, my name is Underworld',
                         profilesrc:manpic,
                         fromUser:false}

                this.setState({
                        messageList: [...this.state.messageList, newMessage],
                })
            }
    }
    
    render() {
        var currentInput = this.state.currentInput;
        return (
            <div className='App'>
              <div className='Title'>My ChatRoom</div>
              <MessageList messageList={this.state.messageList} autoResponse={()=>{this.autoResponse()}} />
              {/*<Message messageName='' messageContent='' />*/}
              <ResponseForm value={currentInput} onChange={this.changeHandler} 
              onSubmit={this.submitHandler} userId={this.state.userID} />
 
            </div>

        )
    }
}

export default App;
