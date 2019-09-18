import Vue from 'vue'

// A function which return a fresh router instance on each request
import createRouter from './router'

// A function which return a fresh store instance on each request
import createStore from './store'

// The root component
// By default it's `<router-view />` in Ream
import App from './App.vue'

// Custom document
const document = ({headTags, scripts}) => `
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="favicon.ico">
      <title>电竞GO-DOTA2|英雄联盟|CSGO即时比分情报_预测数据_刀塔自走棋攻略</title>
      <meta name="keywords" CONTENT="电竞, 比分，专区，DOTA2，CSGO，LOL，自走棋，即时比分，实时数据，情报攻略，赛事比分预测，赛程安排，赛果数据，西恩刀塔，中国战队，赛事报道，转会消息，预测战报，前瞻情报，版本更新，新英雄新版本攻略，花边八卦，主播娱乐，战队选手采访，数据，Minor，Major，TI， 国际邀请赛，全球总决赛，战队胜率分析，一血，十杀，肉山，大小">
      <meta name="description" content="电竞GO提供专业DOTA2、CSGO、LOL、刀塔自走棋比赛数据、即时比分、赛事预测、胜率分析，资讯攻略和直播视频，一切为了中国电竞玩家朋友服务。看懂电竞赛事，就用电竞GO。">
      <script type="text/javascript">
      if(/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(
        navigator.userAgent)) {
        var mdomainStr = 'm.esgo.com'
        var locationStr = window.location.href
        var domainStr = document.domain
        var newStr = locationStr.replace(domainStr, mdomainStr)
        if (locationStr.indexOf("/ti9") === -1 && locationStr.indexOf("/article/") === -1) {
          window.location.href = newStr
        }
      }
    </script>
      ${headTags()}
    </head>
    <body>
      <!--ream-root-placeholder-->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126049222-2"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-126049222-2');
      </script>
      <script>
        (function(){
          var bp = document.createElement('script');
          var curProtocol = window.location.protocol.split(':')[0];
          if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
          }
          else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
          }
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(bp, s);
        })();
      </script>
      ${scripts()}
    </body>
  </html>
`

export default () => {
    return {
        router: createRouter(),
        store: createStore(),
        root: App,
        document,
        extendRootOptions(rootedOptions) {
            Vue.prototype.$bus = new Vue()
        }
    }
}
