import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Profile } from './profile.entity';
import { AcademicProfile } from './academic-profile.entity';


@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, uppercase: true })
  userName: string;

  @Prop({ required: true, unique: true, uppercase: true })
  email: string;

  @Prop({ required: true, uppercase: true })
  password: string;

  @Prop({ type: Profile, default: null })
  profile?: any;

  @Prop({ type: AcademicProfile, default: null })
  academicProfile?: any;
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
