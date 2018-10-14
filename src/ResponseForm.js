import React from 'react'

class ResponseForm extends React.Component{

	render(){
		return(
            <div className='responseForm w3-container'>
                <div className = 'submitForm'> 
                <img src='https://image.flaticon.com/icons/svg/74/74276.svg' className='profilePicture' alt='profile' />
                {this.props.userId} 
                <form onSubmit={this.props.onSubmit} >
                    <label>
                    <input name='response' type='text' placeholder='what are you thinking?'
                    value={this.props.value}  onChange={this.props.onChange}/>
                    </label>
                    <button className='submitButton' type="submit"><span>Send</span></button>
                </form>
            </div>
            </div>
			);
	}
} 

export default ResponseForm