const argv = require('yargs')
    .command('crear', 'crear pendiente', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: "Descripcion de la tarea crear"
        }
    })
    .command('actualizar', 'actualizar pendiente', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: "Descripcion de la tarea actualizar"
        },
        completado: {
            default: true,
            alias: 'c',
            desc: "Marca como completada la tarea pendiente"
        }

    }).command('borrar', 'Borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'

        }
    })
    .help().argv;

module.exports = {
    argv
}