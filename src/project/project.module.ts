import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectRepository } from './repository/project.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './schema/project.schema';
import {Client, ClientSchema} from "./model/client";
import {Talent, TalentSchema} from "./model/talent";

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name: Project.name,
        useFactory: () => {
          const schema = ProjectSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
      {
        name: Client.name,
        useFactory: () => {
          const schema = ClientSchema;
          return schema;
        },
      },
      {
        name: Talent.name,
        useFactory: () => {
          const schema = TalentSchema;
          return schema;
        },
      },
    ]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectRepository],
})
export class ProjectModule {}
