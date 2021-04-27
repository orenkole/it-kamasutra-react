import React from "react";
import {create} from "react-test-renderer";

describe(
    "ProfileStatus component",
    () => {
        const component = create(<ProfileStatus status = "it-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.state.text.toBe(""))
    }
    
)