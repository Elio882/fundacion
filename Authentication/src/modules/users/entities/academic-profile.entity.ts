import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Profile } from './profile.entity';

@Schema()
export class AcademicProfile extends Profile {
  @Prop({ type: [String], required: false, uppercase: true })
  career?: string[];

  @Prop({ type: [Number], required: false, uppercase: true })
  semester?: number[];
}

export const AcademicProfileSchema =
  SchemaFactory.createForClass(AcademicProfile);
