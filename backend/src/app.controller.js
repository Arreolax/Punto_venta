import { Controller, Dependencies, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get('saludo')
 saludo() {
    return {
      mensaje: 'Hola desde el backend juasjausjasu',
    }
  }
}
