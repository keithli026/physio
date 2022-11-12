import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getProjects } from "../ProjectInfo";
function QueryNavLink({to, ...props}) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
}
function Projects() {
    let projects = getProjects();
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <h1>Projects Content</h1>
            <nav>
                <input
                    value={searchParams.get("key") || ""}
                    onChange={event => {
                        let val = event.target.value;
                        let search;
                        if(val) {
                            search = {
                                key: val,
                            }
                        } else {
                            search = undefined;
                        }
                        setSearchParams(search, {replace: true});
                    }}
                />
                {projects
                    .filter((project)=> {
                        let filter = searchParams.get("key");
              
                        if(!filter) return true;
                        let name = project.client.toLowerCase();
                        // console.log(name, name.startsWith(filter.toLowerCase()));
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map(el => (
                        <QueryNavLink 
                            style={(isActive) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "green" : "",
                                };
                            }}
                            to={`/projects/${el.pid}`} 
                            key={el.pid}
                        >
                            {el.client} 
                        </QueryNavLink>
                    ))}
            </nav>
            <Outlet />
        </>
    );
}

export default Projects;