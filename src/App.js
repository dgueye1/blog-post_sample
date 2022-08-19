import Posts from "./blogposts/Posts/Posts";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./NavComponent/Nav";
import More from "./More/More";


function App() {
  return (
    <div className="App">
      <Navigation />
      <More />
      <Posts />
    </div>
  );
}

export default App;
