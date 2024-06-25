import react from 'react'
import BlogPost from './BlogPost'
import {data} from'./Data'

export default function BlogList(){
    console.log(data)



    const blogs = data.map(item => {
        return(
            <div className='blog-style'>
                <BlogPost
                key={item.title}
                title={item.title}
                subTitle={item.subTitle}
                author={item.author}
                date={item.date}
                    />
            </div>
        )
    })
    return(
    <>
       <div className='render'>
         {blogs}
       </div>
    </>
    )
}