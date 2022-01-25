import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Carousell = () => {
    return (
        <div>
           <Carousel className="caroussize">
  <Carousel.Item interval= '1500'>
    <img width={600} height={600}
      className="d-block w-100"
      src= "https://thebutlercollegian.com/wp-content/uploads/2019/03/netflix-image.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval= '1500'>
    <img width={600} height={600}
      className="d-block w-100"
      src= "https://www.plex.tv/wp-content/uploads/2021/04/plex-splash-screen-04-30-21-new-1440x810.png"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item interval= '1500'>
    <img width={600} height={600}
      className="d-block w-100 "
      src="https://images4.alphacoders.com/844/thumb-1920-844967.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel> 
        </div>
    )
}

export default Carousell
