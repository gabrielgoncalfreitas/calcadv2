export default function DropdownHeader(props) {
    return (
        <li>
            <h6 className="dropdown-header text-secondary user-select-none">
                {props.title}
            </h6>
        </li>
    );
};