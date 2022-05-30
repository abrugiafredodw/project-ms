import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Client } from '../model/client';
import { Talent } from '../model/Talent';
import { State } from '../enum/state.enum';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  _id: string;

  @Prop({
    require: true,
  })
  name: string;
  @Prop({
    require: true,
  })
  duration: number;

  @Prop({
    ref: 'clients',
    type: Types.ObjectId,
  })
  client: Client;

  @Prop({
    type: [
      {
        ref: 'talents',
        type: Types.ObjectId,
      },
    ],
  })
  talents: Talent[];

  @Prop({
    required: true,
    enum: State,
  })
  state: State;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
