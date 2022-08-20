"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportType = exports.InteractionType = void 0;
var InteractionType;
(function (InteractionType) {
    InteractionType[InteractionType["SlashCommand"] = 0] = "SlashCommand";
    InteractionType[InteractionType["Button"] = 1] = "Button";
    InteractionType[InteractionType["Select"] = 2] = "Select";
    InteractionType[InteractionType["ContextMenu"] = 3] = "ContextMenu";
    InteractionType[InteractionType["Modal"] = 4] = "Modal";
    InteractionType[InteractionType["AutoComplete"] = 5] = "AutoComplete";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));
var ReportType;
(function (ReportType) {
    ReportType[ReportType["Webhook"] = 0] = "Webhook";
    ReportType[ReportType["Text"] = 1] = "Text";
})(ReportType = exports.ReportType || (exports.ReportType = {}));
