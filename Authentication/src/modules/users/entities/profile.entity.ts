
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Profile {
  @Prop()
  profilePicture?: string;

  @Prop({ required: true, uppercase: true })
  name: string;

  @Prop({ required: true, uppercase: true })
  ci: string;

  @Prop({ required: true, uppercase: true })
  lastName: string;

  @Prop({ required: true, uppercase: true })
  maternalLastName: string;

  @Prop({ required: true, uppercase: true })
  telephone: string;

  @Prop({ required: true, uppercase: true })
  dateOfBirth: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
