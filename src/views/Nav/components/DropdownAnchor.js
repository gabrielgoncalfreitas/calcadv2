export default function DropdownAnchor(props) {
    return (
        <li>
            <a className={`dropdown-item ${'text-' + props.themeFont}`} href={props.href}>
                {props.title}
            </a>
        </li>
    );
};