export interface IPaciente {
    id_paciente         : number;
    id_usuario          : number;
    nombres             : string;
    apellido_paterno    : string;
    apellido_materno    : string;
    correo              : string;
    telefono            : string;
    direccion           : string;
    documento_identidad : string;
    estado_auditoria    : string;
    fecha_creacion      : Date;
    fecha_modificacion  : Date;
}