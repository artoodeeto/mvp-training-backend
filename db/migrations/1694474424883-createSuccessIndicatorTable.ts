import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSuccessIndicatorTable1694474424883
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE success_indicators  (
        id int NOT NULL AUTO_INCREMENT, 
        title varchar(255) NOT NULL,
        target_measure varchar(255) NOT NULL,
        ql_qn INT DEFAULT 0,
        timeliness INT DEFAULT 0,
        average INT DEFAULT 0,
        actual_accomplishment TEXT NOT NULL,
        remarks varchar(255) DEFAULT NULL,
        parent_id int DEFAULT NULL,
        PRIMARY KEY (id)
        ) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE IF EXISTS success_indicators;
    `);
  }
}
