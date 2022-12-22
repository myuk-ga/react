import React, { Component } from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

class R034_ReactstrapAlerts extends Component {
    render() {
        return (
            <div>
                <Alert color="light">
                    Simple Alert [color : light]
                </Alert>
                <Alert color="primary">
                    Simple Alert [color : primary]
                </Alert>
                <Alert color="secondary">
                    Simple Alert [color : secondary]
                </Alert>
                <Alert color="success">
                    Simple Alert [color : success]
                </Alert>
                <Alert color="danger">
                    Simple Alert [color : danger]
                </Alert>
                <Alert color="info">
                    Simple Alert [color : info]
                </Alert>
                <Alert color="dark">
                    Simple Alert [color : dark]
                </Alert>
                <UncontrolledAlert color="warning">
                    Uncontrolled Alert [color : warning]
                </UncontrolledAlert>
            </div>
        );
    }
}

export default R034_ReactstrapAlerts;