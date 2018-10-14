import React from 'react';
import './index.css';


class Message extends React.Component{
    
	render(){
		return(
            <div>
		<div className = {'messageContainer '+this.props.appendClass}>
			<div className = {'messageName '+this.props.appendClass}> 
            <img src={this.props.profilesrc} className='profilePicture' alt='profile' />
            {this.props.messageName} </div>
			<div className = {'messageContent '+this.props.appendClass}>     {this.props.messageContent} </div>
		</div></div>
		)
	}
}

export default Message;