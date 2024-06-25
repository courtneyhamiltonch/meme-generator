import react from 'react'

export default function Navbar(){
    return (
        <>
        <nav>
            <div className='nav--left_top'>
                <h3 className='bootstrap'>Start Boostrap</h3>
            </div>

            <div className='nav--right_top'>
                <h6 className='list'>HOME</h6>
                <h6 className='list'>ABOUT</h6>
                <h6 className='list'>SAMPLE POST</h6>
                <h6 className='list'>CONTACT</h6>
            </div>
        </nav>
        </>
    )
}