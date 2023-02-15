import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

function SearchBar(props) {
	return (
		<>
			<Input placeholderText='Enter course name or id...' />
			<Button buttonText='Search' />
		</>
	);
}

export default SearchBar;
