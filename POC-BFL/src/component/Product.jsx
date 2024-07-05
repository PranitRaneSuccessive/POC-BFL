import React from 'react';
import { Row, Col, Card } from 'antd';

const dummyData = [
    { title: 'Loans', description: 'Flexible loans tailored to your needs with attractive interest rates and quick approval process.' },
    { title: 'Insurance', description: 'Comprehensive insurance plans covering health, life, and general insurance with maximum benefits.' },
    { title: 'Electronic', description: 'Wide range of electronics available on easy EMIs. Buy now, pay later with no cost EMI options.' },
    { title: 'Cards', description: 'Get credit cards with exciting rewards, cashback offers, and low interest rates.' },
    { title: 'Payments', description: 'Simplify your payments with our secure and fast online payment solutions.' },
    { title: 'Fixed Deposit', description: 'Invest in fixed deposits with high interest rates and assured returns.' },
    { title: 'Investments', description: 'Explore a variety of investment options to grow your wealth effectively.' },
    { title: 'Travels', description: 'Exclusive travel deals and easy financing for your dream vacations.' },
    { title: 'Online Trading', description: 'Advanced online trading platforms to help you trade efficiently and securely.' },
];

const cardStyle = {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    backgroundColor: '#fafafa',
    textAlign: 'center'
};

export const Product = () => {
    return (
        <div style={{ padding: '30px' }}>
            <Row gutter={[16, 16]}>
                {dummyData.map((item, index) => (
                    <Col span={8} key={index}>
                        <Card title={item.title} bordered={false} style={cardStyle}>
                            {item.description}
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

