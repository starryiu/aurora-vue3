/**
 * Aurora 主题配置文件
 * 食用指南：https://github.com/chanshiyucx/blog/issues/41
 * 联系作者：Blog https://chanshiyu.com      QQ 1124590931
 */

export default {
  /**
   * =========================================================
   *                      站点功能【必需】
   * =========================================================
   */

  /**
   * 站点标题
   */
  title: '晚风轩',
  subtitle: '夏风微凉 岁月无恙',
  siteUrl: 'https://starryiu.github.io/',
  nickname:'STARRYIU',

  /**
   * Github Issues 配置
   */
  username: 'starryiu', // github 用户名
  repository: 'aurora-article', // 文章仓库地址
  token: ['0ad1435f7f3a0a5f659', 'ba596de769986a2ac41e8'], // token 从中间任意位置拆开成两部分，避免 github 代码检测失效

  /**
   * Gitalk 配置，文档详见：https://github.com/gitalk/gitalk
   */
  gitalk: {
    clientID: '3a91ff425f01366ed566',
    clientSecret: 'fe0846669bafb5e5fa654054d60d2215265e503a',
    repo: 'aurora-comment', // 评论仓库地址
    owner: 'starryiu',
    admin: ['starryiu'],
    distractionFreeMode: false, // 是否开始无干扰模式【背景遮罩】
    proxy: 'https://bokegitalkcors.herokuapp.com/https://github.com/login/oauth/access_token',
  },

  /**
   * leancloud 配置 【注意切换为国际版】
   */
  leancloud: {
    appId: 'r473dHYho9QSxgainmg8Nhm7-MdYXbMMI',
    appKey: 'bJ3LgQXxLa7hXpFlg3GsPLsa',
  },

  /**
   * =========================================================
   *                        页面设置
   * =========================================================
   */

  /**
   * 归档页面
   */
  archiveOpts: {
    display: true, // 是否显示该页面
    enableComment: false, // 是否开启评论功能
    qoute: '華枝春滿 天心月圓', // 页面顶部一言
  },

  /**
   * 分类页面
   */
  categoryOpts: {
    display: true,
    enableComment: false,
    qoute: '桜華月想 暮色蒼然',
  },

  /**
   * 标签配置
   */
  tagOpts: {
    display: true,
    enableComment: false,
    qoute: '灯笼流丽，百鬼夜行',
  },

  /**
   * 灵感页面
   */
  inspirationOpts: {
    display: true,
    enableComment: true,
    qoute: '詠奏妖華，明鏡止水',
  },

  /**
   * 歌单页面
   */
  songOpts: {
    display: true,
    enableComment: true,
    qoute: '追想風景 彼岸帰航',
  },

  /**
   * 友链页面
   */
  friendOpts: {
    display: true,
    enableComment: true,
    qoute: '青青子衿，悠悠我心',
  },

  /**
   * 关于页面
   */
  aboutOpts: {
    display: true,
    enableComment: true,
    qoute: '蝉鸣如雨，花宵道中',
    avatar: '//fastly.jsdelivr.net/gh/starryiu/PicGo-jsDelivr/PicGo/9e8fac15152ec6c1a6caace803203dd3.jpg',
    graduated: 'University of Electronic Science and Technology of China (UESTC)',
    college: 'Communication&Information Engineering',
    contact: [
      // {
      //   icon: '//fastly.jsdelivr.net/gh/chanshiyucx/yoi/blog/github.png',
      //   link: '',
      // },
    ],
  },

  /**
   * =========================================================
   *                         主题自定义
   * =========================================================
   */

  /**
   * 加载动画
   */
  loadingImg: '//fastly.jsdelivr.net/gh/chanshiyucx/yoi/blog/loading.gif',

  /**
   * 文章默认图
   */
  defaultCover: '//fastly.jsdelivr.net/gh/chanshiyucx/yoi/bg/defaultCover.jpg',

  /**
   * 音乐播放器,
   */
  APlayer: [
    {
      name: '我落泪情绪零碎',
      artist: '周杰伦',
      url: '//s-sh-1658-mycunchu.oss.dogecdn.com/MP3/60054700492133856.mp3',
      cover: '//fastly.jsdelivr.net/gh/starryiu/PicGo-jsDelivr/PicGo/f328997b553e38536691abe034b60baf.jpg',
    },
    {
      name: '稻香',
      artist: '周杰伦',
      url: '//s-sh-1658-mycunchu.oss.dogecdn.com/MP3%2F11.-%E7%A8%BB-%E9%A6%99.mp3',
      cover: '//fastly.jsdelivr.net/gh/starryiu/PicGo-jsDelivr/PicGo/d4339cc3859d52b676f5cc8ee327115e.jpg',
    },
    {
      name: '11月の雨',
      artist: 'CHiCO',
      url: '//s-sh-1658-mycunchu.oss.dogecdn.com/MP3%2F11%E6%9C%88%E3%81%AE%E9%9B%A8.mp3',
      cover: '//fastly.jsdelivr.net/gh/starryiu/PicGo-jsDelivr/PicGo/08d28f509988b3ab16172a283eaf9a14.jpg',
    },
    {
      name: '君の知らない物語',
      artist: 'supercell',
      url: '//s-sh-1658-mycunchu.oss.dogecdn.com/MP3%2F%E5%90%9B%E3%81%AE%E7%9F%A5%E3%82%89%E3%81%AA%E3%81%84%E7%89%A9%E8%AA%9E.mp3',
      cover: '//fastly.jsdelivr.net/gh/starryiu/PicGo-jsDelivr/PicGo/c6379a49b03b7b3b8c99d00325b0997b.jpg',
    },
  ],

  /**
   * 主题配色，主要用于文章、灵感、关于等卡片配色
   * 推荐一个超棒的取色站，日本の伝統色：http://nipponcolors.com/
   */
  themeColors: [
    '#B28FCE', // 薄
    '#86C166', // 苗
    '#F596AA', // 桃
    '#F19483', // 曙
    '#F9BF45', // 玉子
    '#FAD689', // 浅黄
    '#E79460', // 洗柿
    '#2EA9DF', // 露草
    '#FB966E', // 洗朱
    '#BC9F77', // 白茶
    '#867835', // 黄海松茶
    '#B9887D', // 水がき
  ],

  /**
   * 新配置
   */
  hidePosts: [], //隐藏文章评论 输入数字id即可 比如 [1,3] ,隐藏id为1，3的文章评论
  postImageUrlReplace: { // 文章图片地址前缀替换
    enable: false,
    old: 'https://cdn.jsdelivr.net',
    new: 'https://jsd.compc.cc',
  }, 
}
