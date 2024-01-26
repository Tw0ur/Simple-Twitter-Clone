const NEW_MESSAGE = "NEW-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const DELETE_MESSAGE = "DELETE_MESSAGE";
const SORT_MESSAGES = "SORT_MESSAGES";

const initialState = {
    messageData: [
        {
            id: 30,
            uid: 30,
            userid: 1,
            userId: 3,
            messages: [
                {id: 1, message: "Amirzhan", messageUser: 3},
                {
                    id: 2,
                    message: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Adipisci mollitia`,
                    messageUser: 1,
                },
                {id: 3, message: "Amirzhan", messageUser: 3},
                {id: 4, message: "Это ответ", messagesUser: 3, currentAnswerId: 2},
            ],
        },
    ],
    messageChat: "",
};
export const dialogReducer = (state = initialState, action) => {
    //можно без break возвращая state в каждом case и добавить default , чтобы вернуть state если нет такой action.type

    switch (action.type) {
        case NEW_MESSAGE:
            const uidPayload = action.payload.userId * action.payload.userid * 10;
            const existingMessageDataIndex = state.messageData.findIndex(
                (messager) => messager.uid === uidPayload
            );
            if (existingMessageDataIndex !== -1) {
                const existingMessageData = state.messageData[existingMessageDataIndex];
                const newMessage = {
                    id: existingMessageData.messages.length + 1,
                    message: state.messageChat, // <-- Issue here
                    messageUser: existingMessageData.userid,
                    currentAnswerId:
                        action.payload.currentAnswerId && action.payload.currentAnswerId,
                };
                const updatedMessageData = [...state.messageData];
                updatedMessageData[existingMessageDataIndex].messages.push(newMessage);
                console.log(state.messageChat);
                return {
                    ...state,
                    messageData: updatedMessageData,
                    messageChat: "", // <-- Setting it to empty here
                };
            } else {
                const newMessageData = {
                    id: uidPayload, // Устанавливаем начальное значение id для нового сообщения
                    uid: uidPayload,
                    userid: action.payload.userid,
                    userId: action.payload.userId,
                    messages: [
                        {
                            id: 1, // Устанавливаем начальное значение id для нового сообщения
                            message: state.messageChat, // <-- Issue here
                            messageUser: action.payload.userid,
                        },
                    ],
                };

                return {
                    ...state,
                    messageData: [...state.messageData, newMessageData],
                    messageChat: "", // <-- Setting it to empty here
                };
            }

        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                messageChat: action.body,
            };
        case DELETE_MESSAGE:
            const {messageId, userId, userid} = action.payload;
            return {
                ...state,
                messageData: state.messageData.map((messager) => {
                    const uidMessage = messager.userId * messager.userid * 10;
                    if (uidMessage === userId * userid * 10) {
                        return {
                            ...messager,
                            messages: messager.messages.filter(
                                (message) => message.id !== messageId
                            ),
                        };
                    }
                    return messager;
                }),
            };

        case SORT_MESSAGES:
            return {
                ...state,
                messageData: state.messageData.map((messager) => {
                    const uidMessage = messager.userId * messager.userid * 10;
                    if (
                        uidMessage ===
                        action.payload.userId * action.payload.userid * 10
                    ) {
                        return {
                            ...messager,
                            messages: [...messager.messages].sort((a, b) => a.id - b.id),
                        };
                    }
                    return messager;
                }),
            };

        default:
            return state;
    }
};
export const addMessage = (userid, userId, currentAnswerId, messageChat) => ({
    type: NEW_MESSAGE,
    payload: {userid, userId, currentAnswerId, messageChat},
});
export const updateNewMessageText = (body) => ({
    type: UPDATE_NEW_MESSAGE,
    body: body,
});
export const deleteMessage = (messageId, userid, userId) => ({
    type: DELETE_MESSAGE,
    payload: {messageId, userid, userId},
});

export const sortMessages = (userid, userId) => ({
    type: SORT_MESSAGES,
    payload: {userid, userId},
});

export const newMessage = (state, userId, userid) => {
    const uidPayload = userId * userid * 10;
    const existingMessageDataIndex = state.messageData.findIndex(
        (messager) => messager.uid === uidPayload
    );
    if (existingMessageDataIndex !== -1) {
        const existingMessageData = state.messageData[existingMessageDataIndex];
        const newMessage = {
            id: existingMessageData.messages.length + 1,
            message: state.messageChat, // <-- Issue here
            messageUser: existingMessageData.userid,
        };
        const updatedMessageData = [...state.messageData];
        updatedMessageData[existingMessageDataIndex].messages.push(newMessage);
        console.log(state.messageChat);
        return {
            ...state,
            messageData: updatedMessageData,
            messageChat: "", // <-- Setting it to empty here
        };
    } else {
        const newMessageData = {
            id: uidPayload, // Устанавливаем начальное значение id для нового сообщения
            uid: uidPayload,
            userid: userid,
            userId: userId,
            messages: [
                {
                    id: 1, // Устанавливаем начальное значение id для нового сообщения
                    message: state.messageChat, // <-- Issue here
                    messageUser: userid,
                },
            ],
        };

        return {
            ...state,
            messageData: [...state.messageData, newMessageData],
            messageChat: "", // <-- Setting it to empty here
        };
    }
};
