import { Carousel, Image } from 'antd';
import { FC } from 'react';
import img from '../../../../static/catalog.webp';
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: '25px',
  height: '25px',
};

const carouselStyle = {
  borderRadius: '20px',
  overflow: 'hidden',
  height: '400px',
  background: 'teal',
};

export const CatalogCarouselItem: FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div
      style={{
        width: '400px',
      }}
    >
      <Carousel afterChange={onChange} infinite={false} style={carouselStyle}>
        <div>
          <Image style={contentStyle} src={img.src} />
        </div>
        <div>
          <Image style={contentStyle} src={img.src} />
        </div>
        <div>
          <Image style={contentStyle} src={img.src} />
        </div>
        <div>
          <Image style={contentStyle} src={img.src} />
        </div>
      </Carousel>
    </div>
  );
};
