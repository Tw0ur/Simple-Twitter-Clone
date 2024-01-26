import React, {useEffect} from 'react'
import {ComponentWithCustomTitle} from '../Main/ComponentWithCustomTitle'
import image from '../../img/masked-doll-head-with-camera-400x200.v1.930b4219.png'

const ProfileMedia = (props) => {

    ComponentWithCustomTitle(props.customTitle)

    return (
        <div className='profileMedia'>
            <div>
                <img src={image} alt=""/>
            </div>
            <div>
                <div className='  font'>
                    <span className='text-white text-3xl'>Lights, camera … attachments!</span>
                </div>
                <div className='tweet text-base'>
                    <span>When you send Tweets with photos or videos in them, they will show up here.</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileMedia