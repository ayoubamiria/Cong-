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

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.soldeService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateSoldeDto: any) {
        return this.soldeService.update(id, updateSoldeDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.soldeService.remove(id);
    }
}
