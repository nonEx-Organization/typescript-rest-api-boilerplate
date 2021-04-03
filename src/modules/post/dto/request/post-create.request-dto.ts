import {
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';


export default class PostCreateRequestDTO {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  text: string;
}
