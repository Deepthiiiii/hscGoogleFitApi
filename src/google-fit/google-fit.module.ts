import { Module } from '@nestjs/common';
import { GoogleFitController } from './google-fit.controller';
import { GoogleService } from './google.service';

@Module({
  controllers: [GoogleFitController],
  providers: [GoogleService]
})
export class GoogleFitModule {}
