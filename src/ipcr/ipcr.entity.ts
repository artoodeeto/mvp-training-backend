import { SuccessIndicator } from 'src/SuccessIndicator/successIndicator.entity';
import { User } from 'src/User/user.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity('ipcr')
export class IndividualPerformanceCommitmentReview extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  major_final_output: string;

  @Column()
  final_average_rating: number;

  @Column()
  OPCR_efficiency_rating: number;

  @Column()
  comments: string;

  @Column()
  date: Date;

  @ManyToMany(() => SuccessIndicator)
  @JoinTable({
    name: 'ipcr_successIndicators',
    joinColumn: {
      name: 'ipcr',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'success_indicator',
      referencedColumnName: 'id',
    },
  })
  successIndicator: SuccessIndicator[];

  @ManyToOne(() => User, (user) => user.ratee, {
    nullable: false,
  })
  @JoinColumn({ name: 'ratee' })
  ratee: User;

  @ManyToOne(() => User, (user) => user.reviewed_by)
  @JoinColumn({ name: 'reviewed_by' })
  reviewed_by: User;

  @ManyToOne(() => User, (user) => user.approved_by, {
    nullable: false,
  })
  @JoinColumn({ name: 'approved_by' })
  approved_by: User;

  @ManyToOne(() => User, (user) => user.discussed_with, {
    nullable: false,
  })
  @JoinColumn({ name: 'discussed_with' })
  discussed_with: User;

  @ManyToOne(() => User, (user) => user.assessed_by, {
    nullable: false,
  })
  @JoinColumn({ name: 'assessed_by' })
  assessed_by: User;

  @ManyToOne(() => User, (user) => user.final_rating_by, {
    nullable: false,
  })
  @JoinColumn({ name: 'final_rating_by' })
  final_rating_by: User;
}
