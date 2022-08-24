import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      playground: true,
    }),
    BookModule,
    AuthorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
