import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, response, Response} from 'express';
import * as request from 'request';
import * as urlParse from 'url-parse';
import * as queryParse from 'query-string';
import { GoogleService } from './google.service';


@Controller('account')
export class GoogleFitController {
    constructor(private readonly googleService: GoogleService)  {}
    
    @Get('googlefit-url')
    getGoogleFitUrl(@Req() req: Request, @Res() res: Response) {
        const url = this.googleService.getUrl(req);
        request(url, (err, response, body)=>{
            console.error(err);
            res.send({url});
        })
    }

    @Post('tokens')
    getTokens(@Req() req:Request, @Res() res:Response) {
        if(req) {
            const code= req.body.code;
            this.googleService.getTokens(code)
            .then(result => {
                res.send({result});
            })
        }
    }

    @Get('steps')
    getSteps(@Req() req:Request, @Res() res:Response) {
        const queryUrl = new urlParse(req.url);
        const code = queryParse.parse(queryUrl.query).code;
        res.send({code});
    }
}
