import React from 'react';
import PieceSummary from './PieceSummary'

const MyPieceList = ({ projects }) => {
    return (
        <div>
            {projects && projects.map(project => {
                return(
                    <PieceSummary project = {project} />
                )
            })}
        </div>
    )
}
export default MyPieceList;
