function DropdownHeader(props) {
    return (
        <li>
            <h6 className="dropdown-header text-secondary user-select-none">
                {props.text}
            </h6>
        </li>
    );
}

export default DropdownHeader;