// module.exports = function () {
//     let hello = document.createElement('div');
//     hello.innerHTML = "webpack学习配置";
//     return hello;
// }

import React, { Component } from 'react'

let name = '张三与李四'
export default class Hello extends Component {
    render() {
        return (
            <div>
                {name}
            </div>
        )
    }
}
