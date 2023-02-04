function NavDropdownItem(props) {
    return (
        <li className="nav-item dropdown">
            <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Curvas
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href={'/'}>Action</a></li>
                <li><a className="dropdown-item" href={'/'}>Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href={'/'}>Something else here</a></li>
            </ul>
        </li>
    );
}

export default NavDropdownItem;