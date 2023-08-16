import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

}

export class UpdateUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  data: {
    name: string;
    email: string;
  }

}

export class ListUserDto {
  @ApiProperty(
    {
      default: 20
    }
  )
  limit: number;

  @ApiProperty(
    {
      default: 0
    }
  )
  offset: number;

}


export class DeleteUserDto {
  @ApiProperty()
  id: number
}