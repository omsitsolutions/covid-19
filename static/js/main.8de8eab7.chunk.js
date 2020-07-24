(this["webpackJsonpcovid-tracking"]=this["webpackJsonpcovid-tracking"]||[]).push([[0],{100:function(e,a,t){e.exports=t(127)},127:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),i=t.n(o),c=t(92),l=t(164),m=t(165),s=t(166),d=t(152),u=t(167),f=t(22),p=t(128),E=t(170),A=t(150),g=t(9),y=t(151),v=t(171),h=t(154),w=t(153),b=t(38),D=t.n(b),S=t(172),x=t(155),O=t(93),I={root:{display:"flex",justifyContent:"center",flexDirection:"column",flex:1,alignItems:"center",alignSelf:"stretch",padding:"16px 3px 16px 3px"}},N=function(e){var a=e.icon,t=e.title,n=e.caption,o=e.percent;return r.a.createElement(O.a,{style:I.root},r.a.createElement(A.a,{color:"primary",fontSize:"large"},a),r.a.createElement(f.a,{variant:"h6"},new Intl.NumberFormat("en-IN",{maximumSignificantDigits:3}).format(t)),r.a.createElement(f.a,{variant:"caption"},n),r.a.createElement(f.a,{color:"secondary",display:"inline",variant:"caption"},new Intl.NumberFormat("en-IN",{maximumSignificantDigits:3}).format(o),"%"))},j=t(15),C=t(52),k=t.n(C),T="https://api.covid19india.org/state_district_wise.json",H=t(20),L=Object(y.a)((function(e){return{}})),K={fetchGlobalData:function(){return function(e){e({type:"LOADING",payload:!0}),k.a.get("https://api.covid19api.com/summary").then((function(a){a.data.Countries.sort((function(e,a){return a.TotalConfirmed-e.TotalConfirmed})),e({type:"FETCH_GLOBAL_REQUEST",payload:a.data})})).catch((function(a){console.log("error ",a),e({type:"error",payload:"Something went wrong"})})).finally((function(){e({type:"LOADING",payload:!1})}))}},setLoading:function(e){return function(a){a({type:"LOADING",payload:e})}}};var R=Object(H.b)((function(e){return{loading:e.loading,global:e.global,summary:e.globalSummary}}),K)((function(e){var a=e.loading,t=e.fetchGlobalData,o=e.global,i=void 0===o?[]:o,c=e.summary,l=L();return Object(n.useEffect)((function(){t()}),[]),!0===a?null:r.a.createElement(d.a,{spacing:2,container:!0},r.a.createElement(d.a,{item:!0,sm:12,md:12,xs:12},r.a.createElement(d.a,{spacing:2,container:!0},r.a.createElement(d.a,{container:!0,item:!0,xs:4,sm:4,md:4},r.a.createElement(N,{icon:"accessible",caption:"Confirmed case",title:c.TotalConfirmed,percent:100*c.TotalConfirmed/78e8})),r.a.createElement(d.a,{container:!0,item:!0,xs:4,sm:4,md:4},r.a.createElement(N,{icon:"healing",caption:"Recovered",title:c.TotalRecovered,percent:100*c.TotalRecovered/c.TotalConfirmed})),r.a.createElement(d.a,{container:!0,item:!0,xs:4,sm:4,md:4},r.a.createElement(N,{icon:"sentiment_very_dissatisfied",caption:"Deaths",title:c.TotalDeaths,percent:100*c.TotalDeaths/c.TotalConfirmed})))),r.a.createElement(d.a,{md:12,sm:12,xs:12},Array.isArray(i)&&i.map((function(e){return r.a.createElement("div",{key:e.Country},r.a.createElement(v.a,null,r.a.createElement(w.a,{expandIcon:r.a.createElement(D.a,null),"aria-controls":"panel1c-content",id:"panel1c-header"},r.a.createElement(f.a,{style:{flex:1}},e.Country),r.a.createElement("div",null,r.a.createElement(f.a,{className:l.heading},"Confirmed Case"),r.a.createElement(S.a,{color:"primary",label:new Intl.NumberFormat("en-IN",{maximumSignificantDigits:3}).format(e.TotalConfirmed)}))),r.a.createElement(h.a,{className:l.details},r.a.createElement("div",{className:l.column},r.a.createElement(f.a,{className:l.heading},"Country: ",e.Country)),r.a.createElement("div",{className:l.column},r.a.createElement(f.a,{className:l.heading},"Confirmed Case : ",new Intl.NumberFormat("en-IN",{maximumFractionDigits:3}).format(e.TotalConfirmed)),r.a.createElement(f.a,{className:l.heading},"Deaths : ",new Intl.NumberFormat("en-IN",{maximumFractionDigits:3}).format(e.TotalDeaths)),r.a.createElement(f.a,{className:l.heading},"Recovered : ",new Intl.NumberFormat("en-IN",{maximumFractionDigits:3}).format(e.TotalRecovered)))),r.a.createElement(x.a,null)))}))))})),P=t(156),B=t(173),U=t(157),X=t(158),F={fetchIndia:function(){return function(e){e({type:"LOADING",payload:!0}),k.a.get(T).then((function(a){var t=Object.keys(a.data).map((function(e){var t=Object.keys(a.data[e].districtData).reduce((function(t,n){return t+a.data[e].districtData[n].confirmed}),0),n=Object.keys(a.data[e].districtData).reduce((function(t,n){return t+a.data[e].districtData[n].deceased}),0),r=Object.keys(a.data[e].districtData).reduce((function(t,n){return t+a.data[e].districtData[n].recovered}),0),o=Object.keys(a.data[e].districtData).map((function(t){return Object(j.a)({name:t.toString()},a.data[e].districtData[t])}));return{state:e.toString(),confirmed:t,deaths:n,recovered:r,districts:o}})),n=0,r=0,o=0;t.forEach((function(e){n+=e.confirmed,r+=e.deaths,o+=e.recovered}));var i={confirmed:n,deaths:r,recovered:o};t.sort((function(e,a){return a.confirmed-e.confirmed})),e({type:"FETCH_INDIA_REQUEST",payload:{data:t,summary:i}})})).catch((function(a){console.error(a),e({type:"error",payload:"Something went wrong"})})).finally((function(){e({type:"LOADING",payload:!1})}))}}},M=Object(H.b)((function(e){return{loading:e.loading,india:e.india,summary:e.indiaSummary}}),F)((function(e){var a=e.loading,t=e.india,o=void 0===t?{}:t,i=e.fetchIndia,c=e.summary;return Object(n.useEffect)((function(){i()}),[]),!0===a?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{spacing:2,container:!0},r.a.createElement(d.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(d.a,{spacing:2,container:!0},r.a.createElement(d.a,{container:!0,xs:4,item:!0},!a&&r.a.createElement(N,{icon:"accessible",caption:"Confirmed case",title:c.confirmed,percent:100*c.confirmed/1380004385})),r.a.createElement(d.a,{xs:4,container:!0,item:!0},!a&&r.a.createElement(N,{icon:"healing",caption:"Recovered",title:c.recovered,percent:100*c.recovered/c.confirmed})),r.a.createElement(d.a,{xs:4,container:!0,item:!0},!a&&r.a.createElement(N,{icon:"sentiment_very_dissatisfied",caption:"Deaths",title:c.deaths,percent:100*c.deaths/c.confirmed})))),r.a.createElement(d.a,{item:!0,xs:12,sm:12,md:12},Array.isArray(o)&&o.map((function(e){return r.a.createElement(v.a,{key:e.State},r.a.createElement(w.a,{expandIcon:r.a.createElement(D.a,null),"aria-controls":"panel1c-content",id:"panel1c-header"},r.a.createElement(f.a,{style:{flex:1}},e.state),r.a.createElement("div",null,r.a.createElement(f.a,null,"Confirmed Case"),r.a.createElement(S.a,{color:"primary",label:e.confirmed}))),r.a.createElement(h.a,null,r.a.createElement(P.a,{style:{flex:1},title:"District wise",subheader:"District wise"},e.districts.map((function(e){return r.a.createElement(B.a,{key:e.name},r.a.createElement(U.a,{primary:e.name,secondary:"Death: ".concat(e.deceased,"  Recovered : ").concat(e.recovered)}),r.a.createElement(X.a,null,r.a.createElement(S.a,{color:"primary",label:"Confirmed: ".concat(new Intl.NumberFormat("en-IN",{maximumSignificantDigits:3}).format(e.confirmed))})))})))),r.a.createElement(x.a,null))})))))})),V=t(159),G={fetchAssam:function(){return function(e){e({type:"LOADING",payload:!0}),k.a.get(T).then((function(a){console.log("Testing log feature in React");var t=Object.keys(a.data.Assam.districtData).map((function(e){var t=a.data.Assam.districtData[e].confirmed,n=a.data.Assam.districtData[e].deceased,r=a.data.Assam.districtData[e].recovered;console.log(t+"-"+n+"-"+r);var o=Object.keys(a.data.Assam.districtData).map((function(e){return Object(j.a)({name:e.toString()},a.data.Assam)}));return{district:e.toString(),confirmed:t,deaths:n,recovered:r,districts:o}}));console.log(t);var n=0,r=0,o=0;t.forEach((function(e){n+=e.confirmed,r+=e.deaths,o+=e.recovered}));var i={confirmed:n,deaths:r,recovered:o};t.sort((function(e,a){return a.confirmed-e.confirmed})),e({type:"FETCH_ASSAM_REQUEST",payload:{data:t,summary:i}})})).catch((function(a){console.error(a),e({type:"error",payload:"Something went wrong"})})).finally((function(){e({type:"LOADING",payload:!1})}))}}},Q=Object(H.b)((function(e){return{loading:e.isLoadingIndia,assam:e.assam,summary:e.assamSummary}}),G)((function(e){var a=e.loading,t=e.assam,o=void 0===t?{}:t,i=e.fetchAssam,c=e.summary;return Object(n.useEffect)((function(){i()}),[]),!0===a?r.a.createElement(d.a,{container:!0,spacing:10,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"50vh"}},r.a.createElement(V.a,{size:60})):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{container:!0},r.a.createElement(d.a,{xs:4,item:!0},r.a.createElement(N,{icon:"accessible",caption:"Confirmed case",title:c.confirmed,percent:100*c.confirmed/35080827})),r.a.createElement(d.a,{xs:4,item:!0},r.a.createElement(N,{icon:"healing",caption:"Recovered",title:c.recovered,percent:100*c.recovered/c.confirmed})),r.a.createElement(d.a,{xs:4,item:!0},r.a.createElement(N,{icon:"sentiment_very_dissatisfied",caption:"Deceased",title:c.deaths,percent:100*c.deaths/c.confirmed}))),Array.isArray(o)&&o.map((function(e){return r.a.createElement(v.a,{key:e.district},r.a.createElement(w.a,{"aria-controls":"panel1c-content",id:"panel1c-header"},r.a.createElement(f.a,{style:{flex:.75}},e.district),r.a.createElement("div",{style:{flex:.1}},r.a.createElement(f.a,null,"Confirmed "),r.a.createElement(S.a,{color:"primary",label:e.confirmed})),r.a.createElement("div",{style:{flex:.1}},r.a.createElement(f.a,null,"Recovered "),r.a.createElement(S.a,{color:"primary",label:e.recovered})),r.a.createElement("div",null,r.a.createElement(f.a,null,"Deceased "),r.a.createElement(S.a,{color:"primary",label:e.deaths}))),r.a.createElement(h.a,null,r.a.createElement(P.a,{style:{flex:1},title:"District wise",subheader:"Places"})),r.a.createElement(x.a,null))})))})),J=t(160),q=t(161),Z=t(162),z=t(174),W=t(163),Y=function(e){return r.a.createElement(d.a,{spacing:!0,container:!0},r.a.createElement(d.a,{xs:12,item:!0},r.a.createElement(J.a,null,r.a.createElement(q.a,{title:"OMS IT SOLUTIONS"}),r.a.createElement(Z.a,null,r.a.createElement(z.a,{src:"https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/91262172_3588150361255721_2874790871578968064_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=dHh43fuK8n0AX_6fRWr&_nc_ht=scontent-maa2-1.xx&oh=34d01c08e9da9ed2843962fc4e053f72&oe=5EE0AD76"}),r.a.createElement(f.a,{variant:"subtitle1"},"Simpilfy your life. Life is precious!!!"),r.a.createElement(f.a,{variant:"caption",component:"p"},"Follow me"),r.a.createElement(p.a,{color:"primary",href:"",target:"_blank",onClick:function(e){window.open("https://www.facebook.com/omsitsolutions","_blank")}},r.a.createElement(A.a,{fontSize:"default",className:"fa fa-facebook-f"})),r.a.createElement(p.a,{color:"primary",href:"",target:"_blank",onClick:function(e){window.open("http://omsitsolutions.com","_blank")}},r.a.createElement(A.a,{fontSize:"default",className:"fa fa-globe"})),r.a.createElement(p.a,{color:"primary",href:"",target:"_blank",onClick:function(e){window.open("https://g.page/omsitsolutions","_blank")}},r.a.createElement(A.a,{fontSize:"default",className:"fa fa-google"}))))),r.a.createElement(d.a,{xs:12,item:!0},r.a.createElement(x.a,null)),r.a.createElement(d.a,{xs:12,item:!0},r.a.createElement(J.a,null,r.a.createElement(q.a,{title:"Resource"}),r.a.createElement(Z.a,null,r.a.createElement(f.a,{variant:"subtitle1"},"Material UI: ",r.a.createElement(W.a,{href:"https://material-ui.com"},"https://material-ui.com")),r.a.createElement(f.a,{variant:"subtitle1"},"COVID19 INDIA ORG: ",r.a.createElement(W.a,{href:"https://www.covid19india.org/"},"https://www.covid19india.org"))))))},_=t(85),$=t.n(_),ee=t(60),ae=t.n(ee),te=t(86),ne=t.n(te),re=t(168),oe=t(84),ie=t.n(oe),ce=t(61);ce.a.initialize("UA-173481698-1");var le=Object(y.a)((function(e){return{root:{flexGrow:1},main:{flex:1},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:128,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},title:{flexGrow:1},appBar:{top:"auto",bottom:0}}})),me=function(){var e=le(),a=Object(n.useState)(0),t=Object(c.a)(a,2),o=t[0],i=t[1],d=Object(g.f)();return r.a.createElement(l.a,{color:"primary",className:e.appBar},r.a.createElement(m.a,{value:o,onChange:function(e,a){switch(a){case 0:d.push("/assam");break;case 1:d.push("/india");break;case 2:d.push("/global");break;case 3:d.push("/about")}i(a)},showLabels:!0},r.a.createElement(s.a,{label:"Assam",icon:r.a.createElement(ae.a,null)}),r.a.createElement(s.a,{label:"India",icon:r.a.createElement(ae.a,null)}),r.a.createElement(s.a,{label:"Global",icon:r.a.createElement($.a,null)}),r.a.createElement(s.a,{label:"About",icon:r.a.createElement(ne.a,null)})))};var se={setError:function(e){return function(a){a({type:"error",payload:e})}}},de=Object(H.b)((function(e){return{loading:e.loading,error:e.error}}),se)((function(e){var a=e.loading,t=e.error,n=e.setError;ce.a.pageview(window.location.pathname+window.location.search);var o=le();return r.a.createElement(d.a,{spacing:4,container:!0},r.a.createElement(d.a,{sm:12,md:12,xs:12,style:{flexGrow:1},item:!0},r.a.createElement(l.a,{position:"fixed"},r.a.createElement(u.a,null,r.a.createElement(f.a,{variant:"h6",className:o.title},"COVID-19 Dashboard"),r.a.createElement(p.a,{color:"inherit",href:"",target:"_blank",onClick:function(e){return window.open("http://omsitsolutions.com","_blank")}},r.a.createElement("img",{src:ie.a,alt:"Logo"}))),a&&r.a.createElement(re.a,{color:"secondary",variant:"indeterminate"}))),r.a.createElement(d.a,{xs:12,sm:12,md:12,lg:12,style:{marginTop:50,marginBottom:50},item:!0},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/assam",component:Q}),r.a.createElement(g.a,{exact:!0,path:"/india",component:M}),r.a.createElement(g.a,{exact:!0,path:"/global",component:R}),r.a.createElement(g.a,{exact:!0,path:"/about",component:Y}),r.a.createElement(g.a,{exact:!0,path:"",component:Q}))),r.a.createElement(d.a,{sm:12,item:!0},r.a.createElement(E.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:Boolean(t),autoHideDuration:6e3,onClose:function(e){return n(null)},message:Boolean(t)?t.toString():"",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(e){return n(null)}},r.a.createElement(A.a,{fontSize:"small"},"close")))}),r.a.createElement(me,null)))})),ue=t(31),fe={global:[],globalSummary:{},indiaSummary:{},assamSummary:{},assam:[],india:[],loading:!1,error:null},pe=t(87),Ee=t(88),Ae=Object(ue.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING":return Object(j.a)(Object(j.a)({},e),{},{loading:a.payload});case"error":return Object(j.a)(Object(j.a)({},e),{},{error:a.payload});case"FETCH_GLOBAL_REQUEST":return Object(j.a)(Object(j.a)({},e),{},{global:a.payload.Countries,globalSummary:a.payload.Global});case"FETCH_INDIA_REQUEST":return Object(j.a)(Object(j.a)({},e),{},{isLoadingIndia:!1,india:a.payload.data,indiaSummary:a.payload.summary});case"FETCH_ASSAM_REQUEST":return Object(j.a)(Object(j.a)({},e),{},{isLoadingIndia:!1,assam:a.payload.data,assamSummary:a.payload.summary});default:return fe}}),Object(Ee.composeWithDevTools)(Object(ue.applyMiddleware)(pe.a))),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ve=t(56),he=t(169),we=t(91),be=t(89),De=t.n(be),Se=t(90),xe=t.n(Se),Oe=Object(we.a)({palette:{primary:De.a,secondary:xe.a},status:{danger:"orange"}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve.a,null,r.a.createElement(he.a,{theme:Oe},r.a.createElement(H.a,{store:Ae},r.a.createElement(de,null))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");ge?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(a,e)}))}}()},84:function(e,a){e.exports="data:image/jpeg;base64,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"}},[[100,1,2]]]);
//# sourceMappingURL=main.8de8eab7.chunk.js.map