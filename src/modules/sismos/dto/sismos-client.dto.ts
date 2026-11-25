export class SismosClientDto {
  id: number;                 
  epicentro: string;         
  tiempoTranscurrido: string; 
  magnitud: number;           
  ratingEstrellas: number;    
  severidad: 'Leve' | 'Moderado' | 'Fuerte'; 
  colorChip: 'success' | 'warning' | 'error'; 
  profundidadKm: number;     
}