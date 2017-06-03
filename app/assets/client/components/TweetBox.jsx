import React from 'react'

export default class TweetBox extends React.Component {
    render() {
        return (
            <div>
                <form className="input-field">
                    <textarea className="materialize-textarea"/>
                    <label> { "What's happening" }</label>
                    <button className="btn right">Tweet</button>
                </form>
            </div>
        )
    }
}