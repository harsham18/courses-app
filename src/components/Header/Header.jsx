import './Header.css';
import Button from '../../common/Button/Button';
import Logo from './images/Logo';

function Header() {
	return (
		<>
			<div className='header'>
				<Logo />
				<span>Happy</span>
				<Button buttonText='Logout' />
			</div>
		</>
	);
}

export default Header;
