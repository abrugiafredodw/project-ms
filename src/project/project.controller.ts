import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import {State} from "./enum/state.enum";
import {Project} from "./schema/project.schema";

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get('/avail')
  findAllAvail(): Promise<Project[]> {
    const options = {
      avail: true,
    };
    return this.projectService.findAll(options);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Project> {
    const options = {
      _id: id,
    };
    return this.projectService.findOne(options);
  }

  @Get('client/:id')
  findByClient(@Param('id') id: string): Promise<Project[]> {
    const options = {
      client: id,
    };
    return this.projectService.findAll(options);
  }

  @Get('state/:state')
  findByState(@Param('state') state: State): Promise<Project[]> {
    const options = {
      state: state,
    };
    return this.projectService.findAll(options);
  }

  @Get('client/:id/state/:state')
  findOneByState(
    @Param('id') id: string,
    @Param('state') state: State,
  ): Promise<Project[]> {
    const options = {
      client: id,
      state: state,
    };
    return this.projectService.findAll(options);
  }

  @Patch()
  update(@Body() updateProjectDto: UpdateProjectDto): Promise<Project> {
    return this.projectService.update(updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Project> {
    return this.projectService.remove(id);
  }
}
