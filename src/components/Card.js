import React from 'react';

const card = ({id,name,email}) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src = {`https://robohash.org/${id}?size=200x200`} alt='robots' />
            <h2>{name}</h2>
            <p> {email} </p>
        </div>
    )
}
export default card;