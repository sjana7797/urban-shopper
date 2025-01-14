import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getHealth() {
    return this.healthService.getHealth();
  }

  @Get('resources')
  async getResourcesHealth() {
    return await this.healthService.getResourcesHealth();
  }

  @Get('website')
  async getWebsiteHealth() {
    return await this.healthService.getWebsiteHealth();
  }
}
