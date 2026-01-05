import React from 'react';
import Converter from './components/Converter';
import './styles.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Markdown Converter</h1>
            <Converter />
        </div>
    );
};

export default App;