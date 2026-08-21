import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../config/database';
import { allowedNodeEnvironmentFlags } from 'node:process';

export class User extends Model {
    public id!: number;
    public nome!: string;
    public email!: string;
    public senha_hash!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(150),
            unique: true,
            allowNull: false
        },
        senha_hash: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: true
    }
)