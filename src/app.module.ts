import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksService } from './tasks/tasks.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [UsersModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}
