import "./Video.css";
function Video({ title, bgColor, channel, views, time}) {
  // let topic = "React JS Component";
  // let className = "React-JS-Component";
  // let bg = "dark";
  return (
    <>
      <div>
        <div className = "pic">
          <img
            src="https://via.assets.so/game.jpg?w=200&h=120"
            alt="React JS Tutorial - Components
          "
          />
       </div>
        {/* <div style={{ backgroundColor: bgColor }}>
          {title} Tutorial
        </div> */}
        <div className="title">{title}</div>
        <div className="channel"> {channel}</div>
        <div className="views">
          {" "}
          {views} views <span>.</span>
          {time}
        </div>
      </div>
    </>
  );
}

export default Video;

/*
   function Video(){
       return <div> Video </div>
   }
  
   function Thumb(){
       return <div> Thumb</div>
   }
   export {Video, Thumb}

   In App.js
   import {Video, Thumb} from './components/Video'
   function App(){
     return (
        <div>
           <div>Hello</div>
           <Video></Video>
           <Thumb><Thumb>
        </div>
     )
   }
*/
