import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { Model } from 'mongoose';
import { EventDocument } from './interfaces/event.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EventsService {
  constructor(@InjectModel('EventDocument') private readonly eventModel: Model<EventDocument>) { }

  createEvent(createEventDto: CreateEventDto): Promise<EventDocument> {
    const createdEvent = new this.eventModel(createEventDto);
    return createdEvent.save();
  }

  getEvents(): Promise<EventDocument[]> {
    return this.eventModel.find().exec();
  }

  getEvent(id: number): Promise<EventDocument> {
    return this.eventModel.findById(id).exec();
  }

}
