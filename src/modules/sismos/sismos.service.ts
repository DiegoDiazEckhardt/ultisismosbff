import { Injectable } from '@nestjs/common';
import { SismosApiDto } from './dto/sismos-api.dto';
import axios from 'axios';

@Injectable()
export class SismosService {
    async getSismosApi(): Promise<SismosApiDto[]>{
        try {
            const sismosapi = await axios.get<SismosApiDto[]>("https://api.gael.cloud/general/public/sismos");
            return sismosapi.data;
        }catch(ex){
            return [];  
        }

    }
}
