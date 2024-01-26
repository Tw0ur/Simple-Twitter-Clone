import React from 'react'
import {connect} from 'react-redux'
import TrendsFollowContainer from '../Trends/TrendsFollow'


const currentList = (props) => {
    const currentUser = props.list.users.find((e) => {
        if (e.id === props.id) return e
    })
    return (
        <div className=''>
            <TrendsFollowContainer title button listOfFollow={currentUser} listOf={props.listOf} verifyNoRandom="Yes"/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        list: state.listOfFollow
    }
}
const mapDispatchToProps = {}

const ListOfFollow = connect(mapStateToProps, mapDispatchToProps)(currentList)
export default ListOfFollow