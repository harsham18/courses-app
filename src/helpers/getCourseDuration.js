function getCourseDuration(n) {
	if (n === '') {
		return '0 ';
	}
	var hours = parseInt(n) / 60;
	var rhours = Math.floor(hours);
	var minutes = (hours - rhours) * 60;
	var rminutes = Math.round(minutes);
	if (rhours < 10) {
		rhours = '0' + rhours;
	}
	if (rminutes < 10) {
		rminutes = '0' + rminutes;
	}
	return rhours + ':' + rminutes;
}

export default getCourseDuration;
