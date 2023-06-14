import React from 'react'
import Card from './Card'


export default function Week() {

    const vertical = {
        display: 'flex', 
        marginTop: '50px',
    }

  return (
    <div style={vertical} className='week-cards'>
      <Card day = "sunday"></Card>
      <Card day = "monday"></Card>
      <Card day = "tuesday"></Card>
      <Card day = "wednesday"></Card>
      <Card day = "thursday"></Card>
      <Card day = "friday"></Card>
      <Card day = "saturday"></Card>
    </div>
  )
}
