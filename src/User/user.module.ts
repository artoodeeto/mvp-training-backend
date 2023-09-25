import { Module } from '@nestjs/common';
import { UsersController } from './user.controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {
  constructor() {}
}
