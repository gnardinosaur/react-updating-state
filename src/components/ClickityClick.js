import React from 'react';

class ClickityClick extends React.Component {
    
    state = {
        hasBeenClicked: false
    };

    handleClick = () => {
        let clickedState = !this.state.hasBeenClicked;
        this.setState({
            hasBeenClicked: clickedState
        })
    }
    
    render(){
        console.log(this.state)
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick