import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DemandeCongeService } from './demande-conge.service';

@Controller('demande-conge')
export class DemandeCongeController {
    constructor(private readonly demandeCongeService: DemandeCongeService) { }

    @Post()
    async create(@Body() createDemandeCongeDto: any) {
        return this.demandeCongeService.create(createDemandeCongeDto);
    }

    @Get()
    async findAll() {
        return this.demandeCongeService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.demandeCongeService.findOne(id);
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
