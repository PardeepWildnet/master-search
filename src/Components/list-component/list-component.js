import React, { Component } from 'react';

export class ListDisplayComponent extends Component{
	constructor(props){
		super(props);
		console.log(props, "Props");
	}

	render(){
		return (
			<div>
				<li> {this.props.title ? this.props.title : 'No Title here'} </li>
			</div>
		)
	}
}