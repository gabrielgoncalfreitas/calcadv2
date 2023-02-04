function DropdownDropdown(props) {
    return (
        <li className="nav-item dropdown">
            <div className="dropdown-item dropdown-toggle" role="button"
                data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                {props.text}
            </div>
            <ul className="dropdown-menu dropend dropdown-menu-dark">
                {props.children}
            </ul>
        </li>
    );
}

export default DropdownDropdown;