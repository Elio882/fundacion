import {
  Controller,
  Post,
  Logger,
  ConflictException,
  Request,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  logger: Logger;
  constructor(private readonly usersService: UsersService) {
    this.logger = new Logger(UsersController.name);
  }

  @Post('create')
  async create(@Body() createUser:CreateUserDto): Promise<any> {
    const newUser = createUser;
    try {
      const query = { username: newUser.userName };
      const isUser = await this.usersService.findOne(query);
      if (isUser) throw new ConflictException('User Already Exist');
      const user = await this.usersService.create(newUser);
      return user;
    } catch (err) {
      this.logger.error('Something went wrong in signup:', err);
      throw err;
    }
  }

}
