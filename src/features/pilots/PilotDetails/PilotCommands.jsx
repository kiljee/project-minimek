import React from "react";
import {connect} from "react-redux";
import {Button} from "semantic-ui-react";

import {selectIsEditingPilot} from "../pilotsSelectors";
import {addNewPilot} from "../pilotsActions";

const mapState = (state) => {
    const isEditingPilot = selectIsEditingPilot(state);

    return {isEditingPilot};
}

const buttonWidth = 140;

const actions = {addNewPilot};

const PilotCommands = ({ isEditingPilot, addNewPilot }) => (
    <Button
        primary
        disabled={isEditingPilot}
        type="button"
        onClick={addNewPilot}
        style={{width : buttonWidth, marginRight : 10}}
    >
        Add New Pilot
    </Button>
);



export default connect(mapState, actions)(PilotCommands);