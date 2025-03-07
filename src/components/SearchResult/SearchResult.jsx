import React from 'react'
import FlightCard from './FlightCard'

export default function SearchResult() {
    return (
        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <FlightCard />
            <FlightCard />
            <FlightCard />
        </div>
    )
}
