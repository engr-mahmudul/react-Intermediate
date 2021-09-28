import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card';
import { Button } from 'react-bootstrap';

function App() {
  const items = [
    { name: 'pen1', price: 180, img: 'https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg' },
    { name: 'pen2', price: 180, img: 'https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg' },
    { name: 'pen3', price: 180, img: 'https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg' },
    { name: 'pen4', price: 180, img: 'https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg' },
    { name: 'pen5', price: 180, img: 'https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg' },
  ]
  return (
    <div>

      
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      {
        items.map(item =><Card item={item}></Card>)
      }
     
    </div>
    <Button variant="warning">This is a button</Button>
    <div>

    </div>
    </div>
  );
}

export default App;
