import {ApiProperty} from "@nestjs/swagger";

export class Model{
    @ApiProperty({type: String, default: ''})
    accessKey: string

}
