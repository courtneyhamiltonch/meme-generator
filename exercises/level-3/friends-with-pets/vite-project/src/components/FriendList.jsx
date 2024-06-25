import react from 'react'
import { data } from './Data'
import Friend from './Friend'

export default function FriendList(){
// Create a variable that maps over friends and returns a component called <Friend/>
return(
    <>
    {data.map(item => {
        return(
            <Friend
            name={item.name}
            age={item.age}
            pets={item.pets}/>
        )
    })}
</>
) 
    

}
