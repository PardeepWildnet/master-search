import React, { Component } from 'react';

import { ListDisplayComponent } from '../list-component/list-component';

export class ListComponent extends Component {
    render() {
        return (
            <div>
                <input placeholder='Mater Search here' />
                <ul>
                	<ListDisplayComponent></ListDisplayComponent>
                </ul>
            </div>
        );
    }
}