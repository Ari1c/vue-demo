export function getSubmenuKeys() {
  return menuData.filter((item) => item.children).map((item) => item.key);
}

export const menuData = [
  {
    key: 'main',
    path: '/main',
    name: '首页'
  },
  {
    key: 'pro-solve',
    path: '/solve',
    name: '产品与解决方案',
    children: [
      {
        key: 'pro-micro',
        path: 'mirco',
        name: '产品微观',
        children: [{key: 'pro-detail', path: '/product-detail', name: '详情'}]
      }
    ]
  },
  {
    key: 'pro-feature',
    path: '/feature',
    name: '产品特点'
  },
  {
    key: 'partner',
    path: '/partner',
    name: '合作伙伴'
  },
  {
    key: 'contact us',
    path: '/contact',
    name: '联系我们'
  },
  // {
  //   name: "JWT DEMO",
  //   path: "jwt-demo",
  //   key: "jwtDemo",
  //   children: [
  //     {
  //       name: "新页面登录",
  //       path: "new-page-login",
  //       key: "newPageLogin",
  //     },
  //     {
  //       name: "嵌入云盘登录界面",
  //       path: "nested-login",
  //       key: "nestedLogin",
  //     },
  //     {
  //       name: "自定义登入和登出界面",
  //       path: "custom-login",
  //       key: "customLogin",
  //     },
  //     {
  //       name: "widget界面",
  //       path: "widget",
  //       key: "widget",
  //     },
  //     {
  //       name: "配置中心",
  //       path: "setting",
  //       key: "setting",
  //     },
  //   ],
  // },
];