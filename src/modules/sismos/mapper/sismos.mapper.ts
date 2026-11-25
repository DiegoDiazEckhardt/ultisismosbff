import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/es';
import { SismosApiDto } from '../dto/sismos-api.dto';
import { SismosClientDto } from '../dto/sismos-client.dto';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('es');

export class SismosMapper {
  public toSismo = (sismoApi: SismosApiDto, index?: number): SismosClientDto => {
    const sismo = new SismosClientDto();

    const magnitudNum = parseFloat(sismoApi?.Magnitud) || 0;
    const profundidadNum = parseFloat(sismoApi?.Profundidad) || 0;

    const fechaChile = dayjs.tz(sismoApi?.Fecha, 'America/Santiago');
    const esValida = fechaChile.isValid();

    sismo.id = typeof index === 'number' ? index + 1 : 1;
    sismo.epicentro = sismoApi?.RefGeografica?.trim() || 'Epicentro no informado';
    sismo.magnitud = magnitudNum;
    sismo.profundidadKm = profundidadNum;
    sismo.tiempoTranscurrido = esValida ? fechaChile.fromNow() : 'Reciente';

    if (magnitudNum < 4.0) {
      sismo.severidad = 'Leve';
      sismo.colorChip = 'success';
      sismo.ratingEstrellas = magnitudNum < 3.0 ? 1 : 2;
    } else if (magnitudNum <= 5.5) {
      sismo.severidad = 'Moderado';
      sismo.colorChip = 'warning';
      sismo.ratingEstrellas = magnitudNum < 4.8 ? 3 : 4;
    } else {
      sismo.severidad = 'Fuerte';
      sismo.colorChip = 'error';
      sismo.ratingEstrellas = 5;
    }

    return sismo;
  };
}