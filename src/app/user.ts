import { Address } from './address';
export class User {
    activo: boolean;
    apellido: string;
    direccion: Address;
    fechaNacimiento: Date;
    id: number;
    nombre: string;
    rut: string;
    telefono: number;

    constructor(userResponse?: any) {
        this.activo = userResponse.activo;
        this.apellido = userResponse.apellido;
        this.direccion = userResponse.direccion;
        this.fechaNacimiento = userResponse.fechaNacimiento;
        this.id = userResponse.id;
        this.nombre = userResponse.nombre;
        this.rut = userResponse.rut;
        this.telefono = userResponse.telefono;
    }
}
