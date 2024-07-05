import { useState } from 'react';
import AppLayout from './component/AppLayout'
import CustomTable from './component/Table'
import { AboutUs } from './component/AboutUs';
import { Product } from './component/Product';

function App() {
  const [selectedKey, setSelectedKey] = useState('1'); // State to track selected menu item
  return (
    <AppLayout selectedKey={selectedKey} setSelectedKey={setSelectedKey}>
      {
        selectedKey === '3' && <AboutUs />
      }
      {
        selectedKey === '2' && <Product />
      }
    </AppLayout>
  )
}

export default App
