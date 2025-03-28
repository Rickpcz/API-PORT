import zd from 'zod';

const herramientaSchema = zd.object ({
    herramienta: zd.string({
        invalid_type_error: 'Formato inválido'
    }),
    portafolioId: zd.number().int()
})

export const validateHerramienta = (objeto) =>{
    return herramientaSchema.safeParseAsync(objeto);
}