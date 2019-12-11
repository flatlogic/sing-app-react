import React, { Component } from 'react'

class Header extends Component {
  state = {
    txtValue: ""
  }

  chatMessageListRef = React.createRef();



  render() {
    return (
      <div>
        <div
        className="col-md-7 chat-message-list-panel"
        style={{ paddingRight: "0 !important" }}
        >
        <h2>Gold Coast</h2>
        <span>From: Sonny</span>
        <hr />

        <div
            className="scroll chat-message-list-panel-details"
            style={{ paddingRight: "1em" }}
            ref={this.chatMessageListRef}
        >
            <br />
            {this.props.chatMessageLists}
        </div>

        <form onSubmit={this.onAddMessage}>
            <div className="row message-textbox-layout">
            <div
                className="col-md-1"
                style={{ textAlign: "center", color: "#a3adbe" }}
            >
                <i className="far fa-smile fa-2x"></i>
            </div>
            <div className="col-md-10 message-panel">
                <input
                type="text"
                placeholder="Type a message..."
                onChange={(e) =>
                    this.setState({
                    txtValue: e.target.value
                    })
                }
                value={this.state.txtValue}
                />
            </div>
            <div className="col-md-1" style={{ textAlign: "right" }}>
                <button className="btn-send-message">
                <i className="far fa-paper-plane"></i>
                </button>
            </div>
            </div>
        </form>
        </div>
      </div>
    )
  }
}

export default Header