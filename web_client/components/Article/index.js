import React, { Component } from 'react'
import { Link } from 'react-router'
import { format_date } from '../../utils'

import './style.sass'


class Article extends Component {
    state = {
        title: '',
        created_at: '',
        text: ''
    };

    loadArticle(article_id) {
        fetch(`/api/v0/articles/${article_id}/`)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            });
    }

    componentDidMount() {
        this.loadArticle(this.props.params['article_id']);
    }

    render(){
        const { title, created_at, text } = this.state;
        return(
            <div className="article">
                <h4 className="article__title">{ title }</h4>
                <p className="article__time">{ format_date(created_at) }</p>
                <article dangerouslySetInnerHTML={ {__html: text} } />
                <Link className="article__button" to="/">Все статьи</Link>
            </div>
        );
    }

}


export default Article
