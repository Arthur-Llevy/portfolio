import styles from './styles.module.css';

export default function Header(){
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.ul}>
					<li><a href="#about">Sobre</a></li>
					<li><a href="#training">Formação</a></li>
					<li><a href="">Projetos</a></li>
				</ul>
			</nav>
		</header>
	);
}