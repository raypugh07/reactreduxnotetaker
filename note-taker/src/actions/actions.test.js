import * as actions from './actions'
import * as types from './actions'

describe('actions',()=>{
    it('should create an action to add a note',()=>{
        const title='title'
        const content='content'
        const expectedAction={
            type:types.ADD_NOTE,
            title,content
        }
        expect(actions.addNote(title,content)).toEqual(expectedAction)

    })
})

describe('actions',()=>{
    it('should create an action to delete a note',()=>{
    const id='id'
    const expectedAction={
        type:types.REMOVE_NOTE,
        id
    }
    expect(actions.removeNote(id)).toEqual(expectedAction)
    
})

})