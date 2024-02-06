// src/locus/locus-members.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { LocusEntity } from './locus.entity';

@Entity({ name: 'rnc_locus_members' })
export class LocusMembersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  locus_id: number;

  @Column()
  membership_status: string;

  @Column()
  region_id: number;

  @Column()
  urs_taxid: string;

  @ManyToOne(() => LocusEntity, (locus) => locus.locusMembers)
  @JoinColumn({ name: 'locus_id' })
  locus: LocusEntity;
}
