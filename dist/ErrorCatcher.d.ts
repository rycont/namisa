import { Component } from "react";
interface ErrorCatcherProps {
    children: JSX.Element;
}
export declare class ErrorCatcher extends Component<ErrorCatcherProps> {
    state: {
        error: unknown;
    };
    constructor(props: ErrorCatcherProps);
    static getDerivedStateFromError(error: unknown): {
        error: unknown;
    };
    render(): JSX.Element;
}
export {};
