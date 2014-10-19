var downloadLocales = require('webmaker-download-locales');

// Which languages should we pull down?
// Don't include en-US because that's committed into git already
var supportedLanguages = ['id', 'en_CA', 'es_CL', 'fr', 'nl', 'es_MX', 'cs', 'sv', 'bn_BD'];

module.exports = function (callback) {
    downloadLocales({
        app: 'mobile-appmaker',
        dir: 'locale',
        languages: supportedLanguages
    }, callback);
};
