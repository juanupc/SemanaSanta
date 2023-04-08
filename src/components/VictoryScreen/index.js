import './VictoryScreen.css'
const VictoryScreen = ({ Ganador, onClickAgain }) => {
    return (
        <article className="VictoryScreen">
            <div className="VictoryScreen_box">
                <h2 className="VictoryScreen_title">Ganador:</h2>
                <p className="VictoryScreen_player">{Ganador}</p>
                <button onClick={onClickAgain} className="VictoryScreen_Again">Volver a jugar</button>
            </div>
        </article>
    )
}

export { VictoryScreen }