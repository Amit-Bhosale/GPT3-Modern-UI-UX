// import logo from './logo.svg';
import './App.css';
import {Footer,Blog,Possibility,Header,WhatGPT3,Features} from './containers'
import {Cta,Brand,Navbar} from './components'

function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
     <Navbar/>
     <Header/>
     </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
