import { useEffect, useState } from "react"
import './/carousel.css'
export function Carousel(){
    const [index, setIndex] = useState(0)
    const [visible, setVisible] = useState(false)
    type carousel = {
        img : string,
        title : string,
        description : string,
        tools : string[]
    }
    const slides : carousel[] = [
        {
            img : './/socialpage.png',
            title : 'Социальная страница',
            description : 'соц.сеть с возможностью просматривать ленту новостей, лайкать, добавлять к себе на страницу и коментировать посты',
            tools : ['HTML','CSS','JS','REACT','RTK','TS']
        },
        {
            img : './/333.png',
            title : 'Интернет-магазин',
            description : 'интернет-магазин с функцией покупки, фильтрации товаров',
            tools : ['HTML','CSS','JS','REACT','RTK','TS','NEXT.JS']
        },
    ]

    useEffect(() => {
            setVisible(true)
        },[])

    function prev(){
        setVisible(false)
        setTimeout(() => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setVisible(true);
        }, 200); 
    }
    function next(){
        setVisible(false)
        setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setVisible(true);
        }, 200);
    }

    const slide = slides[index]

    return (
        <div className='portfolio-block'>
          <div className='portfolio-fill'>
            <div className='carousel-block'>
              <button className='carousel-nav-btn prev' onClick={prev}>←</button>
                <div className={`carousel-content ${visible ? 'show' : ''} `}>
                    <img className="carousel-img" src={slide.img}></img>
                    <div className='carousel-description'>
                        <h2>{slide.title}</h2>
                        <p>&nbsp;{slide.description}</p>
                        <div className="carousel-tools-container">
                            {slide.tools.map((tool) => (
                                <span style={{marginRight:'10px'}} key={tool}><p>{tool}</p></span>
                            ))}
                        </div>
                    </div>
                </div>
              <button className='carousel-nav-btn right' onClick={next}>→</button>
            </div>
          </div>
        </div>
    )
}