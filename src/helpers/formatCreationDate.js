function formatCreationDate() {
	var today = new Date();
	var dd = today.getDate(),
		mm = today.getMonth() + 1,
		yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	return dd + '/' + mm + '/' + yyyy;
}

export default formatCreationDate;
