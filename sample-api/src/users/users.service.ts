import { Injectable } from '@nestjs/common';
const uuidv4 = require('uuid/v4');

@Injectable()
export class UsersService {
    private name: string;
    private id: number;
    private email: string;
    private readonly users: [number, string, string] = [0, '',''];

    constructor() { }

    create(name: string, email: string): [number, string, string] {
        this.name = name;
        this.email = email;

        
        this.id = uuidv4();
        return this.users.push(this.id, this.name, this.email)[this.users.length - 1]
    }

}
