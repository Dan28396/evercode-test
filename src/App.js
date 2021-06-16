import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import WebFont from "webfontloader";
import CoinPage from "./Components/CoinPage/CoinPage";

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['DM Sans']
            }
        });
    }, []);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/coins/:coinName' component={CoinPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
