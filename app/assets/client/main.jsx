import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class Main extends React.Component {
    render() {
        return (
            <h1>Test</h1>
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