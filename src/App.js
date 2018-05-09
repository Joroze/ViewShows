import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";

import TopNavigator from 'components/TopNavigator/TopNavigator';
import LeftNavigator from 'components/LeftNavigator/LeftNavigator';
import Container from 'components/Container/Container';
import HomePage from 'views/HomePage/HomePage';
import MoviePage from 'views/MoviePage/MoviePage';
import ShowPage from 'views/ShowPage/ShowPage';
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                    <Router>
                        <React.Fragment>
                            <TopNavigator/>
                            <LeftNavigator/>
                            <Container>
                                <Route exact path="/" component={HomePage} />
                                <Route path="/movies" component={MoviePage} />
                                <Route path="/shows" component={ShowPage} />
                            </Container>
                        </React.Fragment>
                    </Router>
            </Provider>
        );
    }
}

export default App;