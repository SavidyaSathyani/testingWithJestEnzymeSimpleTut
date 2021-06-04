import './app.scss';
import Header from './components/header';
import Headline from './components/headline';

const tempArray = [{
  fName: "Savidya",
  lName: "Sathyani",
  email: "savidya19@gmail.com",
  age: '26',
  onlineStatus: true,
}];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header={"Posts"} description={"Click the button to render posts"} tempArray={tempArray} />
      </section>
    </div>
  );
}

export default App;
