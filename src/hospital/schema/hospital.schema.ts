import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { PreviewType } from '../interface/hospital.interface';

export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
  @Prop({ required: true, unique: true, sparse: true })
  walletAddress: string;

  @Prop()
  profilePicture: string;

  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  regNo: string;

  @Prop()
  status: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);

export type PharmacistDocument = Pharmacist & Document;

@Schema()
export class Pharmacist {
  @Prop({ required: true, unique: true })
  walletAddress: string;

  @Prop()
  profilePicture: string;

  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  regNo: string;

  @Prop()
  status: string;
}

export const PharmacistSchema = SchemaFactory.createForClass(Pharmacist);

export type HospitalDocument = HydratedDocument<Hospital>;

@Schema()
export class Hospital {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  admin: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phoneNo: string;

  @Prop({ required: true, unique: true })
  regNo: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  profilePicture: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [{ type: DoctorSchema }] })
  doctors: PreviewType[];

  @Prop({ type: [{ type: PharmacistSchema }] })
  pharmacists: PreviewType[];

  @Prop({ required: true, default: 'pending' })
  status: string;

  @Prop({ required: true, default: 'hospital' })
  category: string;
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
