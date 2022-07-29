import React, { Component } from 'react';
import autosize from 'autosize';

class TextArea extends Component {
    componentDidMount(){
       autosize(this.textarea);
    }

    render(){
      const {rows, cols, value, onChange, name} = this.props;
      const style = {
                maxHeight:'200px',
                minHeight:'20px',
                  resize:'none',
                  height:'20px',
                  padding: '0px',
                  boxSizing:'border-box',
                  backgroundColor: '#1A191A',
                  border: 'none',
                  borderBottom: 'solid',
                  borderColor: '#696969',
                  borderWidth: '1px',
                  color: '#FFFFFF',
                  outline: 'none'
                };
        return (

            <textarea
            style={style} 
            ref={c=>this.textarea=c}
            placeholder="Feel free to express"
            name={name}
            rows={rows}
            cols={cols}
            value={value}
            onChange={onChange}
            
            />
         
        );
    }
}

export default TextArea;