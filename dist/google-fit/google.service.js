"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleService = void 0;
const common_1 = require("@nestjs/common");
const google = require("googleapis");
let GoogleService = class GoogleService {
    constructor() {
        this.oauthClient = new google.Auth.OAuth2Client('1075486730502-ffh4u6ref4368irvsaq3qao6psdfk8t5.apps.googleusercontent.com', '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', 'http://localhost:3000/account/steps');
    }
    getUrl(req) {
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
        const url = this.oauthClient.generateAuthUrl({
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
};
GoogleService = __decorate([
    (0, common_1.Injectable)()
], GoogleService);
exports.GoogleService = GoogleService;
//# sourceMappingURL=google.service.js.map