import React, { useState } from 'react';
import './App.css';
import Car from './Car/Car';
import Counter from './Counter/Counter';

function App() {
  const [cars, setCars] = useState([
    {name: 'Audi', year: 2018},
    {name: 'Mazda', year: 2016},
    {name: 'Lada', year: 2010}
  ]);
  const [carsVisible, setCarsVisibility] = useState(true);
  const [pageTitle, setPageTitle] = useState('Page Title');

  const handleTitleChange = (titleName) => {
    setPageTitle(titleName);
  }

  const handleNameChange = (name, index) => {
    const newCars = [...cars];
    newCars[index].name = name;
    setCars(newCars);
  }

  const handleDeleteCar = (index) => {
    const newCars = [...cars];
    newCars.splice(index, 1);
    setCars(newCars);
  }

  let carsToShow = null;

  if (carsVisible) {
    carsToShow = cars.map((car, index) => {
      return <Car 
        key={index} 
        name={car.name} 
        year={car.year}
        onDelete={handleDeleteCar.bind(this, index)}
        onChangeName={event => handleNameChange(event.target.value, index)}
      />
    })
  }

  const handleViewClick = () => {
    setCarsVisibility(!carsVisible);
  }

  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1>{pageTitle}</h1>

      <div style={{margin: '20px auto'}}>
        <Counter/>
      </div>

      <button 
        style={{marginBottom: 20}} 
        onClick={handleViewClick}
      >
        Toggle View
      </button>

      {/* {
        cars.map((car, index) => {
          return <Car key={index} name={car.name} year={car.year} />
        })
      } */}

      {carsToShow}
    </div>
  );
}

export default App;
