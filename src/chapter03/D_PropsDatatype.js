import React, { Component } from "react";
import datatype from "prop-types";

class D_PropsDatatype extends Component {
    render() {
        let { String, Number, Boolean, Array, ObjectJson, Function } = this.props;
        return (
            <div style={{ padding:"0px" }}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>StringProps: {Array.toString()}</p>
                <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function}</p>
            </div>
        );
    }
}

D_PropsDatatype.propTypes = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
};

export default D_PropsDatatype;