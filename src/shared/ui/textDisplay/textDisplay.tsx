import React from 'react';

interface TextDisplayProps {
    text: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => {
    return (
        <div style={{ fontSize: '18px', color: '#333', padding: '20px' }}>
            {text}
        </div>
    );
};

export default TextDisplay;
