import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocusEntity } from './entities/locus.entity';
import { QueryInterface } from './types/Query.interface';

@Injectable()
export class LocusService {
  constructor(
    @InjectRepository(LocusEntity)
    private readonly locusRepository: Repository<LocusEntity>,
  ) {}

  async getLocusData(query: QueryInterface, user: any): Promise<any> {
    const { page = 1, perPage = 1000 } = query;

    const skip = (page - 1) * perPage;

    let whereClause = {};
    let searchParameters = {};

    switch (user.role) {
      case 'admin':
        whereClause = {
          id: query.id,
          assembly_id: query.assemblyId,
          locusMembers: {
            region_id: query.regionId,
            membership_status: query.membershipStatus,
          },
        };

        searchParameters = {
          where: whereClause,
          relations: ['locusMembers'],
          skip,
          take: perPage,
          order: {
            id: 'ASC',
          },
        };

        break;

      case 'normal':
        whereClause = {
          id: query.id,
          assembly_id: query.assemblyId,
        };

        searchParameters = {
          where: whereClause,
          skip,
          take: perPage,
          order: {
            id: 'ASC',
          },
        };

        break;

      case 'limited':
        whereClause = {
          locusMembers: {
            region_id: query.regionId,
          },
        };

        searchParameters = {
          where: whereClause,
          relations: ['locusMembers'],
          skip,
          take: perPage,
          order: {
            id: 'ASC',
          },
        };
    }

    const [data, total] =
      await this.locusRepository.findAndCount(searchParameters);

    return {
      data,
      total,
      pages: Math.ceil(total / perPage),
      currentPage: page,
      perPage,
    };
  }
}
