import { useEffect, useState } from 'react';
import Button from '../../../../common/Button/Button';
import './AuthorItem.css';
function AuthorItem(props) {
	const [filteredAuthors, setFilteredAuthors] = useState([]);
	useEffect(() => {
		const latest = props.authors.filter(
			(author) => !props.selectedAuthors.includes(author)
		);
		setFilteredAuthors(latest);
	}, [props.selectedAuthors, props.authors]);

	return (
		<table>
			{filteredAuthors.map((author) => {
				return (
					<>
						<tr>
							<td>
								<label id='authorName'>{author.name}</label>
							</td>
							<td>
								<Button
									buttonText='Add author'
									id='addAuthor'
									// onClick={() => props.updatedData([author.id, author.name])}
									onClick={() => {
										props.updatedData(author);
									}}
								/>
							</td>
						</tr>
					</>
				);
			})}
		</table>
	);
}

export default AuthorItem;
