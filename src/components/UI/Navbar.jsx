import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <input type="searchbar" value="Search here"/>
            <button className="today">Today</button>
            <button className="this-week">This week</button>
        </nav>
    </div>
  )
}
