import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TalentDocument = Talent & Document;

@Schema()
export class Talent {
  _id: string;
  @Prop({
    required: true,
  })
  name: string;
  @Prop({
    required: true,
  })
  surname: string;

  @Prop({
    required: true,
  })
  mail: string;

  @Prop({
    required: true,
  })
  photo: string;

  @Prop({
    required: true,
  })
  rol: string;

  avail: boolean;
}

export const TalentSchema = SchemaFactory.createForClass(Talent);
