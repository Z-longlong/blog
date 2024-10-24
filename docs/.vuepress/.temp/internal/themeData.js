export const themeData = JSON.parse("{\"sidebarDepth\":2,\"lastUpdated\":\"Last Updated\",\"navbar\":[{\"text\":\"HTML\",\"link\":\"/guide/html.md\"},{\"text\":\"CSS\",\"link\":\"/guide/css.md\"},{\"text\":\"JavaScript\",\"link\":\"/guide/javascript.md\"},{\"text\":\"Brower\",\"link\":\"/guide/brower.md\"},{\"text\":\"Node\",\"link\":\"/guide/node.md\"},{\"text\":\"HTTP\",\"link\":\"/guide/http.md\"},{\"text\":\"设计模式\",\"link\":\"/guide/设计模式.md\"},{\"text\":\"Vue\",\"link\":\"/guide/vue.md\"},{\"text\":\"数据结构\",\"link\":\"/guide/数据结构.md\"},{\"text\":\"手写\",\"link\":\"/guide/手写.md\"},{\"text\":\"小程序\",\"link\":\"/guide/小程序.md\"},{\"text\":\"算法\",\"link\":\"/guide/算法.md\"},{\"text\":\"mysql\",\"link\":\"/guide/mysql.md\"}],\"sidebar\":[{\"text\":\"HTML\",\"link\":\"/guide/html.md\"},{\"text\":\"CSS\",\"link\":\"/guide/css.md\"},{\"text\":\"JavaScript\",\"link\":\"/guide/javascript.md\"},{\"text\":\"Brower\",\"link\":\"/guide/brower.md\"},{\"text\":\"Node\",\"link\":\"/guide/node.md\"},{\"text\":\"HTTP\",\"link\":\"/guide/http.md\"},{\"text\":\"设计模式\",\"link\":\"/guide/设计模式.md\"},{\"text\":\"Vue\",\"link\":\"/guide/vue.md\"},{\"text\":\"数据结构与算法\",\"link\":\"/guide/数据结构.md\"},{\"text\":\"手写\",\"link\":\"/guide/手写.md\"},{\"text\":\"小程序\",\"link\":\"/guide/小程序.md\"},{\"text\":\"算法\",\"link\":\"/guide/算法.md\"},{\"text\":\"mysql\",\"link\":\"/guide/mysql.md\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
