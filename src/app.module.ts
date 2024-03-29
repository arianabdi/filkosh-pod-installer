import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";

@Module({
    imports: [
        ConfigModule.forRoot(),
    ],

    controllers: [AppController],
    providers: [AppService],
    exports:[ConfigModule]
})
export class AppModule {
    constructor() {}
}
