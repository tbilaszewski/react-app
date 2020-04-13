import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './logger.middleware';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/database'),
    EventsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(EventsModule);
  }
}