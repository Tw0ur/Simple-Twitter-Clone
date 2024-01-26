import {connect} from "react-redux";
import {setUsers, toggleFollower} from "../../Redux/user-reducers";
import TrendsClass from "./TrendsClass";
import {Route, Routes} from "react-router-dom";
import Main from "../Main/Main";


const TrendsContainer = (props) => {

    const checkMap = props.check.map(e => (<Route key={e.id} path={`/${e.info.ref}/*`}
                                                  element={<Main check={e} store={props.store}
                                                                 verifyComponent="Profile"/>}/>
    ));

    return (
        <>
            {props.profile ? <Routes> {checkMap} </Routes> : <TrendsClass {...props} />}
        </>
    );

}

const mapStateToProps = (state) => {
    return {
        check: state.follow.users,
        // pageSize: state.follow.pageSize,
        // totalUsersCount: state.follow.totalUsersCount,
        // currentPage: state.follow.currentPage,
    };
};
const mapDispatchToProps =
    {
        toggleFollower,
        setUsers,
    };


const TrendsFollowContainer =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TrendsContainer);


export default TrendsFollowContainer;
