import Image from "next/image";
import Card from './components/Card';
import styles from "./page.module.css";

import logo from '../../public/profile.jpeg';

export default function Home() {

  const trainings = [
    {
      starts: '2024',
      ends: '2026',
      course: 'Sistemas para Internet',
      institution: 'Universidade Católica de Pernambuco',
      type: 'Tecnólogo'
    }
  ]

  return (
    <>
      <section className={styles.about} id="about">
        <h1>Sobre</h1>
        <Image src={logo} width={235} height={235} alt="foto de perfil"/>
        <p>
          Opa, tudo bom? Me chamo Arthur Levy. Desde cedo, gosto de tecnologia, programação em específico. 
          Sempre busquei entender como as coisas funcionam por baixo dos panos e isso foi o que fez eu ser 
          quem sou hoje: apaixonado por programação.
        </p>
      </section>
      <section className={styles.training} id="training">
        <h1>Formação</h1>
        {trainings.map(training => (
          <Card 
            starts={training.starts}
            ends={training.ends}
            institution={training.institution}
            type={training.type}
            course={training.course}
          />
        ))}
      </section>
    </>
  );
}
