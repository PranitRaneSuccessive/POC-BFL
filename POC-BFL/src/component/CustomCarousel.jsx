import React from 'react';
import { Carousel } from 'antd';
import CustomCard from './CustomCard';
const contentStyle = {
  margin: 0,
  height: 'auto',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const mockCardContent = [{
  id: 1,
  image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/how-is-your-personal-loan-amount-decided?scl=1',
},{
  id: 2,
  image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/how-to-reduce-personal-loan-emis?scl=1',
},{
  id: 3,
  image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/all-you-need-to-know-about-cibil-score?scl=1',
},{
  id: 4,
  image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/all-you-need-to-know-about-cibil-score?scl=1',
}]

const CustomCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      {
        mockCardContent.map((item) => (
        <>
          <h3 style={contentStyle}><CustomCard img={item.image} /></h3>
        </>
        ))
      }
    </Carousel>
  );
};
export default CustomCarousel;