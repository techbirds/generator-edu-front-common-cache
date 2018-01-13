/**
 * <%= component_name %> 数据接口配置文件
 *
 * @version  1.0
 * @author   <%= project_author %> <<%= project_author %>@corp.netease.com>
 */
NEJ.define(function () {
    /**
     * 请求配置信息，项目中可以统一配置请求信息，可配置项如下表所示
     *
     * | 名称    | 类型     | 描述  |
     * | :----:  | :----:   | :---- |
     * | url     | String   | 请求地址 |
     * | method  | String   | 请求方式，GET/POST/PUT等，默认为POST |
     * | rest    | Boolean  | 是否REST接口 |
     * | filter  | Function | 请求发送之前配置信息过滤接口 |
     * | post    | Function | 请求返回之后结果检查接口 |
     * | format  | Function | 请求返回结果格式化接口 |
     * | finaly  | Function | 回调结束后执行业务逻辑接口 |
     * | onerror | Function | 异常处理接口 |
     * | onload  | Function | 回调处理接口 |
     * 
     */
    return {
        // '<%= module_name %>-<%= component_name %>-list': {
        //     method: 'GET',
        //     url: '/api/<%= component_name %>/list',
        //     rest: false,
        //     filter: function (event) {
        //         // event.url - 请求地址
        //         // event.req - 请求接口输入对象 options
        //     },
        //     post: function (event) {
        //         // event.req - 请求接口输入对象 options
        //         // event.res - 服务器返回结果，ajax接口的回调输入
        //         // event.error - 重写异常信息，如果验证OK则留空
        //     },
        //     format: function (event) {
        //         // event.req - 请求接口输入对象 options
        //         // event.res - 服务器返回结果，ajax接口的回调输入
        //         // event.result - 重写返回结果
        //     },
        //     onload: function (result) {
        //         // result - 经过格式化的服务器返回结果
        //     },
        //     onerror: function (event) {
        //         // event.req - 请求接口输入对象 options
        //         // event.error - 异常信息
        //     },
        //     finaly: function (event) {
        //         // event.req - 请求接口输入对象 options
        //         // event.res - 服务器返回结果，ajax接口的回调输入
        //     }
        // }
        
        '<%= module_name %>-<%= component_name %>-get': {
            method: 'GET',
            url: '/api/<%= component_name %>/get'
        },
        '<%= module_name %>-<%= component_name %>-list': {
            method: 'GET',
            url: '/api/<%= component_name %>/list'
        },
        '<%= module_name %>-<%= component_name %>-create': {
            url: '/api/<%= component_name %>/create'
        },
        '<%= module_name %>-<%= component_name %>-delete': {
            url: '/api/<%= component_name %>/delete'
        },
        '<%= module_name %>-<%= component_name %>-update': {
            url: '/api/<%= component_name %>/update'
        },
        '<%= module_name %>-<%= component_name %>-sort': {
            url: '/api/<%= component_name %>/sort'
        }
    };
});