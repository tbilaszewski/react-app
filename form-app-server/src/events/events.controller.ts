import { Controller, Post, Body, Get } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { get } from 'http';

@Controller('events')
export class EventsController {

  constructor(private readonly eventsService: EventsService) { }
  
  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    await this.eventsService.createEvent(createEventDto);
  }
  @Get()
  async getAll() {
    return await this.eventsService.getEvents();
  }
}
