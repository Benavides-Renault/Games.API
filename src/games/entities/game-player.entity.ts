import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/entities/user.entity";
import { Game } from "./game.entity";


@Table
export class GamePlayer extends Model{

  @ForeignKey(() => Game)
  @Column({
    type: DataType.INTEGER,
  })
  gameId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

}