import "./App.css";

function App() {
  let app_name = 'react app';
  let className = 'App-header';
  console.log('App')
  return (
    <div className="App">
      <div className={className}>
        {app_name}
        <Demo></Demo>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <div className="App-header">Demo world</div>
    </div>
  );
}

export default App;
