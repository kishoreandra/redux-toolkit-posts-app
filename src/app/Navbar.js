import React from 'react'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>
          Redux Essentials Example{' '}
          <span style={{ fontSize: '0.6rem' }}>
            Thanks to Acemarke and redux maintainers
          </span>
        </h1>

        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  )
}
