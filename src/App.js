import React, { Component } from 'react';
import MessageList from './MessageList'
import ResponseForm from './ResponseForm'
import logo from './logo.svg';
import './App.css';

import { tokenUrl, instanceLocator } from './config'


import {Wit} from 'node-wit'


/*
try {
  // if running from repo
  Wit = require('../').Wit;
  interactive = require('../').interactive;
} catch (e) {
  Wit = require('node-wit').Wit;
  interactive = require('node-wit').interactive;
}*/
/*
import Chatkit from '@pusher/chatkit'
*/


/*

const client = new Wit({accessToken: 'YLX3LE3OPB6SXF3LHDBPFAN5HZHDCDFS'});

*/

const token = 'YLX3LE3OPB6SXF3LHDBPFAN5HZHDCDFS';

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



const allJokes = {
  math: [
    'Why should you never talk to Pi? Because she’ll go on and on and on forever.',
    'Why was the math lecture so long? The professor kept going off on a tangent.',
    'Why is it sad that parallel lines have so much in common? Because they will never meet.'  
  ],
  tech: [
    'Did you hear about the two antennas that got married? The ceremony was long and boring, but the reception was great!',
    'Why do geeks mistake Halloween and Christmas? Because Oct 31 === Dec 25.',
  ],
  puns: ['I asked my French friend if she likes to play video games. She said, “Wii."',
        'What kind of cats like to go bowling? Alley cats.'
  ],
  bye: ['See you soon!'],
  default: [
    'Why was the Math book sad? Because it had so many problems.',
  ],
};


function firstEntityValue (entities, entity) {
  const val = entities && entities.entities[entity] &&
    Array.isArray(entities.entities[entity]) &&
    entities.entities[entity].length > 0 &&
    entities.entities[entity][0].value
  ;
  if (entity === 'getJoke'){
      alert(JSON.stringify(entities))
      alert(entities.entities)
      alert(val)

  }
    
  if (!val) {
    return null;
  }
  return typeof val === 'object' ? val.value : val;
}


class App extends React.Component {
    constructor(props){
        super(props)
        const client = new Wit({accessToken: token});
        this.state={
            messageList: DUMMY_MESSAGE,
            currentInput: '',
            submitPacket: null,
            response:null,
            userID: 'Louis',
            userProfileSrc: guypic,
            client: client,
            hasUpdate: true,
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }
    
    componentDidUpdate(){
        if (this.state.response!==null){
           
           if (this.state.hasUpdate === false) {
               /*alert(this.state.response)*/
               this.handleMessage(this.state.response);
               this.setState({hasUpdate: true});
           }}
    }

    
    changeHandler(e){
        e.preventDefault()
        this.setState({
            currentInput: e.target.value,
        })
    }
    
    submitHandler(e){
        e.preventDefault()
        let newMessage;
        if (this.state.currentInput !== ''){
            if (this.state.currentInput === 'Hello world'){
                newMessage = {messageName: this.state.userID,
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
                newMessage = {messageName: this.state.userID,
                                 messageContent: this.state.currentInput,
                                 profilesrc:guypic,
                                 fromUser:true}
            
                this.setState({
                    messageList: [...this.state.messageList, newMessage],
                    currentInput: '',
                })
            }
        }
        this.setState({
            submitPacket:newMessage,
        })
        
        this.state.client.message(newMessage.messageContent, {}).then((data)=>{
            this.setState({response: data,
            hasUpdate: false,})
        })        
       
    }
    
    /*receiveMessage(){
        client.message('How is your day?', {})
            .then((data) => {
              console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
            })
            .catch(console.error);
    }*/
    
    
    handleMessage (entities){
        var message;
/*
        const entities = data['entities']
*/
        const getJoke = firstEntityValue(entities, 'getJoke');
        const greetings = firstEntityValue(entities, 'greetings');
        const category = firstEntityValue(entities, 'category');
        const sentiment = firstEntityValue(entities, 'sentiment');
        if (getJoke) {
        if (category) {
          const jokes = allJokes[category];
          message =jokes[Math.floor(Math.random() * jokes.length)];
        } else {
          message = allJokes['default'][0];
        }
        } else if (greetings) {
        message = "hey this is joke bot :)";
        } else if (sentiment) {
        const reply = sentiment === 'positive' ? 'Glad you liked it.' : 'Hmm.';
        message = reply;
        } else {
        message = "I can tell jokes! Say 'tell me a joke about tech'!";
        }
        
        var newMessage = {messageName: 'Underworld',
                         messageContent: message,
                         profilesrc:guypic,
                         fromUser:false}
        
        this.setState({
                    messageList: [...this.state.messageList, newMessage],
                    currentInput: '',
                })
    }
    
    render() {
        var currentInput = this.state.currentInput;
        return (
            <div className='App'>
              <div className='Title'>My ChatRoom</div>
              <MessageList messageList={this.state.messageList} autoResponse={()=>{this.autoResponse()}} client={this.state.client} submitPacket={this.state.submitPacket} />
              {/*<Message messageName='' messageContent='' />*/}
              <ResponseForm value={currentInput} onChange={this.changeHandler} 
              onSubmit={this.submitHandler} userId={this.state.userID} />
 
            </div>

        )
    }
}



export default App;
