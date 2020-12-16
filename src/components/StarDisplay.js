import React from 'react';
import '../styles/StarMatch.css'
import utils from './Utils'

const StarDisplay = (props) =>
(
    <>
    {utils.range(1, props.starCount).map(starId => 
        <div key={starId} className="star" />
        )}

    </>
)

export default StarDisplay