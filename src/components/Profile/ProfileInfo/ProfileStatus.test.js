import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus Component", () => {
    test("status from props in the state", () => {
      const component = create(<ProfileStatus status = "SUBSCRIBE TO BASIC" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
    });
    
    test("after creation span is displayed with status", () => {
        const component = create(<ProfileStatus status = "SUBSCRIBE TO BASIC" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.length).not.toBeNull();
    });

    test("after creation span is displayed with correct status", () => {
        const component = create(<ProfileStatus status = "SUBSCRIBE TO BASIC" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status = "SUBSCRIBE TO BASIC" />);
        const root = component.root;
        
        expect(() => {
            const input = root.findByType("input")
        }).toThrow();
    });

    test("input should be displayed in editMode", () => {
        const component = create(<ProfileStatus status = "SUBSCRIBE TO BASIC" />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("SUBSCRIBE TO BASIC")
        
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status = "SUBSCRIBE TO BASIC" updateStatus= {mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEdit();
        expect(mockCallback.mock.calls.length).toBe(1)
        
    });

});