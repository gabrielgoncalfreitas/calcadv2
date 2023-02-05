export default function DropdownDropdown(props) {
    return (
        <li className="nav-item dropdown">
            <div className="dropdown-item dropdown-toggle" role="button"
                data-bs-toggle="dropdown" data-bs-auto-close={props.close} aria-expanded="false">
                {props.title}
            </div>
            <ul className='dropdown-menu dropend' data-bs-theme={props.theme}>
                {props.children}
            </ul>
        </li>
    );
};