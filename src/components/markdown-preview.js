import React from 'react';

const MarkdownPreview = ({inputText}) => {
		inputText = inputText.replace(/(<([^>]+)>)/ig,"");
		//console.log(inputText);

		let marked = require('marked');

		return (
			<div className="col-md-6">
				Preview
				<div className="outputDiv" dangerouslySetInnerHTML={{__html: marked(inputText) }}>
				</div>
			</div>
		);
	
};

export default MarkdownPreview
