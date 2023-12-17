

import React, { createRef } from 'react'
class Same extends React.Component {
    constructor() {
        super();
        this.inputRef = createRef(); // inputRef kuchh bhi rakh saktey hai anything 
    }
    
    componentDidMount() {
        // console.warn(this.inputRef.current.value="1000");
    }
    
    getVal() {
        console.warn(this.inputRef.current.value)
        this.inputRef.current.style.color = "red"
        this.inputRef.current.style.backgroundColor = "skyblue"

    }
    render() {
        return (
            <div className="App">
                <h1>Ref in React </h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.getVal()}>Check Ref</button>
            </div>
        );
    }
}

export default Same;
