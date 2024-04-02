import * as style from './styled.css';
import logo from '../../../static/alpina-logo.png';
export const AlpinaPreview = () => {
  const { src } = logo as any;
  return (
    <div className={style.flexContainer}>
      <h1 className={style.title}> ALPINA UI KIT </h1>
      <p> UI-KIT для ALPINA, используется для просмотров компонентов перед использование на сайте </p>
      <img className={style.img} src={src} alt='alpina' />
    </div>
  );
};
