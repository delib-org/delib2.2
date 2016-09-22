import React from 'react';
import { Link } from 'react-router';


class App extends React.Component {

    constructor(){
      super();
      this.state = {
        speed:10
      }
    }
    
    render() {
        return (
            <div>
                this is a new route called something <br/>
                <a> {this.props.location.pathname} </a> <br/>
                <Link to='something'> something </Link >
            </div>
        );
    }
// componentDidMount(){
//    const rootRef = firebase.database().ref().child('react');
//    const speedRef = rootRef.child('speed');
//    speedRef.on('value', snap => {
//      console.log(snap.val())
//      this.setState ({
//        speed: snap.val()
//      });
//    });
//  }


}

App.childContextTypes = {
    location: React.PropTypes.object
};

export default App;
