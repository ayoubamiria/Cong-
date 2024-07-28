import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SoldeService } from './solde.service';

@Controller('solde')
export class SoldeController {
    constructor(private readonly soldeService: SoldeService) { }

    @Post()
    async create(@Body() createSoldeDto: any) {
        return this.soldeService.create(createSoldeDto);
    }
    

    @Get()
    async findAll() {
        return this.soldeService.findAll();
    }

    /////////
    @Get(':userId/:leaveType')
    async getDaysByType(@Param('userId') userId: string, @Param('leaveType') leaveType: string): Promise<number> {
        console.log(`Received request for userId: ${userId} and leaveType: ${leaveType}`);
        return this.soldeService.getDaysByType(userId, leaveType);
    }   
    @Get(':userId')
    async getSoldeByUserId(@Param('userId') userId: string) {
        const solde = await this.soldeService.findOneByUser(userId);
        return solde;
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateSoldeDto: any) {
        return this.soldeService.update(id, updateSoldeDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.soldeService.remove(id);
    }
    // Déclaration d'une route GET pour obtenir les jours de congé par type pour un utilisateur
   /* @Get(':id')
    async getDaysByType(@Param('id') userId: string) {
        // Appel du service pour obtenir les jours de congé et retour des résultats
        return this.soldeService.getDaysByType(userId);
    }*/
}
