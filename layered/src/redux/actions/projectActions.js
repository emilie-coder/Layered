

export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        // make async call to database
        // pausing the dispatch and then we are able to cary on later

        dispatch({ type: 'CREATE_PROJECT', project: project});
    }
}