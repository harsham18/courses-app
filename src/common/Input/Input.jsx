import './Input.css';
function Input(props) {
	return (
		<>
			<label for={props.id}>{props.labelText}</label>
			<input
				type='text'
				id={props.id}
				value={props.value}
				placeholder={props.placeholderText}
				onChange={props.onChange}
			/>
		</>
	);
}

export default Input;
