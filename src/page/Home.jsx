/**
* 
* Created by zhaozhuo on 2018/04/20 09:36:32
*
*/

import React from 'react';
import Counter from 'components/counter/Counter';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="home">
                <Counter />
            </div>
        );
    }
}