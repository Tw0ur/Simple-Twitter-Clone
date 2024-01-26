import React from 'react'
import TrendsFollowContainer from '../Trends/TrendsFollow'
import {NavLink} from 'react-router-dom'


const ComponentMes = (props) => {
    const {e, mes} = props
    const count = mes.id
    const [active, setActive] = React.useState(false)

    React.useEffect(() => {
        if (window.location.pathname === "/messages/" + count) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [window.location.pathname, active])
    return (
        <div className={active ? 'activeMessage' : null}>
            <NavLink to={"/messages/" + mes.id}>
                <TrendsFollowContainer id={e.id} notCard disabledLink verifyNoRandom="Yes" term="1"
                                       message={e.id === mes.userId ? mes.userId : mes.userid} user={e}/>
            </NavLink>
        </div>
    )
}

export default ComponentMes