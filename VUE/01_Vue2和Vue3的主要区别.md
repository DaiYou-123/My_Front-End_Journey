##### 源码层面
- Vue2的源码使用JavaScript编写。而Vue3的源码使用TypeScript进行重构，对TypeScript的支持更加友好。

##### 响应式原理
- Vue2  响应式的特点是依赖收集，数据可变，自动派发更新，初始化时通过 `Object.defineProperty`  递归劫持  `data` 所有属性，为其添加 `getter` 和 `setter`。每个组件实例关联一个 `watcher` 实例，在组件渲染时进行依赖收集，并在依赖项的 `setter` 被调用时通知 `watcher` 重新渲染
- Vue3 使用原生 `Proxy`  重构响应式，`Proxy`  修复 Vue2 响应式存在的缺陷，它可以拦截对象的任意操作（包括增删对象属性、数组索引赋值和修改数组长度等），支持更多数据结构，且不再一开始就递归劫持对象属性，而是代理第一层对象本身，运行时才递归，按需代理，用 `effect`  副作用函数来代替 Vue2  的 `watcher`，用 `trackMap`  代替 Vue2  的 `Dep` 统一管理依赖，无需再维护大量依赖关系，性能显著提升

##### Option API & Composition API
- Vue2 引入 Option API，所有组件逻辑都放在一个对象里，按照不同选项（如 `data`、`methods`、`computed` 等）组织组件逻辑。复用逻辑需要 mixins 或 HOC 组件
* Vue3 引入 Composition API，允许开发者引入 `setup` 函数，使用诸如 `ref` 和 `reactive` 的响应式 API，以及`computed` 和 `watch` 等监听函数，根据逻辑关系而非选项类型来组织组件逻辑，即只需将逻辑抽离封装到可复用的函数中，减少代码冗余并提高代码的可维护性。同时它提供更好的 TypeScript 支持，由于 `setup` 函数直接返回响应式状态和函数，TypeScript 易于推断这些返回值的类型

##### 生命周期钩子
- Vue2和Vue3的生命周期钩子函数有所不同，例如，Vue2的beforeCreate()和created()在Vue3中被替换为setup()

##### Fragment & Teleport & Suspense 新特性
- Fragment(碎片化节点)，vue2模板中必须要有一个根标签，vue3中却不用。如果在vue页面中有多个元素节点。那么编译时vue会在这些元素节点上添加一个<Fragment></Fragment>标签。并且该标签不会出现在dom树中。
- Suspense(异步组件)
  通过defineAsyncComponent提供一系列的参数来定义异步组件，然后将异步组件包裹在suspend中
  ```javascript
    <Suspense>
        <template #default>
        <async-component />
        </template>
        <template #fallback>
        Loading ...
        </template>
    </Suspense>
  ```
- Portal(传送门)
  vue3中提供一对`<teleport ></teleport>`用于移动dom的层级,在vue之外的层级方便我们进行全局处理和管理

######  v-if & v-for & v-model
    在vue2中，v-for 的优先级比v-if更高。
    在vue3中，v-if具有比v-for更高的优先级。(一般不同时使用)
##### diff算法
- vue2中通过同级比较来工作，对新旧节点列表进行`遍历`，比较每个节点是否相同，然后根据需要进行创建、更新或移除操作。
- Vue3 的 Diff 算法在 Vue2 的基础上进行了多项优化，使得虚拟 DOM 的更新更加快速和高效。这些优化包括更高效的`节点比较、静态节点提升、块树优化`等，这些改进有助于减少渲染时间，提高应用的性能。
  - 双端比较优化：Vue3继续使用了双端比较算法，但是在细节上进行了优化，比如对于相同节点的处理更加高效。 
  - 静态节点提升：Vue3在编译时会对静态节点进行提升，这些节点在更新时不会被重新创建，而是直接复用，大大减少了渲染成本。
  - 编译时优化：Vue3在编译时会对模板进行静态提升，将不会变化的节点和属性提取出来，避免在每次渲染时都重新创建。这样可以减少虚拟DOM树的创建和销毁过程，提高性能。