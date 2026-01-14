import ReactPlayer from 'react-player';

function AudioVideo() {
    const vidUrl="https://www.youtube.com/watch?v=LsShjmklb9M";
    return(
        <div>
            <h1>React Player Example</h1>
            <ReactPlayer 
            url={vidUrl}
            width="480px"
            height="270px"
            playing={false}
            volume={0.5}/>
        </div>
    ) 
}
export default AudioVideo;