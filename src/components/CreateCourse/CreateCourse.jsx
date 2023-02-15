import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import TextArea from '../../common/TextArea/TextArea';
import getCourseDuration from '../../helpers/getCourseDuration';
import AuthorItem from './components/AuthorItem/AuthorItem';
import './CreateCourse.css';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import formatCreationDate from '../../helpers/formatCreationDate';
import CourseCard from '../Courses/components/CourseCard/CourseCard';

function CreateCourse(props) {
	const [authors, setAuthors] = useState([]);
	const [duration, setDuration] = useState('0');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [display, setDisplay] = useState(true);

	const handleCreateCourse = () => {
		const id = uuidv4(),
			courseTitle = title,
			courseDescription = description,
			creationDate = formatCreationDate(),
			courseDuration = duration,
			author = authors.map((author) => {
				return author.id;
			});
		if (
			courseTitle === '' ||
			courseDescription === '' ||
			courseDuration === '0' ||
			author === []
		) {
			alert('Please, fill in all fileds');
		} else {
			mockedCoursesList.push({
				id,
				title: courseTitle,
				description: courseDescription,
				creationDate,
				duration: courseDuration,
				authors: author,
			});
			setDisplay(false);
		}
	};
	const handleDuration = () => {
		const c = document.getElementById('duration');
		setDuration(c.value);
	};
	const handleCreateAuthor = () => {
		const authorId = uuidv4();
		const name = authorName;
		mockedAuthorsList.push({ id: authorId, name });
		setAuthorName('');
	};
	const handleAuthorItem = (authorData) => {
		const udpatedAuthors = [...authors, authorData];
		setAuthors(udpatedAuthors);
	};
	const handleDeleteAuthor = (event) => {
		const filteredAuthor = authors.filter(
			(author) => author.id !== event.target.id
		);
		setAuthors(filteredAuthor);
	};
	return (
		<>
			{display ? (
				<div className='mainPage'>
					<div className='head'>
						<Input
							placeholderText='Enter Title'
							labelText='Title'
							id='title'
							value={title}
							onChange={({ target }) => setTitle(target.value)}
						/>
						<Button
							buttonText='Create Course'
							id='createCourse'
							onClick={handleCreateCourse}
						/>
					</div>
					<div className='tail'>
						<TextArea
							text='Enter Description'
							labelText='Description'
							id='description'
							value={description}
							onChange={({ target }) => setDescription(target.value)}
						/>
					</div>

					<div className='grid-container'>
						<div className='createAuthor'>
							<h4>Add author</h4>
							<Input
								placeholderText='Enter author name'
								labelText='Author name'
								id='authorName'
								value={authorName}
								onChange={({ target }) => setAuthorName(target.value)}
							/>
							<br />
							<Button
								buttonText='Create author'
								id='createAuthor'
								onClick={handleCreateAuthor}
							/>
						</div>
						<div className='authors'>
							<h4>Authors</h4>
							<AuthorItem
								authors={props.data.mockedAuthorsList}
								selectedAuthors={authors}
								updatedData={handleAuthorItem}
							/>
						</div>
						<div className='duration'>
							<h4>Duration</h4>
							<Input
								id='duration'
								placeholderText='Enter duration in minutes'
								labelText='Duration'
								onChange={handleDuration}
							/>
							<span>Duration: {getCourseDuration(duration)} hours</span>
						</div>
						<div className='authorsList'>
							<h4>Course authors</h4>
							<table>
								{authors.map((author) => {
									return (
										<>
											<tr>
												<td>
													<label>{author.name}</label>
												</td>
												<td>
													<Button
														buttonText='Delete author'
														id={author.id}
														onClick={handleDeleteAuthor}
													/>
												</td>
											</tr>
										</>
									);
								})}
							</table>
						</div>
					</div>
				</div>
			) : (
				<CourseCard data={props.data} />
			)}
		</>
	);
}

export default CreateCourse;
