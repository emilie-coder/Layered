const initState = {
    projects: [
        {id: '1', title: 'project 1', content: '1 test contenttttttttt'},
        {id: '2', title: 'project 2', content: '2 test contenttttttttt'},
        {id: '3', title: 'project 3', content: '3 test contenttttttttt'},
    ] 
}

const projectReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log("created Project", action.project )
    }
    return state;
}

export default projectReducer;