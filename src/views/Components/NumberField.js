export default function NumberField(props) {
    return (
        <div className="form-floating my-1">
            <input type="number" className="form-control" id={props.id} placeholder={props.placeholder} readOnly={props.readOnly} onKeyUp={props.onKeyUp}/>
            <label htmlFor={props.id}>{props.placeholder}</label>
        </div>
    );
}