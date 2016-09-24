export class ChatService {
  todayConversations: Array<any>;
  lastWeekConversations: Array<any>;

  constructor() {

    /* tslint:disable */
    this.todayConversations = [{
      name: 'Chris Gray',
      status: 'success',
      lastMessage: 'Hey! What\'s up? So many times since we',
      image: 'assets/img/people/a2.jpg',
      messages: [{
        text: 'Hey! What\'s up?'
      }, {
        text: 'Are you there?'
      }, {
        text: 'Let me know when you come back.'
      }, {
        text: 'I am here!',
        fromMe: true
      }]
    }, {
      name: 'Jamey Brownlow',
      status: 'gray-light',
      lastMessage: 'Good news coming tonight. Seems they agreed to proceed',
      image: 'assets/img/avatar.png'
    }, {
      name: 'Livia Walsh',
      status: 'danger',
      lastMessage: 'Check out my latest email plz!',
      image: 'assets/img/people/a1.jpg'
    }, {
      name: 'Jaron Fitzroy',
      status: 'gray-light',
      lastMessage: 'What about summer break?',
      image: 'assets/img/avatar.png'
    }, {
      name: 'Mike Lewis',
      status: 'success',
      lastMessage: 'Just ain\'t sure about the weekend now. 90% I\'ll make it.',
      image: 'assets/img/people/a4.jpg'
    }];
    this.lastWeekConversations = [{
      name: 'Freda Edison',
      status: 'gray-light',
      lastMessage: 'Hey what\'s up? Me and Monica going for a lunch somewhere. Wanna join?',
      image: 'assets/img/people/a6.jpg'
    }, {
      name: 'Livia Walsh',
      status: 'success',
      lastMessage: 'Check out my latest email plz!',
      image: 'assets/img/people/a5.jpg'
    }, {
      name: 'Jaron Fitzroy',
      status: 'warning',
      lastMessage: 'What about summer break?',
      image: 'assets/img/people/a3.jpg'
    }, {
      name: 'Mike Lewis',
      status: 'gray-light',
      lastMessage: 'Just ain\'t sure about the weekend now. 90% I\'ll make it.',
      image: 'assets/img/avatar.png'
    }];
    /* tslint:enable */
  }
}
