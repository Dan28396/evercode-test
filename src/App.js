import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import WebFont from "webfontloader";

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
                    <Route path='/qwer' component={HomePage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
