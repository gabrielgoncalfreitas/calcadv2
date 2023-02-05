import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import DropdownAnchor from "./components/DropdownAnchor";

function Nav() {
    const [theme, setTheme] = useState({
        isDark: true,
        lightMode: 'd-none',
        darkMode: ''
    });

    async function toggleTheme() {
        let globalTheme;
        if (theme.isDark) { // toggle to LIGHT
            setTheme({
                isDark: false,
                lightMode: '',
                darkMode: 'd-none'
            });
            globalTheme = 'light';
        } else { // toggle to DARK
            setTheme({
                isDark: true,
                lightMode: 'd-none',
                darkMode: ''
            });
            globalTheme = 'dark';
        }

        document.documentElement.setAttribute('data-bs-theme', globalTheme);
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={Routes.home}>
                    CalCAD
                </Link>

                <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <DropdownAnchor title={Routes.curvas.title} href={Routes.curvas.path} />
                        <DropdownAnchor title={Routes.reducoes.title} href={Routes.reducoes.path} />
                    </ul>
                    <div className={`d-flex justify-content-start m-1`} role="search">
                        <div className="me-3 user-select-none">
                            <div className={theme.lightMode}>
                                <i className="bi bi-sun-fill"></i> / <i className="bi bi-moon"></i>
                            </div>
                            <div className={theme.darkMode}>
                                <i className="bi bi-sun"></i> / <i className="bi bi-moon-fill"></i>
                            </div>
                        </div>

                        <div className={`form-check form-switch`}>
                            <input className="form-check-input" type="checkbox" role="switch"
                                checked={theme.isDark} onChange={() => toggleTheme()} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
