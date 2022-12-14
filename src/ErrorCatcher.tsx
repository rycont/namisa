import { Component } from "react"

interface ErrorCatcherProps {
    children: JSX.Element
}

export class ErrorCatcher extends Component<ErrorCatcherProps> {
    state: {
        error: unknown
    } = { error: undefined }

    constructor(props: ErrorCatcherProps) {
        super(props)
    }

    static getDerivedStateFromError(error: unknown) {
        return { error }
    }

    render() {
        const { error } = this.state

        if (error) {
            if (error instanceof Error) {
                return (
                    <div>
                        <h2>{error.name}</h2>
                        <p>{error.message}</p>
                        <p>{error.stack}</p>
                    </div>
                )
            }
            return (
                <div>
                    <p>
                        오류로 페이지를 불러올 수 없습니다. 콘솔을 확인해주세요.
                    </p>
                </div>
            )
        }

        return this.props.children
    }
}
