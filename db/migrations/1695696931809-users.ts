import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1695696931809 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE users  (
          id int NOT NULL AUTO_INCREMENT, 
          firstName varchar(255) NOT NULL,
          lastName varchar(255) NOT NULL,
          position varchar(255) NOT NULL,
          isActive BOOLEAN DEFAULT false,
          PRIMARY KEY (id)
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE IF EXISTS users;
    `);
  }
}
