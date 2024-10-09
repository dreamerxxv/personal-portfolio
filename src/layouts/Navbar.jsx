import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand btn btn-light" href="index.html">D</a>
                <a className="navbar-brand" href="index.html">DINA FATHUL BADRY</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
                    <i className="fa-solid fa-ellipsis"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link btn btn-outline-secondary btn-sm rounded-circle"  aria-label="Visit my GitHub profile" href="mailto:dinafbadry@gmail.com">
                                <i className="fa-solid fa-at"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-outline-secondary btn-sm rounded-circle"  aria-label="Visit my GitHub profile" href="https://www.linkedin.com/in/dina-fathul-badry/">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-outline-secondary btn-sm rounded-circle"  aria-label="Visit my GitHub profile" href="https://github.com/dreamerxxv">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-outline-secondary btn-sm rounded-circle"  aria-label="Visit my GitHub profile" href="https://api.whatsapp.com/send?phone=6289512876120">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar