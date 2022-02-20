"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_less_1 = require("./index.less");
var classnames_1 = require("classnames");
var swiper_1 = require("../components/swiper");
var titleList = [
    '产业转型1',
    '产业转型2',
    '产业转型3',
    '产业转型4',
    '产业转型5',
];
var descList = [
    {
        index: 0,
        title: '产业转型1',
        desc: '产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1'
    },
    {
        index: 1,
        title: '产业转型2',
        desc: '产业转型2产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1'
    },
    {
        index: 2,
        title: '产业转型3',
        desc: '产业转型3产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1'
    },
    {
        index: 3,
        title: '产业转型4',
        desc: '产业转型4产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1'
    },
    {
        index: 4,
        title: '产业转型5',
        desc: '产业转型5产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1产业转型1'
    },
];
var leftArr = [74, 325, 573, 882, 1070];
var colorArr = ['#08b2d6', '#0ab7c8', '0dbdb0', '10c499', '12cb80'];
function IndexPage() {
    var _a = react_1.useState(0), tab = _a[0], setTab = _a[1];
    return (React.createElement("div", { className: index_less_1["default"].Box },
        React.createElement("div", { className: index_less_1["default"].Container },
            React.createElement("header", null,
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "52", height: "71", viewBox: "0 0 52 71" },
                    React.createElement("image", { id: "logo", width: "52", height: "71", xlinkHref: "data:img/png;base64,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" })),
                React.createElement("div", { className: index_less_1["default"].HeaderBox },
                    React.createElement("div", { className: index_less_1["default"].Header }, "\u5EB6\u6CFD\u79D1\u6280"),
                    React.createElement("div", { className: index_less_1["default"].CompanyName }, "Chengdu Shuze Technology"))),
            React.createElement("div", { className: index_less_1["default"].BigTitle }, "SHUZE"),
            React.createElement("div", { className: index_less_1["default"].CompDesc }, "\u6210\u90FD\u5EB6\u6CFD\u79D1\u6280\u6709\u9650\u516C\u53F8\u4E3A\u4F01\u4E1A\u4E0E\u79C1\u4EBA\u5BA2\u6237\u63D0\u4F9B\u53EF\u9760\u7684\u5546\u7528\u8F6F\u4EF6\u5F00\u53D1\u670D\u52A1\u3002\u6211\u4EEC\u5C06\u4E3A\u9601\u4E0B\u63D0\u4F9B\u8F6F\u4EF6\u3001\u79FB\u52A8Apps\u3001\u7F51\u7AD9\u3001WEB\u5E94\u7528\u7B49\u4EA7\u54C1\u7684\u539F\u578B\u8BBE\u8BA1\u3001\u4EA4\u4E92\u8BBE\u8BA1\u3001\u7CFB\u7EDF\u5F00\u53D1\u5230\u540E\u671F\u8FD0\u7EF4\u6574\u4F53\u7CFB\u7EDF\u89E3\u51B3\u65B9\u6848"),
            React.createElement(swiper_1["default"], null),
            React.createElement("div", { className: index_less_1["default"].TitleList }, titleList.map(function (title, index) { return (React.createElement("div", { key: title, className: classnames_1["default"](index_less_1["default"].Item, titleList[tab] === title && index_less_1["default"].Active), onClick: function () { return setTab(index); } }, title)); })),
            React.createElement("div", { className: index_less_1["default"].descList },
                React.createElement("div", { className: index_less_1["default"].triangle, style: {
                        left: leftArr[tab] + 'px'
                    } },
                    React.createElement("svg", { className: index_less_1["default"].Svg, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("polygon", { points: "50,0 100,100 0,100", style: {
                                fill: colorArr[tab],
                                strokeWidth: 1
                            } }))),
                descList.map(function (_a, index) {
                    var title = _a.title, desc = _a.desc;
                    return (React.createElement("div", { key: index, className: classnames_1["default"](index_less_1["default"].Item, titleList[tab] === title && index_less_1["default"].Active) }, desc));
                })))));
}
exports["default"] = IndexPage;

//# sourceMappingURL=index.js.map
