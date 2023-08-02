import * as db from '/Users/emiliehopkinson/Desktop/Layered/layered/src/config/connector';

export const createProject = (project) => {
    return (dispatch, getState) =>{
        // make async call to database
        // pausing the dispatch and then we are able to cary on later
        db.createNote(project);
        dispatch({ type: 'CREATE_PROJECT', project: project});
    }
}