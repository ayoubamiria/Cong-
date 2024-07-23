import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DemandeCongeService } from './demande-conge.service';

@Controller('demande-conge')
export class DemandeCongeController {
    constructor(private readonly demandeCongeService: DemandeCongeService) { }

    @Post('creeconge')
    async create(@Body() createDemandeCongeDto: any) {
        return this.demandeCongeService.creeConge(createDemandeCongeDto);
    }

    @Get()
    async findAll() {
        return this.demandeCongeService.findAll();
    }

    @Get('historique/:id')
    async findOne(@Param('id') id: string) {
        console.log("trouvé")
        return this.demandeCongeService.findOne(id);
    }
    ///////calandrier
    @Get('calandrier/:id')
    async findOneCal(@Param('id') id: string) {
        console.log("trouvé")
        return this.demandeCongeService.findOneApp(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDemandeCongeDto: any) {
        return this.demandeCongeService.update(id, updateDemandeCongeDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.demandeCongeService.remove(id);
    }
}
