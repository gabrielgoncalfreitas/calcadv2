import { useState } from "react";
import { Routes } from "../../routes/Routes";
import DropdownAnchor from "./components/DropdownAnchor";
import NavDropdown from "./components/NavDropdown";

function Nav() {
    const [dark, setDark] = useState(true);
    const [theme, setTheme] = useState('dark');
    const [themeFont, setThemeFont] = useState('white');
    const [lightMode, setLightMode] = useState('d-none');
    const [darkMode, setDarkMode] = useState('');

    function toggleTheme() {
        if (dark) { // toggle to light mode
            setDark(false);

            setLightMode('');
            setDarkMode('d-none');

            setTheme('white');
            setThemeFont('dark');

            document.body.classList.remove('bg-dark');
            document.body.classList.add('bg-white');
        } else { // toggle to dark mode
            setDark(true);

            setLightMode('d-none');
            setDarkMode('');

            setTheme('dark');
            setThemeFont('white');

            document.body.classList.remove('bg-white');
            document.body.classList.add('bg-dark');
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary  ${'bg' + theme}`} data-bs-theme={theme}>
            <div className="container-fluid">
                <a className="navbar-brand" href={Routes.home.name}>CalCAD</a>
                <button className={`navbar-toggler ${'text-' + themeFont}`} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavDropdown title='Curvas (Carbono)' close='outside' addClass="m-1">
                            <DropdownAnchor title='90° Raio Curto' href="/" theme={theme} themeFont={themeFont} />
                            <DropdownAnchor title='45° Raio Curto' href="/" theme={theme} themeFont={themeFont} />
                            <DropdownAnchor title='30° Raio Curto' href="/" theme={theme} themeFont={themeFont} />
                        </NavDropdown>

                        <NavDropdown title='Curvas (Inox)' close='outside' addClass="m-1">
                            <DropdownAnchor title='90° Raio Curto' href="/" theme={theme} themeFont={themeFont} />
                            <DropdownAnchor title='45° Raio Curto' href="/" theme={theme} themeFont={themeFont} />
                            <DropdownAnchor title='30° Raio Curto' href="/" theme={theme} themeFont={themeFont} />
                        </NavDropdown>
                    </ul>
                    <div className={`d-flex justify-content-start m-1 ${'text-' + themeFont}`} role="search">
                        <div className="me-3 user-select-none">
                            <div className={lightMode}>
                                <i className="bi bi-sun-fill"></i> / <i className="bi bi-moon"></i>
                            </div>
                            <div className={darkMode}>
                                <i className="bi bi-sun"></i> / <i className="bi bi-moon-fill"></i>
                            </div>
                        </div>

                        <div className={`form-check form-switch ${'text-' + themeFont}`}>
                            <input className="form-check-input" type="checkbox" role="switch"
                                checked={dark} onChange={() => toggleTheme()} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
