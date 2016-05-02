import React from 'react'
import { IndexLink } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './style.sass'

const LayoutBase = ({ children, location }) => (
    <div className="app">
        <div className="app__all">
            <header className="app__header">
                <div className="app__header_logo">
                    <IndexLink to="/">МегаАпп</IndexLink>
                </div>
            </header>
            <ReactCSSTransitionGroup
                component="div"
                className="app__content"
                transitionName="app__content_page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                >
                {React.cloneElement(children, {
                    key: location.pathname
                })}
            </ReactCSSTransitionGroup>
        </div>
        <footer className="app__footer">
            © N.E.M. 2016
        </footer>
    </div>
);


export default LayoutBase
