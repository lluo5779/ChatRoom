import React from 'react';
import ReactDOM from 'react-dom';

import Message from './Message'

var appendClass;

class MessageList extends React.Component{
    
    componentWillUpdate(){
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollDown = (node.scrollTop + node.clientHeight + 300) >= node.scrollHeight;
    }
    
    componentDidUpdate(){
        if (this.shouldScrollDown){
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
        
        
    }

	render(){
		return(
            <div className='messageList' >
            {this.props.messageList.map((me, id) => { 
                if (me.fromUser){
                    appendClass = 'messageFromUser' 
                } else{
                    appendClass = 'messageFromOther'
                }
            
                return(
                <div>
                    
                 <Message key={id} appendClass={appendClass} messageName={me.messageName} messageContent={me.messageContent} profilesrc={me.profilesrc} />
                    
                    {/*<div className = {'messageName '+appendClass}> {me.messageName} </div>
                    <div className = {'messageContent '+appendClass}> {me.messageContent} </div>*/}
                </div>
                )
                    /*return{
                        <Message key={id} messageName={message.messageName} messageContent={message.messageContent} />
                        }*/
                })}
            </div>
        )
	}
}

export default MessageList;