import Courses from './components/Courses/Courses.jsx/Courses';
import Header from './components/Header/Header';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	return (
		<>
			<Header />
			<Courses data={{ mockedCoursesList, mockedAuthorsList }} />
		</>
	);
}

export default App;
