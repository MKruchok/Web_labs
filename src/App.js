import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Catalog} from "./components/Catalog/Catalog";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route exact path='/'>
                      <Header isHomePage={true}/>
                      <Home/>
                      <Footer/>
                  </Route>
                  <Route path='/catalog'>
                      <Catalog/>
                      <Footer/>
                  </Route>
                  <Route path='/cart'>
                      <Header isHomePage={false}/>
                      <Footer/>
                  </Route>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
