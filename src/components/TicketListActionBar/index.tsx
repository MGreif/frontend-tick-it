import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './index.module.css'

const ActionBar = () => {
  return (
    <div className={classes.container}>
      <Button type="primary" href="/tickets/create">
        <Link to="/tickets/create">New Ticket</Link>
      </Button>
      <Button>
        Test
      </Button>
    </div>
  )
}

export default ActionBar