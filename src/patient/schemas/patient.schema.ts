import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type MedicalRecordPreviewDocument = MedicalRecordPreview & Document;

@Schema()
export class MedicalRecordPreview {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  principalPatient: string;

  @Prop()
  diagnosis: string;

  @Prop({ required: true })
  doctorsName: string;

  @Prop({ required: true })
  hospitalName: string;

  @Prop({ required: true })
  date: Date;
}

export const MedicalRecordPreviewSchema =
  SchemaFactory.createForClass(MedicalRecordPreview);

@Schema()
export class FamilyMember extends Document {
  @Prop({ required: true, unique: true, sparse: true })
  id: number;

  @Prop({ required: true })
  principalPatient: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  relationship: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  bloodGroup: string;

  @Prop({ required: true })
  genotype: string;

  @Prop({ type: [{ type: MedicalRecordPreviewSchema }] })
  medicalRecord: MedicalRecordPreviewDocument[];
}

export const FamilyMemberSchema = SchemaFactory.createForClass(FamilyMember);

export type PatientDocument = HydratedDocument<Patient>;
@Schema()
export class Patient {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop()
  appointmentCount: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  profilePicture: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true, unique: true })
  walletAddress: string;

  @Prop({ required: true })
  bloodGroup: string;

  @Prop({ required: true })
  genotype: string;

  @Prop({ type: [{ type: MedicalRecordPreviewSchema }] })
  medicalRecords: MedicalRecordPreviewDocument[];

  @Prop({ type: [FamilyMemberSchema] })
  familyMembers: FamilyMember[];

  @Prop({ default: 'patient', required: true })
  category: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
