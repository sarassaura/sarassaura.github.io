export function unchange(TabList: HTMLElement | null, links: string[], page: string) {
	links.forEach((element, id) => {
		'#' + element == page && change(id, TabList);
	});
	page == '' && change(0, TabList);
}

export function change(id: number, TabList: HTMLElement | null) {
	if (TabList != undefined && TabList.querySelectorAll('a') != undefined) {
		const offsetLeft = TabList.querySelectorAll('a')[id].offsetLeft;
		const width = TabList.querySelectorAll('a')[id].offsetWidth / TabList.offsetWidth;

		TabList.style.setProperty('--_left', offsetLeft + 'px');
		TabList.style.setProperty('--_width', width.toString());
	}
}
