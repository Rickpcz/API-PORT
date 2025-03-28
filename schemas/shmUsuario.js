import zd from 'zod';

const usuarioSchema = zd.object({
    nombre: zd.string({
        invalid_type_error: 'Formato inválido',
        required_error: 'Información requerida'
    }),
    username: zd.string({
        invalid_type_error: 'Formato inválido',
        required_error: 'Información requerida'
    }).trim(), 
    password: zd.string({
        invalid_type_error: 'Formato inválido',
        required_error: 'Información requerida'
    }),
    area_id: zd.number().int({message: 'Formato inválido'}),
    puesto: zd.string({
        invalid_type_error: 'Formato inválido'
    })

})

export const validateUsuario = (objeto) =>{
    return usuarioSchema.safeParseAsync(objeto);
}