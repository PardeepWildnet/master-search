import React, { Component } from 'react';

export class ListDetailComponent extends Component {
	constructor(props){
		super(props);
		console.log(this.props.match.params.id)
	}

    render() {
        return (
            <div>
                Your selected ID is <b>{this.props.match.params.id}</b>
            </div>
        );
    }
}