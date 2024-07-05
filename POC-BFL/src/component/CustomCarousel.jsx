import React from 'react';
import { Carousel } from 'antd';
import CustomCard from './CustomCard';
import { Product } from './Product';
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
  text: 'Personal loan amount'
},{
  id: 2,
  image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/how-to-reduce-personal-loan-emis?scl=1',
  text: 'Reduce Personal loan emi'
},{
  id: 3,
  image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/all-you-need-to-know-about-cibil-score?scl=1',
  text: 'All you need to know about cibil score'
},{
  id: 4,
  image: 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/all-you-need-to-know-about-cibil-score?scl=1',
  text: 'All you need to know about cibil score'
}]

const CustomCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
  
    <Carousel afterChange={onChange}>
      {
        mockCardContent.map((item) => (
        <>
          <div style={contentStyle}><CustomCard img={item.image}/>
          {item.text}
          </div>
        </>
        ))
      }
    </Carousel>
    <Product />
    </>
  );
};
export default CustomCarousel;