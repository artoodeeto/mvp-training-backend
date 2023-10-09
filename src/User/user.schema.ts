import { EntitySchema } from 'typeorm';

export class userDTO {
  id?: number;
  firstName: string;
  lastName: string;
  position: string;
  isActive: boolean;
}

export const SuccessIndicatorEntity = new EntitySchema<userDTO>({
  name: 'users',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: Number,
    },
    lastName: {
      type: Number,
    },
    position: {
      type: 'text',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
});
