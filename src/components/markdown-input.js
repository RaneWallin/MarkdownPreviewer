import React, { Component } from 'react';

class MarkdownInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			textInput: ''
		}

	}

	render() {

		
		return (
			<div className="col-md-6">
			Input
			<textarea 
			value={this.state.textInput}
			onChange={event => this.handleChange(event.target.value)} />
			</div>

		);
		
	};

	handleChange(textInput) {
		textInput = textInput.replace(/(<([^>]+)>)/ig,"");
		var testVar = null;
		this.setState({textInput});
		if(this.props.onChange) {
			this.props.onChange(textInput);
		}
	}



}

export default MarkdownInput;