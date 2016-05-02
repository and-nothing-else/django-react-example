import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { BaseLayout } from '../../layouts'
import List from '../List'
import Article from '../Article'


class App extends Component {
    render(){
        return(
            <Router history={ browserHistory }>
                <Route path="/" component={ BaseLayout }>
                    <IndexRoute component={List} />
                    <Route path="/:article_id" component={Article} />
                </Route>
            </Router>
        );
    }
}


export default App
