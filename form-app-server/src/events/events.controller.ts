import { Controller, Post, Body, Get, Param, HttpException, NotFoundException } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';

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

  @Get(':id')
  async getOneEvent(@Param() { id }) {
    const event = await this.eventsService.getEvent(id);
    if (!event) {
      return new NotFoundException();
    }
    return event;
  }

}
