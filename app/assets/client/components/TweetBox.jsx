import React from 'react'
import PropTypes from 'prop-types'

export default class TweetBox extends React.Component {
    constructor() {
        super();
        this.tweetTextArea = 'tweetTextArea';
        this.props.sendTweet(this.tweetTextArea);
        // this.sendTweet = this.sendTweet.bind(this);
    }

    render() {
        return (
            <div className="row">
                <form className="input-field" onSubmit={this.sendTweet.bind(this)}>
                    <textarea ref={this.tweetTextArea} className="materialize-textarea"/>
                    <label> { "What's happening" }</label>
                    <button type="submit" className="btn right">Tweet</button>
                </form>
            </div>
        )
    }

    static sendTweet(event) {
        event.preventDefault();
        this.props.sendTweet(this.tweetTextArea.value);
        // this.refs.tweetTextArea.value = '';
    }
}
TweetBox.propTypes = {
    sendTweet: PropTypes.func
};

