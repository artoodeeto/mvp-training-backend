import { Module } from '@nestjs/common';
import { SuccessIndicatorController } from './successIndicator.controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuccessIndicator } from './successIndicator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SuccessIndicator])],
  controllers: [SuccessIndicatorController],
  providers: [],
})
export class SuccessIndicatorModule {
  constructor() {}
}
