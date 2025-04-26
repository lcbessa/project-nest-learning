import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produtos/entities/produto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Produto],
      // autoLoadEntities: true, // Para projetos pequenos
      synchronize: true, // Para desenvolvimento, não usar em produção( serve para sincronizar as mudanças no banco de dados)
      logging: true, // Para ver os logs do TypeORM
    }),
    ProdutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
