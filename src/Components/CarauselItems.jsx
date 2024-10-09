import React from 'react'
import { Carousel } from 'react-bootstrap';

export const CarauselItems = () => {

    const img=[
        {'url':'src/assets/images/Pediatric.jpg','caption':'Making a connection between happiness and health','color':'white'},
      {'url':'https://asianheartinstitute.org/wp-content/uploads/2023/12/diagnostics-banner.webp','caption':'Transforming Lives with Better Healthcare','color':'black'},
      {'url':'src/assets/images/hospital-image.jpg','caption':'25 years of doing the impossible','color':'white'},
      {'url':'src/assets/images/home-banner.jpg','caption':'The Health Care You Can Trust','color':'black'}
      
      ]
      
  return (
    <> 

     <Carousel fade controls={false}  interval={700} >

   {img.map((Item)=>(
        <Carousel.Item>
       <img className='crsl' sizes='100vw' src={Item.url} class="d-block w-100" alt="..."></img>
         <Carousel.Caption className='blr'>
           <h1 className='txt' style={{color:Item.color}}>{Item.caption}</h1>
          </Carousel.Caption>
       </Carousel.Item>
 
   ))}
</Carousel>
 </>

)
}
export default  CarauselItems