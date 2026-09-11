(() => {
  'use strict';
  const C = window.SITE_CONFIG;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const E = escape;
  const safeUrl = value => /^(https?:\/\/|\/(?!\/))/.test(value || '') ? E(value) : '';
  if (/^#[0-9a-f]{6}$/i.test(C.accent)) document.documentElement.style.setProperty('--accent', C.accent);
  const icons = {
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
    brand: '<path d="m12 3 9 5v8l-9 5-9-5V8l9-5Zm0 0v18M3 8l9 5 9-5"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    signal: '<path d="M4 20v-5m5 5V9m6 11V5m5 15V2"/>',
    people: '<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v2"/>',
    settings: '<path d="m15 3-3 3 3 3 3-3a6 6 0 0 1-7 8l-7 7-3-3 7-7a6 6 0 0 1 7-8Z"/>',
    trophy: '<path d="M8 3h8v7a4 4 0 0 1-8 0V3Zm0 2H3v3a5 5 0 0 0 5 5m8-8h5v3a5 5 0 0 1-5 5m-4 1v6m-4 1h8"/>',
    game: '<path d="M8 6h8c3 0 5 4 5 9s-3 4-5 1H8c-2 3-5 4-5-1S5 6 8 6Z"/><path d="M6 10h5m-2.5-2.5v5m7-2.5h.01m3 2h.01"/>',
    phone: '<path d="m5 3 4 4-2 3a16 16 0 0 0 7 7l3-2 4 4c-1 3-4 3-6 2A23 23 0 0 1 3 9C2 6 2 4 5 3Z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.arrow}</svg>`;
  const routes = [['/','主页'], ['/about','关于我们'], ['/shop','店铺展示'], ['/teamwork','合作联营'], ['/contact','联系我们']];
  const route = location.pathname.replace(/\/+$/, '').replace(/\/index\.html$/, '') || '/';
  const activeRoute = routes.some(([href]) => href === route) ? route : '/404';
  const brand = (large=false) => `<span class="brand ${large?'brand-large':''}"><span class="brand-mark" aria-hidden="true">77</span><span class="brand-name">${E(C.brand)}<small>${E(C.brandEnglish)} · ESPORTS HOTEL</small></span></span>`;
  const button = (text, href, secondary=false) => `<a class="button ${secondary?'button-outline':''}" href="${href}">${text}${icon('arrow')}</a>`;
  const heading = (en, zh, description='') => `<div class="section-heading"><span class="eyebrow">${en}</span><h2>${zh}</h2>${description?`<p>${description}</p>`:''}</div>`;
  const qr = (url,title) => url ? `<div class="qr-card"><img src="${safeUrl(url)}" alt="${title}"/><span>${title}</span></div>` : '';
  const contactLink = C.contact.phone ? `<a href="tel:${E(C.contact.phone.replace(/[^+\d-]/g,''))}" class="header-contact">${icon('phone')}${E(C.contact.phone)}</a>` : `<a href="/contact" class="header-contact">${icon('phone')}联营合作咨询</a>`;
  const header = `<header class="header"><div class="wrap header-inner"><a href="/" class="brand-link" aria-label="${E(C.brand)}首页">${brand()}</a><nav id="main-nav" aria-label="主导航">${routes.map(([href,label])=>`<a href="${href}" ${href===activeRoute?'class="active" aria-current="page"':''}>${label}</a>`).join('')}</nav>${contactLink}<button class="menu-toggle" aria-label="打开导航" aria-controls="main-nav" aria-expanded="false"><span></span><span></span></button></div></header>`;
  const footer = `<footer class="footer"><div class="wrap"><div class="footer-top"><div><span class="eyebrow">LET'S PLAY TOGETHER</span><h2>每一次相聚，都值得尽兴。</h2></div>${button('与我们合作','/contact')}</div><div class="footer-main"><div class="footer-brand"><a href="/" aria-label="${E(C.brand)}首页">${brand(true)}</a><p>${E(C.company)}</p><span>精品住宿 × 专业电竞 × 年轻生活</span></div><div class="footer-links"><strong>探索柒柒游</strong>${routes.slice(1).map(([href,label])=>`<a href="${href}">${label}</a>`).join('')}</div><div class="footer-contact"><strong>合作咨询</strong>${C.contact.phone?`<a href="tel:${E(C.contact.phone.replace(/[^+\d-]/g,''))}">${icon('phone')}${E(C.contact.phone)}</a>`:'<p>咨询方式即将公布</p>'}${C.contact.address?`<p>${icon('pin')}${E(C.contact.address)}</p>`:'<p>携手物业伙伴，共创电竞空间</p>'}${C.contact.email?`<a href="mailto:${E(C.contact.email)}">${E(C.contact.email)}</a>`:''}${qr(C.contact.wechatImage,'企业微信')}</div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${E(C.company)} 版权所有</span>${C.contact.icp?`<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">${E(C.contact.icp)}</a>`:'<span>QIQIYOU ESPORTS HOTEL</span>'}</div></div></footer>`;
  const imageNote = '<span class="image-note">空间概念示意 · 非实拍门店</span>';
  function home() {
    return `<section class="hero home-hero"><img class="hero-image" src="${safeUrl(C.hero.image)}" alt="暖橙色电竞双床客房概念空间" fetchpriority="high"/><div class="hero-shade"></div><div class="wrap hero-content"><div class="hero-overline"><span class="slash-mark">///</span><span>${E(C.hero.eyebrow)}</span></div><h1>${E(C.hero.line1)}<br/><em>${E(C.hero.line2)}</em></h1><p class="hero-subtitle">${E(C.hero.subtitle)}</p><p class="hero-description">${E(C.hero.description)}</p><div class="hero-actions">${button('探索柒柒游','/about')}${button('开启联营合作','/teamwork',true)}</div><div class="hero-bottom"><span class="hero-scroll">SCROLL TO EXPLORE <span>↓</span></span><div class="hero-caption"><span>01 / 02</span><div>精品电竞空间<small>BOUTIQUE ESPORTS EXPERIENCE</small></div><button class="hero-next" aria-label="切换首页空间图片">${icon('arrow')}</button></div></div></div>${imageNote}</section>
    <section class="brand-strip"><div class="wrap brand-strip-inner"><span class="strip-title">热爱有处安放<span>PLAY. STAY. CONNECT.</span></span><p>${E(C.introduction)}</p><a href="/teamwork">品牌 · 设备 · 运营${icon('arrow')}</a></div></section>
    <section class="intro-section"><div class="wrap">${heading('MORE THAN A HOTEL','不止一场游戏，<br/>更是一种相聚方式。')}<div class="story-composition"><article class="story-copy"><span class="quote-mark">“</span><h3>${E(C.brandStatement)}</h3><p>${E(C.brandDescription)}</p><p class="orange-text">把热爱融入空间，让相聚成为日常。<br/>从玩家体验出发，认真做好每一个细节。</p><a class="text-link" href="/about">了解我们的品牌${icon('arrow')}</a></article><div class="story-visual"><img id="story-image" src="${safeUrl(C.gallery[1].image)}" alt="电竞与社交休闲融合的空间概念" loading="lazy"/><div class="story-visual-caption"><span id="story-label">与好友同频</span><small id="story-en">PLAY TOGETHER</small></div><div class="story-controls"><button data-story="prev" aria-label="上一张空间图片">←</button><button data-story="next" aria-label="下一张空间图片">→</button><span class="story-dots"><i class="active"></i><i></i></span></div>${imageNote}</div></div></div></section>
    <section class="fields-section"><div class="wrap">${heading('OUR BUSINESS','涉足领域','从空间落地到持续运营，与合作伙伴站在一起。')}<div class="field-grid">${[
      ['01','电竞酒店联营','ESPORTS HOTEL', '品牌与空间共同生长，打造精品电竞住宿体验。','monitor','/teamwork'],
      ['02','门店运营服务','HOTEL OPERATION','从服务标准到线上流量，让日常经营更有章法。','signal','/teamwork#services'],
      ['03','电竞生活方式','GAMING LIFESTYLE','以赛事、社群和主题活动，连接年轻人的热爱。','game','/about#vision']
    ].map(([n,title,en,text,i,href])=>`<a class="field-card" href="${href}"><div class="field-top"><span>${n}</span>${icon(i)}</div><span class="eyebrow">${en}</span><h3>${title}</h3><p>${text}</p><span class="field-arrow">${icon('arrow')}</span></a>`).join('')}</div></div></section>
    <section class="cooperate-banner"><img src="${safeUrl(C.gallery[0].image)}" alt="精品电竞客房概念" loading="lazy"/><div class="wrap"><span class="eyebrow">GROW WITH QIQIYOU</span><h2>想过拥有一家<br/>自己的电竞酒店吗？</h2><p>让您的空间，与我们的品牌和运营相遇。</p>${button('了解联营模式','/teamwork')}</div></section>`;
  }
  function about() {
    return `<section class="hero inner-hero about-hero"><img class="hero-image" src="${safeUrl(C.gallery[1].image)}" alt="柒柒游电竞社交空间概念"/><div class="hero-shade"></div><div class="wrap hero-content"><span class="eyebrow">THE ORIGIN OF <b>QIQIYOU</b></span><h1>因热爱，<br/>而相聚。</h1><p class="hero-subtitle">柒柒游品牌故事</p><div class="about-intro"><p>${E(C.introduction)}</p><p>我们关注玩家的住宿体验，也关注业主的长期经营。通过系统化联营服务，连接空间、设备、团队与用户。</p></div></div>${imageNote}</section>
    <section class="about-position"><div class="wrap two-column"><div>${heading('WHO WE ARE','专注电竞，<br/>认真做好酒店。')}<p class="large-copy">${E(C.positioning)}</p></div><div class="body-copy"><h3>${E(C.company)}</h3><p>${E(C.brandDescription)}</p><p>以品牌授权、标准化电竞硬件、全域运营与门店支持为核心，为传统单体酒店、闲置公寓和转型网咖提供联营方案。</p><p>从筹建到日常运营，我们与业主保持长期协作，让品牌、服务与空间形成统一的体验。</p></div></div></section>
    <section class="vision-section" id="vision"><div class="wrap">${heading('OUR PHILOSOPHY','热爱同频，长期同行。')}<div class="values-grid">${[['01','为玩家','专业电竞，舒适入住。关注设备表现，更关注睡眠、卫生和服务。'],['02','为业主','分工明确，持续协作。以品牌、硬件、运营与流量体系支持门店。'],['03','为伙伴','共同建设，稳步成长。从标杆项目打磨开始，沉淀可复制的服务标准。']].map(([n,t,d])=>`<article><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></div></section>
    <section class="about-ending"><div class="wrap"><span class="eyebrow">PLAY. STAY. CONNECT.</span><h2>从一份热爱，<br/>到一群人的生活方式。</h2>${button('探索空间','/shop')}</div></section>`;
  }
  function shop() {
    const first = C.gallery[0];
    return `<section class="shop-stage"><img id="gallery-bg" class="gallery-bg" src="${safeUrl(first.image)}" alt=""/><div class="wrap shop-layout"><aside class="shop-sidebar"><span class="eyebrow">OUR SPACES</span><h1>店铺展示</h1><p>电竞酒店空间概念</p><div class="short-line"></div><div class="gallery-menu" role="tablist" aria-label="空间类型" aria-orientation="vertical">${C.gallery.map((item,index)=>`<button role="tab" aria-controls="gallery-panel" id="tab-${E(item.id)}" aria-selected="${index===0}" tabindex="${index===0?0:-1}" data-gallery="${index}"><strong>${E(item.category)}</strong><span>${E(item.title)}</span></button>`).join('')}</div><span class="gallery-disclaimer">目前展示为设计概念，<br/>实际门店信息将陆续更新。</span></aside><div class="gallery-panel" id="gallery-panel" role="tabpanel" aria-labelledby="tab-${E(first.id)}"><div class="gallery-brand-tabs"><span>${E(C.brand)}<small>ESPORTS HOTEL</small></span><span>精品住宿</span><span>电竞社交</span></div><div class="gallery-collage"><button class="gallery-photo main-photo" data-lightbox="main" aria-label="放大空间图片"><img id="gallery-main" src="${safeUrl(first.image)}" alt="${E(first.title)}概念示意"/><span>查看大图 ＋</span></button><button class="gallery-photo detail-photo" data-lightbox="detail" aria-label="放大空间细节"><img id="gallery-detail" src="${safeUrl(first.image)}" alt="${E(first.title)}空间细节裁切"/></button><div class="gallery-number">0<span id="gallery-count">1</span></div></div><div class="gallery-info"><div><span class="eyebrow" id="gallery-subtitle">${E(first.subtitle)}</span><h2 id="gallery-title">${E(first.title)}</h2></div><span class="concept-label">空间概念示意</span></div><p id="gallery-description">${E(first.description)}</p><div class="gallery-tags" id="gallery-tags">${first.tags.map(tag=>`<span>${E(tag)}</span>`).join('')}</div></div></div></section><section class="shop-followup"><div class="wrap"><div><span class="eyebrow">YOUR NEXT CHAPTER</span><h2>下一个空间，期待与你共同打造。</h2></div>${button('了解联营合作','/teamwork')}</div></section><dialog class="lightbox" aria-label="空间图片预览"><button class="lightbox-close" aria-label="关闭图片预览">${icon('close')}</button><img id="lightbox-image" src="${safeUrl(first.image)}" alt="${E(first.title)}概念示意"/><p id="lightbox-caption">${E(first.title)} · 空间概念示意，非实拍门店</p></dialog>`;
  }
  function teamwork() {
    return `<section class="hero inner-hero teamwork-hero"><img class="hero-image" src="${safeUrl(C.gallery[0].image)}" alt="电竞酒店联营空间概念"/><div class="hero-shade"></div><div class="wrap hero-content"><span class="eyebrow">PARTNER WITH QIQIYOU</span><h1>${E(C.cooperation.title).replace("，", "，<br/>")}</h1><p class="hero-subtitle"><b>TOGETHER</b> · FOR THE LONG RUN</p><p class="hero-description">${E(C.cooperation.description)}</p>${button('探索合作方案','#model')}<div class="color-block"><strong>柒柒游橙</strong><span>热爱 · 专注 · 同行</span><small>${E(C.accent.toUpperCase())}</small></div></div>${imageNote}</section>
    <section class="specification-strip"><div class="wrap">${[['8','项','核心服务体系'],['15–20','间','参考客房规模'],['4','类','主要业务板块'],['5','步','合作落地流程']].map(([n,u,t])=>`<div><strong>${n}<small>${u}</small></strong><span>${t}</span></div>`).join('')}</div></section>
    <section class="model-section" id="model"><div class="wrap">${heading('CO-OPERATION MODEL','资源互补，长期联营。','以清晰分工建立协作，让品牌服务贯穿门店经营。')}<div class="responsibility-grid"><article><span class="eyebrow">PROPERTY PARTNER</span><h3>业主伙伴</h3><p>提供空间与基础经营条件</p><ul>${C.cooperation.owner.map(x=>`<li>${icon('check')}${E(x)}</li>`).join('')}</ul></article><div class="model-plus">+</div><article><span class="eyebrow">QIQIYOU BRAND</span><h3>柒柒游</h3><p>输出品牌、设备与运营支持</p><ul>${C.cooperation.brand.map(x=>`<li>${icon('check')}${E(x)}</li>`).join('')}</ul></article></div><p class="model-note">具体投入、服务范围、分成方式与合作期限，根据项目评估及双方协议确定。</p></div></section>
    <section class="services-section" id="services"><div class="wrap">${heading('8 CORE SERVICES','八大服务，贯穿经营全程。')}<div class="services-grid">${C.services.map((s,i)=>`<article>${icon(s.icon)}<span class="service-number">0${i+1}</span><h3>${E(s.title)}</h3><span class="eyebrow">${E(s.english)}</span><p>${E(s.text)}</p></article>`).join('')}</div></div></section>
    <section class="process-section"><div class="wrap">${heading('GET STARTED','从一次沟通，到携手开业。')}<ol class="process-list">${C.cooperation.steps.map(([title,description],i)=>`<li><span>0${i+1}</span><h3>${E(title)}</h3><p>${E(description)}</p></li>`).join('')}</ol><div class="process-bottom"><p>已有酒店、闲置物业，或正在筹备新项目？<br/>带着您的想法，与我们聊聊。</p>${button('合作咨询','/contact')}</div></div></section>`;
  }
  function contact() {
    return `<section class="hero inner-hero contact-hero"><img class="hero-image" src="${safeUrl(C.gallery[1].image)}" alt="电竞酒店会客休闲空间概念"/><div class="hero-shade"></div><div class="wrap hero-content">${brand(true)}<span class="eyebrow">LET'S TALK</span><h1>让下一次合作，<br/>从这里开始。</h1><p class="hero-subtitle">期待与你，共同开启电竞酒店新篇章。</p>${C.contact.phone?`<a class="contact-phone" href="tel:${E(C.contact.phone.replace(/[^+\d-]/g,''))}">${icon('phone')}${E(C.contact.phone)}</a>`:`<a class="contact-phone" href="#contact-details">联营合作咨询${icon('arrow')}</a>`}</div>${imageNote}</section>
    <section class="contact-details" id="contact-details"><div class="wrap two-column"><div>${heading('CONTACT INFORMATION','联系我们')}<h3>${E(C.company)}</h3><dl><div><dt>咨询电话</dt><dd>${C.contact.phone?`<a href="tel:${E(C.contact.phone.replace(/[^+\d-]/g,''))}">${E(C.contact.phone)}</a>`:'即将公布'}</dd></div>${C.contact.person?`<div><dt>合作联系人</dt><dd>${E(C.contact.person)}</dd></div>`:''}<div><dt>办公地址</dt><dd>${C.contact.address?E(C.contact.address):'详细地址即将公布'}</dd></div>${C.contact.email?`<div><dt>商务邮箱</dt><dd><a href="mailto:${E(C.contact.email)}">${E(C.contact.email)}</a></dd></div>`:''}</dl>${C.contact.mapUrl?button('查看地图',safeUrl(C.contact.mapUrl),true):''}<div class="qr-group">${qr(C.contact.wechatImage,'企业微信 · 合作咨询')}${qr(C.contact.officialAccountImage,'官方公众号')}</div></div><aside class="contact-preparation"><span class="eyebrow">BEFORE WE MEET</span><h3>聊聊您的空间与想法</h3><p>为了更好地了解项目，沟通时可以准备以下信息。</p><ul><li><span>01</span><div><strong>项目位置</strong><p>所在城市、商圈与周边客群</p></div></li><li><span>02</span><div><strong>物业条件</strong><p>可用面积、现有客房与装修情况</p></div></li><li><span>03</span><div><strong>合作意向</strong><p>计划启动时间与所需服务</p></div></li></ul></aside></div></section>`;
  }
  const views = {'/':home,'/about':about,'/shop':shop,'/teamwork':teamwork,'/contact':contact};
  document.getElementById('app').innerHTML = header + `<main id="main">${views[activeRoute]?views[activeRoute]():`<section class="not-found wrap"><span class="eyebrow">404</span><h1>这个页面还没有开场。</h1>${button('返回主页','/')}</section>`}</main>` + footer;
  document.title = (routes.find(([href])=>href===activeRoute)?.[1] || '页面未找到') + '｜' + C.company;
  const menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click',()=>{const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open?'关闭导航':'打开导航'); document.querySelector('.header').classList.toggle('menu-open',open);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && menu.getAttribute('aria-expanded')==='true')menu.click();});
  if(activeRoute==='/') {
    let slide=0, story=0;
    const next = document.querySelector('.hero-next');
    next.addEventListener('click',()=>{
      slide = (slide+1)%2;
      const item = C.gallery[slide];
      const img=document.querySelector('.home-hero .hero-image'); img.src=item.image;img.alt=item.title+'概念示意';
      document.querySelector('.hero-caption > span').textContent=`0${slide+1} / 02`;
      document.querySelector('.hero-caption > div').innerHTML=slide?'好友组队空间<small>PLAY TOGETHER · STAY TOGETHER</small>':'精品电竞空间<small>BOUTIQUE ESPORTS EXPERIENCE</small>';
    });
    document.querySelectorAll('[data-story]').forEach(b=>b.addEventListener('click',()=>{
      story=(story+1)%2; document.getElementById('story-image').src=C.gallery[story?0:1].image;
      document.getElementById('story-label').textContent=story?'让热爱安放':'与好友同频';
      document.getElementById('story-en').textContent=story?'STAY IN COMFORT':'PLAY TOGETHER';
      document.querySelectorAll('.story-dots i').forEach((dot,i)=>dot.classList.toggle('active',i===story));
    }));
  }
  if(activeRoute==='/shop') {
    let selected=0;
    const tabs=[...document.querySelectorAll('[data-gallery]')];
    function select(index) {
      selected=index; const item=C.gallery[index];
      tabs.forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index)); b.tabIndex=i===index?0:-1;});
      document.getElementById('gallery-panel').setAttribute('aria-labelledby','tab-'+item.id);
      ['gallery-bg','gallery-main','gallery-detail'].forEach(id=>document.getElementById(id).src=item.image);
      document.getElementById('gallery-main').alt=item.title+'概念示意';
      document.getElementById('gallery-detail').alt=item.title+'空间细节裁切';
      document.getElementById('gallery-title').textContent=item.title;
      document.getElementById('gallery-subtitle').textContent=item.subtitle;
      document.getElementById('gallery-description').textContent=item.description;
      document.getElementById('gallery-count').textContent=index+1;
      document.getElementById('gallery-tags').innerHTML=item.tags.map(t=>`<span>${E(t)}</span>`).join('');
    }
    tabs.forEach((b,i)=>{b.addEventListener('click',()=>select(i));b.addEventListener('keydown',e=>{let next=i;if(['ArrowDown','ArrowRight'].includes(e.key))next=(i+1)%tabs.length;else if(['ArrowUp','ArrowLeft'].includes(e.key))next=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();select(next);tabs[next].focus();});});
    const dialog=document.querySelector('.lightbox');
    document.querySelectorAll('[data-lightbox]').forEach(b=>b.addEventListener('click',()=>{const item=C.gallery[selected];document.getElementById('lightbox-image').src=item.image;document.getElementById('lightbox-image').alt=item.title+'概念示意';document.getElementById('lightbox-caption').textContent=item.title+' · 空间概念示意，非实拍门店';dialog.showModal();}));
    document.querySelector('.lightbox-close').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  }
  if(location.hash) requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView());
})();
