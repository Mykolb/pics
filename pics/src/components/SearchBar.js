import React from 'react'



// initializing state line 5
class SearchBar extends React.Component {    
    state = { 
        term: ''
    }



// onInputChange = (e) => {
//     e.preventDefault(); //so it doesn't do the default behavior refresh
//     // e.target.value contains text user added to input
//     console.log(e.target.value)

// }

//will auto submit itself without e.preventDefault
onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
}



    render() {
        return(
            <div className='ui segment'>
                <form onSubmit={this.onSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                    <input 
                    type='text'
                    value={this.state.term}
                    onChange={e => this.setState({ term: e.target.value.toUpperCase()}) }//cb function, same as writing an onChange fn and passing {this.onChange}
                    />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;