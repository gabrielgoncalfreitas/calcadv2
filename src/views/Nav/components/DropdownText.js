function DropdownText(props) {
    return (
        <li>
            <a className="dropdown-item text-secondary" href={'/'}>
                {props.text}
            </a>
        </li>
    );
}

export default DropdownText;