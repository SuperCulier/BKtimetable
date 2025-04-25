import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TimetableService } from './timetable/timetable.service';
import { TimetableController } from './timetable/timetable.controller';
import { TimetableModule } from './timetable/timetable.module';

@Module({
  imports: [PrismaModule, TimetableModule], 
  controllers: [AppController, UserController, TimetableController],
  providers: [AppService, UserService, TimetableService],
})
export class AppModule {}

