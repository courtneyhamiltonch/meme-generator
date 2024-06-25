import react from 'react'


export default function Pet(props){
    const{name,breed} = props
return(
    <>
    <p className='pet-name'>{name}</p>
    <p className='pet-breed'>{breed}</p>

    </>
)
}