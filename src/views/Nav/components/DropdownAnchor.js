import { Link } from "react-router-dom";

export default function DropdownAnchor(props) {
    return (
        <li>
            <Link className='nav-link active' data-bs-theme={props.theme} to={props.href}>
                {props.title}
            </Link>
        </li>
    );
};