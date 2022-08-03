import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUserTable1659515115325 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true },
          { name: 'email', type: 'varchar', length: '300' },
          { name: 'password', type: 'varchar' },
          { name: 'first_name', type: 'varchar' },
          { name: 'last_name', type: 'varchar' },
          {
            name: 'created_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('user', true, true);
  }
}
