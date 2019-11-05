export const ADD_NOTE= 'ADD_NOTE';

export function addNote(title, content){
    return {type:ADD_NOTE, title: title, content:content};
    
}

export const REMOVE_NOTE='REMOVE_NOTE';

export function remoteNote(id){
    return {type: REMOVE_NOTE, id: id};
}