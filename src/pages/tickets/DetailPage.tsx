import { Breadcrumb, Col, PageHeader, Row } from 'antd'
import React, { useLayoutEffect } from 'react'
import { useParams, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import TicketDetails from '../../components/TicketDetails'
import { useGetDetailedTicket } from '../../hooks/tickets/useGetDetailedTicket'
import { buildRouterLink } from '../../libs/linkBuilder'
import classes from './DetailPage.module.css'

const DetailPage = () => {
  const location = useLocation()
  const state: any = location.state
  const { ticketId }: any = useParams()
  const { ticket, fetchTicket }: any = useGetDetailedTicket()

  useLayoutEffect(() => {
    fetchTicket(ticketId)
  }, [ticketId, fetchTicket])

  if (!ticket) return <div>No ticket</div>

  return (
    <div>
      <PageHeader
        title="Ticket Details"
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              {state?.callee === 'board' ? (
                <Link to={buildRouterLink('/projects')}>Boards</Link>
              ) : (
                <Link to={buildRouterLink('/tickets')}>Tickets</Link>
              )}
            </Breadcrumb.Item>
            <Breadcrumb.Item>{ticket.title}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <Row gutter={[16, 16]} className={classes.listRow}>
        <Col span={3}></Col>
        <Col span={18}>
          <TicketDetails ticketData={ticket} />
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  )
}

export default DetailPage
