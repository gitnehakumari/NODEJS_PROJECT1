import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsService } from './reports/reports.service';
import { UserssService } from './userss/userss.service';
import { ReportsController } from './reports/reports.controller';
import { UserssController } from './userss/userss.controller';
import { UserssModule } from './userss/userss.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userss } from './userss/userss.entity';
import { Report } from './reports/report.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'db.sqlite',
    entities:[Userss,Report],
    synchronize:true
  }),UserssModule,ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
