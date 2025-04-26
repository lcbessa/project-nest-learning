import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const produto = await this.produtosService.findOne(id);
    if (!produto) {
      throw new NotFoundException('Produto não encontrado!');
    }
    return produto;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ) {
    const produto = await this.produtosService.update(id, updateProdutoDto);
    if (!produto) {
      throw new NotFoundException('Produto não encontrado!');
    }
    return produto;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const produto = await this.produtosService.remove(id);
    if (!produto) {
      throw new NotFoundException('Produto não encontrado!');
    }
  }
}
