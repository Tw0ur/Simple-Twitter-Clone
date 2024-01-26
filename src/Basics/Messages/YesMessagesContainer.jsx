import YesMessages from "./YesMessages";
import {
    updateNewMessageText,
    addMessage,
    deleteMessage,
    sortMessages,

} from "../../Redux/dialog-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        prop: state.messageData,
    };
};
const mapDispatchToProps = {
    addMessage,
    updateNewMessageText,
    deleteMessage,
    sortMessages
};

const YesMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(YesMessages)
export default YesMessagesContainer;
