import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import TweetBox from './components/TweetBox'
import TweetList from "./components/TweetList"

let mockTweets = [
    {id: 1, name: 'Valdeci Gomes', body: 'My #FirstTweet'},
    {id: 2, name: 'Valdeci Gomes', body: 'My #SecondTweet'},
    {id: 3, name: 'Valdeci Gomes', body: 'My #ThirdTweet'}

];

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <TweetBox/>
                <TweetList tweets={mockTweets}/>
            </div>
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