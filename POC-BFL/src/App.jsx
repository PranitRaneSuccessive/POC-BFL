import { useState } from 'react';
import AppLayout from './component/AppLayout';
import { AboutUs } from './component/AboutUs';
import { Product } from './component/Product';
import CustomCarousel from './component/CustomCarousel';

function App() {
  const [selectedKey, setSelectedKey] = useState('1'); // State to track selected menu item
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <AppLayout selectedKey={selectedKey} setSelectedKey={setSelectedKey}>
        {selectedKey === '3' && <AboutUs />}
        {selectedKey === '2' && <Product />}
        {selectedKey === '1' && <CustomCarousel />}
      </AppLayout>
    </div>
  );
}

export default App;
