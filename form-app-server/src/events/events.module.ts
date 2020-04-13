import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventDocumentSchema } from "./schemas/event.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'EventDocument', schema: EventDocumentSchema }])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
