import { EntitySchema } from 'typeorm';

export class SuccessIndicatorDTO {
  id?: number;
  title: string;
  target_measure: string;
  actual_accomplishment: string;
  ql_qn: number;
  timeliness: number;
  average: number;
  remarks: string;
  parent_id?: number;
}

export const SuccessIndicatorEntity = new EntitySchema<SuccessIndicatorDTO>({
  name: 'success_indicators',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    title: {
      type: String,
    },
    target_measure: {
      type: String,
    },
    ql_qn: {
      type: Number,
    },
    timeliness: {
      type: Number,
    },
    average: {
      type: Number,
    },
    actual_accomplishment: {
      type: 'text',
    },
    remarks: {
      type: String,
    },
    parent_id: {
      type: Number,
      nullable: true,
      default: null,
    },
  },
});
