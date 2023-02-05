function NavDropdown(props) {
    return (
        <li className={`nav-item dropdown ${props.addClass}`}>
            <button className="btn btn-secondary dropdown-toggle" type="button"
                data-bs-toggle="dropdown" data-bs-auto-close={props.close} aria-expanded="false">
                {props.title}
            </button>
            <ul className='dropdown-menu dropend' data-bs-theme={props.theme}>
                {props.children}
            </ul>
        </li>
    );
}

export default NavDropdown;