import { useState } from 'react';
import Button from '../../../common/Button/Button';
import CreateCourse from '../../CreateCourse/CreateCourse';
import CourseCard from '../components/CourseCard/CourseCard';
import SearchBar from '../components/SearchBar/SearchBar';
import './Courses.css';

function Courses(props) {
	const [createCourse, setCreateCourse] = useState(false);
	const handleCreateCourse = () => {
		setCreateCourse(!createCourse);
	};
	return (
		<div className='main'>
			{!createCourse && (
				<div className='searchBar'>
					<SearchBar />
					<Button
						id='newCourse'
						buttonText='Add new course'
						onClick={handleCreateCourse}
					/>
				</div>
			)}
			{createCourse ? (
				<CreateCourse data={props.data} />
			) : (
				<CourseCard data={props.data} />
			)}
		</div>
	);
}

export default Courses;
