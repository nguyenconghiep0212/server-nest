import { Module } from '@nestjs/common';

import { MainModule } from './example/main.module';

@Module({
  imports: [MainModule],
})
export class AppModule {}
