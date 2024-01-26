import React from 'react'
import './Basic.css'

const SvgTwitter = (props) => {
    const {width, height, maxHeight, maxWidth, marginBottom, flex, padding, color} = props
    const verify = width || height || maxHeight || maxWidth;
    const flexStyle = flex && 'flex flex-col items-center justify-center relative'
    const icon = verify ? "iconSvgLogin" : "iconSvg"
    const svyzka = `${icon} ${flexStyle}`
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={svyzka} style={{
            width: width,
            height: height,
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            marginBottom: marginBottom,
            padding: padding,
            color: color,
            fill: 'currentcolor',


        }}>
            <g>
                <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
        </svg>
    )
}

export default SvgTwitter;