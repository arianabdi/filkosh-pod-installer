import {HttpStatus, Injectable} from "@nestjs/common";
import {exec} from 'child_process';
import {promisify} from 'util';

const execute = promisify(exec);

export class httpResponseHelperModel {
    res: any
    data: any;
    message?: string;
}


@Injectable()
export class AppService {

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
            // const access_key = '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';

            const command = `./scripts/update-filkosh-pod.sh  ${access_key}`;
            const { stdout, stderr } = await execute(command);

            // Handle the success and send an appropriate response
            return {success: true, message: 'New version of Filkosh-pod installed'};
        } catch (error) {
            console.error(`Error executing script: ${error.message}`);
            // Handle the error and send an appropriate response
            return {success: false, message: `Updating pod caused error. "${error.message}"`};
        }
    }

    async check_installer_is_installed() {
        return {status: 'installed'}
    }
}
