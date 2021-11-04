import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false,
    }

    componentDidCatch(error,errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        });

    }

    render() {
        if (this.state.error) {
            return <errorMessage/>
        }
        
        return this.props.children
    }
}

export default ErrorBoundary;