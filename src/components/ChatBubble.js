import React, { Component } from 'react'
import moment from 'moment'

moment.locale('de')

class ChatBubble extends Component {
  pickColor(alt) {
    if (alt === 'alt') return 'steelblue'

    let sumChars = 0
    for (let i = 0; i < this.props.details.userName.length; i++) {
      sumChars += this.props.details.userName.charCodeAt(i)
    }

    const colors = [
      '#e67e22', // carrot
      '#2ecc71', // emerald
      '#3498db', // peter river
      '#8e44ad', // wisteria
      '#e74c3c', // alizarin
      '#1abc9c', // turquoise
      '#2c3e50' // midnight blue
    ]

    return colors[sumChars % colors.length]
    // this.avatarColor = colors[sumChars % colors.length];
  }

  render() {
    let alt = ''
    if (this.props.uid === this.props.details.uid) {
      alt = 'alt'
    }

    return <div className="chat-bubble">
        <div className="chat-user-name" style={{ color: this.pickColor(alt) }}>
          {this.props.details.userName + ':'}
        </div>
        <div className="chat-text">{this.props.details.text}</div>
        <div className="chat-timestamp" >{moment(this.props.details.timestamp).fromNow()}</div>
      </div>
  }
}

export default ChatBubble
