export interface IUsuario {
    id_usuario         : number;
    nombre             : string;
    clave              : string;
    rol                : string;
    estado_auditoria   : string;
    fecha_creacion     : Date;
    fecha_modificacion : Date;
} 