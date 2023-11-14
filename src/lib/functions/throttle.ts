export default function throttle<Params extends unknown[]>(
	cb: (...args: Params) => void,
	delay: number
) {
	let shouldWait = false;
	let waitingArgs: Params | null;

	const timeoutFunc = () => {
		if (waitingArgs == null) {
			shouldWait = false;
		} else {
			cb(...waitingArgs);
			waitingArgs = null;
			setTimeout(timeoutFunc, delay);
		}
	};

	return (...args: Params) => {
		if (shouldWait) {
			waitingArgs = args;
			return;
		}

		cb(...args);
		shouldWait = true;

		setTimeout(timeoutFunc, delay);
	};
}
