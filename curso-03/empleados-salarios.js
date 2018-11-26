let empleados = [{
        id: 1,
        nombre: 'Uno'
    },
    {
        id: 2,
        nombre: 'Dos'
    },
    {
        id: 3,
        nombre: 'Tres'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

// con Promise
// let getEmpleado = (id) => {
//     return new Promise((resolve, reject) => {
//         empleadoDB = empleados.find(id)
//         if (!empleadoDB){
//             reject (`No se encontró empleado con el id ${id}`);
//         } else {
//             resolve (empleadoDB);
//         }
//     });
// }

// con async
let getEmpleado = async(id) => {
    empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No se encontró empleado con el id ${id}`);
    }
    return empleadoDB;
}

// con Promise
// let getSalario = (empleado) => {
//     return new Promise((resolve, reject) => {
//         let salarioDB = salarios.find(salarioDB => salario.id === empleado.id)

//         if (!salarioDB){
//             reject (`No existe salario para el empleado de id ${empleado.id}`);
//         } else {
//             resolve ({
//                 id: empleado.id,
//                 nombre: empleado.nombre,
//                 salario: salarioDB.salario
//             });
//         }
//     });
// }

// con async
let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        throw new Error(`No existe salario para el empleado de id ${empleado.id}`);
    }
    return ({
        id: empleado.id,
        nombre: empleado.nombre,
        salario: salarioDB.salario
    });
}


// salida
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `El salario de ${resp.nombre} es de ${resp.salario}.`
}

getInformacion(3)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))