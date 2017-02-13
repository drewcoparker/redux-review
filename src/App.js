import React, { Component } from 'react';
import StudentList from './containers/StudentList';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>Sanity Check...</p>
                <StudentList />
            </div>
        );
    }
}

export default App;
