/**
 * Butterfly
 * Jump prompt
 */

'use strict'

hexo.extend.filter.register('after_post_render', function (data) {
  // 得到域名
  var siteUrl = hexo.config.url
  var domain = siteUrl.match(/[^.\/]+\.[^.\/]+$/)[0]
  // 替换链接
  var content = data.content
  var hrefRegExp = /href="(https?[^"]*)"*/gi
  content = content.replace(hrefRegExp, (url) => {
    const domainRegExp = /href="(https?[^"]*)"*/i
    const domainMatch = url.match(domainRegExp)
    if (domainMatch !== null && domainMatch[1].indexOf(domain) === -1) {
      return 'href=/redirect/?target=' + domainMatch[1]
    }
  })
  data.content = content
  return data
})