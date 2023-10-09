import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIPCR1696117898099 implements MigrationInterface {
  name = 'CreateIPCR1696117898099';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE ipcr (id int NOT NULL AUTO_INCREMENT, 
      major_final_output varchar(255) NOT NULL,
      final_average_rating int NOT NULL,
      OPCR_efficiency_rating int NOT NULL,
      comments varchar(255) NOT NULL, 
      date datetime NOT NULL, 
      ratee int NOT NULL,
      reviewed_by int NOT NULL,
      approved_by int NOT NULL, 
      discussed_with int NOT NULL,
      assessed_by int NOT NULL,
      final_rating_by int NOT NULL, 
      PRIMARY KEY (id)) ENGINE=InnoDB`,
    );

    await queryRunner.query(
      `ALTER TABLE \`ipcr\` ADD CONSTRAINT \`FK_e50678bcf657eb6c1dbba731340\` FOREIGN KEY (\`ratee\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` ADD CONSTRAINT \`FK_e3ff4cb10e1f6fc03551343bf28\` FOREIGN KEY (\`reviewed_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` ADD CONSTRAINT \`FK_8a2bf42dbfd8bd329b03d63fa94\` FOREIGN KEY (\`approved_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` ADD CONSTRAINT \`FK_74f3932a4aa963431ddd16bc18b\` FOREIGN KEY (\`discussed_with\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` ADD CONSTRAINT \`FK_95ca482b46b8385dd07fcfa9a34\` FOREIGN KEY (\`assessed_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` ADD CONSTRAINT \`FK_67619d1fb90ba30f125c174c9c6\` FOREIGN KEY (\`final_rating_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` DROP FOREIGN KEY \`FK_67619d1fb90ba30f125c174c9c6\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` DROP FOREIGN KEY \`FK_95ca482b46b8385dd07fcfa9a34\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` DROP FOREIGN KEY \`FK_74f3932a4aa963431ddd16bc18b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` DROP FOREIGN KEY \`FK_8a2bf42dbfd8bd329b03d63fa94\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` DROP FOREIGN KEY \`FK_e3ff4cb10e1f6fc03551343bf28\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` DROP FOREIGN KEY \`FK_e50678bcf657eb6c1dbba731340\``,
    );

    await queryRunner.query(`DROP TABLE \`ipcr\``);
  }
}
