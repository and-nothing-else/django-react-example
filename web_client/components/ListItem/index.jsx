import React from 'react'
import { Link } from 'react-router'
import { format_date } from '../../utils'


export default ({ article }) => (
    <div>
        <h4>
            <Link to={`/${article.id}`}>{ article.title }</Link>
        </h4>
        <p className="time">{ format_date(article['created_at']) }</p>
        <article dangerouslySetInnerHTML={{__html: article['announce']}} />
    </div>
)
