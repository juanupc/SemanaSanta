import './Game.css'

const Cell = ({ table, onClickcell, indexTable }) => {
    return (
        <div onClick={() => onClickcell(indexTable)}
            className="Game_Cell">{table[indexTable]}</div>
    )
}

const Game = ({ table, onClickcell }) => {
    return (
        <section className="Game">
            <Cell table={table} onClickcell={onClickcell} indexTable={0} />
            <Cell table={table} onClickcell={onClickcell} indexTable={1} />
            <Cell table={table} onClickcell={onClickcell} indexTable={2} />
            <Cell table={table} onClickcell={onClickcell} indexTable={3} />
            <Cell table={table} onClickcell={onClickcell} indexTable={4} />
            <Cell table={table} onClickcell={onClickcell} indexTable={5} />
            <Cell table={table} onClickcell={onClickcell} indexTable={6} />
            <Cell table={table} onClickcell={onClickcell} indexTable={7} />
            <Cell table={table} onClickcell={onClickcell} indexTable={8} />
        </section>
    )
}

export { Game }