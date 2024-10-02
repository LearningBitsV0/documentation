import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/document.dto';

@Controller('docs')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  getHello(): string {
    return this.documentsService.getHello();
  }

  @Post()
  createDocs(
    @Body(
      new ValidationPipe({
        transform: true, // Automatically transform request payloads to class instances
        whitelist: true, // Automatically strip properties that are not defined in the DTO
        forbidNonWhitelisted: true, // Throws an error if a non-whitelisted property is sent
      }),
    )
    createDocDto: CreateDocumentDto,
  ) {
    console.log(createDocDto);
  }
}
