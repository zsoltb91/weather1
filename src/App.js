import "./App.css";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import WeatherApp from "./components/WeatherApp/WeatherApp";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
        <WeatherApp />
      </MainContainer>
    </div>
  );
}

export default App;
