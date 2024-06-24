'use client'

import ProjectCard from '../ProjectCard/';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from './component.module.css';
import { useState, useRef } from 'react';


export default function ProjectCardList() {
	const projects = [
		{ title: 'Simbora Web', githubLink: '#', siteLink: '#', content: 'O Simbora é um projeto desenvolvido na cadeira de Projeto Integrador I, do curso de Sistemas para Internet, onde o foco principal era pensar e prototipar uma solução digital com foco em algum dos Objetivos de desenvolvimento Sustentável.', icons: ['React'] },
		{ title: 'Simbora Web API', githubLink: '#', siteLink: '#', content: 'O Simbora é um projeto desenvolvido na cadeira de Projeto Integrador I, do curso de Sistemas para Internet, onde o foco principal era pensar e prototipar uma solução digital com foco em algum dos Objetivos de desenvolvimento Sustentável.', icons: ['React'] }
	];

	let [currentCard, setCurrentCard] = useState(1);
	const cardsRef = useRef<HTMLDivElement>(null);

	const goFoward = () => {
		setCurrentCard(previousValue => {
			let newValue = previousValue + 1;

			if(previousValue === 1){
				newValue = 1;
			}

			if (cardsRef.current) {
				cardsRef.current.style.transform = `translateX(-${newValue * 320}px)`;
			}
			return newValue;
		});
	};

	const goBack = () => {
		setCurrentCard(previousValue => {
			let newValue = previousValue - 1;

			if (cardsRef.current) {
				cardsRef.current.style.transform = `translateX(-${newValue * 320}px)`;
			}
			return newValue;
		});
	};

	return (
		<section className={styles.container}>
			<IoIosArrowBack onClick={goBack} className={styles.icons}/>
			<div className={styles.projectCardListContainer}>
				<div className={styles.cards} ref={cardsRef}>
					{projects.map((project, index) => (
						<ProjectCard 
							key={index} 
							title={project.title}
							content={project.content}
							githubLink={project.githubLink}
							siteLink={project.siteLink}
						/>
					))}
				</div>
			</div>
			<IoIosArrowForward onClick={goFoward} className={styles.icons}/>
		</section>
	);
}
