import React from 'react';
import './App.css';
import watchArray from '../Watches/watches'

class Watch {
  constructor(src, title, price) {
    this.src = src;
    this.price = price;
    this.title = title;
  }
}

const watch1 = new Watch("./JLC 1.jpg", "JLC Reverso", "$9,355 USD");
const watch2 = new Watch("./Omega 1.jpg", "Omega Constellation", "$1,995 USD");
const watch3 = new Watch("./Omega 2.jpg", "Omega", "$1,495 USD");
const watch4 = new Watch("./Omega 3.jpg","Omega Speedmaster 145.022","$6,195 USD");
const watch5 = new Watch("./Rolex 1.jpg","Rolex Datejust Ref. 1600","$4,295 USD");
const watch6 = new Watch("./Rolex 2.jpg", "Rolex Air-King", "$3,125 USD");
const watch7 = new Watch("./Rolex 3.jpg","Rolex Datejust Ref. 1601","$7,750 USD");
const watch8 = new Watch("./Rolex 4.jpg","Rolex Datejust Ref. 1601","$4,095 USD");

const watchArray = [watch1, watch2, watch3, watch4, watch5, watch6, watch7, watch8];

function App() {
  return (
    <div className="App">
      <WatchesList watches={watchArray} />
    </div>
  );
}

export default App;
