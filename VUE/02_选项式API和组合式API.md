- Vue2 引入 Option API，所有组件逻辑都放在一个对象里，按照不同选项组织组件逻辑，复用逻辑需要 mixins 或 HOC 组件
* Vue3 引入 Composition API，允许开发者引入 `setup` 函数，使用诸如 `ref` 和 `reactive` 的响应式 API，以及`computed` 和 `watch` 等监听函数，根据逻辑关系而非选项类型来组织组件逻辑，即只需将逻辑抽离封装到可复用的函数中，减少代码冗余并提高代码的可维护性。同时它提供更好的 TypeScript 支持，由于 `setup` 函数直接返回响应式状态和函数，TypeScript 易于推断这些返回值的类型


- Vue3 中使用组合式API替换mixins，实现代码复用并解决隐患
   - mixins是什么
     组件之间共享相同的属性时，将公共属性提取到一个单独的模块中，在组件中使用时再引入该独立的模块，mixins中的生命周期会与引入mixins的组件的生命周期整合在一起调用
   - mixins问题 -- (变量隐式传入！) 
     1.当使用了多个 mixin 时，实例上的数据属性来自哪个 mixin 变得不清晰，这使追溯实现和理解组件行为变得困难。
     2.命名冲突
     3.隐式的跨 mixin 交流
   - vue3中如何解决 
     -- composition API （显示传入）
     Vue依靠原生JavaScript中内置的保障措施来共享代码，比如将变量传递给函数和模块系统。
     响应变量和方法在一起定义和调用，低耦合高内聚

     -- 自定义hook函数
     自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂，变量或方法是暴露的形态进行暴露和使用的
     ```
     一个官方的hooks库：Vueuse 
     它提供了许多简单好用的 Hooks，可以帮助开发者快速实现各种功能
        npm install vueuse# 或yarn add vueuse

        import { useRequest } from 'vueuse'

        常用的hooks
        useDebounce 和 useThrottle  实现防抖和节流功能
        useRequest  实现数据请求和缓存
        useTitle 操作浏览器标题
        useCounter 用于实现一个简单的计数器功能
        useToggle 用于实现一个切换功能
        useFullscreen 用于控制全屏状态
        ...
     ```