// let rerenderEntireTree = () => {
//   console.log("state");
// }

import {useState} from "react";
import {dialogReducer} from "./dialog-reducer";
import {postReducer} from "./profile-reducer";
import {userReducer} from "./user-reducers";

// const store = {
//   _subscriber() {
//     console.log('no subscribers (observers)');
//   },
//   _state: {
//     firstName: 'Amirzhan',
//     lastName:'Oral'
//   },
//   getState() {
//     return this._state
//   },
//   subscribe(observer) {
//     this._subscriber = observer
//   },
//   setFirstName(value) {
//      this._state.firstName = value;
//      this._subscriber()
//   }
// }
// let history = store.getState()
// console.log(history);
// store.setFirstName('Islam')

// history = store.getState()
// console.log(history);

// store.subscribe( () => {
//  let history = store.getState()

// }
// )

// store.setFirstName('youtube')
// console.log(history);


// export const addPost = () => {
//   let newPost = {
//    id:5,
//    name:"Amirzhan",link:"@amirzhan",
//    message:state.message,
//    date:"2 hours",
//    com:"0",
//    like:"0"
//   }
//   state.user.push(newPost)
//   state.message = "";
//   rerenderEntireTree(state);
// }
// export const updateNewPost = (newText) => {
//  state.message = newText;
//  rerenderEntireTree(state);
// }
// export const subscribe = (observer) => {
//  rerenderEntireTree = observer;//observer addEventListener
// }
// const state = { 
//   dialogData: dialogData, 
//   messageData: messageData,
//   user:user,
//   message:""
//   }
const store = {
    _state: {
        messageData: {
            messageData: [
                {id: 1, message: "Amirzhan", you: "you"},
                {
                    id: 2, message: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Adipisci mollitia`
                },
                {id: 3, message: "Amirzhan", you: "you"}
            ],
            dialogData: [
                {id: 1, name: "Islam",},
                {id: 2, name: "Ruslan",},
                {id: 3, name: "Artur",},
                {id: 4, name: "Alihan", subname: "alihgay"},
                {id: 5, name: "Ruslan",},
                {id: 6, name: "Twour",},
            ],
            messageChat: ""
        },
        user: {
            user: [
                {id: 1, name: "Amirzhan", link: "@amirzhan", message: "message", date: "2 hours", com: "0", like: "0"},
                {id: 2, name: "Amirzhan", link: "@amirzhan", message: "Hello", date: "3 hours", com: "2", like: "10"},
            ],
            message: "",
        },
        follow: {
            users: [
                {
                    id: 1, info: {
                        name: "elon",
                        subname: 'musk',
                        link: '@elonmusk',
                        ref: 'elonmusk'
                    }, count: {
                        follow: 138100000,
                        following: 267,
                        tweets: 25400,
                    }, follow: false, title: 'nothing',
                    data: {
                        year: 2009,
                        month: "June"
                    }
                },
                {
                    id: 2,
                    info: {
                        name: "cristiano",
                        subname: 'ronaldo',
                        link: '@Cristiano',
                        ref: 'Cristiano'
                    },
                    count: {
                        follow: 108500000,
                        following: 66
                    },
                    follow: false,
                    title: 'This Privacy Policy addresses the collection and use of personal information - http://cristianoronaldo.com/terms',
                    data: {
                        year: 2013,
                        month: "August"
                    }
                },
                {
                    id: 3, info: {
                        name: "drizzy",
                        subname: '',
                        link: '@Drake',
                        ref: 'Drake'
                    },
                    count: {
                        follow: 39600000,
                        following: 606
                    }, follow: false, title: '',
                    data: {
                        year: 2009,
                        month: "March"
                    }
                },
                {
                    id: 4, info: {
                        name: 'amirzhan',
                        subname: '',
                        link: '@AmirzhanOral',
                        ref: 'AmirzhanOral'
                    },
                    count: {
                        follow: 0,
                        following: 0
                    }, myAcc: true, title: '',
                    data: {
                        year: 2022,
                        month: "June"
                    }
                }
            ]
        }

    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {

        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;//observer addEventListener
    },

    // addPost() {
    //   debugger
    //   let newPost = {
    //     id: 5,
    //     name: "Amirzhan", link: "@amirzhan",
    //     message: store._state.message,
    //     date: "2 hours",
    //     com: "0",
    //     like: "0"
    //   }
    //   this._state.user.push(newPost)
    //   this._state.message = "";
    //   this._rerenderEntireTree(this._state);
    // },
    // updateNewPost(newText) {
    //   this._state.message = newText;
    //   this._rerenderEntireTree(this._state);
    // },
    dispatch(action) {

        this._state.messageData = dialogReducer(this._state.messageData, action)
        this._state.user = postReducer(this._state.user, action)
        this._state.follow = userReducer(this._state.follow, action)
        this._callSubscriber(this._state);

        // if (action.type === 'ADD-POST') {
        //   let newPost = {
        //     id: 5,
        //     name: "Amirzhan", link: "@amirzhan",
        //     message: store._state.user.message,
        //     date: "2 hours",
        //     com: "0",
        //     like: "0"
        //   }
        //   this._state.user.user.push(newPost)
        //   this._state.user.message = "";
        //   this._callSubscriber(this._state);
        // }
        // else if (action.type === 'UPDATE-NEW-POST') {
        //   this._state.user.message = action.newText;
        //   this._callSubscriber(this._state);
        // }
        // else if (action.type === 'NEW-MESSAGE') {
        //   let body = store._state.messageData.messageChat
        //   this._state.messageData.messageChat = "";
        //   if (body.length > 0 ) {
        //     this._state.messageData.messageData.push({id:6, message: body})
        //   }
        //   this._callSubscriber(this._state)
        // }
        // else if (action.type === 'UPDATE-NEW-MESSAGE') {
        //   this._state.messageData.messageChat = action.body;
        //   this._callSubscriber(this._state)
        // }
    }
}


// export const follow ={
//   users: [
//     {
//       id: 1,
//       info: {
//         name: "elon",
//         subname: "musk",
//         link: "@elonmusk",
//         ref: "elonmusk",
//       },
//       count: {
//         follow: 138100000,
//         following: 267,
//         tweets: 25400,
//       },
//       follower: false,
//       title: "Nothing",
//       data: {
//         year: 2009,
//         month: "June",
//       },
//     },
//     {
//       id: 2,
//       info: {
//         name: "cristiano",
//         subname: "ronaldo",
//         link: "@Cristiano",
//         ref: "Cristiano",
//       },
//       count: {
//         follow: 108500000,
//         following: 66,
//         tweets: 10000,
//       },
//       follower: false,
//       title:
//         `This Privacy Policy addresses the collection and use of personal information - http://cristianoronaldo.com/terms`,
//       data: {
//         year: 2013,
//         month: "August",
//       },
//     },
//     {
//       id: 3,
//       info: {
//         name: "drizzy",
//         subname: "",
//         link: "@Drake",
//         ref: "Drake",
//       },
//       count: {
//         follow: 39600000,
//         following: 606,
//         tweets: 35400,
//       },
//       follower: false,
//       title: "",
//       data: {
//         year: 2009,
//         month: "March",
//       },
//     },
//     {
//       id: 4, info: {
//         name: 'amirzhan',
//         subname: 'oral',
//         link: '@AmirzhanOral',
//         ref: 'AmirzhanOral'
//       },
//       count: {
//         follow: 1543,
//         following: 1050,
//         tweets: 0,
//       }, myAcc: true, title: '',
//       data: {
//         year: 2022,
//         month: "June"
//       }
//     }
//   ],
//   formatCounts: function () {
//     const updatedUsers = this.users.map(user => {
//       let updatedFollow = user.count.follow;
//       let updatedFollowing = user.count.following;

//       if (user.count.follow >= 1000 && user.count.follow < 1000000) {
//         updatedFollow = (user.count.follow / 1000).toFixed(1) + "k";
//       }
//       else if (user.count.follow >= 1000000) {
//         updatedFollow = (user.count.follow / 1000000).toFixed(1) + "m";
//       }
//       else if (user.count.follow >= 1000000000) {
//         updatedFollow = (user.count.follow / 1000000000).toFixed(1) + "b";
//       }

//       if (user.count.following >= 1000 && user.count.following < 1000000) {
//         updatedFollowing = (user.count.following / 1000).toFixed(1) + "k";
//       }
//       else if(user.count.following >= 1000000){
//         updatedFollowing = (user.count.following / 1000000).toFixed(1) + "m";
//       }
//       else if(user.count.following >= 1000000000){
//         updatedFollowing = (user.count.following / 1000000000).toFixed(1) + "b";
//       }


//       return {
//         ...user,
//         count: {
//           follow: updatedFollow,
//           following: updatedFollowing,
//           tweets: user.count.tweets,
//         },
//       };
//     });

//     this.users = updatedUsers;
//   },
//   // dispatch(action) {
//   //   toggleFollower(userId) {
//   //   const updatedUsers = follow.users.map(user => {
//   //     if (user.id === userId) {
//   //       return {
//   //         ...user,
//   //         follower: !user.follower
//   //       };
//   //     }
//   //     return user;
//   //   });

//   //   follow.users = updatedUsers;
//   // }
//   // }
// };


// follow.formatCounts()
window.store = store;
export default store;
