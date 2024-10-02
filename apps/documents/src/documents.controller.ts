import { Body, Controller, Get, Post } from '@nestjs/common';
import { DocumentsService } from './documents.service';

@Controller('docs')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  getHello(): string {
    return this.documentsService.getHello();
  }

  
}
