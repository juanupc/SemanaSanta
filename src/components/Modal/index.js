import React from "react"
import ReactDOM from "react-dom"

import { VictoryScreen } from "../VictoryScreen"
const Modal = ({ playerWin, onClickAgain }) => {
    return ReactDOM.createPortal(
        <VictoryScreen Ganador={playerWin} onClickAgain={onClickAgain} />,
        document.getElementById('modal')
    )
}

export { Modal }