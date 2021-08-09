import './Car.css';

function Car(props) {
  const inputClasses = ['input'];

  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red');
  }

  return (
    <div className="Car">
      <h2>This is car component</h2>
      <p>Car name: {props.name}</p>
      <p>{props.year}</p>
      <input 
        type="text"
        value={props.name}
        onChange={props.onChangeName}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default Car;