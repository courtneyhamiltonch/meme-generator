import react from 'react'
import Navbar from './Navbar'

export default function Header(){
    return(
        <header className='header'>
        <Navbar/>
        <h1 className='header--h1'>Clean Blog</h1>
        <h3 className='header--under'>A Blog Theme by Start Bootstrap</h3>
        </header>
    )
}