import React from 'react';

const PieceSummary = ({ project }) => {
    return (
        <div>
            {project.id} \---
            {project.title}\---
            {project.content}\--
        </div>
    )
}
export default PieceSummary;
