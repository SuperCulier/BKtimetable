import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';  // Import PrismaClient

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  constructor() {
    super();  // Kế thừa PrismaClient
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

