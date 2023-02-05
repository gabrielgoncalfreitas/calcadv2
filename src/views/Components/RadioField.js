export default function RadioField(props) {
    return (
        <div class="form-check">
            <input class="form-check-input" type="radio" name={props.name} id={props.id} checked={props.checked} />
            <label class="form-check-label" for={props.id}>
                {props.title}
            </label>
        </div>
    );
}