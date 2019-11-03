import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {

    }

    @Post()
    create(@Body() name: string, @Body() email: string): [number, string, string] {
        return this.userService.create(name, email)
    }    
}
