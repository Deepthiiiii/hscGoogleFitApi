import { Injectable } from '@nestjs/common';
import * as google from 'googleapis';
import { Request, Response } from 'express';

// 1075486730502-ffh4u6ref4368irvsaq3qao6psdfk8t5.apps.googleusercontent.com
// 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
@Injectable()
export class GoogleService {
    private oauthClient = new google.Auth.OAuth2Client(
        '1075486730502-ffh4u6ref4368irvsaq3qao6psdfk8t5.apps.googleusercontent.com',
        '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',
        //'http://localhost:8000/steps',
        'http://localhost:3000/account/steps'
    )

    getUrl(req: Request) {
        const scopes = [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/fitness.activity.read",
            "https://www.googleapis.com/auth/fitness.blood_glucose.read",
            "https://www.googleapis.com/auth/fitness.blood_pressure.read",
            "https://www.googleapis.com/auth/fitness.body.read",
            "https://www.googleapis.com/auth/fitness.body_temperature.read",
            "https://www.googleapis.com/auth/fitness.heart_rate.read",
            "https://www.googleapis.com/auth/fitness.location.read",
            "https://www.googleapis.com/auth/fitness.nutrition.read",
            "https://www.googleapis.com/auth/fitness.oxygen_saturation.read",
            "https://www.googleapis.com/auth/fitness.reproductive_health.read",
            "https://www.googleapis.com/auth/fitness.sleep.read",
            "openid"
        ];
        const url=this.oauthClient.generateAuthUrl({
            access_type: "offline",
            scope: scopes,
            state: JSON.stringify({
                callbackUrl: req.body.callbackUrl,
                userId: 'mohanramegowda7@gmail.com'
            })
        });
        return url;
    }

    async getTokens(code) {
        const tokens = await this.oauthClient.getToken(code);
        return tokens;
    }
}
