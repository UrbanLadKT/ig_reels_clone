import './VideoHeader.css'
import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

function VideoHeader() {
    return (
        <div className='videoHeader'>
            <ArrowBackIosIcon/>
            <h3>REELS</h3>
            <CameraAltOutlinedIcon />
        </div>
    )
}

export default VideoHeader
