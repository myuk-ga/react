import React, { Component } from "react";
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody, Popover } from "reactstrap";

class R_ReactstrapPopover extends Component {
    render() {
        return (
            <>
                <Button id="Popover_id" type="button">
                    Popover button
                </Button>
                <UncontrolledPopover placement="right" target="Popover_id">
                    <PopoverBody>
                        Aenean id magna id risus congue ornare.
                        Vestibulum sedn diam et mi pulvinar facilisis sed eu risus.
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default R_ReactstrapPopover;