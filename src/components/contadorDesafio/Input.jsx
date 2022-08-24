import React from "react";

export default props => {
    return (
        <input type="number" value={props.value} onChange={props.handleChange} />
    )
}