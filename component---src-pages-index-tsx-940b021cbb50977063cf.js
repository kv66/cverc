"use strict";(self.webpackChunkcverc=self.webpackChunkcverc||[]).push([[691],{8725:function(e,t,i){i.d(t,{Z:function(){return m}});var n=i(1082),a=i(3723),o=i(257),r=i(3494),l=i(5900),c=i(5260),d=i(279),s=i(1597),u=r.default.li.withConfig({displayName:"tile-item-hero__TileItemHeroLi",componentId:"sc-1gxk0li-0"})(['font-family:"SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;position:relative;list-style:none;flex-basis:',";width:",";:hover{.gatsby-image-wrapper{filter:brightness(0.8);transform:scale(1.1);}}a{text-decoration:none;}.tile-hero-anchor{background-color:#fff;display:flex;border-radius:16px;overflow:hidden;z-index:0;position:relative;flex-direction:",";width:100%;}.tile__media{width:100%;height:auto;min-height:",";flex-basis:",";flex-shrink:1;position:relative;z-index:0;flex-grow:0;flex-shrink:0;overflow:hidden;.gatsby-image-wrapper{transition:transform 0.4s,filter 0.4s;}@media only screen and (max-width:375px){flex-basis:auto;}}.tile__description{display:flex;flex-direction:column;flex-shrink:0;flex-grow:1;padding:32px;padding:",";justify-content:space-between;flex-basis:0;.tile__category-wrapper{display:flex;gap:10px;margin-bottom:8px;.tile__category{font-size:12px;line-height:1.33337;font-weight:700;padding:5px 8px;border-radius:4px;:hover{background-color:#ddfcfd;}}}.tile__category,.tile__timestamp{color:#6e6e73;font-weight:bold;}.tile__timestamp{margin-top:12px;font-size:14px;line-height:1.28577;font-weight:600;}.tile__headline{font-size:",";line-height:",";font-weight:700;letter-spacing:",";-webkit-line-clamp:",";-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;color:#1d1d1f;font-style:normal;}}"],(function(e){return e.size===l.u.large?"100%":"auto"}),(function(e){return e.size===l.u.medium?"692px":e.size===l.u.small?"472px":e.size===l.u.xSmall?"333px":"980px"}),(function(e){return e.size===l.u.small||e.size===l.u.xSmall?"column":"row"}),(function(e){return e.size===l.u.medium?"255px":e.size===l.u.small||e.size===l.u.xSmall?"auto":"362px"}),(function(e){return e.size===l.u.medium?"453px":e.size===l.u.small?"266px":e.size===l.u.xSmall?"170px":"643px"}),(function(e){return e.size===l.u.medium||e.size===l.u.small||e.size===l.u.xSmall?"24px":"32px"}),(function(e){return e.size===l.u.medium||e.size===l.u.small?"21px":e.size===l.u.xSmall?"19px":"32px"}),(function(e){return e.size===l.u.medium||e.size===l.u.small?1.19048:e.size===l.u.xSmall?1.21053:1.125}),(function(e){return e.size===l.u.medium||e.size===l.u.small?"0.011em":e.size===l.u.xSmall?"0.012em":"0.004em"}),(function(e){return e.size===l.u.large||e.size===l.u.medium?"6":"2"}));function m(e){var t=e.title,i=void 0===t?"default title":t,r=e.link,m=void 0===r?"#":r,f=e.size,h=void 0===f?l.u.large:f,g=e.dateGmt,p=void 0===g?"default dateGmt":g,w=e.categoryNodes,v=e.iGatsbyImageData,x=(0,s.Z)(v);i=(0,d.Z)(""+i);var b=(0,c.Z)(""+p);return o.default.createElement(u,{role:"listitem",className:"tile-item item-hero nr-scroll-animation "+h,size:h},o.default.createElement(n.Link,{to:m,className:"tile tile-hero medium-load small-load large-loaded tile-hero-anchor","aria-label":i+" - categories - 发表时间 "+b,"data-analytics-title":"PHOTOS"},o.default.createElement("div",{className:"tile__media","aria-hidden":"true"},o.default.createElement(a.G,{image:x,alt:"Featured image for post: "+i})),o.default.createElement("div",{className:"tile__description","aria-hidden":"true"},o.default.createElement("div",{className:"tile__head"},o.default.createElement("div",{className:"tile__category-wrapper"},null==w?void 0:w.map((function(e){return o.default.createElement(n.Link,{className:"tile__category",to:""+(null==e?void 0:e.slugPath)},"#"+(null==e?void 0:e.name))}))),o.default.createElement("div",{className:"tile__headline"},i)),o.default.createElement("time",{className:"tile__timestamp icon-hide icon icon-before icon-clock",dateTime:""+p},b))))}},9665:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(257),a=i(3494),o=i(9998),r=i(5900),l=i(4513),c=a.default.div.withConfig({displayName:"tile-item-simple-list__TileItemSimpleListDiv",componentId:"sc-1kumi9m-0"})(["margin-left:auto;margin-right:auto;width:",";max-width:",";"," ul{padding-inline-start:0px;display:flex;flex-flow:row wrap;align-items:stretch;justify-content:space-between;justify-content:",";margin:0;row-gap:32px;}"],(function(e){return e.windowWidth&&(e.windowWidth<734?"87.5%":e.windowWidth<1068?"692px":"980px")}),(function(e){return e.windowWidth&&e.windowWidth<734&&"366px"}),(function(e){return e.windowWidth&&e.windowWidth>=1068&&(0,a.css)([".xSmall{width:303px;}"])}),(function(e){return e.windowWidth&&e.windowWidth<734?"center":"space-between"}));function d(e){var t=e.wpPostList,i=(0,l.Z)(),a=i.width,d=t.length;return n.default.createElement(c,{windowWidth:a},n.default.createElement("ul",{role:"list"},t.map((function(e,t){var a,l,c,s,u,m=r.u.large,f=!0;return t===d-1&&(f=!1),void 0!==i.width&&(i.width>1068?(m=r.u.large,t===d-2&&(f=!1)):m=i.width<734?r.u.small:r.u.medium),n.default.createElement(o.Z,{key:t,title:e.title,link:e.slugPath,dateGmt:e.dateGmt,iGatsbyImageData:null===(a=e.featuredImage)||void 0===a||null===(l=a.node)||void 0===l||null===(c=l.localFile)||void 0===c||null===(s=c.childImageSharp)||void 0===s?void 0:s.gatsbyImageData,categoryNodes:null===(u=e.categories)||void 0===u?void 0:u.nodes,size:m,hasBottomBorder:f})}))))}},9998:function(e,t,i){i.d(t,{Z:function(){return m}});var n=i(1082),a=i(3723),o=i(257),r=i(3494),l=i(5900),c=i(5260),d=i(279),s=i(1597),u=r.default.li.withConfig({displayName:"tile-item-simple__TileItemSimpleLi",componentId:"sc-1qg80wl-0"})(['font-family:"SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;position:relative;list-style:none;width:',";border-bottom:",";padding-bottom:",";:hover{.gatsby-image-wrapper{filter:brightness(0.8);transform:scale(1.1);}}a{text-decoration:none;}.tile-hero-anchor{display:flex;overflow:hidden;z-index:0;position:relative;flex-direction:row;width:100%;}.tile__media{border-radius:",";width:",";height:",";min-height:auto;flex-basis:auto;flex-shrink:1;position:relative;z-index:0;flex-grow:0;flex-shrink:0;overflow:hidden;.gatsby-image-wrapper{height:100%;transition:transform 0.4s,filter 0.4s;}}.tile__description{display:flex;flex-direction:column;flex-shrink:0;flex-grow:1;padding:0 0 0 24px;justify-content:center;flex-basis:0;.tile__category-wrapper{display:flex;gap:10px;margin-bottom:4px;.tile__category{font-size:12px;line-height:1.33337;font-weight:700;:hover{color:#06c;}}}.tile__category,.tile__timestamp{color:#6e6e73;font-weight:bold;}.tile__timestamp{margin-top:8px;font-size:14px;line-height:1.28577;font-weight:600;}.tile__headline{font-size:17px;line-height:1.23;font-weight:700;letter-spacing:",";-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;color:#1d1d1f;font-style:normal;}}"],(function(e){return e.size===l.u.large?"457px":"100%"}),(function(e){return e.hasBottomBorder&&"1px solid #d0d0d0"}),(function(e){return e.size===l.u.large?"32px":"24px"}),(function(e){return e.size===l.u.small?"12px":"16px"}),(function(e){return e.size===l.u.small?"105px":"132px"}),(function(e){return e.size===l.u.small?"105px":"132px"}),(function(e){return e.size===l.u.medium||e.size===l.u.small?"0.011em":e.size===l.u.xSmall?"0.012em":"0.004em"}));function m(e){var t=e.title,i=void 0===t?"default title":t,r=e.link,m=void 0===r?"#":r,f=e.size,h=void 0===f?l.u.large:f,g=e.hasBottomBorder,p=void 0===g||g,w=e.dateGmt,v=void 0===w?"default dateGmt":w,x=e.categoryNodes,b=e.iGatsbyImageData,y=(0,s.Z)(b);i=(0,d.Z)(""+i);var S=(0,c.Z)(""+v);return o.default.createElement(u,{role:"listitem",className:"tile-item item-hero nr-scroll-animation",size:h,hasBottomBorder:p},o.default.createElement(n.Link,{to:m,className:"tile tile-hero medium-load small-load large-loaded tile-hero-anchor","aria-label":i+" - categories - 发表时间 "+S,"data-analytics-title":"PHOTOS"},o.default.createElement("div",{className:"tile__media","aria-hidden":"true"},o.default.createElement(a.G,{image:y,alt:"Featured image for post: "+i})),o.default.createElement("div",{className:"tile__description","aria-hidden":"true"},o.default.createElement("div",{className:"tile__head"},o.default.createElement("div",{className:"tile__category-wrapper"},null==x?void 0:x.map((function(e){return o.default.createElement(n.Link,{className:"tile__category",to:""+(null==e?void 0:e.slugPath)},"#"+(null==e?void 0:e.name))}))),o.default.createElement("div",{className:"tile__headline"},i)),o.default.createElement("time",{className:"tile__timestamp icon-hide icon icon-before icon-clock",dateTime:""+v},S))))}},5900:function(e,t,i){var n;i.d(t,{u:function(){return n}}),function(e){e.large="large",e.medium="medium",e.small="small",e.xSmall="xSmall"}(n||(n={}))},2884:function(e,t,i){i.d(t,{O:function(){return a}});var n=i(1082),a=function(){var e,t,i;return null===(e=(0,n.useStaticQuery)("2341268420").wpMediaItem)||void 0===e||null===(t=e.localFile)||void 0===t||null===(i=t.childImageSharp)||void 0===i?void 0:i.gatsbyImageData}},1597:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(2884);function a(e){return e||(0,n.O)()}},4513:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(257);function a(){var e=(0,n.useState)({width:void 0,height:void 0}),t=e[0],i=e[1];return(0,n.useEffect)((function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},346:function(e,t,i){i.r(t),i.d(t,{Head:function(){return O},default:function(){return F}});var n=i(257),a=i(3494),o=i(9174),r=i(1082),l=i(3723),c=i(2884),d=a.default.section.withConfig({displayName:"hero-sec__Section",componentId:"sc-v31zns-0"})(["width:100%;.gatsby-image-wrapper{img{transition:transform 0.4s,filter 0.4s;}}:hover{.gatsby-image-wrapper{img{filter:brightness(0.8);transform:scale(1.1);}}}.anchor-wrapper{height:500px;display:grid;grid-template-columns:auto minmax(10px,1000px) auto;grid-template-rows:2fr 1fr;background-color:",";.title-div{grid-area:2 / 2 / 3 / 3;align-self:center;z-index:1;.title{text-align:center;line-height:1.5em;color:white;margin:0;padding:50px 30px;font-size:28px;letter-spacing:3px;}.titleWrapper{background:linear-gradient( rgba(0,0,0,0),rgba(0,0,0,0.6),rgba(0,0,0,0) );}.titleBg{background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8));max-width:1000px;}}> .image{justify-self:center;grid-area:1 / 2 / 3 / 3;max-width:1000px;}}"],(function(e){return e.bgColor})),s=function(){var e,t,i,a,o,s,u,m,f=(0,r.useStaticQuery)("1812278663"),h=f.allWpPost.nodes[0].title,g=f.allWpPost.nodes[0].slugPath,p=null===(e=f.allWpPost.nodes[0].featuredImage)||void 0===e||null===(t=e.node)||void 0===t||null===(i=t.localFile)||void 0===i||null===(a=i.childImageSharp)||void 0===a?void 0:a.gatsbyImageData.backgroundColor,w=(0,l.c)(null===(o=f.allWpPost.nodes[0].featuredImage)||void 0===o||null===(s=o.node)||void 0===s||null===(u=s.localFile)||void 0===u?void 0:u.childImageSharp);return m=w||(0,c.O)(),n.createElement(d,{bgColor:p},n.createElement(r.Link,{to:g||"#",className:"anchor-wrapper"},n.createElement(l.G,{className:"image",image:m,alt:""+h}),n.createElement("div",{className:"title-div"},n.createElement("div",{className:"titleWrapper"},n.createElement("h1",{className:"title"},h)))))},u=i(4082),m=a.default.div.withConfig({displayName:"Spacer",componentId:"sc-1nsmjme-0"})(["min-width:","px;min-height:","px;"],(function(e){return e.size}),(function(e){return e.size})),f=i(6787);var h=i(885);function g(e){var t=e.topLeftCornerRadius,i=e.topRightCornerRadius,n=e.bottomRightCornerRadius,a=e.bottomLeftCornerRadius,o=e.width,r=e.height,l={topLeft:-1,topRight:-1,bottomLeft:-1,bottomRight:-1},c={topLeft:t,topRight:i,bottomLeft:a,bottomRight:n};return Object.entries(c).sort((function(e,t){var i=(0,h.Z)(e,2)[1];return(0,h.Z)(t,2)[1]-i})).forEach((function(e){var t=(0,h.Z)(e,2),i=t[0],n=t[1],a=i,d=p[a],s=Math.min.apply(null,d.map((function(e){var t=c[e.corner];if(0===n&&0===t)return 0;var i=l[e.corner],a="top"===e.side||"bottom"===e.side?o:r;return i>=0?a-l[e.corner]:n/(n+t)*a})));l[a]=s,c[a]=Math.min(n,s)})),{topLeft:{radius:c.topLeft,roundingAndSmoothingBudget:l.topLeft},topRight:{radius:c.topRight,roundingAndSmoothingBudget:l.topRight},bottomLeft:{radius:c.bottomLeft,roundingAndSmoothingBudget:l.bottomLeft},bottomRight:{radius:c.bottomRight,roundingAndSmoothingBudget:l.bottomRight}}}var p={topLeft:[{corner:"topRight",side:"top"},{corner:"bottomLeft",side:"left"}],topRight:[{corner:"topLeft",side:"top"},{corner:"bottomRight",side:"right"}],bottomLeft:[{corner:"bottomRight",side:"bottom"},{corner:"topLeft",side:"left"}],bottomRight:[{corner:"bottomLeft",side:"bottom"},{corner:"topRight",side:"right"}]};function w(e){var t=e.cornerRadius,i=e.cornerSmoothing,n=e.preserveSmoothing,a=e.roundingAndSmoothingBudget,o=(1+i)*t;if(!n){var r=a/t-1;i=Math.min(i,r),o=Math.min(o,a)}var l=90*(1-i),c=Math.sin(x(l/2))*t*Math.sqrt(2),d=(90-l)/2,s=45*i,u=t*Math.tan(x(d/2))*Math.cos(x(s)),m=u*Math.tan(x(s)),f=(o-c-u-m)/3,h=2*f;if(n&&o>a){var g=a-m-c-u,p=g-g/6;h=g-(f=Math.min(f,p)),o=Math.min(o,a)}return{a:h,b:f,c:u,d:m,p:o,arcSectionLength:c,cornerRadius:t}}function v(e){var t,i,n,a,o,r,l,c,d=e.width,s=e.height,u=e.topLeftPathParams,m=e.topRightPathParams,f=e.bottomLeftPathParams,h=e.bottomRightPathParams;return"\n    M ".concat(d-m.p," 0\n    ").concat((t=m,i=t.cornerRadius,n=t.a,a=t.b,o=t.c,r=t.d,l=t.p,c=t.arcSectionLength,i?"\n    c ".concat(n," 0 ").concat(n+a," 0 ").concat(n+a+o," ").concat(r,"\n    a ").concat(i," ").concat(i," 0 0 1 ").concat(c," ").concat(c,"\n    c ").concat(r," ").concat(o,"\n        ").concat(r," ").concat(a+o,"\n        ").concat(r," ").concat(n+a+o):"l ".concat(l," 0")),"\n    L ").concat(d," ").concat(s-h.p,"\n    ").concat(function(e){var t=e.cornerRadius,i=e.a,n=e.b,a=e.c,o=e.d,r=e.p,l=e.arcSectionLength;return t?"\n    c 0 ".concat(i,"\n      0 ").concat(i+n,"\n      ").concat(-o," ").concat(i+n+a,"\n    a ").concat(t," ").concat(t," 0 0 1 -").concat(l," ").concat(l,"\n    c ").concat(-a," ").concat(o,"\n      ").concat(-(n+a)," ").concat(o,"\n      ").concat(-(i+n+a)," ").concat(o):"l 0 ".concat(r)}(h),"\n    L ").concat(f.p," ").concat(s,"\n    ").concat(function(e){var t=e.cornerRadius,i=e.a,n=e.b,a=e.c,o=e.d,r=e.p,l=e.arcSectionLength;return t?"\n    c ".concat(-i," 0\n      ").concat(-(i+n)," 0\n      ").concat(-(i+n+a)," ").concat(-o,"\n    a ").concat(t," ").concat(t," 0 0 1 -").concat(l," -").concat(l,"\n    c ").concat(-o," ").concat(-a,"\n      ").concat(-o," ").concat(-(n+a),"\n      ").concat(-o," ").concat(-(i+n+a)):"l ".concat(-r," 0")}(f),"\n    L 0 ").concat(u.p,"\n    ").concat(function(e){var t=e.cornerRadius,i=e.a,n=e.b,a=e.c,o=e.d,r=e.p,l=e.arcSectionLength;return t?"\n    c 0 ".concat(-i,"\n      0 ").concat(-(i+n),"\n      ").concat(o," ").concat(-(i+n+a),"\n    a ").concat(t," ").concat(t," 0 0 1 ").concat(l," -").concat(l,"\n    c ").concat(a," ").concat(-o,"\n      ").concat(n+a," ").concat(-o,"\n      ").concat(i+n+a," ").concat(-o):"l 0 ".concat(-r)}(u),"\n    Z\n  ").replace(/[\t\s\n]+/g," ").trim()}function x(e){return e*Math.PI/180}function b(e){var t,i,n,a,o=e.cornerRadius,r=void 0===o?0:o,l=e.topLeftCornerRadius,c=e.topRightCornerRadius,d=e.bottomRightCornerRadius,s=e.bottomLeftCornerRadius,u=e.cornerSmoothing,m=e.width,f=e.height,h=e.preserveSmoothing,p=void 0!==h&&h;if(s=null!==(n=s)&&void 0!==n?n:r,d=null!==(a=d)&&void 0!==a?a:r,(l=null!==(t=l)&&void 0!==t?t:r)===(c=null!==(i=c)&&void 0!==i?i:r)&&c===d&&d===s&&s===l){var x=Math.min(m,f)/2,b=w({cornerRadius:Math.min(l,x),cornerSmoothing:u,preserveSmoothing:p,roundingAndSmoothingBudget:x});return v({width:m,height:f,topLeftPathParams:b,topRightPathParams:b,bottomLeftPathParams:b,bottomRightPathParams:b})}var y=g({topLeftCornerRadius:l,topRightCornerRadius:c,bottomRightCornerRadius:d,bottomLeftCornerRadius:s,width:m,height:f}),S=y.topLeft,_=y.topRight,z=y.bottomLeft,E=y.bottomRight;return v({width:m,height:f,topLeftPathParams:w({cornerSmoothing:u,preserveSmoothing:p,cornerRadius:S.radius,roundingAndSmoothingBudget:S.roundingAndSmoothingBudget}),topRightPathParams:w({cornerSmoothing:u,preserveSmoothing:p,cornerRadius:_.radius,roundingAndSmoothingBudget:_.roundingAndSmoothingBudget}),bottomRightPathParams:w({cornerSmoothing:u,preserveSmoothing:p,cornerRadius:E.radius,roundingAndSmoothingBudget:E.roundingAndSmoothingBudget}),bottomLeftPathParams:w({cornerSmoothing:u,preserveSmoothing:p,cornerRadius:z.radius,roundingAndSmoothingBudget:z.roundingAndSmoothingBudget})})}var y=["width","height","radius","smoothing","fill","type","children"],S=function(e){var t=e.width,i=void 0===t?200:t,a=e.height,o=void 0===a?200:a,r=e.radius,l=void 0===r?24:r,c=e.smoothing,d=void 0===c?.6:c,s=e.fill,u=void 0===s?"black":s,m=e.type,f=void 0===m?"div":m,h=e.children,g=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,y),p=b({width:i,height:o,cornerRadius:l,cornerSmoothing:d});return"svg"===f?n.default.createElement("svg",Object.assign({},g,{width:i,height:o,xmlns:"http://www.w3.org/2000/svg"}),n.default.createElement("path",{d:p,fill:u})):n.default.createElement("div",Object.assign({},g,{style:{backgroundColor:u,width:i,height:o,clipPath:"path('"+p+"')"}}),h)},_=function(e,t,i){return"perspective(600px) rotateX("+e+"deg) rotateY("+t+"deg) scale("+i+")"};function z(e){var t=e.width,i=e.height,a=e.fill,o=e.disableAnimation,r=e.children,l=(0,n.useRef)(null),c=(0,n.useState)([0,0,1]),d=c[0],s=c[1],u=(0,f.useSpring)({xys:d,config:f.config.wobbly,immediate:o});return n.default.createElement(E,{className:"ani-squircle-rec-wrapper",style:{padding:o?0:10},ref:l,onMouseLeave:function(){s([0,0,1])},onMouseMove:function(e){var t,i=null==l||null===(t=l.current)||void 0===t?void 0:t.getBoundingClientRect();i&&!1===o&&s(function(e,t,i){return[-(t-i.top-i.height/2)/5,(e-i.left-i.width/2)/5,1.1]}(e.clientX,e.clientY,i))}},n.default.createElement(R,{className:"aniDiv",style:{transform:u.xys.to(_)}},n.default.createElement(S,{className:"squircle-recs",width:t,height:i,fill:a,radius:20},r)))}var E=a.default.div.withConfig({displayName:"ani-squircle-rec__Wrapper",componentId:"sc-18zmrc1-0"})(["@media ","{:hover{filter:brightness(1.2);}transition-property:filter;transition-duration:0.25s;}"],o.ct.theme.screen.desktop),R=(0,a.default)(f.animated.div).withConfig({displayName:"ani-squircle-rec__AniSquircleRecDiv",componentId:"sc-18zmrc1-1"})([".squircle-recs{flex:none;display:flex;flex-direction:column;justify-content:center;}"]),k=[{label:"应急中心任务",excerpt:"国家计算机病毒应急处理中心的任务",fill:"#2a6ebd",href:"#"},{label:"应用举报",excerpt:"发现恶意应用程序，在此举报",fill:"#D02525",href:"#"},{label:"检验中心任务",excerpt:"计算机病毒防治产品检验中心的任务",fill:"#4436B2",href:"#"},{label:"取证产品",excerpt:"计算机病毒防治产品销售许可证目录",fill:"#6B5696",href:"#"}];function L(){var e=o.ct.theme.breakpoints.minDesktopWidth,t=(0,n.useState)("undefined"!=typeof window?window.innerWidth:e),i=(t[0],t[1]);return(0,n.useLayoutEffect)((function(){var e=function(){return i(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n.default.createElement(N,null,n.default.createElement(m,{size:P}),k.map((function(e,t){var i=k.length,a=(o.ct.theme.breakpoints.minDesktopWidth-i*P*2)/i,r=a/2;return n.default.createElement(I,{key:t},n.default.createElement(z,{key:t,width:a,height:r,fill:e.fill,disableAnimation:!0},n.default.createElement(C,null,n.default.createElement("h1",null,e.label),n.default.createElement("p",null,e.excerpt))))})),n.default.createElement(m,{size:P}))}var P=10,N=a.default.section.withConfig({displayName:"quick-links-sec__QuickLinksSecDiv",componentId:"sc-16ywtkq-0"})(["width:100%;display:flex;overflow-x:scroll;padding:30px 0;gap:","px;@media ","{justify-content:center;overflow-x:auto;}.squircle-recs{flex:none;display:flex;flex-direction:column;justify-content:center;h1{font-weight:900;font-size:28px;color:white;opacity:0.9;text-align:center;margin:0;}p{font-size:12px;color:white;opacity:0.9;text-align:center;}}"],P,o.ct.theme.screen.desktop),I=a.default.div.withConfig({displayName:"quick-links-sec__AniSquircleRecWrapper",componentId:"sc-16ywtkq-1"})(["cursor:pointer;h1{font-weight:900;font-size:28px;color:white;opacity:0.9;text-align:center;margin:0;}p{font-size:12px;color:white;opacity:0.9;text-align:center;}"]),C=a.default.div.withConfig({displayName:"quick-links-sec__SquircleRecChildren",componentId:"sc-16ywtkq-2"})(["display:flex;flex-direction:column;gap:10px;"]),W=i(4001),B=i(9665),Z=function(){return(0,r.useStaticQuery)("3339521560").allWpPost.nodes},A=i(8725),M=i(5900),q=i(4513),G=a.default.div.withConfig({displayName:"tile-item-hero-list__TileItemHeroListDiv",componentId:"sc-bs0lti-0"})(["margin-left:auto;margin-right:auto;width:",";max-width:",";"," ul{padding-inline-start:0px;display:flex;flex-flow:row wrap;align-items:stretch;justify-content:space-between;justify-content:",";margin:0;row-gap:36px;}"],(function(e){return e.windowWidth&&(e.windowWidth<734?"87.5%":e.windowWidth<1068?"692px":"980px")}),(function(e){return e.windowWidth&&e.windowWidth<734&&"366px"}),(function(e){return e.windowWidth&&e.windowWidth>=1068&&(0,a.css)([".xSmall{width:303px;}"])}),(function(e){return e.windowWidth&&e.windowWidth<734?"center":"space-between"}));function D(e){var t=e.wpPostList,i=(0,q.Z)().width;return n.default.createElement(G,{windowWidth:i},n.default.createElement("ul",{role:"list"},t.map((function(e,t){var a,o,r,l,c,d;return d=M.u.large,void 0!==i&&(i>=1068?d=0===t?M.u.large:[1,2,3,4].includes(t)?M.u.small:M.u.xSmall:i<734?d=M.u.xSmall:i<1068&&(d=0===t?M.u.medium:M.u.xSmall)),n.default.createElement(A.Z,{key:t,title:e.title,link:e.slugPath,dateGmt:e.dateGmt,iGatsbyImageData:null===(a=e.featuredImage)||void 0===a||null===(o=a.node)||void 0===o||null===(r=o.localFile)||void 0===r||null===(l=r.childImageSharp)||void 0===l?void 0:l.gatsbyImageData,categoryNodes:null===(c=e.categories)||void 0===c?void 0:c.nodes,size:d})}))))}var j=a.default.main.withConfig({displayName:"pages__IndexPageMain",componentId:"sc-1dzevgb-0"})(["& > *{filter:grayscale(100%);filter:",";}display:flex;flex-direction:column;align-items:center;gap:40px 20px;"],(function(e){return e.isGreyScale?"grayscale(100%)":"none"})),F=function(){var e=Z();return n.createElement(u.Z,null,n.createElement(j,{isGreyScale:o.ct.theme.mode.greyScale},n.createElement(s,null),n.createElement(D,{wpPostList:e}),n.createElement(B.Z,{wpPostList:e}),n.createElement(L,null)))},O=function(){return n.createElement(W.p,null)}}}]);