import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LocusService } from './locus.service';
import { LocusEntity } from './entities/locus.entity';
import { Repository } from 'typeorm';

describe('LocusService', () => {
  let service: LocusService;
  let repository: Repository<LocusEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocusService,
        {
          provide: getRepositoryToken(LocusEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<LocusService>(LocusService);
    repository = module.get<Repository<LocusEntity>>(
      getRepositoryToken(LocusEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getLocusData', () => {
    it('should return data with admin role', async () => {
      const user = { role: 'admin' };
      const query = {
        id: 1,
        assemblyId: 2,
        regionId: 3,
        membershipStatus: 'active',
      };

      repository.findAndCount = jest.fn().mockResolvedValue([
        [
          /* mock data */
        ],
        10,
      ]);

      const result = await service.getLocusData(query, user);

      expect(result.data).toBeDefined();
      expect(result.total).toBe(10);
    });
  });
});
