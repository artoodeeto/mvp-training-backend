import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('success_indicators')
export class SuccessIndicator extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  target_measure: string;

  @Column()
  ql_qn: number;

  @Column()
  timeliness: number;

  @Column()
  average: number;

  @Column()
  actual_accomplishment: string;

  @Column()
  remarks: string;

  @Column()
  parent_id?: number;
}
