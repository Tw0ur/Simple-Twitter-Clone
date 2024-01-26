import React from "react";
import {
    UpNewPostTextActionCreator,
    addPostActionCreator,
} from "../../Redux/profile-reducer";
import BasicMes from "./BasicMes";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        message: state.user.message
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = UpNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
const BasicMesContainer = connect(mapStateToProps, mapDispatchToProps)(BasicMes)
export default BasicMesContainer;
