import comp from "/Users/zhouyunlong/Desktop/项目/myblog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"heroText\":\"前端知识体系\",\"tagline\":\"来自一只野生龙龙\",\"actionText\":\"快速了解 →\",\"actionLink\":\"/zh/guide/\",\"features\":[{\"title\":\"基础篇\",\"details\":\"构建属于自己的前端知识体系。\"},{\"title\":\"进阶篇\",\"details\":\"根据面试题来重点巩固自己的知识图谱。\"},{\"title\":\"计算机必备\",\"details\":\"计算机专业必备大课。\"}],\"footer\":\"form yunlongZhou\"},\"headers\":[],\"git\":{\"updatedTime\":1728700696000,\"contributors\":[{\"name\":\"龙龙\",\"email\":\"474191468@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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