import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './components/markdown-input';
import MarkdownPreview from './components/markdown-preview';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputText: ''
		}
	}

	render() {
		return (
			<div>
			<MarkdownInput onChange={inputText => this.setState({ inputText })}/>
			<MarkdownPreview inputText={ this.state.inputText }/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));