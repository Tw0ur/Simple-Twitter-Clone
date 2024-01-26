const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initialState = {
    user: [
        {
            id: 1,
            name: "Amirzhan",
            link: "@amirzhan",
            message: "message",
            date: "2 hours",
            com: "0",
            like: "0",
        },
        {
            id: 2,
            name: "Amirzhan",
            link: "@amirzhan",
            message: "Hello",
            date: "3 hours",
            com: "2",
            like: "10",
        },
    ],
    message: "",
};
export const postReducer = (state = initialState, action) => {
    //можно с break возвращая state в после switch и не добавляяя default

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                name: "Amirzhan",
                link: "@amirzhan",
                message: state.message,
                date: "2 hours",
                com: "0",
                like: "0",
            };
            return {
                ...state,
                message: "",
                user: [...state.user, newPost],
            };
        case UPDATE_NEW_POST:
            return {
                ...state,
                message: action.newText,
            };

        default:
            return state;
    }
    // if (action.type === "ADD-POST") {
    //   let newPost = {
    //     id: 5,
    //     name: "Amirzhan",
    //     link: "@amirzhan",
    //     message: state.message,
    //     date: "2 hours",
    //     com: "0",
    //     like: "0",
    //   };
    //   state.user.push(newPost);
    //   state.message = "";
    // } else if (action.type === "UPDATE-NEW-POST") {
    //   state.message = action.newText;
    // }
};

export const addPostActionCreator = () => ({type: "ADD-POST"});
export const UpNewPostTextActionCreator = (text) => ({
    type: "UPDATE-NEW-POST",
    newText: text,
});


