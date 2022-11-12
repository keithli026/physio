var physiotherapists = [
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

export function getPhysiotherapists() {
    return physiotherapists;
}

export function getPhysiotherapist(id) {
    return physiotherapists.find(
        physiotherapist => physiotherapist.pid === id
    );
}

export function deletePhysiotherapist(pid) {
    physiotherapists = physiotherapists.filter(
        (physiotherapist) => physiotherapist.pid !== pid
    );
}


