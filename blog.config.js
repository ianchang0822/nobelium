const BLOG = {
  title: 'Ian Blog', // 标题
  author: 'Ian', // 作者
  email: '1144028227@qq.com', // 邮箱
  link: 'https://nobelium.vercel.app', // 填入域名
  description: '字节toB产品🐶 / App爱好者 / 🍎粉 / 数码控', // 博客描述
  lang: 'zh',
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // 建站年份
  postsPerPage: 7,
  showAbout: true, // WIP
  showArchive: true, // WIP // 社交链接
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  }, 
  notionPageId: process.env.NOTION_PAGE_ID,
  comment: { // support provider: gitalk
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    }
  }
}

export default BLOG