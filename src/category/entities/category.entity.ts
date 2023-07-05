import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('gql_category')
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  @Field({ nullable: false })
  name: string;
}
