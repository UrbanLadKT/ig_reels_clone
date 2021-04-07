import './App.css';
import React , {useState ,useEffect} from "react";
import VideoCard from './VideoCard';
import db from "./firebase";

function App() {
  const[reels,setReels]=useState([]);

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => (
          setReels(snapshot.docs.map(doc=>doc.data()))
      ))
  }, [])

  return (
    <div className="App">
      <div className="app_top">
        <img
          className="app_logo"
          alt='Insta_Logo'
          src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"/>
        <h1>Reels</h1>
      </div>

      <div className="app_videos">
        {reels.map(({channel,avatarSrc,song,url,likes,shares})=>
            (
                <VideoCard
                  channel={channel}
                  avatarSrc={avatarSrc}
                  song={song}
                  url={url}
                  likes={likes}
                  shares={shares}
                />
              )
          )

        }
      </div>

    </div>
  );
}

export default App;
