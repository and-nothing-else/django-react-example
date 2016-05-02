import React, { Component } from 'react'
import ListItem from '../ListItem'

import './style.sass'


class List extends Component {

    state = {
        articles: []
    };

    async loadArticles() {
        this.setState({
            articles: await fetch("/api/v0/articles/").then(response =>response.json())
        })
    }

    componentDidMount() {
        this.loadArticles();
    }

    render(){
        return(
            <ul className="content-list">
                {this.state.articles.map((article, index) => (
                    <li className="content-list__item" key={index}>
                        <ListItem article={article} />
                    </li>
                ))}
            </ul>
        );
    }
}


export default List
