import { PrismaClientModule } from '@be/prisma-client';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    PrismaClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
