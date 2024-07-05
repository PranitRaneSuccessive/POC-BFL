import React from "react";
import {
    StepForwardOutlined,
  } from '@ant-design/icons';
  import { Card } from 'antd';
  import Bajaj from "../img/Bajaj.jpg"
export const AboutUs = () =>{
    return (
        <>  
            <Card title="About Bajaj Finserv Ltd" style={{ width: '100%' }}>
                <div>
                    <img src={Bajaj} alt="Bajaj" style={{ width: '10%', height: 'auto' }} />
                    <p>
                        Bajaj Finserv Limited, an unregistered Core Investment Company (CIC) under RBI Regulations 2020, is a part of the renowned Bajaj Group. One of India’s leading and most diversified financial services institutions, Bajaj Finserv Ltd provides simple financial solutions to crores of people every day through its group companies. Through continuous innovation, it strives to enrich the lives of communities across the length and breadth of the country and make financial security accessible to all.
                    </p>
                    <p>
                        Its diversified suite of financial solutions includes consumer and commercial loans, mortgages, savings products, insurance, mutual funds, and securities trading. Combining data, analytics and technology, Bajaj Finserv Ltd has given its millions of customers a seamless, simplified and personalised experience.
                    </p>
                </div>
            </Card>
        </>
    );
}