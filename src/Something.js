import React from 'react';

class Something extends React.Component {

    constructor() {
        super();
        this.states = {
            speed: 10
        }
    }

    render() {
        return (
            <div >
                this is a new route called something, 22222
                <a> {this.props.location.pathname} </a> <br/>
            </div>
        );
    }
}



export default Something;
