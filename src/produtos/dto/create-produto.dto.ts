import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString({ message: 'O nome deve ser um texto.' })
  nome: string;

  @IsNotEmpty({ message: 'O preço é obrigatório.' })
  @IsNumber({}, { message: 'O preço deve ser um número.' })
  preco: number;

  @IsString({ message: 'A descrição deve ser um texto.' })
  descricao: string;
}
