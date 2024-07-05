import React from 'react';
import { Card } from 'antd';

const CustomCard = ({ img }) => (
  <Card
    style={{
      width: 300,
      margin: '0 auto',  // Ensure the card itself is centered
    }}
    cover={
      <img
        alt="example"
        src={img}
        style={{ height: 200, objectFit: 'cover' }}
      />
    }
  />
);

export default CustomCard;
