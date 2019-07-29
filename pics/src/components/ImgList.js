import './ImgList.css'
import React from 'react'
import ImgCard from './ImgCard';


//regular pulled from array of objects returned in console from unsplash
//keys only for list of elements to keep up with DOM updates/removal; usually id's; needs to ba added on root return statement
const ImgList = props => {
    // console.log(props.img)
   const images = props.images.map((image) => {
    return <ImgCard key={image.id} image={image} />
       
   })
   //assigning new array created above to images
    return <div className='img-list'>{images}</div>
}




export default ImgList;


