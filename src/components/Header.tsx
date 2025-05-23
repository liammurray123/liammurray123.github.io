import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="https://www.github.com/liammurray123" class={url == 'https://www.github.com/liammurray123' && 'active'}>
					Github
				</a>
				<a href="https://www.linkedin.com/in/liammurray123/" class={url == 'https://www.linkedin.com/in/liammurray123/' && 'active'}>
					LinkedIn
				</a>
			</nav>
		</header>
	);
}
