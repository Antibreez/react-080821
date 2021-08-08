function Car(props) {
  return (
    <div 
      style={{
        border: '1px solid #bbb',
        marginBottom: '10px'
      }}
    >
      <h2>This is car component</h2>
      <p>{props.name}</p>
      <p>{props.year}</p>
      <input type="text" onChange={props.onChangeName} />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default Car;