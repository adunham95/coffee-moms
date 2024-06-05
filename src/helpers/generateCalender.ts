export function generateCalender(month: number, year: number) {
	const calenderDays = [];

	const firstDay = new Date(year, month, 1).getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	const daysInPreviousMonth = new Date(year, month, 0).getDate();

	const prevMonth = month === 0 ? 11 : month - 1;
	const prevYear = month === 0 ? year - 1 : year;

	const nextMonth = month === 11 ? 0 : month + 1;
	const nextYear = month === 11 ? year + 1 : year;

	//Fill In Previous Month Days
	for (let i = firstDay - 1; i >= 0; i--) {
		const prevDay = daysInPreviousMonth - i;
		calenderDays.push({
			day: prevDay,
			month: prevMonth,
			year: prevYear,
			monthType: 'previous',
		});
	}

	//Fill IN Current Month Days
	for (let day = 1; day <= daysInMonth; day++) {
		calenderDays.push({
			day,
			month,
			year,
			monthType: 'current',
		});
	}

	//Fill in next month days
	const totalCells = firstDay + daysInMonth;
	const remainingCells = 7 - (totalCells % 7);
	if (remainingCells < 7) {
		for (let day = 1; day <= remainingCells; day++) {
			calenderDays.push({
				day,
				month: nextMonth,
				year: nextYear,
				monthType: 'next',
			});
		}
	}

	return calenderDays;
}
