var projects = [
    {
        pid: 1,
        client: "CityU College of Science",
        dueDate: "31/12/2022",
        price: "$100000",
    },
    {
        pid: 2,
        client: "HKU Department of Physics",
        dueDate: "31/12/2022",
        price: "$200000",
    },
    {
        pid: 3,
        client: "Environmental Protection Department",
        dueDate: "31/12/2022",
        price: "$300000",
    }
];

export function getProjects() {
    return projects;
}

export function getProject(id) {
    return projects.find(
        project => project.pid === id
    );
}

export function deleteProject(pid) {
    projects = projects.filter(
        (project) => project.pid !== pid
    );
}


