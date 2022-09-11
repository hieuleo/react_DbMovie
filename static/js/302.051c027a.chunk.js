"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[302],{3302:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var l=n(2791),r=n(5048),o=n(3144),a=n(136),i=n(8557),c=n(7462),s=n(2257),u=n(1694),p=n.n(u),m=n(1818),d=n(5033),f=(0,l.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),v=n(1113);var y=function(e){var t,n,r=e.popupClassName,o=e.icon,a=e.title,i=e.theme,u=l.useContext(f),d=u.prefixCls,y=u.inlineCollapsed,b=u.antdMenuTheme,h=(0,s.Xl)();if(o){var x=(0,v.l$)(a)&&"span"===a.type;n=l.createElement(l.Fragment,null,(0,v.Tm)(o,{className:p()((0,v.l$)(o)?null===(t=o.props)||void 0===t?void 0:t.className:"","".concat(d,"-item-icon"))}),x?a:l.createElement("span",{className:"".concat(d,"-title-content")},a))}else n=y&&!h.length&&a&&"string"===typeof a?l.createElement("div",{className:"".concat(d,"-inline-collapsed-noicon")},a.charAt(0)):l.createElement("span",{className:"".concat(d,"-title-content")},a);var g=l.useMemo((function(){return(0,c.Z)((0,c.Z)({},u),{firstLevel:!1})}),[u]);return l.createElement(f.Provider,{value:g},l.createElement(s.Wd,(0,c.Z)({},(0,m.Z)(e,["icon"]),{title:n,popupClassName:p()(d,"".concat(d,"-").concat(i||b),r)})))},b=n(4942),h=n(5501),x=n(8529),g=n(6199),C=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n},O=function(e){(0,a.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).renderItem=function(t){var n,r,o=t.siderCollapsed,a=e.context,i=a.prefixCls,u=a.firstLevel,m=a.inlineCollapsed,d=a.direction,f=a.disableMenuItemTitleTooltip,y=e.props,g=y.className,O=y.children,k=e.props,N=k.title,Z=k.icon,j=k.danger,E=C(k,["title","icon","danger"]),w=N;"undefined"===typeof N?w=u?O:"":!1===N&&(w="");var P={title:w};o||m||(P.title=null,P.visible=!1);var M=(0,h.Z)(O).length,I=l.createElement(s.ck,(0,c.Z)({},E,{className:p()((n={},(0,b.Z)(n,"".concat(i,"-item-danger"),j),(0,b.Z)(n,"".concat(i,"-item-only-child"),1===(Z?M+1:M)),n),g),title:"string"===typeof N?N:void 0}),(0,v.Tm)(Z,{className:p()((0,v.l$)(Z)?null===(r=Z.props)||void 0===r?void 0:r.className:"","".concat(i,"-item-icon"))}),e.renderItemChildren(m));return f||(I=l.createElement(x.Z,(0,c.Z)({},P,{placement:"rtl"===d?"left":"right",overlayClassName:"".concat(i,"-inline-collapsed-tooltip")}),I)),I},e}return(0,o.Z)(n,[{key:"renderItemChildren",value:function(e){var t=this.context,n=t.prefixCls,r=t.firstLevel,o=this.props,a=o.icon,i=o.children,c=l.createElement("span",{className:"".concat(n,"-title-content")},i);return(!a||(0,v.l$)(i)&&"span"===i.type)&&i&&e&&r&&"string"===typeof i?l.createElement("div",{className:"".concat(n,"-inline-collapsed-noicon")},i.charAt(0)):c}},{key:"render",value:function(){return l.createElement(g.D.Consumer,null,this.renderItem)}}]),n}(l.Component);O.contextType=f;var k=n(1929),N=n(9464),Z=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n},j=function(e){var t=e.prefixCls,n=e.className,r=e.dashed,o=Z(e,["prefixCls","className","dashed"]),a=(0,l.useContext(k.E_).getPrefixCls)("menu",t),i=p()((0,b.Z)({},"".concat(a,"-item-divider-dashed"),!!r),n);return l.createElement(s.iz,(0,c.Z)({className:i},o))},E=n(1002),w=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n};function P(e){return(e||[]).map((function(e,t){if(e&&"object"===(0,E.Z)(e)){var n=e,r=n.label,o=n.children,a=n.key,i=n.type,u=w(n,["label","children","key","type"]),p=null!==a&&void 0!==a?a:"tmp-".concat(t);return o||"group"===i?"group"===i?l.createElement(s.BW,(0,c.Z)({key:p},u,{title:r}),P(o)):l.createElement(y,(0,c.Z)({key:p},u,{title:r}),P(o)):"divider"===i?l.createElement(j,(0,c.Z)({key:p},u)):l.createElement(O,(0,c.Z)({key:p},u),r)}return null})).filter((function(e){return e}))}function M(e){return l.useMemo((function(){return e?P(e):e}),[e])}var I=l.createContext(null),S=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n},D=(0,l.forwardRef)((function(e,t){var n,r=l.useContext(I)||{},o=l.useContext(k.E_),a=o.getPrefixCls,i=o.getPopupContainer,u=o.direction,y=a(),b=e.prefixCls,h=e.className,x=e.theme,g=void 0===x?"light":x,C=e.expandIcon,O=e._internalDisableMenuItemTitleTooltip,Z=e.inlineCollapsed,j=e.siderCollapsed,E=e.items,w=e.children,P=e.mode,D=e.selectable,U=S(e,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","mode","selectable"]),T=(0,m.Z)(U,["collapsedWidth"]),_=M(E)||w;null===(n=r.validator)||void 0===n||n.call(r,{mode:P});var L,z=r.mode||P,H=null!==D&&void 0!==D?D:r.selectable,W=l.useMemo((function(){return void 0!==j?j:Z}),[Z,j]),$={horizontal:{motionName:"".concat(y,"-slide-up")},inline:N.ZP,other:{motionName:"".concat(y,"-zoom-big")}},A=a("menu",b||r.prefixCls),B=p()("".concat(A,"-").concat(g),h);L="function"===typeof C?C:(0,v.Tm)(C||r.expandIcon,{className:"".concat(A,"-submenu-expand-icon")});var Y=l.useMemo((function(){return{prefixCls:A,inlineCollapsed:W||!1,antdMenuTheme:g,direction:u,firstLevel:!0,disableMenuItemTitleTooltip:O}}),[A,W,g,u,O]);return l.createElement(I.Provider,{value:null},l.createElement(f.Provider,{value:Y},l.createElement(s.ZP,(0,c.Z)({getPopupContainer:i,overflowedIndicator:l.createElement(d.Z,null),overflowedIndicatorPopupClassName:"".concat(A,"-").concat(g),mode:z,selectable:H},T,{inlineCollapsed:W,className:B,prefixCls:A,direction:u,defaultMotions:$,expandIcon:L,ref:t}),_)))})),U=function(e){(0,a.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).focus=function(t){var n;null===(n=e.menu)||void 0===n||n.focus(t)},e}return(0,o.Z)(n,[{key:"render",value:function(){var e=this;return l.createElement(g.D.Consumer,null,(function(t){return l.createElement(D,(0,c.Z)({ref:function(t){e.menu=t}},e.props,t))}))}}]),n}(l.Component);U.Divider=j,U.Item=O,U.SubMenu=y,U.ItemGroup=s.BW;var T=U,_=n(5671),L=n(435),z=n(3504),H=n(6871),W=n(9439);var $={ScrollDown:function(){var e=(0,l.useState)(null),t=(0,W.Z)(e,2),n=t[0],r=t[1];return(0,l.useEffect)((function(){var e=window.pageYOffset,t=function(){var t=window.pageYOffset,l=t>e?"down":"up";l!==n&&(t-e>15||t-e<-3)&&r(l),e=t>0?t:0};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[n]),n}};var A=n.p+"static/media/logo.bf7f470b3821af1da7fa249c87dadea3.svg",B=n(8594),Y=n(184),F=function(){var e=_.Z.Header,t=(0,H.TH)().pathname.replace("/react_DbMovie",""),n=(0,B.a)(),l=n.logout,r=n.user,o=$.ScrollDown(),a=[];return a=null===r?[{key:"/",label:(0,Y.jsx)(z.rU,{className:"link-custom",to:"/react_DbMovie",children:"Home"})},{key:"/Search",label:(0,Y.jsx)(z.rU,{className:"link-custom",to:"/react_DbMovie/Search",children:"Search"})},{key:"/Popular",label:(0,Y.jsx)(z.rU,{className:"link-custom",to:"/react_DbMovie/Popular",children:"Popular"})},{key:"/Upcoming",label:(0,Y.jsx)(z.rU,{className:"link-custom",to:"/react_DbMovie/Upcoming",children:"Up coming"})},{key:"/login",label:(0,Y.jsx)(z.rU,{className:"link-custom",to:"/react_DbMovie/login",children:"Login"})}]:[{key:"",label:(0,Y.jsx)(z.rU,{className:"link-custom",to:"/react_DbMovie",children:"Home"})},{key:"/Search",label:(0,Y.jsx)(z.rU,{className:"link-custom",to:"/react_DbMovie/Search",children:"Search"})},{key:"/Popular",label:(0,Y.jsx)(z.rU,{className:"link-custom",to:"/react_DbMovie/Popular",children:"Popular"})},{key:"/Upcoming",label:(0,Y.jsx)(z.rU,{className:"link-custom",to:"/react_DbMovie/Upcoming",children:"Up coming"})},{key:"/logout",label:(0,Y.jsx)(L.Z,{onClick:function(){return l()},children:"Logout"})}],(0,Y.jsxs)(e,{className:"down"===o?"hidden":"visible",style:{position:"fixed",zIndex:10,width:"100%"},children:[(0,Y.jsx)(z.rU,{to:"/react_DbMovie",children:(0,Y.jsx)("div",{className:"logo",children:(0,Y.jsx)("img",{alt:"logo",src:A})})}),(0,Y.jsx)(T,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[t],items:a})]})},G=l.memo(F)}}]);
//# sourceMappingURL=302.051c027a.chunk.js.map