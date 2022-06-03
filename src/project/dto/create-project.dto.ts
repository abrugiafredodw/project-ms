import {Client} from "../model/client";
import {Talent} from "../model/talent";
import {State} from "../enum/state.enum";

export class CreateProjectDto {
    name: string;
    duration: number;
    client: Client;
    talents: Talent[];
    state:State;
}
