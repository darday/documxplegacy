import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/facil.svg').default,
    description: (
      <>
        Aquí encontraras la información de Maxpoint legacy de una manera facil y centralizada.
      </>
    ),
  },
  {
    title: 'Disponible en todo momento',
    Svg: require('@site/static/img/time.svg').default,
    description: (
      <>
        Puedes acceder a esta documentación en todo momento y en todo lugar.
      </>
    ),
  },
  {
    title: 'Constantemente actualizada',
    Svg: require('@site/static/img/update.svg').default,
    description: (
      <>
        Tabajamos contantemente para amntener esta documentación actualizada.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
