'use client'

import { CardProps } from './types';
import Styles from './styles.module.css';
import { useState, useRef } from 'react';

export default function Card({ course, starts, ends, institution, type }: CardProps) {

	const [isCardExpanded, setIsCardExpanded] = useState<boolean>(false);
	const card = useRef<HTMLDivElement | null>(null);

	const changeCardHeight = () => {
		if (card.current) {
			if(!isCardExpanded) {
				card.current.style.transition = ".2s";
				card.current.style.height = "110px";
				setIsCardExpanded(true);
			} else {
				card.current.style.transition = ".2s";
				card.current.style.height = "60px";
				setIsCardExpanded(false);
			}
		}
	};	

	return (
		<div className={Styles.card} ref={card}> 
			<span 
				className={Styles.moreIcon} 
				onClick={changeCardHeight}>
				{isCardExpanded === true? '-' : '+'}
			</span>
			<h2>{course}</h2>
			<p>{institution}</p>
			<p>{type}</p>
			<p>{starts} - {ends}</p>
		</div>
	);
}