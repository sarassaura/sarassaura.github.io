export function Ripple(e: MouseEvent) {
	const button = e.currentTarget as HTMLButtonElement;
	const bubble = document.createElement('span');
	const rect = button.getBoundingClientRect();

	const diameter = Math.max(rect.width, rect.height);
	const radius = diameter / 2;

	bubble.style.width = bubble.style.height = `${diameter}px`;
	bubble.style.left = `${e.clientX - rect.x - radius}px`;
	bubble.style.top = `${e.clientY - rect.y - radius}px`;
	bubble.classList.add('ripple');

	const ripple = button.getElementsByClassName('ripple')[0];

	if (ripple) {
		ripple.remove();
	}

	button.appendChild(bubble);
}
