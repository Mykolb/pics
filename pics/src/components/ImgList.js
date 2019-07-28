import React from 'react'

//regular pulled from array of objects returned in console from unsplash
//keys only for list of elements to keep up with DOM updates/removal; usually id's; needs to ba added on root return statement
const ImgList = props => {
    // console.log(props.img)
   const images = props.images.map(({id, description, urls}) => {
    return <img src={urls.regular} key={id} alt={description}/>
       
   })
   //assigning new array created above to images
    return <div>{images}</div>
}




export default ImgList;