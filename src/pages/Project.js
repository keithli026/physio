import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getProject, deleteProject } from "../ProjectInfo";

function Project() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let project = getProject(parseInt(params.projectId, 10));
    // console.log(location, params);

    return (
        <>
            <h1>Project {params.projectId}</h1>
            <div>{project.client}</div>
            <div>{project.dueDate}</div>
            <div>{project.price}</div>
            <button
                onClick={()=> {
                    deleteProject(project.pid);
                    navigate("/projects" + location.search);
                }}
            >
                Delete
            </button>
        </>
    );
}

export default Project;