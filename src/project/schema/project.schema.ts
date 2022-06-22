import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Client } from '../model/client';
import { Talent } from '../model/talent';
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
    type: MongooseSchema.Types.ObjectId,
  })
  client: Client;

  @Prop({
    type: [
      {
        ref: 'talents',
        type: MongooseSchema.Types.ObjectId,
      },
    ],
  })
  talents: Talent[];

  @Prop({
    required: true,
    enum: State,
  })
  state: State;

  @Prop({
    required: true,
  })
  avail: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
