export interface ICitas {
    id_cita             : number;
    id_paciente         : number;
    id_medico           : number;
    id_especialidad     : number;
    id_sede             : number;
    fecha               : Date;
    hora                : string;
    motivo              : string;
    diagnostico         : string;
    estado              : string;
    telefono            : string;
    estado_auditoria    : string;
    fecha_creacion      : Date;
    fecha_modificacion  : Date;
}

