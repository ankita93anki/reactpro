function Video() {
   let topic = "React JS Component";
   let className = "react-component";
  return (
    <div>
      Hello
      <img
        src="https://via.assets.so/game.jpg?w=200&h=120"
        alt="React JS Tutorial - Components
        "
      />
      <div className={className}  style = {{backgroundColor:'red'}} onClick="">{topic}</div>
    </div>
  );
}

export default Video;
