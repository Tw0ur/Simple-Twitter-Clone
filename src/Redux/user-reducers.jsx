const ADD_TO_FOLLOW_LIST = "ADD_TO_FOLLOW_LIST";
const TOGGLE_FOLLOWER = "TOGGLE_FOLLOWER";
const SET_USERS = "SET_USERS";
let initialState = {
    users: [],
    loginInfo: [],
    formatCounts: function () {
        const updatedUsers = this.users.map((user) => {
            let updatedFollow = user.count.follow;
            let updatedFollowing = user.count.following;
            let follow = user.count.followCount;
            let following = user.count.followingCount;
            if (user.count.follow >= 1000 && user.count.follow < 1000000) {
                follow = user.count.follow;
                updatedFollow = (user.count.follow / 1000).toFixed(1) + "k";
            } else if (user.count.follow >= 1000000) {
                follow = user.count.follow;
                updatedFollow = (user.count.follow / 1000000).toFixed(1) + "m";
            } else if (user.count.follow >= 1000000000) {
                follow = user.count.follow;
                updatedFollow = (user.count.follow / 1000000000).toFixed(1) + "b";
            }

            if (user.count.following >= 1000 && user.count.following < 1000000) {
                following = user.count.following;
                updatedFollowing = (user.count.following / 1000).toFixed(1) + "k";
            } else if (user.count.following >= 1000000) {
                following = user.count.following;
                updatedFollowing = (user.count.following / 1000000).toFixed(1) + "m";
            } else if (user.count.following >= 1000000000) {
                following = user.count.following;
                updatedFollowing = (user.count.following / 1000000000).toFixed(1) + "b";
            }

            return {
                ...user,
                count: {
                    follow: updatedFollow,
                    following: updatedFollowing,
                    tweets: user.count.tweets,
                    followCount: follow,
                    followingCount: following,
                },
            };
        });

        this.users = updatedUsers;
    },
};

export const userReducer = (state = initialState, action) => {
    //можно с break возвращая state в после switch и не добавляяя default

    switch (action.type) {
        case TOGGLE_FOLLOWER:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.payload) {
                        return {...u, count: [...u.count.listOfFollow, ...u.id]};
                    }
                    return u;
                }),
            };
        case ADD_TO_FOLLOW_LIST:
            return {
                ...state,

                users: state.users.map((u) => {
                    if (u.isAuthenticated === true) {
                        return {
                            ...u,

                            count: {
                                ...u.count,
                                listFollow: [...u.count.listFollow, action.payload.userId],
                            },
                        };
                    } else if (u.id === action.payload.userId) {
                        return {
                            ...u,
                            count: {
                                ...u.count,
                                listOfFollowing: [
                                    ...u.count.listOfFollowing,
                                    action.payload.userId,
                                ],
                            },
                        };
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};

export const toggleFollower = (userId) => ({
    type: TOGGLE_FOLLOWER,
    payload: userId,
});
export const setUsers = (users) => ({type: SET_USERS, users});

export const addToFollowList = (userId, userInfo) => ({
    type: ADD_TO_FOLLOW_LIST,
    payload: {userId, userInfo},
});

export const createHtmlMarkup = (text) => {
    const splitText = text.split(/(http\S+)/);
    return splitText.map((item, index) => {
        if (item.startsWith("http")) {
            // Если подстрока является ссылкой
            return (
                <a key={index} className="link" href={item}>
                    {item}
                </a>
            );
        } else {
            // Если подстрока не является ссылкой
            return (
                <span className="text-white" key={index}>
          {item}
        </span>
            );
        }
    });
};

const action = {
    users: [
        {
            id: 1,
            info: {
                name: "Elon",
                subname: "Musk",
                link: "@elonmusk",
                ref: "elonmusk",
                profileImage: "",
            },
            count: {
                follow: 138100000,
                following: 267,
                tweets: 25400,

            },
            follower: false,
            title: "Nothing",
            data: {
                year: 2009,
                month: "June",
            },
        },
        {
            id: 2,
            info: {
                name: "Test",
                subname: "Test",
                link: "@Test",
                ref: "Test",
                profileImage:
                    "https://i.pinimg.com/736x/49/33/bb/4933bb62a1bbd53158ced1e37c1f9e51.jpg",
            },
            count: {
                follow: 108500000,
                following: 66,
                tweets: 10000,
            },
            follower: false,
            title:
                "This is text account",
            data: {
                year: 2013,
                month: "August",
            },
        },
        {
            id: 3,
            info: {
                name: "TestACC",
                subname: "Test",
                link: "@testacc",
                ref: "TestAcc",
            },
            isAuthenticated: true,
            count: {
                follow: 1543,
                following: 1050,
                tweets: 0,
            },

            title: "",
            data: {
                year: 2022,
                month: "June",
            },
        },
        {
            id: 4,
            info: {
                name: "Islam",
                subname: "Zhumanov",
                link: "@Zhumanov",
                ref: "Zhumanov",
            },
            count: {
                follow: 1543,
                following: 1050,
                tweets: 0,
            },
            isAuthenticated: false,
            follower: false,
            title: "",
            data: {
                year: 2022,
                month: "June",
            },
        },
    ],
    loginInfo: [
        {
            id: 1,
            login: {
                gmail: {name: "elonMusk@gmail.com", password: "123456789"},
            },
        },
        {
            id: 2,
            login: {
                mail: {name: "twour@inbox.ru", password: "twour888"},
            },
        },
        {
            id: 3,
            login: {
                mail: {name: "test@mail.ru", password: "12345678"},
                gmail: {name: "test@gmail.com", password: "435647rut"},
            },
        },
        {
            id: 4,
            login: {
                gmail: {name: "zhum@gmail.com", password: "islam002"},
            },
        },
    ],
};
const SetUsers = (initialState, action) => {
    return {
        ...initialState,
        users: [...initialState.users, ...action.users],
        loginInfo: [...initialState.loginInfo, ...action.loginInfo],
    };
};
initialState = SetUsers(initialState, action);
initialState.formatCounts();


const isAuthenticated = (initialState, current) => {
    const initial = initialState.users.find((e) => {
        if (e.id === current.id) return e;
    });
    console.log(initial);
    if (initial) {
        return {
            ...initialState,
            users: [...initialState.users, initial.isAuthenticated = true],
        };
    }
};


console.log(initialState.users);
export let findIndexUser
export const reload = () => {
    findIndexUser = initialState.users.find(
        (el) => el.isAuthenticated === true
    );
    console.log(findIndexUser);
}
reload()
export const currentParse = (login, password) => {
    const currentLogin = initialState.loginInfo.find((el) => {
        const gmail = el.login.gmail ? el.login.gmail : undefined;
        const mail = el.login.mail ? el.login.mail : undefined;
        const proverka =
            (gmail && gmail.name === login && gmail.password === password) ||
            (mail && mail.name === login && mail.password === password);
        if (proverka) {
            return el.id;
        }
    });
    console.log(currentLogin);
    if (currentLogin) {
        isAuthenticated(initialState, currentLogin);
        reload()
    } else {
        alert("Неправильно ввели пароль");
    }
};
// const restApi = () => {
//   const apiUrl = 'https://example.com/users';
//   const Url = "https://social-network.samuraijs.com/api/1.0/users"
//   axios.post(Url)
//   .then(data => {

//   })
//   .catch((error) => {
//     error.message = "Error network"
//     console.log(error.message);
//   })
//   axios.get(Url)
//   .then(responce => {
//     console.log(responce);
//     console.log(responce.data.items);
//   })
//   .catch(error => {
//     console.log(error);
//     alert(error.message)
//   })
//   .finally(() => {
//     console.log("Finally");
//   })

// }
// restApi()
