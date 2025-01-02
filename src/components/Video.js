import "./Video.css";
function Video(props) {
  let topic = "React JS Component";
  //  let className = "React-JS-Component";
  let bg = "dark";
  return (
    <>
      Hello
      <img
        src="https://via.assets.so/game.jpg?w=200&h=120"
        alt="React JS Tutorial - Components
        "
      />
      {/* <div className={className}  style = {{backgroundColor:'red'}} 
      onClick="">{topic}</div> */}
      <div className={bg} onClick="">
        {topic}
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
