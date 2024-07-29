import { Controller, Get, Post, Body, Param, Put, Delete, HttpStatus, Res } from '@nestjs/common';
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
    async getRemainingDays(
        @Param('userId') userId: string,
        @Param('leaveType') leaveType: string,
        @Res() res,
    ) {
        try {
            const result = await this.soldeService.getDaysByType(userId, leaveType);
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
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
