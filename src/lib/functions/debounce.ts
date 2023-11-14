export default function debounce<Params extends unknown[]>(
	cb: (...args: Params) => void,
	delay: number
): (...args: Params) => void {
	let timeout: NodeJS.Timeout;

	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			cb(...args);
		}, delay);
	};
}
