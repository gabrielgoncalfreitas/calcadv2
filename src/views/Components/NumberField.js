export default function NumberField(props) {
    return (
        <div class="form-floating my-1">
            <input type="number" class="form-control" id={props.id} placeholder={props.placeholder} readOnly={props.readOnly} />
            <label for={props.id}>{props.placeholder}</label>
        </div>
    );
}