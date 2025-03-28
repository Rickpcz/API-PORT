import zd from 'zod';

const proyectoSchema = zd.object({
    title: zd.string({
        invalid_type_error: 'Formato inválido'
    }),
    description: zd.string({
        invalid_type_error: 'Formato inválido'
    }),
    portafolioId: zd.number().int(),
    imgproject: zd.string({
        invalid_type_error: 'Formato inválido'
    })  
})

export const validatePartialProyecto = (objeto) =>{
    return proyectoSchema.partial().safeParseAsync(objeto);
}