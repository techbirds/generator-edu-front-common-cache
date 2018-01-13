/**
 * <%= component_name %> 数据缓存管理实现文件
 *
 * @version  1.0
 * @author   <%= project_author %> <<%= project_author %>@corp.netease.com>
 * @module   pool/cache-<%= module_name %>/src/<%= component_name %>/cache
 */
NEJ.define([
    'base/klass',
    'util/event/event',
    'pool/cache-base/src/base',
    'pool/cache-base/src/setting',
    './const.js',
    './config.js'
],function(
    k, t, d,
    s, c, conf,
    exports, pro
){
    // 私有常量定义
    var SETTING_KEY = 'cache-<%= module_name %>-<%= component_name %>';

    /**
     * <%= component_name %> 数据缓存管理
     *
     * @class   module:pool/cache-<%= module_name %>/src/<%= component_name %>/cache.<%= component_name %>
     * @extends module:pool/cache-base/src/base.Cache
     *
     * @param   {Object} options - 构造参数
     */
    var <%= component_name %> = k._$klass();
    pro = <%= component_name %>._$extend(d.Cache);

    /**
     * 初始化缓存
     *
     * @private
     * @method  module:pool/cache-<%= module_name %>/src/<%= component_name %>/cache.<%= component_name %>#__init
     * @param   {Object} options - 配置信息
     * @returns {void}
     */
    pro.__init = function () {
        this._doFlushSetting(
            SETTING_KEY, conf
        );
        this.__super();
    };

    /**
     * 从服务器端载入列表
     *
     * @private
     * @method  module:pool/cache-<%= module_name %>/src/<%= component_name %>/cache.<%= component_name %>#_doLoadList
     * @param   {Object}   options        - 请求信息
     * @param   {String}   options.key    - 列表标识
     * @param   {Number}   options.offset - 偏移量
     * @param   {Number}   options.limit  - 数量
     * @param   {String}   options.data   - 请求相关数据
     * @param   {Function} options.onload - 列表项载入回调
     * @returns {void}
     */
    pro._doLoadList = function (options) {
        this.__super(options);
        this.__doSendRequest(
            '<%= module_name %>-<%= component_name %>-list',options
        );
    };

    /**
     * 从服务器端载入列表项
     *
     * @private
     * @method  module:pool/cache-<%= module_name %>/src/<%= component_name %>/cache.<%= component_name %>#_doLoadItem
     * @param   {Object}   options        - 请求信息
     * @param   {String}   options.key    - 列表标识
     * @param   {Number}   options.id     - 列表项标识
     * @param   {String}   options.data   - 请求相关数据
     * @param   {Function} options.onload - 列表项载入回调
     * @returns {void}
     */
    pro._doLoadItem = function (options) {
        this.__super(options);
        this.__doSendRequest(
            '<%= module_name %>-<%= component_name %>-get',options
        );
    };

    /**
     * 添加列表项至服务器
     *
     * @private
     * @method  module:pool/cache-<%= module_name %>/src/<%= component_name %>/cache.<%= component_name %>#_doAddItem
     * @param   {Object}   options        - 请求信息
     * @param   {String}   options.key    - 列表标识
     * @param   {String}   options.data   - 请求相关数据
     * @param   {Function} options.onload - 列表项载入回调
     * @returns {void}
     */
    pro._doAddItem = function (options) {
        this.__super(options);
        this.__doSendRequest(
            '<%= module_name %>-<%= component_name %>-create',options
        );
    };

    /**
     * 从服务器上删除列表项
     *
     * @private
     * @method  module:pool/cache-<%= module_name %>/src/<%= component_name %>/cache.<%= component_name %>#_doDeleteItem
     * @param   {Object}   options        - 请求信息
     * @param   {String}   options.key    - 列表标识
     * @param   {Number}   options.id     - 列表项标识
     * @param   {String}   options.data   - 请求相关数据
     * @param   {Function} options.onload - 列表项载入回调
     * @returns {void}
     */
    pro._doDeleteItem = function (options) {
        this.__super(options);
        this.__doSendRequest(
            '<%= module_name %>-<%= component_name %>-delete',options
        );
    };

    /**
     * 更新列表项至服务器
     *
     * @private
     * @method  module:pool/cache-<%= module_name %>/src/<%= component_name %>/cache.<%= component_name %>#_doUpdateItem
     * @param   {Object}   options        - 请求信息
     * @param   {String}   options.key    - 列表标识
     * @param   {String}   options.data   - 请求相关数据
     * @param   {Function} options.onload - 列表项载入回调
     * @returns {void}
     */
    pro._doUpdateItem = function (options) {
        this.__super(options);
        this.__doSendRequest(
            '<%= module_name %>-<%= component_name %>-update',options
        );
    };
    
    /**
     * 更新列表排序到服务器
     *
     * @private
     * @method  module:pool/cache-<%= module_name %>/src/<%= component_name %>/cache.<%= component_name %>#_doUpdateSort
     * @param   {Object}   options        - 请求配置信息
     * @param   {String}   options.key    - 列表标识
     * @param   {Object}   options.data   - 发送到服务器的数据
     * @param   {Object}   options.ext    - 回调时携带的信息
     * @param   {Function} options.onload - 排序更新后回调函数
     * @returns {void}
     */
    pro._doUpdateSort = function (options) {
        this.__super(options);
        this.__doSendRequest(
            '<%= module_name %>-<%= component_name %>-sort',options
        );
    };
    
    // 支持类上的 onlistchange 事件 
    t._$$CustomEvent._$allocate({
        element:<%= component_name %>,
        event:'listchange'
    });
    
    /**
     * 执行缓存的同步方法，执行完毕后立即回收缓存
     *
     * ```javascript
     * NEJ.define([
     *     'pool/cache-<%= module_name %>/src/<%= component_name %>/cache'
     * ],function(t){
     *
     *     // 使用缓存
     *     var ret = t.$do(function(cache){
     *         return cache.getSomething();
     *     });
     *
     *     // TODO something
     * }
     * ```
     *
     * @method module:pool/cache-<%= module_name %>/src/<%= component_name %>/cache.$do
     * @param  {Function} func - 执行回调
     * @return {Function}        回调返回结果
     */
    exports.$do = d.$do._$bind(null,<%= component_name %>);
    // 导出
    exports.<%= component_name %> = <%= component_name %>;
});
