import { IsEmail, IsString, MinLength } from "class-validator";


export class CreateUserDto {

  @IsString()
  @MinLength(3)
  fullName: string;

  @IsEmail()  
  email: string;
}
