
export const Title = ({ fontSize, children, style }) => {
    const baseStyle = {
        margin: 0,
        color: 'var(--slate-800)',
        fontWeight: 900,
        fontSize,
        textAlign: 'center',
        paddingTop: '50px',
    };

    const mergedStyle = {...baseStyle, ...style};

    return (
        <h1 style={mergedStyle}>
            {children}
        </h1>
    );
};