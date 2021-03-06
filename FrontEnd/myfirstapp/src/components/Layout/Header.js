import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="/books">
            🕮
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <b><a className="navbar-brand" href="/">
                    <div className="main-title slab-serif">
                      BOOKEROO
                    </div>
                  </a></b>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link " href="/register.html">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login.html">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;