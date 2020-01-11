import React,{ Component } from 'react';


class List extends Component{

    display_list(list){
        var html_list = list.map((item, i)=>{
            return <div key={i}>
                <h2>{item}</h2>
                <li> {item} </li>
            </div>
        })
        return html_list
    }

    render(){
        return(
            <ul>
                {this.display_list(this.props.dataarray)}
            </ul>
        );
    }
}

export default List