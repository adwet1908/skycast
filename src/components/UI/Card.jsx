import React from 'react'

export default function Card(props) {
    const customStyle = {
        width: '18rem',
        border: 'solid black', 
        margin: '10px'
    }

    return (
        <div className="card" style={customStyle}>
            <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Temp</p>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                </div>
        </div>

    )
}
