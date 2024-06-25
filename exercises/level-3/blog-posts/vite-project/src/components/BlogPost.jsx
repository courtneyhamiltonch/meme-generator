import react from 'react'


export default function BlogPost(props){
const{title,subTitle,author,date} = props

    return(
    <>
    <h1 className='title'>{title}</h1>
    <h1 className='subTitle'>{subTitle}</h1>
    <h1 className='author'>{author}</h1>
    <h1 className='date'>{date}</h1>
    </>
    
   
    )
}