"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleFitController = void 0;
const common_1 = require("@nestjs/common");
const request = require("request");
const urlParse = require("url-parse");
const queryParse = require("query-string");
const google_service_1 = require("./google.service");
let GoogleFitController = class GoogleFitController {
    constructor(googleService) {
        this.googleService = googleService;
    }
    getGoogleFitUrl(req, res) {
        const url = this.googleService.getUrl(req);
        request(url, (err, response, body) => {
            console.error(err);
            res.send({ url });
        });
    }
    getTokens(req, res) {
        if (req) {
            const code = req.body.code;
            this.googleService.getTokens(code)
                .then(result => {
                res.send({ result });
            });
        }
    }
    getSteps(req, res) {
        const queryUrl = new urlParse(req.url);
        const code = queryParse.parse(queryUrl.query).code;
        res.send({ code });
    }
};
__decorate([
    (0, common_1.Get)('googlefit-url'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GoogleFitController.prototype, "getGoogleFitUrl", null);
__decorate([
    (0, common_1.Post)('tokens'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GoogleFitController.prototype, "getTokens", null);
__decorate([
    (0, common_1.Get)('steps'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GoogleFitController.prototype, "getSteps", null);
GoogleFitController = __decorate([
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [google_service_1.GoogleService])
], GoogleFitController);
exports.GoogleFitController = GoogleFitController;
//# sourceMappingURL=google-fit.controller.js.map