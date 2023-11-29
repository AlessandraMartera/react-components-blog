
import style from './../styles/modules/BlogCard.module.css'

export default function BlogCard (){
    return (
    <>
        <div className={style.card}>
            <div className={style.cardHead} >
                
                    600 x 400
               
            </div>
            <div className={style.cardBody}>

                <h3>
                    titolo del post
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam voluptatem omnis nemo optio accusantium nihil cupiditate repudiandae distinctio non facere hic commodi molestias delectus maiores suscipit ratione, fugit laboriosam.
                </p>
                <button className={style.btn}>
                    LEGGI DI PIU'
                </button>
            </div>
        </div>   
    </>
    )
    
}