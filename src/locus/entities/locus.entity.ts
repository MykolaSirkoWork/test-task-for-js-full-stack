// src/locus/locus.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LocusMembersEntity } from './locus-members.entity';

@Entity({ name: 'rnc_locus' })
export class LocusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assembly_id: number;

  @Column()
  locus_name: string;

  @Column()
  public_locus_name: string;

  @Column()
  chromosome: string;

  @Column()
  strand: string;

  @Column()
  locus_start: number;

  @Column()
  locus_stop: number;

  @Column()
  member_count: number;

  @OneToMany(() => LocusMembersEntity, (locusMembers) => locusMembers.locus)
  locusMembers: LocusMembersEntity[];
}
