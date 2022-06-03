import {BadRequestException} from "@nestjs/common";

export class ProjectException extends BadRequestException{
    constructor(private mensaje: string) {
        super(mensaje);
    }
}