import swaggerJSDoc, { OAS3Definition, OAS3Options} from "swagger-jsdoc";

const swaggerDefinition : OAS3Definition = {
    openapi : "3.0.0",
    info : {
        title : "Clínicas Loayza - OpenAPI 3.0",
        version : "1.0.0",
        description : "Documentación oficial de la API de las clínicas Loayza", 
    },
    servers: [
        {
            url : "http://localhost:3000/api/v1",
        },
    ],
    components : {
        schemas : {
            Usuario : {
                type : "object",
                required : ["id_usuario", "nombre", "clave", "rol", "estado_auditoria", "fecha_creacion"],
                properties : {
                    id_usuario : {
                        type : "integer",
                        format : "int32",
                        example : "1",
                    },
                    nombre : {
                        type : "string",
                        example : "MarioAlameda",
                    },
                    clave : {
                        type : "string",
                        example : "alameda123",
                    },
                    rol : {
                        type : "string",
                        example : "PAC",
                        enum : ["PAC de paciente", "MED de médico", "ADM de administrador"],
                    },       
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },
                    fecha_creacion : {
                        type : "string",
                        format : "date",
                        example : "2024-07-10 12:30:28.129222",
                    },       
                    fecha_modificacion : {
                        type : "string",
                        format : "date",
                        example : null,
                    }
                },
            },
            UsuarioInsertar : {
                type : "object",
                properties : {
                    nombre : {
                        type : "string",
                        example : "MarioAlameda",
                    },
                    clave : {
                        type : "string",
                        example : "alameda123",
                    },
                    rol : {
                        type : "string",
                        example : "PAC",
                        enum : ["PAC de paciente", "MED de médico", "ADM de administrador"],
                    },       
                },
            },
            UsuarioModificar : {
                type : "object",
                properties : {
                    nombre : {
                        type : "string",
                        example : "MarioAlameda",
                    },
                    clave : {
                        type : "string",
                        example : "alameda123",
                    },
                    rol : {
                        type : "string",
                        example : "PAC",
                    },       
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },
                },
            },
            Sede : {
                type : "object",
                required : ["id_sede", "nombre", "departamento", "provincia", "distrito", "direccion", 
                    "estado_auditoria", "fecha_creacion"
                ],
                properties : {
                    id_sede : {
                        type : "integer",
                        format : "int32",
                        example : "2",
                    },
                    nombre : {
                        type : "string",
                        example : "Sede Este",
                    },
                    departamento : {
                        type : "string",
                        example : "Ucayali",
                    },
                    provincia : {
                        type : "string",
                        example : "Atalaya",
                    },
                    distrito : {
                        type : "string",
                        example : "Raimondi",
                    },
                    direccion : {
                        type : "string",
                        example : "Av. Antonio Raimondi 123",
                    },   
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },
                    fecha_creacion : {
                        type : "string",
                        format : "date",
                        example : "2024-07-10 12:30:28.129222",
                    },       
                    fecha_modificacion : {
                        type : "string",
                        format : "date",
                        example : null,
                    }           
                },
            },
            SedeInsertar : {
                type : "object",
                properties : {
                    nombre : {
                        type : "string",
                        example : "Sede Este",
                    },
                    departamento : {
                        type : "string",
                        example : "Ucayali",
                    },
                    provincia : {
                        type : "string",
                        example : "Atalaya",
                    },
                    distrito : {
                        type : "string",
                        example : "Raimondi",
                    },
                    direccion : {
                        type : "string",
                        example : "Av. Antonio Raimondi 123",
                    },        
                },
            },
            SedeModificar : {
                type : "object",
                properties : {
                    nombre : {
                        type : "string",
                        example : "Sede Este",
                    },
                    departamento : {
                        type : "string",
                        example : "Ucayali",
                    },
                    provincia : {
                        type : "string",
                        example : "Atalaya",
                    },
                    distrito : {
                        type : "string",
                        example : "Raimondi",
                    },
                    direccion : {
                        type : "string",
                        example : "Av. Antonio Raimondi 123",
                    },   
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },        
                },
            },
            Paciente : {
                type : "object",
                required : ["id_paciente", "id_usuario", "nombres", "apellido_paterno", "apellido_materno", "telefono", 
                    "direccion", "documento_identidad", "estado_auditoria", "fecha_creacion"
                ],
                properties : {
                    id_paciente : {
                        type : "integer",
                        format : "int32",
                        example : "3",
                    },
                    id_usuario : {
                        type : "integer",
                        format : "int32",
                        example : "8",
                    },
                    nombres : {
                        type : "string",
                        example : "Mario",
                    },
                    apellido_paterno : {
                        type : "string",
                        example : "Atalaya",
                    },
                    apellido_materno : {
                        type : "string",
                        example : "Raimondi",
                    },
                    correo : {
                        type : "string",
                        example : "MarioAtalaya@hotmail.com"
                    },
                    telefono : {
                        type : "string",
                        example : "123456789",
                    },
                    direccion : {
                        type : "string",
                        example : "Av. Antonio Raimondi 123",
                    },
                    documento_identidad : {
                        type : "string",
                        example : "72710789",
                    },
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },
                    fecha_creacion : {
                        type : "string",
                        format : "date",
                        example : "2024-07-10 12:30:28.129222",
                    },       
                    fecha_modificacion : {
                        type : "string",
                        format : "date",
                        example : null,
                    }        
                },
            },
            PacienteInsertar : {
                type : "object",
                properties : {
                    id_usuario : {
                        type : "integer",
                        format : "int32",
                        example : "8",
                    },
                    nombres : {
                        type : "string",
                        example : "Mario",
                    },
                    apellido_paterno : {
                        type : "string",
                        example : "Atalaya",
                    },
                    apellido_materno : {
                        type : "string",
                        example : "Raimondi",
                    },
                    correo : {
                        type : "string",
                        example : "MarioAtalaya@hotmail.com"
                    },
                    telefono : {
                        type : "string",
                        example : "123456789",
                    },
                    direccion : {
                        type : "string",
                        example : "Av. Antonio Raimondi 123",
                    },
                    documento_identidad : {
                        type : "string",
                        example : "72710789",
                    },  
                },
            },
            PacienteModificar : {
                type : "object",
                properties : {
                    id_usuario : {
                        type : "integer",
                        format : "int32",
                        example : "8",
                    },
                    nombres : {
                        type : "string",
                        example : "Mario",
                    },
                    apellido_paterno : {
                        type : "string",
                        example : "Atalaya",
                    },
                    apellido_materno : {
                        type : "string",
                        example : "Raimondi",
                    },
                    correo : {
                        type : "string",
                        example : "MarioAtalaya@hotmail.com"
                    },
                    telefono : {
                        type : "string",
                        example : "123456789",
                    },
                    direccion : {
                        type : "string",
                        example : "Av. Antonio Raimondi 123",
                    },
                    documento_identidad : {
                        type : "string",
                        example : "72710789",
                    },
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },   
                },
            },
            Medico : {
                type : "object",
                required : ["id_medico", "id_usuario", "nombres", "apellido_paterno", "apellido_materno", "correo", 
                    "telefono", "direccion", "documento_identidad", "estado_auditoria", "fecha_creacion"
                ],
                properties : {
                    id_medico : {
                        type : "integer",
                        format : "int32",
                        example : "3",
                    },
                    id_usuario : {
                        type : "integer",
                        format : "int32",
                        example : "8",
                    },
                    nombres : {
                        type : "string",
                        example : "Antonio Armando",
                    },
                    apellido_paterno : {
                        type : "string",
                        example : "Torres",
                    },
                    apellido_materno : {
                        type : "string",
                        example : "Ica",
                    },
                    correo : {
                        type : "string",
                        example : "antonioTorres@gmail.com",
                    },
                    telefono : {
                        type : "string",
                        example : "973324567",
                    },
                    direccion : {
                        type : "string",
                        example : "Av. Huancayo 768",
                    },
                    documento_identidad : {
                        type : "string",
                        example : "89127856",
                    },
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },
                    fecha_creacion : {
                        type : "string",
                        format : "date",
                        example : "2024-07-10 12:30:28.129222",
                    },       
                    fecha_modificacion : {
                        type : "string",
                        format : "date",
                        example : null,
                    }               
                },
            },
            MedicoInsertar : {
                type : "object",
                properties : {
                    id_usuario : {
                        type : "integer",
                        format : "int32",
                        example : "8",
                    },
                    nombres : {
                        type : "string",
                        example : "Antonio Armando",
                    },
                    apellido_paterno : {
                        type : "string",
                        example : "Torres",
                    },
                    apellido_materno : {
                        type : "string",
                        example : "Ica",
                    },
                    correo : {
                        type : "string",
                        example : "antonioTorres@gmail.com",
                    },
                    telefono : {
                        type : "string",
                        example : "973324567",
                    },
                    direccion : {
                        type : "string",
                        example : "Av. Huancayo 768",
                    },
                    documento_identidad : {
                        type : "string",
                        example : "89127856",
                    },       
                },
            },
            MedicoModificar : {
                type : "object",
                properties : {
                    id_usuario : {
                        type : "integer",
                        format : "int32",
                        example : "8",
                    },
                    nombres : {
                        type : "string",
                        example : "Antonio Armando",
                    },
                    apellido_paterno : {
                        type : "string",
                        example : "Torres",
                    },
                    apellido_materno : {
                        type : "string",
                        example : "Ica",
                    },
                    correo : {
                        type : "string",
                        example : "antonioTorres@gmail.com",
                    },
                    telefono : {
                        type : "string",
                        example : "973324567",
                    },
                    direccion : {
                        type : "string",
                        example : "Av. Huancayo 768",
                    },
                    documento_identidad : {
                        type : "string",
                        example : "89127856",
                    },
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },            
                },
            },
            Especialidad : {
                type : "object",
                required : ["id_especialidad", "especialidad", "estado_auditoria", "fecha_creacion"],
                properties : {
                    id_especialidad : {
                        type : "integer",
                        format : "int32",
                        example : "3",
                    },
                    especialidad : {
                        type : "string",
                        example : "Oftalmología",
                    },         
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },
                    fecha_creacion : {
                        type : "string",
                        format : "date",
                        example : "2024-07-10 12:30:28.129222",
                    },       
                    fecha_modificacion : {
                        type : "string",
                        format : "date",
                        example : null,
                    }   
                },
            },
            EspecialidadInsertar : {
                type : "object",
                properties : {
                    especialidad : {
                        type : "string",
                        example : "Oftalmología",
                    },         
                },
            },
            EspecialidadModificar : {
                type : "object",
                properties : {
                    especialidad : {
                        type : "string",
                        example : "Oftalmología",
                    },         
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },
                },
            },
            CitaMedica : {
                type : "object",
                required : ["id_cita", "id_paciente", "id_medico", "id_especialidad", "id_sede", "fecha", "hora",
                    "estado_auditoria", "fecha_creacion"
                ],
                properties : {
                    id_cita : {
                        type : "integer",
                        format : "int32",
                        example : "4",
                    },
                    id_paciente : {
                        type : "integer",
                        format : "int32",
                        example : "8",
                    },
                    id_medico : {
                        type : "integer",
                        format : "int32",
                        example : "3",
                    },
                    id_especialidad : {
                        type : "integer",
                        format : "int32",
                        example : "3",
                    },
                    id_sede : {
                        type : "integer",
                        format : "int32",
                        example : "1",
                    },
                    fecha : {
                        type : "string",
                        format : "yyyy-mm-dd",
                        example : "2024-07-09",
                    },
                    hora : {
                        type : "string",
                        format : "hh:mm:ss",
                        example : "19:15:00",
                    },    
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },
                    fecha_creacion : {
                        type : "string",
                        format : "date",
                        example : "2024-07-10 12:30:28.129222",
                    },       
                    fecha_modificacion : {
                        type : "string",
                        format : "date",
                        example : null,
                    }                           
                },
            },
            CitaMedicaInsertar : {
                type : "object",
                properties : {
                    id_paciente : {
                        type : "integer",
                        format : "int32",
                        example : "8",
                    },
                    id_medico : {
                        type : "integer",
                        format : "int32",
                        example : "3",
                    },
                    id_especialidad : {
                        type : "integer",
                        format : "int32",
                        example : "3",
                    },
                    id_sede : {
                        type : "integer",
                        format : "int32",
                        example : "1",
                    },
                    fecha : {
                        type : "string",
                        format : "yyyy-mm-dd",
                        example : "2024-07-09",
                    },
                    hora : {
                        type : "string",
                        format : "hh:mm:ss",
                        example : "19:15:00",
                    },                      
                },
            },
            CitaMedicaModificar : {
                type : "object",
                properties : {
                    id_paciente : {
                        type : "integer",
                        format : "int32",
                        example : "8",
                    },
                    id_medico : {
                        type : "integer",
                        format : "int32",
                        example : "3",
                    },
                    id_especialidad : {
                        type : "integer",
                        format : "int32",
                        example : "3",
                    },
                    id_sede : {
                        type : "integer",
                        format : "int32",
                        example : "1",
                    },
                    fecha : {
                        type : "string",
                        format : "yyyy-mm-dd",
                        example : "2024-07-09",
                    },
                    hora : {
                        type : "string",
                        format : "hh:mm:ss",
                        example : "19:15:00",
                    },    
                    estado_auditoria : {
                        type : "string",
                        example : "1",
                    },                      
                },
            },
        },
    },
};

const swaggerOptions : OAS3Options = {
    swaggerDefinition,
    apis : ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);