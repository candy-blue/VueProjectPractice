import NProgress from "nprogress"
import "nprogress/nprogress.css"
import router from "@/router"

NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})

// 配置路由白名单
const whiteList = ["/login"]

router.beforeEach((to, from, next) => {
    NProgress.start()
    const token = localStorage.getItem("token")
    console.log("token-->",token)
    if (!to.path.includes(whiteList) && !token) {
        next({path: "/login"})
    } else {
        next()
    }
})

router.afterEach(() => {
    NProgress.done()
})
