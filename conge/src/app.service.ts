import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


@Injectable()
export class AppService {
  //verification de la connection a la base 
  constructor(@InjectConnection() private readonly connection: Connection) {
    this.connection.on('connected', () => {
      console.log('Mongoose connected successfully!');
    });
    this.connection.on('disconnected', () => {
      console.log('Mongoose disconnected!');
    });
    this.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });
  }
//methode hello world
  getHello(): string {
    return 'Hello World!';
  }
}
