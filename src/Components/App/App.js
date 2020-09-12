import React from 'react';
import './App.css';
import WatchesList from '../WatchesList/WatchesList';
import image1 from '../Watches/JLC 1.jpg';
import image2 from '../Watches/Omega 1.jpg';
import image3 from '../Watches/Omega 2.jpg';
import image4 from '../Watches/Omega 3.jpg';
import image5 from '../Watches/Rolex 1.jpg';
import image6 from '../Watches/Rolex 2.jpg';
import image7 from '../Watches/Rolex 3.jpg';
import image8 from '../Watches/Rolex 4.jpg';

class Watch {
  constructor(src, title, price) {
    this.src = src;
    this.price = price;
    this.title = title;
  }
}

const watch1 = new Watch(image1, "JLC Reverso", "$9,355 USD");
const watch2 = new Watch(image2, "Omega Constellation", "$1,995 USD");
const watch3 = new Watch(image3, "Omega", "$1,495 USD");
const watch4 = new Watch(image4,"Omega Speedmaster 145.022","$6,195 USD");
const watch5 = new Watch(image5,"Rolex Datejust Ref. 1600","$4,295 USD");
const watch6 = new Watch(image6, "Rolex Air-King", "$3,125 USD");
const watch7 = new Watch(image7,"Rolex Datejust Ref. 1601","$7,750 USD");
const watch8 = new Watch(image8,"Rolex Datejust Ref. 1601","$4,095 USD");

const watchArray = [watch1, watch2, watch3, watch4, watch5, watch6, watch7, watch8];

function App() {
  return (
    <div className="App">
      <WatchesList watches={watchArray} />
    </div>
  );
}

export default App;
