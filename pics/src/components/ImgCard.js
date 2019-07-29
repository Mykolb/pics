import  React from 'react';


class ImgCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spans: 0 //requires zero space 
        }
        
        this.imageRef = React.createRef()
      
    }
  
  
componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
    // console.log(this.imageRef)
    // console.log(this.imageRef.current.clientHeight)
}

setSpans = () => {
    // console.log(this.imageRef.current.clientHeight)
    const height = this.imageRef.current.clientHeight

    const spans = Math.ceil(height / 10 )

    this.setState({ spans: spans })
}

    render(){
        const { description, urls, } = this.props.image
        return(
            <div style={{ gridRowEnd:  ` span ${this.state.spans}`}}>
                <img 
                alt={description}
                src={urls.regular}
                ref={this.imageRef}
                />
            </div>
        )
    }
}


export default ImgCard;


//react refs- reference 
//gives access to a single dom element
//create in constructor, assign to variavles, then pass to jsx as props