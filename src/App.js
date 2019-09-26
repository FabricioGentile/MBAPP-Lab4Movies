import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Content</Nav.Link>
            <Nav.Link href="/read">Header</Nav.Link>
            <Nav.Link href="/create">Footer</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/read" component={Header} />
          <Route path="/create" component={Footer} />
        </Switch>

      {/* 
         <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
      </div>
      </BrowserRouter>
    );
  }
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
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
  );
}
*/


export default App;
