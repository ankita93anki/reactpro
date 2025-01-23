import Video from './components/Video.js';
import './App.css';

function App(){
  let obj = {
  title: "React JS Tutorial",
  views: '10K',
  time : '1 year ago',
  channel: 'coders dost'
};
  return (
    <div>

       <Video{...obj}></Video>
       <Video bgColor="red" title="React JS tutorial" channel = "Youtube Channel" views="10K" time="10Year"></Video>
       <Video bgColor="green" title="Node JS tutorial" views="10K" ></Video>
    </div>
  )
}
export default App;