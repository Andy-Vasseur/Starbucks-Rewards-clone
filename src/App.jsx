// Components
import GetFavorites from "./components/GetFavorites"
import GettingStarted from "./components/GettingStarted"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation,"

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <Navigation />
        <div className="App__header__title__container">
          <p className="App__header__title__container__title">Starbucks&copy; Rewards</p>
        </div>
      </div>
      <Hero />
      <GettingStarted />
      <GetFavorites />
    </div>
  )
}

export default App
