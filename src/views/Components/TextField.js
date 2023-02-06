export default function TextField(props) {
    return (
        <div className="form-floating my-1">
            <input type="text" className="form-control" id={props.id} placeholder={props.placeholder} readOnly={props.readOnly} />
            <label htmlFor={props.id}>{props.placeholder}</label>
        </div>
    );
}