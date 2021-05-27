import React from 'react'
import allCountryScores from '../scores'
import PlayerScore from './PlayerScore'

export const WorldRecords = ({descending, descendingOrder, ascendingOrder}) => {
    let sortedWorldWideHighScores = []
    
    allCountryScores.forEach(item => {
        sortedWorldWideHighScores.push(...item.scores)
    })

    return (
        <>
            <h1>World Wide High Scores</h1>
            <div className="highScoreTable">
                <div className="playerScores">
                    {
                        sortedWorldWideHighScores
                            .sort(descending ? descendingOrder : ascendingOrder)
                            .map(score => {
                            const {n,s} = score

                            return <PlayerScore n={n} s={s} key={n+s} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default WorldRecords
