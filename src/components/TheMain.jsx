import './../styles/modules/TheMain.module.css'
import BlogCard from './BlogCard';


export default function TheMain (){
    return (
        <>
        <main>
           
           <h1 className='text-center my-4 font-extrabold text-5xl'> 
                IL MIO BLOG
           </h1>
            
            <BlogCard/>
        </main>
           
        </>
    )
    
}