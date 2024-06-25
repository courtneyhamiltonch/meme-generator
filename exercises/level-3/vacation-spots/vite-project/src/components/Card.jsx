import react from 'react'


export default function Card(props){
    const{place,price,timeToGo} = props

    return(
        <>
        <div className='card'>
            <h4 className='place'>{place}</h4>
            <h4 className='price'>{price}</h4>
            <h4 className='timeToGo'>{timeToGo}</h4>

        </div>
        <br/>
        </>
    )
}