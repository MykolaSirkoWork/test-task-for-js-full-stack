import { Controller, Get, Query } from '@nestjs/common';
import { LocusService } from './locus.service';
import { QueryInterface } from './types/Query.interface';
import { User } from '@app/user/decorators/user.decorator';
import { authUserDto } from '@app/user/dto/authUserPayload.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('locus')
@Controller('locus')
export class LocusController {
  constructor(private readonly locusService: LocusService) {}

  @Get()
  @ApiOperation({ summary: 'List all locuses' })
  @ApiResponse({ status: 200, description: 'Return the list of all locuses' })
  async getLocusData(
    @Query() query: QueryInterface,
    @User() user: authUserDto,
  ): Promise<any> {
    const locusData = await this.locusService.getLocusData(query, user);

    return locusData;
  }
}
