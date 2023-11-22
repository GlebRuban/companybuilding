
import { Children, cloneElement, useEffect, useState } from 'react'
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa'
import '../carousel/carousel.css'

const Page_width = 792; 

export const Carousel = ({children}) =>  {

  const [pages, setPages] = useState([])

  const [offset, setOffset] = useState(0)

  const handleLeftClick = () => {
    console.log('left');
    setOffset((currentOffset) => {
      
      const newOffset = currentOffset + Page_width


      console.log(newOffset);
      return Math.min(newOffset, 0)
    })
  }
  const handleRightClick = () => {
    console.log('right');
    setOffset((currentOffset) => {
      const newOffset = currentOffset - Page_width
      const maxOffset = (Page_width * (pages.length - 1)); 
      console.log(newOffset,maxOffset);
      return Math.max(newOffset)
    })
  }

  useEffect(()=>{
    setPages(
      Children.map(children,(child)=>{
        return cloneElement(child,{
          style:{
            height:'100%', 
            minWidth:`${Page_width}px`,
            maxWidth:`${Page_width}px`,
          },
        })
      })
    )
  },[])
  return<>
  <div className='sliderConteiner'>
    <FaChevronLeft  className='arrow' onClick={handleLeftClick}/>
    <div className="windows">
      <div className="allItems" style={{transform:`translateX(${offset}px)`}}>
        {pages}
      </div>
    </div>
    <FaChevronRight className='arrow' onClick={handleRightClick}/>
  </div>
  </>
}