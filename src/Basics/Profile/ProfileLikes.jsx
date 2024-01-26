import React from 'react'
import {ComponentWithCustomTitle} from '../Main/ComponentWithCustomTitle'

const ProfileLikes = (props) => {
    ComponentWithCustomTitle(props.customTitle)
    return (
        <div className='profileMedia'>
            <div>

            </div>
            <div>
                <div className='font'>
                    <span className='text-white text-3xl '> You don’t have any likes yet</span>
                </div>
                <div className='tweet text-base'>
                    <span>Tap the heart on any Tweet to show it some love. When you do, it’ll show up here.</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileLikes