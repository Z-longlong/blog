import comp from "/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/guide/http.html.vue"
const data = JSON.parse("{\"path\":\"/guide/http.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"HTTP\",\"slug\":\"http\",\"link\":\"#http\",\"children\":[]}],\"git\":{\"updatedTime\":1728700696000,\"contributors\":[{\"name\":\"龙龙\",\"email\":\"474191468@qq.com\",\"commits\":1}]},\"filePathRelative\":\"guide/http.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
