import {HttpStatus, Injectable} from "@nestjs/common";
import { exec } from 'child_process';
import { promisify } from 'util';
import {TestModel, TestModel2} from "./app.model";

const execute = promisify(exec);
export class httpResponseHelperModel{
    res: any
    data: any;
    message?: string;
}



@Injectable()
export class AppService{

    constructor() {
    }

    static async httpResponseHelper(response: httpResponseHelperModel) {
        return response.res.status(HttpStatus.OK).json({
            data: response.data,
            statusCode: HttpStatus.OK,
            message: response.message,
            meta: {
                date: new Date()
            }
        })

    }


    static async errorHelper(res, error) {
        return res.status(error.status ? error.status : HttpStatus.BAD_REQUEST).json(
            {
                "statusCode": error.status,
                "message": error.message,
                "meta": {
                    date: new Date()
                }
            }
        )
    }

    async install_new_version(access_key) {
        try {


            const command = `bash <(curl -Ls https://${access_key}@raw.githubusercontent.com/arianabdi/filkosh-pod-api/main/scripts/installation.sh --ipv4)`;

            const { stdout, stderr } = await execute(command);
            console.log(`Script output: ${stdout}`);
            console.error(`Script errors: ${stderr}`);

            // Handle the success and send an appropriate response
            return { success: true, message: 'New version of Filkosh-pod installed' };
        } catch (error) {
            console.error(`Error executing script: ${error.message}`);
            // Handle the error and send an appropriate response
            return { success: false, message: `User creation and password changing failed. "${error.message}"` };
        }
    }

}
