import { Module } from '@nestjs/common';
import { TimetableController } from './timetable.controller';
import { TimetableService } from './timetable.service';

@Module({
  imports: [],
  controllers: [TimetableController],
  providers: [TimetableService],
})
export class TimetableModule {}
