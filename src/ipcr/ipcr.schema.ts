import { SuccessIndicator } from 'src/SuccessIndicator/successIndicator.entity';
import { User } from 'src/User/user.entity';
import { EntitySchema } from 'typeorm';

export class IPCRDTO {
  id?: number;
  major_final_output: string; // USER
  final_average_rating: number;
  OPCR_efficiency_rating: number;
  comments: string;
  date: Date;
  successIndicator_id: SuccessIndicator;
  ratee: User; // USER
  reviewed_by: User; // USER
  approved_by: User; // USER
  discussed_with: User; // USER
  assessed_by: User; // USER
  final_rating_by: User; // USER
}

export const SuccessIndicatorEntity = new EntitySchema<IPCRDTO>({
  name: 'ipcr',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    major_final_output: {
      type: Number,
    },
    final_average_rating: {
      type: Number,
    },
    OPCR_efficiency_rating: {
      type: Number,
    },
    comments: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  relations: {
    successIndicator_id: {
      type: 'many-to-many',
      target: 'success_indicators',
    },
    ratee: {
      type: 'one-to-many',
      target: 'users',
    },
    reviewed_by: {
      type: 'one-to-many',
      target: 'users',
    },
    approved_by: {
      type: 'one-to-many',
      target: 'users',
    },
    discussed_with: {
      type: 'one-to-many',
      target: 'users',
    },
    assessed_by: {
      type: 'one-to-many',
      target: 'users',
    },
    final_rating_by: {
      type: 'one-to-many',
      target: 'users',
    },
  },
});
