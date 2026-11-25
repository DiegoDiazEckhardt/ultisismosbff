import { Controller, Get } from '@nestjs/common';
import { SismosApiDto } from './dto/sismos-api.dto';
import { SismosService } from './sismos.service';
import { SismosMapper } from './mapper/sismos.mapper';
import { SismosClientDto } from './dto/sismos-client.dto';

@Controller('sismos')
export class SismosController {

    constructor(private readonly sismosService: SismosService){

    }

    @Get("/")
    async getSismos(): Promise<SismosClientDto[]>{
        const sismosApi = await this.sismosService.getSismosApi();
        const mapper = new SismosMapper();
        const sismos = sismosApi.map((sa, index)=>mapper.toSismo(sa, index));

        return sismos;
    }
}
