import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught:', error, info);
    }

    render() {
        if (this.state.hasError) {
            const msg = this.state.error?.message || String(this.state.error);
            return (
                this.props.fallback || (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        minHeight: '200px',
                        color: '#ff6b6b',
                        fontSize: '13px',
                        padding: '16px',
                        textAlign: 'center',
                        background: 'rgba(0,0,0,0.4)',
                        borderRadius: '8px',
                    }}>
                        <p style={{ fontWeight: 'bold', marginBottom: 8 }}>⚠ Scene Error</p>
                        <p style={{ color: '#ccc', wordBreak: 'break-word', maxWidth: 400 }}>{msg}</p>
                    </div>
                )
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
