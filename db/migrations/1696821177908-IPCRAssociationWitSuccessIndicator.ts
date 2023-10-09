import { MigrationInterface, QueryRunner } from 'typeorm';

export class IPCRAssociationWitSuccessIndicator1696821177908
  implements MigrationInterface
{
  name = 'IPCRAssociationWitSuccessIndicator1696821177908';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE ipcr_successIndicators (
        ipcr int NOT NULL,
        success_indicator int NOT NULL,
        created_at DATETIME,
        INDEX IDX_a95b3b3085ac1270ccd55e67c7 (ipcr),
        INDEX IDX_a8e5ac87179d9ccc114376c90c (success_indicator),
        PRIMARY KEY (ipcr, success_indicator)
        ) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE success_indicators CHANGE ql_qn ql_qn int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` CHANGE \`timeliness\` \`timeliness\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` CHANGE \`average\` \`average\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` DROP COLUMN \`actual_accomplishment\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` ADD \`actual_accomplishment\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` CHANGE \`remarks\` \`remarks\` varchar(255) NOT NULL`,
    );
    // await queryRunner.query(
    //   `ALTER TABLE \`success_indicators\` CHANGE \`parent_id\` \`parent_id\` int NOT NULL`,
    // );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`isActive\` \`isActive\` tinyint NOT NULL DEFAULT 1`,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` DROP FOREIGN KEY \`FK_e3ff4cb10e1f6fc03551343bf28\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` CHANGE \`reviewed_by\` \`reviewed_by\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` ADD CONSTRAINT \`FK_e3ff4cb10e1f6fc03551343bf28\` FOREIGN KEY (\`reviewed_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr_successIndicators\` ADD CONSTRAINT \`FK_a95b3b3085ac1270ccd55e67c78\` FOREIGN KEY (\`ipcr\`) REFERENCES \`ipcr\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr_successIndicators\` ADD CONSTRAINT \`FK_a8e5ac87179d9ccc114376c90cb\` FOREIGN KEY (\`success_indicator\`) REFERENCES \`success_indicators\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`ipcr_successIndicators\` DROP FOREIGN KEY \`FK_a8e5ac87179d9ccc114376c90cb\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr_successIndicators\` DROP FOREIGN KEY \`FK_a95b3b3085ac1270ccd55e67c78\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` DROP FOREIGN KEY \`FK_e3ff4cb10e1f6fc03551343bf28\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` CHANGE \`reviewed_by\` \`reviewed_by\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`ipcr\` ADD CONSTRAINT \`FK_e3ff4cb10e1f6fc03551343bf28\` FOREIGN KEY (\`reviewed_by\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`isActive\` \`isActive\` tinyint(1) NULL DEFAULT '0'`,
    );
    // await queryRunner.query(
    //   `ALTER TABLE \`success_indicators\` CHANGE \`parent_id\` \`parent_id\` int NULL`,
    // );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` CHANGE \`remarks\` \`remarks\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` DROP COLUMN \`actual_accomplishment\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` ADD \`actual_accomplishment\` text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` CHANGE \`average\` \`average\` int NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` CHANGE \`timeliness\` \`timeliness\` int NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`success_indicators\` CHANGE \`ql_qn\` \`ql_qn\` int NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_a8e5ac87179d9ccc114376c90c\` ON \`ipcr_successIndicators\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_a95b3b3085ac1270ccd55e67c7\` ON \`ipcr_successIndicators\``,
    );
    await queryRunner.query(`DROP TABLE \`ipcr_successIndicators\``);
  }
}
