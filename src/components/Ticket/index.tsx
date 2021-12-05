import { Card } from 'antd'
import React from 'react'
import { ITicket } from '../../pages/tickets/types'
import classes from './index.module.css'

interface ITicketProps {
  ticketData: ITicket
}

const Ticket = ({ ticketData }: ITicketProps) => {
  return (
    <Card
      title={ticketData.title}
      className={classes['ticket-container']}
      bordered={true}
    >
      <h4 className={classes.description}>{ticketData.description}</h4>
      <span className={classes.weight}>weight: {ticketData.weight}</span>
      <div className={classes['label-container']}>
        {
          ticketData.labels.map(label => <span className={classes.label} style={{backgroundColor: label.color}}>{label.name}</span>)
        }
      </div>
    </Card>
  )
}

export default Ticket