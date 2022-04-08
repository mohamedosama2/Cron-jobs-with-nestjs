import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  constructor() {
    console.log('Initiated');
  }

  @Cron('45 * * * * *', {
    name: 'notification',
  })
  handleCron() {
    this.logger.debug('Called when the current second is 45');
    console.log('RUNNN Automatically');
  }

  @Cron(CronExpression.EVERY_2ND_HOUR_FROM_1AM_THROUGH_11PM)
  handleCronName() {
    this.logger.debug('Called EVERY 2ND HOUR FROM 1AM THROUGH 11PM');
  }
}
