import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { SoldeModule } from './solde/solde.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DemandeCongeModule } from './demandeconge/demande-conge.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/users' ), // Remplacez par votre URI MongoDB (connection)
    UserModule,
    DemandeCongeModule,
    SoldeModule

  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
