/**
 * Assists in working with web resources, particularly those within the current plugin.
 *
 * @public
 */

var host = require('speakeasy/host');
var stateKeyExp = /.*-(\d+)/;

/**
 * Gets the relative image URL for the given path, including context path.  Assumes the web resource key will be
 * 'images' and be within the requesting plugin.  Parameters:
 * <ul>
 *     <li><code>modules</code> - The 'modules' variable available to every module</li>
 *     <li><code>imagePath</code> - The path to the image relative to the "images" directory without the leading slash.</li>
 * </ul>
 */
exports.getImageUrl = function(module, path) {
    var imagesModuleKey = "images";

    var match = stateKeyExp.exec(module.modulesKey);
    if (match) {
        imagesModuleKey += "-" + match[1];
    }
    return host.staticResourcesPrefix + "/" + module.pluginKey + ":" + imagesModuleKey + "/" + path;
};