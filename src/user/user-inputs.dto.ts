import { InputType, Field, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field()
  // @IsEmail()
  email: string;

  @Field()
  createdAt: string = new Date().toISOString();
}


@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['password'] as const),
) {}
