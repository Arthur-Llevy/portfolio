import styles from './styles.module.css';
import { BiLogoTypescript, BiLogoReact, BiLink, BiLogoGithub } from "react-icons/bi";
import Link from 'next/link';
import { ProjectCardProps } from './types';

export default function ProjectCard({ title, githubLink, siteLink, content }: ProjectCardProps) {
	return (
		<div className={styles.projectCard}>
			<header>
				<h2>{title}</h2>
				<div className={styles.icons}>
					<Link href={siteLink}><BiLink /></Link>
					<Link href={githubLink}><BiLogoGithub /></Link>
				</div>
			</header>
			<main>
				<p>
					{content}
				</p>
			</main>
			<footer>
				<BiLogoTypescript className={styles.typescriptLogo}/>
				<BiLogoReact className={styles.react} />
			</footer>
		</div>
	);
}