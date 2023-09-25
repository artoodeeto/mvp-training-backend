import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './User/user.module';
import { SuccessIndicatorModule } from './SuccessIndicator/successIndicator.module';
import { dataBaseConfig } from 'config/database';
import { DataSource } from 'typeorm';
// import { AppDataSource } from 'config/dataSource';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../.env', '../.development.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (): TypeOrmModuleOptions => dataBaseConfig,
      // dataSourceFactory: async () => await AppDataSource,
    }),
    UsersModule,
    SuccessIndicatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
