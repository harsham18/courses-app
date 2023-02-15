import './Button.css';

function Button(props) {
	return (
		<button id={props.id} onClick={props.onClick}>
			{props.buttonText}
		</button>
	);
}

export default Button;
