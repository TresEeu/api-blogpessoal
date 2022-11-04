import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaController } from "./controllers/tema.controller";
import { TemaService } from "./entities/services/tema.service";
import { Tema } from "./entities/tema.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule]
})
export class TemaModule {}