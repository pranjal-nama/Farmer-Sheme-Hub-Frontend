//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/api/schemes')
      .then(response => response.json())
      .then(data => {
        //console.log('Data:', data);
        //console.log('Data type:', typeof data);
        setData(Array.from(data))
      })
      .catch(error => console.error(error));
  }, []);

  return(
    <>
    <nav>
        <div className="nav-heading align-self-center">
            <h1>Farmer Scheme Hub</h1>
        </div>
        <div className="right align-self-center">
            <ul>
                <li> <button>Login</button></li>
                <li> <button>SignUp</button></li>
            </ul>
        </div>
    </nav>
    <div className="photo">
        <div className="left">
            <h1>Emerging <br/> Innovation</h1>
            <h2>Empowering Farmers, <br/> One scheme at a time</h2>
        </div>
    </div>

    <section className="content">
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>

    <div className="more_btn_div">
        <button className="moreBtn">More</button>
    </div>
    </>
  );

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
