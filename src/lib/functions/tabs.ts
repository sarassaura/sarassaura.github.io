export function unchange(TabList: HTMLElement | null, links: string[], page: string) {
	links.forEach((element, id) => {
		'#' + element == page && change(id, TabList);
	});
	page == '' && change(0, TabList);
}

export function change(id: number, TabList: HTMLElement | null) {
	if (TabList != undefined && TabList.querySelectorAll('button') != undefined) {
		const offsetLeft = TabList.querySelectorAll('button')[id].offsetLeft;

		const width = TabList.querySelectorAll('button')[id].offsetWidth / TabList.offsetWidth;

		TabList.style.setProperty('--_left', offsetLeft + 'px');
		TabList.style.setProperty('--_width', width.toString());
	}
}
