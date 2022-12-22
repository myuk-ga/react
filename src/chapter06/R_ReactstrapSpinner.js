import React, { Component } from "react";
import { Spinner } from "reactstrap";

class R_ReactstrapSpinner extends Component {
    render() {
        return (
            <>
            <Spinner color="secondary" />
            <Spinner color="success" />
            <Spinner color="dark" type="grow" />
            <Spinner color="info" type="sm" />
            <Spinner color="primary" size="sm" />
            <Spinner color="dark" style={{ width: '10em', height: '0.5em' }} /><br />
            <Spinner color="secondary" style={{ width: '10em', height: '10em' }} />
            <Spinner color="primary" type="grow" style={{ width: '3em', height: '10em' }} />
            </>
        )
    }
}

export default R_ReactstrapSpinner;