import zd from 'zod';

const portafotafolioSchema = zd.object({
    skills: zd.string({
        invalid_type_error: 'Formato inválido'
    }),
    archievements: zd.string({
        invalid_type_error: 'Formato inválido'
    }),
    userId: zd.number().int()
})

export const validatePartialPortafolio = (objeto) =>{
    return portafotafolioSchema.partial().safeParseAsync(objeto);
}
