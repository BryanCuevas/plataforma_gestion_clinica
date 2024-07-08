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
                required : ["nombre", "clave", "rol"],
                properties : {
                    nombre : {
                        type : "string",
                        example : "Mario Alameda",
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
            Sede : {
                type : "object",
                required : ["nombre", "departamento", "provincia", "distrito", "direccion"],
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
            Paciente : {
                type : "object",
                required : ["id_usuario", "nombres", "apellido_paterno", "apellido_materno", "telefono", "direccion",
                    "documento_identidad"
                ],
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
                    }              
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