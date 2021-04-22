import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css'

function ResultsContainer({suggestedNames}) {

    const suggestedNamesJsx = suggestedNames.map(suggestedName => {
        return <NameCard key = {suggestedName}suggestedName = {suggestedName }/>
    })
    return (
        <div className="results-container">{suggestedNamesJsx}</div>
    )
}

export default ResultsContainer
