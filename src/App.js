import React, { Component } from 'react'
import logo from './logo.svg'
import './css/App.css'
import base, { firebase } from './base'
import Chat from './components/Chat'

class App extends Component {
  state = {
    uid: firebase
      .database()
      .ref()
      .push().key,
    userName: ''
  }

  render() {
    return <div className="App">
        <div style={{ textAlign: 'center', fontSize: '0.9em', paddingTop: 10 }}>
          💬 &nbsp;chat proto by&nbsp;
          <a className="link" href="https://github.com/enryco">
            &nbsp;enryco&nbsp;
          </a>
        </div>
        <Chat uid={this.state.uid} userName={this.state.userName} />
        {/* <input ref={e => (this.input = e)} type="text" placeholder="username" />
        <button /> */}

        {!this.state.userName && <div ref={input => (this.form = input)} className="input-group" style={{ position: 'absolute', bottom: 0, right: 0, left: 0, paddingRight: '10%', paddingLeft: '10%' }}>
            <input required ref={input => (this.input = input)} type="text" className="form-control" size="13" placeholder="username" />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button" onClick={() => this.setState(
                    {
                      userName: this.input.value
                    }
                  )}>
                {'Join Conversation  '}
                <i className="fa fa-sign-in fa-1x" aria-hidden="true" />
              </button>
            </span>
          </div>}
      </div>
  }
}

export default App
