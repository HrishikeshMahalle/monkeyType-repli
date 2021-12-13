import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
            <strong>Monkeytype</strong>
            </div>
            <div className="features">
            ScoreCard
            </div>
            <div className="features">
            Compete
            </div>
            <div className='features'>
               id: {Date.now()}
            </div>
        </div>
    )
}
