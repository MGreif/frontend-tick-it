import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IProjectState, IRootState } from '../../redux/project.reducer'
import { Button, Dropdown, Input, Menu } from 'antd'
import classes from './index.module.css'
import { useCreateNewBoard } from '../../hooks/useCreateNewBoard'
import { CheckCircleOutlined } from '@ant-design/icons'

interface IBoardSelectionProps {
  setBoard: any,
  board: any,
  activeProject: IProjectState | null
}

const AddBoard = () => {
  const [boardName, setBoardName] = useState("")
  const createNewBoard = useCreateNewBoard()

  const handleAddClick = () => {
    if (boardName !== "") {
      createNewBoard(boardName)
    }
  }

  return (
  <Input.Group compact>
      <Input style={{ width: 'calc(100% - 56px)' }} defaultValue="Sample Board" onChange={(e) => setBoardName(e.target.value)} />
      <Button type="primary" onClick={handleAddClick}>Add</Button>
  </Input.Group>
  )
}

const BoardSelection = (props: IBoardSelectionProps) => {
  const { activeProject } = props

  const DropdownMenu = () => {
  const boards: any = useSelector<IRootState>(state => state.activeProject?.boards)
    return (
      <Menu className={classes.menu} >
        {
          boards
            .map((boardItem: any) => (
              <Menu.Item key={boardItem.name} onClick={() => props.setBoard(boardItem)}>
                <span>{boardItem.name} {boardItem._id === props.board?._id && <CheckCircleOutlined color="green"/>}</span>
              </Menu.Item>
            ))
        }
        <Menu.Item key="new-project" className={classes.newProjectOption}>
          <AddBoard />
        </Menu.Item>
      </Menu>
    )
  }

  if (!activeProject) return null

  return (
    <Dropdown
      overlay={() => <DropdownMenu />}
      placement="bottomLeft"
      arrow
    >
      <Button>
        {props.board ? `Board - ${props.board.name}` : "Board Auswahl"}
      </Button>
    </Dropdown>
  )

}

export default BoardSelection