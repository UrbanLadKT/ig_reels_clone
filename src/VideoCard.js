import './VideoCard.css';
import VideoHeader from './VideoHeader';
import React,{useState,useRef} from 'react';
import VideoFooter from './VideoFooter';

function VideoCard({url,likes,shares,channel,avatarSrc,song}) {

    const[isVideoPlaying,setIsVideoPlaying]=useState(false);
    const videoRef=useRef(null);
    const onVideoPress=()=>{
        if(isVideoPlaying){
            //stop the video
            videoRef.current.pause();
            setIsVideoPlaying(false)
        }
        else{
            //play the video
            videoRef.current.play();
            setIsVideoPlaying(true)
        }
    }
    return (
        <div className='videoCard'>
            <VideoHeader/>
            <video  ref={videoRef} onClick={onVideoPress} className="videoCard_player"
                src={url}
                alt='IG Reels'

             />
            <VideoFooter
              channel={channel}
              avatarSrc={avatarSrc}
              song={song}
              likes={likes}
              shares={shares}
              />
        </div>
    )
}

export default VideoCard
