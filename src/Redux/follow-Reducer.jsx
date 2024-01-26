import {findIndexUser} from "./user-reducers";

const LIST_OF_FOLLOWING = "LIST_OF_FOLLOWING"
const LIST_OF_FOLLOWERS = "LIST_OF_FOLLOWERS"

const initialState = {
    users: [
        {
            id: 1,
            info: {
                ref: "elonmusk",
            },
            count: {
                listOfFollowers: [2, 4],
                listOfFollowing: [3, 4],
            },
        },
        {
            id: 2,
            info: {
                ref: "Test",
            },
            count: {
                listOfFollowers: [3],
                listOfFollowing: [1],
            },
        },
        {
            id: 3,
            info: {
                ref: "AmirzhanOral",
            },
            count: {
                listOfFollowers: [1],
                listOfFollowing: [1],
            },
        },
        {
            id: 4,
            info: {
                ref: "Zhumanov",
            },
            count: {
                listOfFollowers: [],
                listOfFollowing: [],
            },
        },
    ],
};


export const followReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_OF_FOLLOWERS :
            return 1;
        case LIST_OF_FOLLOWING:
            return 2;
        default:
            return state;
    }
    ;

}
export const listOfFollowing = () => ({})
export const addFollowers = (initialState, id, userId) => {
    const currentFollowers = initialState.users.find(e => e.id === id)
    const currentUserFollowers = initialState.users.findIndex(e => e.id === userId)
    const updateCurrentUser = [...initialState.users]
    const checkCurrentUser = updateCurrentUser[currentUserFollowers].count.listOfFollowers
    if (!checkCurrentUser.includes(currentFollowers.id)) {
        console.log(true);
        checkCurrentUser.push(currentFollowers.id)
    } else {
        console.log(false);
        updateCurrentUser[currentUserFollowers].count.listOfFollowers = checkCurrentUser.filter(e => {
            return e !== currentFollowers.id
        })
    }
    console.log(updateCurrentUser);
    return {
        ...initialState,
        users: updateCurrentUser
    }
}
export const addFollowing = (initialState, id, userId) => {
    const currentFollowing = initialState.users.find(e => e.id === userId)
    const currentUserFollowing = initialState.users.findIndex(e => e.id === id)
    const updateCurrentUser = [...initialState.users]
    const checkCurrentUser = updateCurrentUser[currentUserFollowing].count.listOfFollowing
    if (!checkCurrentUser.includes(userId)) {
        console.log(true);
        checkCurrentUser.push(currentFollowing.id)
    } else {
        console.log(false);
        console.log(currentFollowing.id);
        updateCurrentUser[currentUserFollowing].count.listOfFollowing = checkCurrentUser.filter(e => {
            return e !== currentFollowing.id
        })
        console.log(checkCurrentUser);
    }
    console.log(updateCurrentUser);
    return {
        ...initialState,
        users: updateCurrentUser
    }
}

export const updateListOfFollow = (id, userId) => {
    addFollowers(initialState, id, userId)
    addFollowing(initialState, id, userId)
}
export const checkFollowing = (userId) => {
    const currentFollowing = initialState.users.find(e => e.id === userId)
    const currentUserFollowing = initialState.users.findIndex(e => e.id === findIndexUser.id)
    const updateCurrentUser = initialState.users
    const checkCurrentUser = updateCurrentUser[currentUserFollowing].count.listOfFollowing.includes(currentFollowing.id)
    // console.log(updateCurrentUser[currentUserFollowing].count);
    // console.log(updateCurrentUser[currentUserFollowing].count.listOfFollowing.includes(currentFollowing + 1));

    return checkCurrentUser
}

export const ListOfFollow = initialState.users

