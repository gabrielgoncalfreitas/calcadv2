import { useState } from "react";
import { Routes } from "../../routes/Routes";
import NavDropdown from "./components/NavDropdown";

function Nav() {
    const [dark, setDark] = useState(true);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href={Routes.home.name}>CalCAD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavDropdown text="Curvas">
                                
                            </NavDropdown>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="dark" checked={dark}
                                    onChange={() => { dark ? setDark(false) : setDark(true) }} />
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="container-fluid">asd</div>
        </>
    );
}

export default Nav;
