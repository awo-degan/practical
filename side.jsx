import React from 'react'

function Side(props) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
        width: '30%',
        padding: '20px',
        borderRadius: '12px'
      }}
    >
      <p>Personal Information</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home</p>
      <p>Home,{props.name}, {props.age}, {props.phone}</p>
    </div>
  )
}

export default Side