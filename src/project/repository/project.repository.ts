import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Project, ProjectDocument} from "../schema/project.schema";
import {CreateProjectDto} from "../dto/create-project.dto";
import {UpdateProjectDto} from "../dto/update-project.dto";
import {Client, ClientDocument} from "../model/client";
import {Talent, TalentDocument} from "../model/talent";

@Injectable()
export class ProjectRepository {

    constructor(
        @InjectModel(Project.name) private readonly projectMD: Model<ProjectDocument>,
        @InjectModel(Client.name) private readonly clientMD: Model<ClientDocument>,
        @InjectModel(Talent.name) private readonly talentMD: Model<TalentDocument>,
    ) {}

    async save(createProject: CreateProjectDto): Promise<Project>
    {
        const project = new this.projectMD(createProject);
        return project.save();
    }

    async update(updateProject: UpdateProjectDto): Promise<Project>
    {
        const project = new this.projectMD(updateProject);
        return project.save();
    }

    async findAll(): Promise<Project[]> {
        return this.projectMD.find().populate({path:"client",model:this.clientMD}).populate({path:"talents",model:this.talentMD}).exec();
    }

    async findOne(options?: any): Promise<Project> {
        return this.projectMD.findOne(options).populate({path:"client",model:this.clientMD}).populate({path:"talents",model:this.talentMD}).exec();
    }


}
