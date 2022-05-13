import "./App.css";
import Card from "./components/NetflixCard/Card";
import "./components/NetflixCard/Card.css";
import Sdata from "./components/ApiData/Sdata";




function App() {
  return (
    <>
      <div className="header"><h2>Top Netflix Anime</h2></div>
      <div className="flex">
        
        {Sdata.map(function (element) {
          return (
            <Card
              imgsrc={element.imgsrc}
              sname={element.sname}
              title={element.title}
              links={element.links}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
