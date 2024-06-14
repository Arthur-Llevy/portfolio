import styles from './styles.module.css';

export default function Header(){
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.ul}>
					<li><a href="">Sobre</a></li>
					<li><a href="">Formação</a></li>
					<li><a href="">Projetos</a></li>
				</ul>
			</nav>
		</header>
	);
}