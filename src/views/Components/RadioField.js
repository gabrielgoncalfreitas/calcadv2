export default function RadioField(props) {
    return (
        <div className="form-check">
            <input className="form-check-input" type="radio"
                name={props.name}
                id={props.id}
                defaultChecked={props.defaultChecked}
                value={props.value}
            />
            <label className="form-check-label" htmlFor={props.id}>
                {props.title}
            </label>
        </div>
    );
}