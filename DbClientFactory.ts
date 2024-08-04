import { RunningShoeStore, Prisma, PrismaClient } from "@prisma/client";
import { BaseDbClient } from "./BaseDbClient";

export class FileMetaService extends BaseDbClient<RunningShoeStore, Prisma.RunningShoeStoreCreateInput, Prisma.RunningShoeStoreUpdateInput> {
    constructor(prisma: PrismaClient) {
        super(prisma, 'runningShoeStore')
    }
}
