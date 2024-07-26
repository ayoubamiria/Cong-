import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SoldeModule } from 'src/solde/solde.module';


@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ,SoldeModule,//injecter ici car on besoin des fonctions du solde lors de la creation
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule { }
