import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type ClientDocument = Client & Document;

@Schema()
export class Client{

  _id:string;

  @Prop({
    required:true
  })
  name:string;

  @Prop({
    required:true,
    unique:true
  })
  mail:string;

  @Prop({
    required:true
  })
  avail:boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
