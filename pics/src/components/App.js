import React from 'react';
import Unsplash from './api/Unsplash';
import SearchBar from './SearchBar';
import ImgList from './ImgList';


class App extends React.Component  {
    state = {
        img: []
    }
  
    //async didn't like the arrow function
    //async is moved to in front of variable when using arrow fn 
    //created a custom request in Unsplash.js and imported it, then substituted the component for the axios on line 16
 onSearchSubmit = async term =>  {
    console.log('search submit', term)
    const res = await Unsplash.get('/search/photos', {
        params: { query: term } ,
        // headers: {
        //     Authorization: 'Client-ID 00e90b30da9b361ddebbc2975f4e49069cc75b9947e2ad5447a90e35beed989f'
        // }
        //promise obj gives notification when network req is completed
    })
//    .then(res => console.log(res.data.results))
   //alternate method
//    console.log('what is this:', this) //returned this not a functiion, need to bind this
   this.setState({img: res.data.results})
   console.log(res.data.results)

}





    render() {
        return(
            <div className='ui container' style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/* Found: {this.state.img.length} images */}
                <ImgList images={this.state.img}/>
            </div>
        )
     }
}
 




export default App;