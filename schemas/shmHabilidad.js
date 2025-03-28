import zd from 'zod';

const habilidadSchema = zd.object({
    habilidad : zd.string({
        invalid_type_error: 'Formato inválido'
    }),
    portafolioId : zd.number().int()
})

export const validateHabilidad = (object) =>{
    return habilidadSchema.safeParseAsync(object);
}