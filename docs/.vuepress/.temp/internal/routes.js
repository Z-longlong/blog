export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/brower.html", { loader: () => import(/* webpackChunkName: "guide_brower.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/brower.html.js"), meta: {"title":"浏览器"} }],
  ["/guide/css.html", { loader: () => import(/* webpackChunkName: "guide_css.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/css.html.js"), meta: {"title":""} }],
  ["/guide/html.html", { loader: () => import(/* webpackChunkName: "guide_html.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/html.html.js"), meta: {"title":"HTML"} }],
  ["/guide/http.html", { loader: () => import(/* webpackChunkName: "guide_http.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/http.html.js"), meta: {"title":""} }],
  ["/guide/javascript.html", { loader: () => import(/* webpackChunkName: "guide_javascript.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/javascript.html.js"), meta: {"title":""} }],
  ["/guide/node.html", { loader: () => import(/* webpackChunkName: "guide_node.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/node.html.js"), meta: {"title":""} }],
  ["/guide/vue.html", { loader: () => import(/* webpackChunkName: "guide_vue.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/vue.html.js"), meta: {"title":""} }],
  ["/guide/%E5%B0%8F%E7%A8%8B%E5%BA%8F.html", { loader: () => import(/* webpackChunkName: "guide_小程序.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/小程序.html.js"), meta: {"title":""} }],
  ["/guide/%E6%89%8B%E5%86%99.html", { loader: () => import(/* webpackChunkName: "guide_手写.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/手写.html.js"), meta: {"title":""} }],
  ["/guide/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html", { loader: () => import(/* webpackChunkName: "guide_数据结构.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/数据结构.html.js"), meta: {"title":""} }],
  ["/guide/%E7%AE%97%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "guide_算法.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/算法.html.js"), meta: {"title":""} }],
  ["/guide/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html", { loader: () => import(/* webpackChunkName: "guide_设计模式.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/设计模式.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
