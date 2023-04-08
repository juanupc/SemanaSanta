import { useState } from "react";
import { Game } from "../Game";
import { Modal } from "../Modal";
import './App.css'

const App = () => {
    const [player, setPlayer] = useState('X')
    const [table, setTable] = useState(
        [
            null, null, null,
            null, null, null,
            null, null, null,
        ]
    );

    const win = calculateWinner()
    const onClickAgain = () => {
        setTable([
            null, null, null,
            null, null, null,
            null, null, null,
        ])
    }

    const onClickcell = (index) => {
        if (table[index] === null) {
            const newTable = table.slice()
            newTable[index] = player
            setTable(newTable)
            player === 'X'
                ? setPlayer('O')
                : setPlayer('X')
        }
    }

    function calculateWinner() {
        let counterCell = 0
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (
                table[a] &&
                table[a] === table[b] &&
                table[a] === table[c]
            ) {
                return table[a]
            }
        }
        for (let i = 0; i < table.length; i++) {
            if (table[i] === null) return null
            if (counterCell > 7) return 'Nadie'
            counterCell++
        }
    }

    return (
        <main className="App">
            {!!win && <Modal playerWin={win} onClickAgain={onClickAgain} />}
            <h1 className="App_Titulo">triki - turno de: {player}</h1>
            <Game table={table} player={player} onClickcell={onClickcell} />
        </main>
    );
}

export { App };