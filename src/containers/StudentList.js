import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectStudent from '../actions/SelectStudent';
import { bindActionCreators } from 'redux';

class StudentList extends Component {

    render() {
        let studentArray = [];
        this.props.students.map((student, index) => {
            return studentArray.push(
                <li key={index}
                    onClick={() => this.props.selectStudent(student.name)}>
                    {student.name}
                </li>);
        })
        return(
            <div>
                The StudentList Component:
                <ol>
                    {studentArray}
                </ol>
            </div>
        );
    }
}

// This function will tie together what is returned from the reducer to this.props
function mapStateToProps(state) {
    return {
        students: state.students
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectStudent: SelectStudent
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
