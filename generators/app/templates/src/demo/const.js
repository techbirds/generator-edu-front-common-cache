/**
 * <%= component_name %> 相关常量实现文件
 *
 * @version  1.0
 * @author   <%= project_author %> <<%= project_author %>@corp.netease.com>
 * @module   pool/cache-<%= module_name %>/src/<%= component_name %>/const
 */
NEJ.define(function (
    exports
) {
    /**
     * <%= component_name %> 中 <%= module_name %> 列表
     *
     * @member {Number} module:pool/cache-<%= module_name %>/src/<%= component_name %>/const.LIST_TYPE_<%= module_name %>
     */
    // exports.LIST_TYPE_<%= module_name %> = 1;


    /**
     * 取列表标识
     *
     * @method  module:pool/cache-<%= module_name %>/src/<%= component_name %>/const.getListKey
     * @param   {Number}   type - 列表类型，见常量定义
     * @param   {Variable} opt  - 不同类型输入的标识信息
     * @returns {String}   列表标识
     */
    exports.getListKey = function (type, opt) {
        // TODO
    };
});
