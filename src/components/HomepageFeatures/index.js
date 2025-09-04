import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '回合制卡牌对战',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        GSKard是一张回合制的卡牌PVP+PVE地图。在这里，你可以通过运营不断积累优势，
        击溃对手，也能凭借运气创造奇迹。
      </>
    ),
  },
  {
    title: '策略与随机并重',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        注重随机性的同时保持策略深度。你可以调整用牌顺序打出绝佳效果，
        也可以进行精彩的博弈和预判，见招拆招。
      </>
    ),
  },
  {
    title: '团队协作交流',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        队伍的协作和交流必不可少。交流战术并分配卡牌与K点，
        一击制敌，这亦是游戏特色。
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
