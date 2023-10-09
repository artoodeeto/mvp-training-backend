import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndividualPerformanceCommitmentReviewController } from './ipcr.controllers';
import { IndividualPerformanceCommitmentReview } from './ipcr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IndividualPerformanceCommitmentReview])],
  controllers: [IndividualPerformanceCommitmentReviewController],
  providers: [],
})
export class IndividualPerformanceCommitmentReviewModule {
  constructor() {}
}
