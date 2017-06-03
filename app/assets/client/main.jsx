import React from 'react'
import ReactDOM from 'react-dom'
import Greet from './greet'
import $ from 'jquery'

class Main extends React.Component {
    render() {
        return (
            <Greet />
        );
    }
}

let documentReady = () => {
    ReactDOM.render(
        <Main/>,
        document.getElementById('react')
    );
};

$(documentReady);