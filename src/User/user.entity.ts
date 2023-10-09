import { IndividualPerformanceCommitmentReview } from 'src/ipcr/ipcr.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  position: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => IndividualPerformanceCommitmentReview, (ipcr) => ipcr.ratee)
  ratee: IndividualPerformanceCommitmentReview[];

  @OneToMany(
    () => IndividualPerformanceCommitmentReview,
    (ipcr) => ipcr.reviewed_by,
  )
  reviewed_by: IndividualPerformanceCommitmentReview[];

  @OneToMany(
    () => IndividualPerformanceCommitmentReview,
    (ipcr) => ipcr.approved_by,
  )
  approved_by: IndividualPerformanceCommitmentReview[];

  @OneToMany(
    () => IndividualPerformanceCommitmentReview,
    (ipcr) => ipcr.discussed_with,
  )
  discussed_with: IndividualPerformanceCommitmentReview[];

  @OneToMany(
    () => IndividualPerformanceCommitmentReview,
    (ipcr) => ipcr.assessed_by,
  )
  assessed_by: IndividualPerformanceCommitmentReview[];

  @OneToMany(
    () => IndividualPerformanceCommitmentReview,
    (ipcr) => ipcr.final_rating_by,
  )
  final_rating_by: IndividualPerformanceCommitmentReview[];
}
