import zd from 'zod';

const contactoShema = zd.object ({

    telefono : zd.string().trim().length(10,{message: 'Formato inválido'}),
    linkedin: zd.string().url({message: 'URL inválida'}),
    github : zd.string().url({message: 'URL inválida'}),
    correo: zd.string().trim().email({message: 'correo invalido'}),
    descripcion: zd.string({
        invalid_type_error: 'Formato incorrecto'
    }),
    twitter: zd.string().url({message: 'URL inválida'})

})

export const validateContacto = (objeto) =>{
    return contactoShema.safeParseAsync(objeto);
}