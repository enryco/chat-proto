import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import base, { firebase } from '../base'
import Firebase from 'firebase'
import ChatBubble from './ChatBubble'
import _ from 'lodash'

class Chat extends Component {
  
  state = {
    messages: {}
  }

  componentDidMount() {
    base.bindToState('proto', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate() {
    this.scroll()
  }

  scroll = () => {
    const elem = ReactDOM.findDOMNode(this.refs.chat)
    if (elem) {
      elem.scrollTop = elem.scrollHeight
      // elem.scrollIntoView(false);
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    const {uid, userName} = this.props


    const message = {
      uid,
      userName,
      text: this.message.value,
      timestamp: Firebase.database.ServerValue.TIMESTAMP
    }    

    firebase
      .database()
      .ref('/proto')
      .push({ ...message })

    this.form.reset()
  }

  render() {
    return <div className="">
        <div ref="chat" className="modalContent chat">
          <div className="overlay">
            <div className="speech-wrapper">
              {this.state.messages &&
                _.map(this.state.messages, (message, i) => (
                  <ChatBubble
                    key={i}
                    uid={this.props.uid}
                    details={message}
                  />
                ))}
            </div>
          </div>
        </div>
        <form ref={input => (this.form = input)} className="input-group" style={{ position: 'absolute', bottom: 0, right: 0, left: 0 , paddingRight: "10%", paddingLeft: "10%"}} onSubmit={e => this.handleSubmit(e)}>
          <input required ref={input => (this.message = input)} type="text" className="form-control" placeholder="" />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">
              <i className="fa fa-paper-plane fa-1x" aria-hidden="true" />
            </button>
          </span>
        </form>
      </div>
  }
}

export default Chat
