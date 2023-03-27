import { useState } from "react";

const List = (props) => {
  let result = [];
  for (let i = 0; i < props.number; i++) {
    result.push(<div>{props.text}</div>);
  }
  return(
    <div>
        {
            result.map(item => {
                return item
            })
        }
    </div>
  ) 
};

export default List;
