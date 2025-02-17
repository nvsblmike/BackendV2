import { Module } from '@nestjs/common';
import { HospitalService } from './services/hospital.service';
import { HospitalController } from './controllers/hospital.controller';
import { HospitalSchema, Hospital } from './schema/hospital.schema';
import { HospitalDao } from './dao/hospital.dao';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Hospital.name, schema: HospitalSchema },
    ]),
  ],
  providers: [HospitalService, HospitalDao],
  controllers: [HospitalController],
  exports: [HospitalService, HospitalDao],
})
export class HospitalModule {}
