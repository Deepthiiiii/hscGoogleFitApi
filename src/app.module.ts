import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleFitModule } from './google-fit/google-fit.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [GoogleFitModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
