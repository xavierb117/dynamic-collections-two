import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/MainSection.jsx'

function App() {

  return (
    <>
      <Header />
      <div className = "cardList">
        <Main />
      </div>
      <Footer />
    </>
  )
}

export default App