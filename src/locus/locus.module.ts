import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocusEntity } from './entities/locus.entity';
import { LocusController } from './locus.controller';
import { LocusService } from './locus.service';
import { LocusMembersEntity } from './entities/locus-members.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocusEntity, LocusMembersEntity])],
  controllers: [LocusController],
  providers: [LocusService],
})
export class LocusModule {}
