"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[546],{9705:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(9439),a=n(2791),s=n(6106),i=n(914),c=n.p+"static/media/img1.1600f2826bd80596b28f.jpg",o=n.p+"static/media/img2.8ab5c5c7206c67398cad.jpg",u=n.p+"static/media/img3.15000e3bf89ee840f304.jpg",l=n.p+"static/media/img4.819f748d4696ed2d46e6.jpg",h=n.p+"static/media/img5.7cd75428447bf701dfa4.jpg",d=n.p+"static/media/img6.88e0228aac44e9cdc0fb.jpg",p=n.p+"static/media/img7.50a1f83690a1a8438e47.jpg",f=n.p+"static/media/img8.cdf809417767aac3353e.jpg",g=n(184),m=[c,o,u,l,h,d,p,f],v=function(e){var t=(0,a.useState)(0),n=(0,r.Z)(t,2),c=n[0],o=n[1],u=(0,a.useState)(),l=(0,r.Z)(u,2),h=l[0],d=l[1];return(0,a.useEffect)((function(){var e=Math.floor(8*Math.random());o(e)}),[]),(0,a.useEffect)((function(){d(m[c])}),[c]),(0,g.jsx)(s.Z,{className:"class-title-row",children:(0,g.jsx)(i.Z,{span:24,className:"class-title-col",style:{backgroundImage:"linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url(".concat(h,")")},children:e.children})})},x=a.memo(v)},1683:function(e,t,n){n.r(t);var r=n(2791),a=n(5671),s=n(4455),i=n(184),c=(0,s.ZP)((function(){return n.e(789).then(n.bind(n,2789))})),o=(0,s.ZP)((function(){return n.e(105).then(n.bind(n,6105))})),u=(0,s.ZP)((function(){return n.e(302).then(n.bind(n,3302))})),l=function(e){return(0,i.jsxs)(a.Z,{className:"layout",children:[(0,i.jsx)(u,{}),(0,i.jsx)(o,{children:e.children}),(0,i.jsx)(c,{})]})};t.default=r.memo(l)},8594:function(e,t,n){n.d(t,{H:function(){return h},a:function(){return d}});var r=n(4165),a=n(5861),s=n(9439),i=n(2791),c=n(6871);function o(e){var t=e.username,n=e.password,r=null;return"admin"===t&&"admin"===n&&(r="locationJsonWebTokenFake"),r}var u=n(184),l=(0,i.createContext)(),h=function(e){var t=e.children,n=function(e,t){var n=(0,i.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):(window.localStorage.setItem(e,JSON.stringify(t)),t)}catch(r){return t}})),r=(0,s.Z)(n,2),a=r[0],c=r[1];return[a,function(t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error(n)}c(t)}]}("user_Login",null),h=(0,s.Z)(n,2),d=h[0],p=h[1],f=(0,c.s0)(),g=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=o(t))?(p(n),f("/react_DbMovie/Upcoming",{replace:!0})):alert(" Incorrect useName or passWord !!!");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){p(null),f("/react_DbMovie/login",{replace:!0})},v=(0,i.useMemo)((function(){return{user:d,login:g,logout:m}}),[d]);return(0,u.jsx)(l.Provider,{value:v,children:t})},d=function(){return(0,i.useContext)(l)}},8234:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ie}});var r=n(2791),a=n(3504),s=n(6871),i=n(8594),c=n(184),o=function(e){var t=e.children,n=(0,i.a)().user,r=(0,s.pC)();return null===n?(0,c.jsx)(s.Fg,{to:"/react_DbMovie/login"}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(c.Fragment,{children:t}),r]})},u=n(4165),l=n(5861),h=n(9439);function d(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var p=n(6106),f=n(914),g=n(435),m=n(1683),v=n(9705),x=n(1413),E=n(5717),Z=n(305),I=(n(3037),n(8688),n(6391)),b=n(8361),j=n(9391);function w(e){var t=e.loading,r=e.data,s=e.config,i=e.className,o=I.Z.Meta,u=n(333),l=s;return t?(0,c.jsxs)(E.Z,(0,x.Z)((0,x.Z)({},l),{},{children:[(0,c.jsx)(f.Z,{span:5,children:(0,c.jsx)(b.Z,{active:!0})}),(0,c.jsx)(f.Z,{span:5,children:(0,c.jsx)(b.Z,{active:!0})}),(0,c.jsx)(f.Z,{span:5,children:(0,c.jsx)(b.Z,{active:!0})}),(0,c.jsx)(f.Z,{span:5,children:(0,c.jsx)(b.Z,{active:!0})}),(0,c.jsx)(f.Z,{span:5,children:(0,c.jsx)(b.Z,{active:!0})})]})):(0,c.jsx)(E.Z,(0,x.Z)((0,x.Z)({className:i},l),{},{children:r.map((function(e){return null!==e.backdrop_path&&(0,c.jsx)(f.Z,{className:"Col-Slider-Item",children:(0,c.jsx)(a.rU,{to:"/react_DbMovie/Detail/".concat(u(e.title),"~").concat(e.id),children:(0,c.jsxs)(I.Z,{hoverable:!0,style:{width:240},cover:(0,c.jsx)("img",{alt:"".concat(e.title),src:null===e.poster_path?Z:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path)}),children:[(0,c.jsx)(o,{title:"".concat(e.title),description:"".concat(e.release_date)}),(0,c.jsx)("div",{className:"circular-custom--list",children:(0,c.jsx)(j.Ip,{background:!0,value:10*e.vote_average,text:"".concat(10*e.vote_average,"%"),styles:(0,j.y3)({rotation:0,strokeLinecap:"butt",textSize:"26px",pathTransitionDuration:.5,pathColor:"".concat(10*e.vote_average>70?"#20cf79":"#cfd230"),textColor:"#fff",trailColor:"".concat(10*e.vote_average>70?"#204529":"#413c0e"),backgroundColor:"#081c22"})})}),(0,c.jsxs)("p",{className:"vote-customize",children:["Vote: ",e.vote_count]})]})})},e.id)}))}))}var A=r.memo(w),C=n(4455),y=(0,C.ZP)((function(){return n.e(551).then(n.bind(n,551))})),S=function(){return(0,c.jsx)(p.Z,{children:(0,c.jsxs)(f.Z,{span:24,className:"latest_trailers",children:[(0,c.jsx)("h2",{className:"latest_trailers--header",children:"Latest Trailers"}),(0,c.jsx)(y,{left:"On TV",right:"In Theaters"}),(0,c.jsx)("p",{children:"This panel didn't return any results. Try refreshing it."})]})})},Q=r.memo(S),P=n.p+"static/media/background-community.accbf32a50fcb502fae3.jpg",B=function(e){return(0,c.jsx)(p.Z,{className:"class-comunity-row",children:(0,c.jsx)(f.Z,{span:24,className:"class-comunity-col",style:{backgroundImage:"url(".concat(P,")")},children:e.children})})},R=r.memo(B),D=n(4569),M=n.n(D),O=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(t,n){var r,a,s,i,c,o,l,h,d,p,f,g,m;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date,(a=new Date).setTime(r.getTime()+30*n*24*60*60*1e3),s=(s=r.getDate())<10?"0"+s:s,i=(i=a.getDate())<10?"0"+i:i,c=(c=r.getMonth()+1)<10?"0"+c:c,o=(o=a.getMonth()+1)<10?"0"+o:o,l=r.getFullYear(),h=a.getFullYear(),d="".concat(l,"-").concat(c,"-").concat(s),p="".concat(h,"-").concat(o,"-").concat(i),f="https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(t,"&release_date.gte=").concat(d,"&release_date.lte=").concat(p,"&with_release_type=3|2"),e.next=18,M().get(f);case 18:return g=e.sent,m=200===g.status?g.data:{},e.abrupt("return",m);case 21:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function G(){return(G=(0,l.Z)((0,u.Z)().mark((function e(t){var n,r,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(t),e.next=3,M().get(n);case 3:return r=e.sent,a=200===r.status?r.data:{},e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=(0,l.Z)((0,u.Z)().mark((function e(t){var n,r,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/now_playing?api_key=d4627862d17c429f5b5285fb09aeb150&language=en-US&page=".concat(t),e.next=3,M().get(n);case 3:return r=e.sent,a=200===r.status?r.data:{},e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=(0,l.Z)((0,u.Z)().mark((function e(t,n){var r,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=").concat(n,"&append_to_response=videos,images&include_image_language=").concat(n,",null"),e.next=3,M().get(r);case 3:return a=e.sent,s=200===a.status?a.data:{},e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=(0,l.Z)((0,u.Z)().mark((function e(t){var n,r,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/top_rated?api_key=d4627862d17c429f5b5285fb09aeb150&language=en-US&page=".concat(t),e.next=3,M().get(n);case 3:return r=e.sent,a=200===r.status?r.data:{},e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=(0,l.Z)((0,u.Z)().mark((function e(t,n){var r,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/search/movie?api_key=d4627862d17c429f5b5285fb09aeb150&language=en-US&query=".concat(t,"&page=").concat(n,"&include_adult=true"),e.next=3,M().get(r);case 3:return a=e.sent,s=200===a.status?a.data:{},e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=(0,l.Z)((0,u.Z)().mark((function e(t,n){var r,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/recommendations?api_key=d4627862d17c429f5b5285fb09aeb150&language=en-US&page=").concat(n),e.next=3,M().get(r);case 3:return a=e.sent,s=200===a.status?a.data:{},e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=(0,l.Z)((0,u.Z)().mark((function e(t,n){var r,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=d4627862d17c429f5b5285fb09aeb150&language=").concat(n),e.next=3,M().get(r);case 3:return a=e.sent,s=200===a.status?a.data:{},e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W={getApiOfUpcoming:O,getMoviesDiscover:function(e){return G.apply(this,arguments)},getMoviesNowPlaying:function(e){return L.apply(this,arguments)},getRecommendedSearch:function(e){return U.apply(this,arguments)},getSearchMovie:function(e,t){return Y.apply(this,arguments)},getDetailMovie:function(e,t){return H.apply(this,arguments)},getProposalDetails:function(e,t){return N.apply(this,arguments)},getCastAndCrewDetails:function(e,t){return F.apply(this,arguments)}},k=function(){var e=function(){var e=(0,r.useState)(d()),t=(0,h.Z)(e,2),n=t[0],a=t[1];return(0,r.useEffect)((function(){function e(){a(d())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=e.width,n=(0,r.useState)(0),a=(0,h.Z)(n,2),s=a[0],i=a[1];(0,r.useEffect)((function(){i(t>1300?5:t>1158?4:t>880?3:2)}),[t]),console.log(t);var o={dots:!1,infinite:!0,speed:2e3,slidesToShow:s,slidesToScroll:s,accessibility:!0,autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!0,draggable:!0,swipeToSlide:!0},x=(0,r.useState)([]),E=(0,h.Z)(x,2),Z=E[0],I=E[1],b=(0,r.useState)([]),j=(0,h.Z)(b,2),w=j[0],C=j[1],y=(0,r.useState)(!0),S=(0,h.Z)(y,2),P=S[0],B=S[1];return(0,r.useEffect)((function(){var e=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getMoviesNowPlaying(1);case 2:(t=e.sent).hasOwnProperty("results")&&I(t.results),B(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getApiOfUpcoming(1,1);case 2:(t=e.sent).hasOwnProperty("results")&&C(t.results),B(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}),[]),(0,c.jsxs)(m.default,{children:[(0,c.jsxs)(v.default,{children:[(0,c.jsx)("h2",{className:"header-content",children:"Welcome"}),(0,c.jsx)("h3",{className:"header-content-sub",children:"Millions of movies, TV shows and people to discover. Explore now."})]}),(0,c.jsx)(p.Z,{children:(0,c.jsxs)(f.Z,{span:22,offset:1,children:[(0,c.jsx)("h2",{className:"header-title-slider",children:"What's Popular"}),(0,c.jsx)("span",{className:"header-title-slider-sub",children:"Online TV"})]})}),(0,c.jsx)(A,{loading:P,data:Z,config:o}),(0,c.jsx)(Q,{}),(0,c.jsx)(p.Z,{children:(0,c.jsx)(f.Z,{span:22,offset:1,children:(0,c.jsx)("h2",{className:"header-title-slider",children:"Now Playing!"})})}),(0,c.jsx)(A,{className:"new-movie",loading:P,data:w,config:o}),(0,c.jsx)(R,{children:(0,c.jsxs)(p.Z,{children:[(0,c.jsxs)(f.Z,{span:14,children:[(0,c.jsx)("h2",{className:"header-content-community",children:"Join Today"}),(0,c.jsxs)("p",{children:["Get access to maintain your own ",(0,c.jsx)("em",{children:"custom personal lists, track what you've seen"})," and search and filter for ",(0,c.jsx)("em",{children:"what to watch next"}),"\u2014regardless if it's in theatres, on TV or available on popular streaming services like ."]}),(0,c.jsx)(g.Z,{className:"btn_community",type:"primary",children:"Sign Up"})]}),(0,c.jsx)(f.Z,{span:10,children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Enjoy TMDB ad free"}),(0,c.jsx)("li",{children:"Filter by your subscribed streaming services and find something to watch"}),(0,c.jsx)("li",{children:"Log the movies and TV shows you've seen"}),(0,c.jsx)("li",{children:"Build custom lists"}),(0,c.jsx)("li",{children:"Contribute to and improve our database"})]})})]})})]})},T=r.memo(k),z=(0,C.ZP)((function(){return Promise.resolve().then(n.bind(n,1683))})),J=function(){return(0,c.jsx)(z,{children:(0,c.jsx)("p",{children:"this is a Popular page"})})},V=r.memo(J),X=(0,C.ZP)((function(){return Promise.resolve().then(n.bind(n,1683))})),K=(0,C.ZP)((function(){return Promise.all([n.e(389),n.e(275)]).then(n.bind(n,5275))})),_=(0,C.ZP)((function(){return n.e(41).then(n.bind(n,41))})),q=function(){var e=(0,r.useState)([]),t=(0,h.Z)(e,2),n=t[0],a=t[1],s=(0,r.useState)(0),i=(0,h.Z)(s,2),o=i[0],d=i[1],p=(0,r.useState)(!0),f=(0,h.Z)(p,2),g=f[0],m=f[1],v=(0,r.useState)(1),x=(0,h.Z)(v,2),E=x[0],Z=x[1];(0,r.useEffect)((function(){var e=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getApiOfUpcoming(E,3);case 2:(t=e.sent).hasOwnProperty("results")&&a(t.results),t.total_results!==o&&t.hasOwnProperty("total_results")&&d(t.total_results),m(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),window.scroll({top:0,left:0,behavior:"smooth"})}),[E,o]);return(0,c.jsxs)(X,{children:[(0,c.jsxs)("h2",{children:["List of upcoming movies: ",o," results"]}),(0,c.jsx)(_,{lists:n,loading:g}),(0,c.jsx)(K,{current:E,total:o,changePages:function(e){Z(e)}})]})},$=r.memo(q),ee=(0,C.ZP)((function(){return Promise.resolve().then(n.bind(n,1683))})),te=(0,C.ZP)((function(){return Promise.resolve().then(n.bind(n,9705))})),ne=(0,C.ZP)((function(){return n.e(457).then(n.bind(n,457))})),re=(0,C.ZP)((function(){return n.e(41).then(n.bind(n,41))})),ae=(0,C.ZP)((function(){return Promise.all([n.e(389),n.e(275)]).then(n.bind(n,5275))})),se=function(){var e=(0,r.useState)(!1),t=(0,h.Z)(e,2),n=t[0],a=t[1],s=(0,r.useState)(!0),i=(0,h.Z)(s,2),o=i[0],d=i[1],p=(0,r.useState)(""),f=(0,h.Z)(p,2),g=f[0],m=f[1],v=(0,r.useState)([]),x=(0,h.Z)(v,2),E=x[0],Z=x[1],I=(0,r.useState)(1),b=(0,h.Z)(I,2),j=b[0],w=b[1],A=(0,r.useState)(0),C=(0,h.Z)(A,2),y=C[0],S=C[1],Q=(0,r.useState)(!1),P=(0,h.Z)(Q,2),B=P[0],R=P[1];(0,r.useEffect)((function(){function e(){return(e=(0,l.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getRecommendedSearch(1);case 2:(t=e.sent).hasOwnProperty("results")&&Z(t.results),a(!1),d(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,r.useEffect)((function(){if(g){var e=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),d(!0),e.next=4,W.getSearchMovie(g,j);case 4:(t=e.sent).hasOwnProperty("results")&&Z(t.results),t.total_results!==y&&(S(t.total_results),R(!0)),d(!1),a(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),window.scroll({top:0,left:0,behavior:"smooth"})}}),[g,j,y]);return(0,c.jsxs)(ee,{children:[(0,c.jsxs)(te,{children:[(0,c.jsx)("h2",{className:"header-content",children:"Rearch"}),(0,c.jsx)("h3",{className:"header-content-sub",children:"Unlimited TV shows, movies and more."}),(0,c.jsx)(ne,{loading:n,onSearch:function(e){e.trim().length>0&&(m(e),w(1))}})]}),B&&(0,c.jsxs)("div",{className:"search-results",children:[(0,c.jsx)("span",{children:"Search Results For "}),(0,c.jsxs)("span",{className:"search-results--name",children:[g," "]}),(0,c.jsx)("span",{children:" : "}),(0,c.jsxs)("span",{className:"search-results--number",children:[" ",y]})]}),(0,c.jsx)(re,{loading:o,lists:E}),B&&(0,c.jsx)(ae,{current:j,total:y,changePages:function(e){w(e)}})]})},ie=r.memo(se),ce=(n(8124),(0,C.ZP)((function(){return Promise.resolve().then(n.bind(n,1683))}))),oe=(0,C.ZP)((function(){return Promise.all([n.e(876),n.e(818)]).then(n.bind(n,2818))})),ue=(0,C.ZP)((function(){return n.e(570).then(n.bind(n,9570))})),le=function(){var e=(0,r.useState)([]),t=(0,h.Z)(e,2),n=t[0],a=t[1],i=(0,r.useState)([]),o=(0,h.Z)(i,2),d=o[0],p=o[1],f=(0,r.useState)([]),g=(0,h.Z)(f,2),m=(g[0],g[1]),v=(0,r.useState)(1),x=(0,h.Z)(v,2),E=(x[0],x[1]),Z=(0,r.useState)(1),I=(0,h.Z)(Z,2),b=(I[0],I[1],(0,r.useState)("en-US")),j=(0,h.Z)(b,2),w=j[0],A=j[1],C=(0,r.useState)(!0),y=(0,h.Z)(C,2),S=y[0],Q=y[1],P=(0,s.UO)().id;return(0,r.useEffect)((function(){var e=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A("en-US"),e.next=3,W.getDetailMovie(P,w);case 3:(t=e.sent).hasOwnProperty("status_code")||a(t),Q(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getProposalDetails(P,2);case 2:(t=e.sent).hasOwnProperty("results")&&m(t.results),t.hasOwnProperty("total_pages")&&E(t.total_pages);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t();var n=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A("en-US"),e.next=3,W.getCastAndCrewDetails(P,w);case 3:(t=e.sent).hasOwnProperty("cast")&&p(t.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n()}),[P,w]),(0,c.jsxs)(ce,{children:[(0,c.jsx)(oe,{dataMovies:n,loading:S}),(0,c.jsx)(ue,{dataMovies:n,dataCast:d})]})},he=r.memo(le),de=n(7063),pe=(0,C.ZP)((function(){return Promise.resolve().then(n.bind(n,1683))})),fe=function(){return(0,c.jsx)(pe,{children:(0,c.jsx)(de.ZP,{status:"404",title:"OPPS! PAGE NOT FOUND",subTitle:"Sorry, the page you're looking for doesn't exist.",extra:(0,c.jsx)(a.rU,{to:"/react_DbMovie",children:(0,c.jsx)(g.Z,{type:"primary",children:"Back Home"})})})})},ge=r.memo(fe),me=n(3272),ve=n(8678),xe=function(){var e=(0,i.a)().login;return window.alert("userName: admin && password: admin"),(0,c.jsx)(p.Z,{style:{marginTop:"40px"},children:(0,c.jsx)(f.Z,{span:16,offset:2,children:(0,c.jsxs)(me.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(t){e(t)},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,c.jsx)(me.Z.Item,{label:"Username",name:"username",initialValues:"admin",rules:[{required:!0,message:"Please input your username!"}],children:(0,c.jsx)(ve.Z,{})}),(0,c.jsx)(me.Z.Item,{label:"Password",name:"password",initialValues:"admin",rules:[{required:!0,message:"Please input your password!"}],children:(0,c.jsx)(ve.Z.Password,{})}),(0,c.jsx)(me.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,c.jsx)(g.Z,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})},Ee=r.memo(xe);function Ze(){return console.log("next-page"),(0,c.jsx)(a.VK,{children:(0,c.jsx)(i.H,{children:(0,c.jsxs)(s.Z5,{children:[(0,c.jsx)(s.AW,{path:"/react_DbMovie",element:(0,c.jsx)(T,{})}),(0,c.jsx)(s.AW,{path:"/react_DbMovie/Popular",element:(0,c.jsx)(V,{})}),(0,c.jsx)(s.AW,{path:"/react_DbMovie/Upcoming",element:(0,c.jsx)(o,{children:(0,c.jsx)($,{})})}),(0,c.jsx)(s.AW,{path:"/react_DbMovie/Search",element:(0,c.jsx)(ie,{})}),(0,c.jsx)(s.AW,{path:"/react_DbMovie/Detail/:slup~:id",element:(0,c.jsx)(he,{})})," ",(0,c.jsx)(s.AW,{path:"/react_DbMovie/login",element:(0,c.jsx)(Ee,{})}),(0,c.jsx)(s.AW,{path:"/react_DbMovie/*",element:(0,c.jsx)(ge,{})})]})})})}var Ie=r.memo(Ze)},305:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAHCCAIAAADaUWPQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI1MUQ0OUE4RUM2NDExRUNBOENEQUI2RjM3RDA3N0M3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI1MUQ0OUE5RUM2NDExRUNBOENEQUI2RjM3RDA3N0M3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjUxRDQ5QTZFQzY0MTFFQ0E4Q0RBQjZGMzdEMDc3QzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjUxRDQ5QTdFQzY0MTFFQ0E4Q0RBQjZGMzdEMDc3QzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4RlF73AAAOq0lEQVR42uzd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"}}]);
//# sourceMappingURL=546.b6ba5d98.chunk.js.map