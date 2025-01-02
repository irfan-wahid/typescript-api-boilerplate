import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config/databases";

class Author extends Model {
  public id!: number;
  public name!: string;
}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }
  },
  {
    sequelize: sequelizeConnection,
    tableName: "authors",
    createdAt: false,
    updatedAt: false,
    deletedAt: false, 
  }
);

export default Author;