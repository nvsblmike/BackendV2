import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class ApprovalList {
  @Prop({ required: true })
  patientId: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  recordId: number;

  @Prop()
  profilePicture?: string;

  @Prop({ required: true })
  patientAddress: string;

  @Prop({ required: true })
  doctorAddress: string;

  @Prop({ required: true })
  approvalType: string;

  @Prop({ required: true })
  recordOwner: string;
}

export const ApprovalListSchema = SchemaFactory.createForClass(ApprovalList);

@Schema()
export class Medicine {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  description: string;

  @Prop()
  sideEffects?: string;

  @Prop()
  image?: string;

  @Prop({ required: true })
  medicineGroup: string;
}

export const MedicineSchema = SchemaFactory.createForClass(Medicine);

@Schema()
export class Inventory {
  @Prop()
  numberOfMedicine?: number;

  @Prop()
  numberOfMedicineGroup?: number;

  @Prop()
  numberOfMedicineSold?: number;

  @Prop([MedicineSchema])
  medicines: Medicine[];
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);

export type PharmacistDocument = HydratedDocument<Pharmacist>;
@Schema()
export class Pharmacist {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop([Number])
  hospitalIds: number[];

  @Prop({ required: true, default: 0 })
  numberOfApprovals: number;

  @Prop({ required: true })
  name: string;

  @Prop()
  email?: string;

  @Prop({ required: true })
  profilePicture: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true, unique: true })
  walletAddress: string;

  @Prop({ required: true, unique: true })
  regNo: string;

  @Prop({ required: true })
  status: string;

  @Prop({ InventorySchema })
  inventory: Inventory;

  @Prop([ApprovalListSchema])
  approvalList: ApprovalList[];

  @Prop({ default: 'pharmacist', required: true })
  category: string;
}

export const PharmacistSchema = SchemaFactory.createForClass(Pharmacist);
