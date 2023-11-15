import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [ConfigModule.forRoot(), DatabaseModule, BookModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}