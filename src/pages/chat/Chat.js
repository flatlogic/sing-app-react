import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Input from './components/Input'
import Dialogs from './components/Dialogs'
import { chatLists } from './mock'

import s from './Chat.module.scss'



class Chat extends Component {
  
  constructor(props) {
    super(props);

    this.chatMessageListRef = React.createRef();
  }

  state = {
    chatLists: chatLists,
    chatMessageLists: chatLists[0].messageLists,
    txtValue: "",
    txtSearchValue: ""
  }


  simulateSearch() {
    //TODO: simulate search here...
    const searchTerm = "Arastu";
    let counter = 0;

    const interval = setInterval(() => {
      const result = searchTerm.substr(0, counter);
      this.onSearch(result);
      counter += 1;

      if (counter > searchTerm.length) {
        clearInterval(interval);

        const reverseSearchInterval = setInterval(() => {
          const result = searchTerm.substr(0, counter);
          this.onSearch(result);
          counter -= 1;

          if (counter < 0) {
            clearInterval(reverseSearchInterval);
          }
          
        }, 100);
      }


      
    }, 100);
  }

  simulateChat() {
    const { chatMessageLists } = this.state;

    setTimeout(() => {
      this.setState({
        chatMessageLists: chatMessageLists.concat([
          {
            id: 9,
            type: "Recipient",
            message: "Okay..."
          }
        ])
      }, () => {

        this.chatMessageListRef.current.scrollBy(0, 500);

        setTimeout(() => {

          this.setState({
            chatMessageLists: this.state.chatMessageLists.concat([
              {
                id: 10,
                type: "Own",
                message: "Thanks again!"
              }
            ])
          }, () => {
            this.chatMessageListRef.current.scrollBy(0, 500);
          });

          setTimeout(() => {
            this.setState({
              chatMessageLists: this.state.chatMessageLists.concat([
                {
                  id: 11,
                  type: "Recipient",
                  message: "Your welcome!"
                }
              ])
            }, () => {
              this.chatMessageListRef.current.scrollBy(0, 500);
            });
              
          }, 1000);

        }, 1000);
      });

      

    }, 1000);
  }


  componentDidMount() {

		this.simulateChat();
		 
		 setTimeout(() => {
			 this.simulateSearch();
		  }, 2000);
  }

  onSearch = (val) => {
    const results = val.length > 0 ?
      chatLists.filter(
        x => x.name.toLowerCase().includes(val.toLowerCase())
      ) :
      chatLists;

    this.setState({ txtSearchValue: val, chatLists: results });
  }

  onAddMessage = (e) => {
    e.preventDefault();
    const { txtValue, chatMessageLists } = this.state;

    if (txtValue) {
      const id = chatMessageLists[chatMessageLists.length - 1].id + 1;
      const newMessage = {
        id,
        message: txtValue,
        type: "Own"
      };

      this.setState({
        chatMessageLists: chatMessageLists.concat([newMessage]),
        txtValue: ""
      },
        () => this.chatMessageListRef.current.scrollBy(0, 500)
      );
    }
  }

  onLoadChatMessages = (messageLists) => {

    this.setState({
      chatMessageLists: []
    });

    setTimeout(() => {
      this.setState({
        chatMessageLists: messageLists
      });
    }, 100);
  }


  
    render() {

    const ChatMessageRecipient = ({ message }) => {
      return (
        <>
          <div className="col-md-1">
            <div className="row">
              <div className="col-md-12">
                <img className={s.imgIcon} src="https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80" alt="" />
              </div>
            </div>
            <div className="row">
              <div className={`col-md-12 ${s.chatTime}`} style={{ textAlign: "center" }}>
                10:00
              </div>
            </div>
          </div>

          <div className="col-md-11">
            <div className={s.messageRecipient}>
              {message}
            </div>
          </div>
        </>
      );
    }

    const ChatMessageOwner = ({ message, idx }) => {
      return (
        <div className="col-md-12">
          <div style={{ float: "right" }}>
            <div className={s.messageOwner}>
              {message}
            </div>
          </div>
        </div>
      );
    }

    const chatMessageLists = this.state.chatMessageLists.map((x, idx) =>
      <div key={x.id} className={`row ${s.messageDetails}`}>
          {
            x.type === "Own" ? 
              <ChatMessageOwner idx={idx} message={x.message} /> : <ChatMessageRecipient message={x.message} />
          }
      </div>
    );

    return (
      <>
        <div className={s.wrapper}>

          <div className={s.contentWrapper}>

            <div className="row">
              <div className={`col-md-5 ${s.chatListsPanel}`}>
                <div className={s.chatSearchBase}>
                  <div className="col-md-12">
                    <div className={`row ${s.chatSearch}`}>
                      <div className="col-md-1">
                        <i className="fas fa-search"></i>
                      </div>
                      <div className="col-md-11">
                        <input
                          type="text"
                          placeholder="Search"
                          className={s.inputSearch}
                          onChange={(e) => this.onSearch(e.target.value)}
                          value={this.state.txtSearchValue}
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

                <div className={`col-md-12 ${s.chatLists} ${s.scroll}`}>
                  <Dialogs chatLists={this.state.chatLists} />
                </div>
              </div>


              <div
                className={`col-md-7 ${s.chatMessageListPanel}`}
                style={{ paddingRight: "0 !important" }}
              >
                <h2>Gold Coast</h2>
                <span>From: Sonny</span>
                <hr />

                <div
                  className={`${s.scroll} ${s.chatMessageListPanelDetails}`}
                  style={{ paddingRight: "1em" }}
                  ref={this.chatMessageListRef}
                >
                  <br />
                  {chatMessageLists}
                </div>

                <form onSubmit={this.onAddMessage}>
                  <div className={`row ${s.messageTextboxLayout}`}>
                    <div
                      className="col-md-1"
                      style={{ textAlign: "center", color: "#a3adbe" }}
                    >
                      <i className="far fa-smile fa-2x"></i>
                    </div>
                    <div className={`col-md-10 ${s.messagePanel}`}>
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
                      <button className={s.btnSendMessage}>
                        <i className="far fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </form>


              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  
}

export default Chat;