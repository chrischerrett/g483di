import "./App.scss";

import * as React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";

import Operations from "./components/Operations/presentational/Operations";
import { Provider } from "react-redux";
import { store } from "./static/store";

export default class App extends React.Component {
    public render() {
        return (
            <React.StrictMode>
                <Provider store={store}>
                    <Router>
                        <Route exact path="/" component={Operations} />
                    </Router>
                </Provider>
            </React.StrictMode>
        );
    }
}
