import {Injectable} from '@nestjs/common';
import {CreateProjectDto} from './dto/create-project.dto';
import {UpdateProjectDto} from './dto/update-project.dto';
import {ProjectRepository} from "./repository/project.repository";
import {ProjectException} from "./exception/project.exception";
import {Project} from "./schema/project.schema";
import {State} from "./enum/state.enum";

@Injectable()
export class ProjectService {

    constructor(private readonly projectRP: ProjectRepository) {
    }

    async create(createProjectDto: CreateProjectDto): Promise<Project> {
        return this.projectRP.save(createProjectDto);
    }

    async findAll(): Promise<Project[]> {
        return this.projectRP.findAll();
    }

    async findOne(options: any): Promise<Project> {
        const project = await this.projectRP.findOne(options);
        if (project == null) {
            throw new ProjectException("El projecto que intenta buscar no se encuentra")
        }

        return project;
    }

    update(updateProjectDto: UpdateProjectDto): Promise<Project> {
        return this.projectRP.update(updateProjectDto);
    }

    async remove(id: number) {
        const options = {
            _id: id
        }
        const project = await this.projectRP.findOne(options);
        if (project == null) {
            throw new ProjectException("El projecto que intenta eliminar no se encuentra");
        }
        const updateProject: UpdateProjectDto = {
            _id: project._id,
            name: project.name,
            client: project.client,
            talents: project.talents,
            duration: project.duration,
            state: State.SUSPEND
        }


        return  this.projectRP.update(updateProject);
    }
}
