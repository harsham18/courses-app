import Button from '../../../../common/Button/Button';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import './CourseCard.css';

function CourseCard(props) {
	const listCourses = props.data.mockedCoursesList;
	const listAuthors = props.data.mockedAuthorsList;

	return (
		<>
			{listCourses.map((course) => {
				return (
					<>
						<div className='card'>
							<div className='courseData'>
								<div>
									<h3>{course.title}</h3>
									<p>{course.description}</p>
								</div>
							</div>

							<div className='authorData'>
								<div>
									Authors:{' '}
									{course.authors.map((id) => {
										return (
											<>
												{listAuthors.map((author) => {
													return (
														<>
															{author.id === id ? (
																<span>{author.name},</span>
															) : (
																''
															)}
														</>
													);
												})}
											</>
										);
									})}
									<br />
									<span>
										Duration: {getCourseDuration(course.duration)} hours
									</span>
									<br />
									<span>Created: {course.creationDate}</span>
									<br />
									<Button buttonText='Show Course' />
								</div>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
}

export default CourseCard;
