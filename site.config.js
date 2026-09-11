// 官网内容配置：修改后保存并刷新页面即可。图片放入 assets 文件夹。
// 留空的电话、地址、二维码和备案号不会伪装成真实资料。
window.SITE_CONFIG = {
  company: '四川柒柒游酒店管理有限公司',
  brand: '柒柒游',
  brandEnglish: 'QIQIYOU',
  accent: '#ff480d',
  contact: {
    phone: '',
    person: '',
    email: '',
    address: '',
    wechatImage: '',
    officialAccountImage: '',
    mapUrl: '',
    icp: ''
  },
  hero: {
    eyebrow: 'QIQIYOU · ESPORTS HOTEL',
    line1: '热爱，即刻',
    line2: '开场。',
    subtitle: '一起开黑，好好入梦。',
    description: '用专业电竞体验与精品住宿空间，连接每一份热爱。',
    image: '/assets/room-twin.jpg'
  },
  introduction: '柒柒游专注中端精品电竞酒店联营服务，面向传统单体酒店、闲置公寓与转型网咖，提供品牌、设备、运营与流量支持，让空间焕发新的可能。',
  positioning: '电竞酒店联营服务商',
  brandStatement: '让玩家尽兴，让经营用心。',
  brandDescription: '从一台电脑的流畅体验，到一间客房的安心入眠，我们把电竞的热爱与酒店的服务放在同样重要的位置。',
  services: [
    { title: '品牌授权', english: 'BRAND', icon: 'brand', text: '统一品牌形象、视觉规范与门店标准，为项目建立清晰的品牌识别。' },
    { title: '硬件与组网', english: 'HARDWARE', icon: 'monitor', text: '电竞硬件选型、设备配置与网络调试，让体验从每一个细节开始。' },
    { title: '标准化运营', english: 'OPERATION', icon: 'grid', text: '覆盖接待、客房、保洁、巡检与客诉处理的标准化服务流程。' },
    { title: '全域流量运营', english: 'MARKETING', icon: 'signal', text: '结合 OTA 平台、短视频内容与私域社群，持续开展门店获客。' },
    { title: '人员培训', english: 'TRAINING', icon: 'people', text: '店长、前台与客房人员分层培训，帮助团队建立专业服务能力。' },
    { title: '设备维保', english: 'MAINTENANCE', icon: 'settings', text: '远程排查、日常巡检与设备迭代规划，支持门店长期稳定运营。' },
    { title: '赛事与活动', english: 'EVENTS', icon: 'trophy', text: '水友赛、主题聚会与赛事观赛，让酒店成为年轻人的相聚之地。' },
    { title: '游戏陪玩服务', english: 'GAMING', icon: 'game', text: '规划标准化游戏组队与陪练服务，拓展电竞住宿的体验场景。' }
  ],
  gallery: [
    { id: 'twin', category: '精品双人', title: '双人电竞客房', subtitle: '双人开黑 · 精品住宿', image: '/assets/room-twin.jpg', description: '电竞与休憩各有空间。以双人游戏位、舒适床品与独立休息区域，营造自在的同行体验。', tags: ['双人游戏位', '舒适睡眠', '独立休憩'] },
    { id: 'party', category: '好友组队', title: '多人电竞空间', subtitle: '好友集结 · 热爱同频', image: '/assets/room-party.jpg', description: '为好友组队与小型聚会而规划的共享电竞空间，将游戏、交流和休闲自然连接。', tags: ['多人游戏位', '社交休闲', '组队体验'] },
    { id: 'social', category: '主题休闲', title: '赛事与社交空间', subtitle: '一起观赛 · 一起热爱', image: '/assets/room-party.jpg', description: '围绕赛事观赛、主题活动与游戏交流，探索住宿之外的年轻生活方式。', tags: ['赛事活动', '休闲会客', '主题聚会'] }
  ],
  cooperation: {
    title: '好空间，遇见好运营。',
    description: '您提供物业与基础配套，我们带来品牌、设备和运营体系。以长期联营，让每一份投入都有人认真对待。',
    owner: ['提供符合项目条件的物业空间', '负责基础装修与场地配套', '配置门店基础工作人员', '配合服务标准与日常经营管理'],
    brand: ['提供品牌形象与门店标准', '电竞硬件及全屋网络方案', '运营体系与线上流量服务', '人员培训、设备维保与活动支持'],
    steps: [
      ['项目沟通', '了解物业条件与合作诉求'],
      ['现场评估', '评估区位、空间与改造条件'],
      ['方案确认', '明确配置、分工与合作细则'],
      ['筹建培训', '设备进场、系统调试与团队培训'],
      ['开业运营', '启动门店运营与持续服务']
    ]
  }
};
