import React from 'react'
import { Card } from 'antd'
import { ISubBoard } from '../../types';
import Ticket from '../../TicketList/Ticket';
import { useSelector } from 'react-redux';
import { findMatchingTicketsForSubBoard } from './helper/findMatchingTicketForSubBoard';
import CardTitle from './CardTitle';
import classes from './index.module.css'
import { IRootState } from '../../../redux/project.reducer';

interface ISubBoardProps {
  subBoardData: ISubBoard,
}

const SubBoard = ({ subBoardData }: ISubBoardProps) => {

  const tickets: any = useSelector<IRootState>(state => state.activeProject?.tickets)
  const correspondingTickets = findMatchingTicketsForSubBoard(tickets, subBoardData)
  
  return (
    <div className={classes.board}>
      <Card
        title={<CardTitle
          subBoardData={subBoardData}
          currentTicketAmount={correspondingTickets.length}
        />}
        bordered={true}
      >
        {
          correspondingTickets.map(ticket => (
            <Ticket key={ticket.title} ticketData={ticket} />
          ))
        }
      </Card>
    </div>
  )
}

export default SubBoard