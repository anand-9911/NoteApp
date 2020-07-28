import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {onEditClick,deleteNotes} from '../../actions/notes'
import {Link} from 'react-router-dom'

const NoteItem = ({notesMatched,onEditClick,deleteNotes}) => {

    const onEditButtonClick=note=>{
        onEditClick(note);
    }

    const onDeleteButtonClick=note=>{
        deleteNotes(note);
    }

    const renderTitleData=()=>notesMatched.map(note=>{
        return(<li className="list-group-item" >{note.title}
        <Link  to={{ pathname: '/show-note', state: { note: note } }}type="button" className="btn btn-primary" >View</Link>
        <button type="button" className="btn btn-primary" onClick={e=>onEditButtonClick(note)}>Edit</button>
        <button type="button" className="btn btn-danger" onClick={e=>onDeleteButtonClick(note)}>Delete</button>
        </li>)
    })


    return(
        <><ul className="list-group">
        <li className="list-group-item disabled" aria-disabled="true">{notesMatched[0].date}</li>
        {renderTitleData()}
        </ul></>
    )
}


NoteItem.propTypes = {
onEditClick:PropTypes.func.isRequired,
}

export default connect(null,{onEditClick,deleteNotes}) (NoteItem)
