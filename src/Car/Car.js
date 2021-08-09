import React, {Component} from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import s from './Car.module.scss';
import cl from 'classnames';

class Car extends Component {
  render() {
    const {name, year, onChangeName, onDelete} = this.props;
    const isFilled = name !== '';

    const style = {
      border: '1px solid #bbb',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(0)',
      ':hover': {
        border: '1px solid #ccc',
        boxShadow: '0 15px 20px rgba(0, 0, 0, 0.5)',
        transform: 'translateY(-2px)'
      }
    }
  
    return (
      <div className={s.Car} style={style}>
        <h2>This is car component</h2>
        <p>Car name: {name}</p>
        <p>{year}</p>
        <input 
          type="text"
          value={name}
          onChange={onChangeName}
          className={cl( s.input, {[s.green]: isFilled}, {[s.red]: !isFilled} )}
        />
        <button onClick={onDelete}>Delete</button>
      </div>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

// function Car(props) {
//   const isFilled = props.name !== '';

//   return (
//     <div className={s.Car}>
//       <h2>This is car component</h2>
//       <p>Car name: {props.name}</p>
//       <p>{props.year}</p>
//       <input 
//         type="text"
//         value={props.name}
//         onChange={props.onChangeName}
//         className={cl( s.input, {[s.green]: isFilled}, {[s.red]: !isFilled} )}
//       />
//       <button onClick={props.onDelete}>Delete</button>
//     </div>
//   )
// }

export default Radium(Car);