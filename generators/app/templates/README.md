# <%= module_name %> 数据缓存管理

## 组件状态

[![build status](https://g.hz.netease.com/edu-frontend/cache-<%= module_name %>/badges/master/build.svg)](https://g.hz.netease.com/edu-frontend/cache-<%= module_name %>/commits/master)

## 组件文档

组件详细文档请查看 [这里](./docs/index.html)

## 配置信息

业务线可通过以下配置调整数据源

| 配置名称 | 配置子项 | 描述 |
| :---- | :---- | :---- |
| cache-<%= module_name %>-<%= component_name %> | | 数据源配置对象 |
| - | <%= component_name %>-get | 加载列表项详情配置信息 |
| - | <%= component_name %>-list | 加载列表配置信息 |
| - | <%= component_name %>-create | 添加列表项配置信息 |
| - | <%= component_name %>-delete | 删除列表项配置信息 |
| - | <%= component_name %>-update | 更新列表项配置信息 |


配置信息的结构如下所示

```javascript
'<%= component_name %>-list': {
    method: 'GET',
    url: '/api/<%= component_name %>/list',
    rest: false,
    filter: function (event) {
        // event.url - 请求地址
        // event.req - 请求接口输入对象 options
    },
    post: function (event) {
        // event.req - 请求接口输入对象 options
        // event.res - 服务器返回结果，ajax接口的回调输入
        // event.error - 重写异常信息，如果验证OK则留空
    },
    format: function (event) {
        // event.req - 请求接口输入对象 options
        // event.res - 服务器返回结果，ajax接口的回调输入
        // event.result - 重写返回结果
    },
    onload: function (result) {
        // result - 经过格式化的服务器返回结果
    },
    onerror: function (event) {
        // event.req - 请求接口输入对象 options
        // event.error - 异常信息
    },
    finaly: function (event) {
        // event.req - 请求接口输入对象 options
        // event.res - 服务器返回结果，ajax接口的回调输入
    }
}
```

请求配置信息中可以统一配置的项如下表所示

| 名称    | 类型     | 描述  |
| :----:  | :----:   | :---- |
| url     | String   | 请求地址 |
| method  | String   | 请求方式，GET/POST/PUT等，默认为POST |
| rest    | Boolean  | 是否REST接口 |
| filter  | Function | 请求发送之前配置信息过滤接口 |
| post    | Function | 请求返回之后结果检查接口 |
| format  | Function | 请求返回结果格式化接口 |
| finaly  | Function | 回调结束后执行业务逻辑接口 |
| onerror | Function | 异常处理接口 |
| onload  | Function | 回调处理接口 |

## 使用范例

组件使用范例如下

```javascript
NEJ.define([
    'pool/cache-<%= module_name %>/src/<%= component_name %>/cache'
],function(
    d
){
    // d.<%= component_name %>

    // d.$do(function(inst){
    //     // do something
    // });
    
    // instance cache
    var cache = d.<%= component_name %>._$allocate({
        onlistload:function(options) {
            // TODO something
        }
    });
    // load list
    cache._$getList({
        key:'<%= component_name %>-123',
        data:{
            offset: 0,
            limit: 20
        }
    });
})
```