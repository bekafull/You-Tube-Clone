import React from 'react';
// import YouTube from "react-youtube";

const Video = ({ video: { id: {videoId}, snippet: { title, channelTitle, description, publishedAt } } }) => {
     

    
const videoSrc = `https://www.youtube.com/embed/${videoId}`;

     if (!videoId) 
     return <p className="noResult">
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/C55oJLVFUDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/WTw-r9xpT0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/rE1lxAJHobE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/UTS-lui4ukc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/6LnpAUdsJeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/WFTtGlFL52M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/8yYlecVw9oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/7I1qQgpkyVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/WSZinDVO-a4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/j6jCvtPigHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/3_HSYfhqwIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/D7jcOb4OGgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/aa1w6pREua8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/JJOF5_072Pk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="yt-video2" width="560" height="315" src="https://www.youtube.com/embed/_BdNF6s8N9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </p>;
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/Z8ft8JRt0ZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    // https://youtu.be/_nBlN9yp9R8
    

     
     return (
          <>
               <div className="videoIframe">
                    <iframe 
                         frameBorder="0"
                         allowFullScreen
                         title="Video player"
                         src={videoSrc}
                    />
               </div>
               <div className="videoInfo">
                    <p className="descriptionVideo">{publishedAt}</p>
                    <h1 className="titleVideo">{title}</h1>
                    <h3 className="channelTitle">{channelTitle}</h3>
                    <p className="descriptionVideo">{description}</p>
                    
               </div>
          </>
     );
};

export default Video;