import React from 'react'
import "./Input.css"
import TrendsFollowContainer from '../../../Basics/Trends/TrendsFollow'

const Input = (props) => {
    const {store} = props
    const [text, setText] = React.useState()
    const [btn, setBtn] = React.useState(false)
    // console.log(store);
    const handleTextChange = (e) => {
        setText(e.target.value)
        console.log(text);
        if (text.length > 0) {
            setBtn(e => !e)
        }
    }
    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            setBtn((e) => !e);
        }
    }
    return (
        <div className='text-white flex flex-col w-full h-full'>
            <div className='w-full h-full'>
                <input
                    className='inputDiv inputT'
                    type='text'
                    onInput={handleTextChange}
                    onKeyDown={onKeyDown}
                    value={text}
                /></div>
            <div className='flex flex-col'>
                <div>
                    {store.map((e) => {
                        if (text == e.info.name || text == e.info.subname) {
                            if (btn) {
                                console.log(true);
                                return (
                                    <TrendsFollowContainer verifyNoRandom='Yes'
                                                           id={e.id}
                                                           user={store}
                                                           condition={e.id}
                                    />
                                )
                            }
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Input