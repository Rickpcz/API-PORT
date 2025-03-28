import zd from 'zod';

const experienciaSchema = zd.object({
    description: zd.string({
        invalid_type_error: 'Formato incorrecto'
    }),
    period: zd.string({
        invalid_type_error: 'Formato incorrecto'
    }),
    company_name:zd.string({
        invalid_type_error: 'Formato incorrecto'
    }),
    portafolioId : zd.number().int()
})

export const validateExperiencia = (object) =>{
    return experienciaSchema.safeParseAsync(object);
}