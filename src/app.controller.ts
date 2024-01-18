import {Body, Controller, forwardRef, Get, HttpStatus, Inject, Post, Req, Res, UseGuards} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {AppService} from "./app.service";
import {Model} from "./app.model";



@ApiTags('App')
@Controller('api')
export class AppController{
    constructor(
        @Inject(forwardRef(() => AppService)) private appService: AppService,
    ) {}

    @Post('install_new_version')
    async install_new_version(@Res() res, @Body() body: Model ) {
        try {
            const data = await this.appService.install_new_version(body.accessKey);
            await AppService.httpResponseHelper({res: res, data: {message: '', data: {data}}, message: ""});

        }catch (e){
            await AppService.errorHelper(res, e);
        }
    }



}
