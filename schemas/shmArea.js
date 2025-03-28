import zd from 'zod';

const areaSchema =  zd.object({
    nombre: zd.string({
        invalid_type_error: 'Formato incorrecto',
        required_error: 'Nombre es requerido'
    })

})

export const validateArea = (objeto)=>{
    return areaSchema.safeParseAsync(objeto);
}