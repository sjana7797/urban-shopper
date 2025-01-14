import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class HealthService {
  constructor() {}

  getHealth() {
    return 'OK';
  }

  async getResourcesHealth() {
    try {
      const response = await fetch('http://localhost:8000/health', {
        method: 'GET',
      });

      if (response.ok) {
        return {
          message: 'Resources service is running',
          status: 'OK',
        };
      }

      throw new InternalServerErrorException('Resource is not running');
    } catch (error) {
      console.error(error);
      return {
        message: 'Resources service is not running',
        status: 'ERROR',
        error: error.message,
      };
    }
  }

  async getWebsiteHealth() {
    try {
      const response = await fetch('http://localhost:3000');

      if (response.ok) {
        return {
          message: 'Website service is running',
          status: 'OK',
        };
      }
      throw new InternalServerErrorException('Website is not running');
    } catch (error) {
      console.error(error);
      return {
        message: 'Website service is not running',
        status: 'ERROR',
        error: error.message,
      };
    }
  }
}
