import React from "react";

const MyHeader = ({propsColor, children}) => <h1 style={{ color:propsColor }}>{children}</h1>

// console.log(children);

export default MyHeader;