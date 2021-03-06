import React from 'react'
import { Link } from 'react-router-dom'

const SearchCard = ({title, position, percentage, sent, receive, matched }) => {
  return (
    <div className={"search-card" + (sent ? " sent" : receive ? " receive" : matched ? " matched" : "")}>
      <div className="head">
        <h3>{ title }</h3>
      </div>
      <div className="body">
        <div className="card-content">
          <h4>위치</h4>
          <p>
            { position }
          </p>
        </div>
        <div className="card-content">
          <h4>나와 일치정도</h4>
          <p>
            { percentage }%
          </p>
        </div>
        {
          matched &&
          <div className="card-content">
            <h4>연락처</h4>
            <p>
              010-XXXX-XXXX
            </p>
          </div>
        }
        <Link to={{
          pathname: '/search/detail',
          state: {
            matched: matched,
          }
        }}>
          <button>
            자세히 보기
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SearchCard