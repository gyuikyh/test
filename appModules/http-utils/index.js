const mimeTypes = require("./mime-types");
const staticFile = require("./static-file");
const parseBody = require("./parse-body");

module.exports = {
    parseBody,
    mimeTypes,
    staticFile,
};