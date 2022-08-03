import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MySQLModule } from './databases/mysql.module';

@Module({
  imports: [MySQLModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
