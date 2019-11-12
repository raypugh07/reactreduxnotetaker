import React, { Component } from 'react'
import NotesForm from './notesForm'
import AllNotes from './allNotes'

export default class Notes extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>React Redux Notes</h1>

                <NotesForm/>
                <hr/>
                <AllNotes/>
                
            </React.Fragment>
        )
    }
}
