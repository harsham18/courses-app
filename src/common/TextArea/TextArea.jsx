import './TextArea.css';
function TextArea(props) {
	return (
		<>
			<label for='area'>{props.labelText}</label>
			<textarea
				id='area'
				value={props.value}
				placholder={props.text}
				onChange={props.onChange}
			>
				{props.text}
			</textarea>
		</>
	);
}

export default TextArea;
