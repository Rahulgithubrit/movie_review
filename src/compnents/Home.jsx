import React, { useState, useEffect } from 'react'
import Items from './Items'
import axios from 'axios'




export default function Home(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios
            .get('https://api.tvmaze.com/search/shows?q=all')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className='container my-3'>
                <h1 className='text-center'>Movies To Review</h1>
                <div className="row text-center">
                    {posts.map((element) => {
                        return <div className="col-md-4 d-flex justify-content-center" key={element.score}>
                            <Items name={element.show.name} link={element.show.url} original={element.show.image?element.show.image:"Nothing show"} summary={element.show.summary.slice(0, 100)} />
                        </div>
                    })}

                </div>
            </div>
        </>
    )
}