export default function ({
  isServer,
  req,
  redirect,
  route
}) {
  let isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/) || !!ua.match(/AppleWebKit/) && ua.indexOf('QIHU') && ua.indexOf('QIHU') > -1 && ua.indexOf('Chrome') < 0 //是否为移动终端
  }
  let userAgent = req ? req.headers["user-agent"] : navigator.userAgent || ''

  //若终端为pc但路径中包含/m/或者/m的，重定向到pc
//   if ((route.fullPath.indexOf('/m') > -1 || route.fullPath.indexOf('/m/') > -1) && !isMobile(userAgent)) {
//     let url = route.fullpath.substring(2)
//     redirect(url)
//   }
//   //若终端为m，但路径中不包含/m/或者/m/的，重定向到m
//   if ((route.fullPath.indexOf('/m') < 0 || route.fullPath.indexOf('/m/') < 0) && isMobile(userAgent)) {
//     redirect('/m' + route.fullpath)
//   }
}
