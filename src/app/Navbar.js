import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
  const { pathname: path } = useLocation()
  return (
    <nav>
      <section>
        <h1>
          Redux Toolkit{' '}
          <span style={{ fontSize: '0.6rem' }}>
            Thanks to Ace marke and redux maintainers
          </span>
        </h1>
        <div className="navContent">
          {path !== '/' && (
            <div className="navLinks">
              <Link to="/">View All Posts</Link>
            </div>
          )}
        </div>
      </section>
    </nav>
  )
}
