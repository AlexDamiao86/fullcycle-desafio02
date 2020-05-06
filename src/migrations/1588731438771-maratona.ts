import {MigrationInterface, QueryRunner, Table} from "typeorm";

// eslint-disable-next-line @typescript-eslint/class-name-casing
export default class maratona1588731438771 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'maratona', 
            columns: [
                {
                    name: 'id', 
                    type: 'varchar', 
                    isPrimary: true
                }, 
                {
                    name: 'aula', 
                    type: 'varchar', 
                    isNullable: false,
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('maratona')
    }

}
