function NavDropdown(props) {
    return (
        <li className="nav-item dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button"
                data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                {props.text}
            </button>
            <ul className="dropdown-menu dropend dropdown-menu-dark">
                {props.children}
            </ul>
        </li>
    );
}

export default NavDropdown;