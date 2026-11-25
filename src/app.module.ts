import { Module } from '@nestjs/common';
import { SismosModule } from './modules/sismos/sismos.module';

@Module({
  imports: [SismosModule],
})
export class AppModule {}
