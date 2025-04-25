import { Controller, Get } from '@nestjs/common';

@Controller('timetable')
export class TimetableController {
  @Get()
  getTimetable() {
    return { message: 'Here is the timetable data' };
  }
}
