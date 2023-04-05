import React from 'react'

function Items(props) {
  return (
    <div className='my-3'>
      <div className="card" style={{ width: "35rem" }}>
        <img src={props.original} className="card-img-top" alt="Nothing to Show" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.summary}...</p>
          <a href={props.link} className="btn btn-primary">More Details</a>
        </div>
      </div>
    </div>
  )
}

export default Items
