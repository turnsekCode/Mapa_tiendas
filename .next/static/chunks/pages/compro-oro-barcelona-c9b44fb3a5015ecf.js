(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4776],{8402:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/compro-oro-barcelona",function(){return n(2786)}])},6783:function(e,o,n){"use strict";var a=n(5893);n(7294);var i=n(8302),t=n.n(i);let l=e=>{var o;let{ciudad:n}=e;return(0,a.jsx)("article",{className:t().contenedorSeccionUno,children:(0,a.jsx)("div",{className:t().bloqueDer,children:(0,a.jsx)("h1",{children:null==n?void 0:null===(o=n.acf)||void 0===o?void 0:o.titulo_del_h1})})})};o.Z=l},6817:function(e,o,n){"use strict";var a=n(5893),i=n(7215);n(7294);var t=n(8235),l=n.n(t);let d=e=>{let{ciudad:o}=e;return(0,a.jsx)("article",{className:l().contenedorSeccionDos,children:(0,a.jsx)(i.Z,{ciudad:o})})};o.Z=d},7319:function(e,o,n){"use strict";var a=n(5893),i=n(7294),t=n(5362),l=n.n(t),d=n(6261),c=n(1123),r=n(3545),s=n(1664),u=n.n(s);let p=e=>{let{markers:o,ciudad:n}=e,t=o.arrayMarker,[s,p]=(0,i.useState)({longitude:o.markerInicial[0].longitude,latitude:o.markerInicial[0].latitude,zoom:o.markerInicial[0].zoom,cooperativeGestures:!0}),m=(0,i.useRef)(),_=()=>{var e;x(!1),null===(e=m.current)||void 0===e||e.flyTo({center:[o.markerInicial[0].longitude,o.markerInicial[0].latitude],duration:2e3,zoom:o.markerInicial[0].zoom})},[v,x]=(0,i.useState)(null),j=()=>{x(!0)},[h,f]=(0,i.useState)({id:"",longitude:"",latitude:"",tienda:"",telefono:"",direccion:"",comoLlegar:"",nombreTienda:"",duration:"",zoom:"",url:""}),[g,b]=(0,i.useState)(""),k=e=>{var o;f({id:e.id,longitude:e.longitude,latitude:e.latitude,tienda:e.tienda,telefono:e.telefono,direccion:e.direccion,comoLlegar:e.comoLlegar,nombreTienda:e.nombreTienda,duration:e.duration,zoom:e.zoom,url:e.url}),null===(o=m.current)||void 0===o||o.flyTo({center:{lng:e.longitude,lat:e.latitude},duration:1500,zoom:e.zoom}),b(e.id)},C=o.arrayMarker[o.arrayMarker.length-1];return(0,a.jsxs)("section",{className:l().contenedorMapa,children:[(0,a.jsxs)("div",{className:l().contenedorbloqueIzq,children:[(0,a.jsx)("div",{className:l().bloqueIzq,children:(0,a.jsxs)("p",{children:["Tiendas: ",(0,a.jsx)("span",{children:null==C?void 0:C.id})]})}),(0,a.jsx)("div",{className:l().contenedorTiendas,children:t.map(e=>(0,a.jsx)(d.rU,{onClick:()=>{j(),k(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,children:(0,a.jsxs)("div",{onClick:()=>{j(),k(e)},className:g===e.id&&v?"".concat(l().contenedorInfoTiendaMapa," ").concat(l().contenedorInfoTiendaMapaActivo):" ".concat(l().contenedorInfoTiendaMapa),children:[(0,a.jsx)("h3",{children:null==e?void 0:e.nombreTienda}),(0,a.jsxs)("div",{className:l().tienda,children:[(0,a.jsx)("p",{children:null==e?void 0:e.direccion}),(0,a.jsx)("p",{children:null==e?void 0:e.telefono})]})]},e.id)}))})]}),(0,a.jsx)("div",{className:l().bloqueDer,id:"contenedorMapa2",children:(0,a.jsxs)(r.ZP,{onStyleLoad:!0,ref:m,...s,onMove:e=>p(e.viewState),className:l().mapa,mapStyle:"mapbox://styles/mapbox/streets-v9?optimize=true",mapboxAccessToken:"pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",children:[(0,a.jsx)(r.ot,{})," ",(0,a.jsx)(r.$j,{})," ",(0,a.jsx)(r.Pv,{}),(0,a.jsx)("button",{className:l().reset_map,onClick:()=>{_()},children:"Reset Map"}),t.map(e=>(0,a.jsx)(r.Jx,{longitude:e.longitude,latitude:e.latitude,onClick:()=>{k(e),j()},children:v?(0,a.jsx)(r.GI,{style:{top:-25,maxWidth:255},longitude:null==h?void 0:h.longitude,className:"popup",latitude:null==h?void 0:h.latitude,closeOnClick:!1,anchor:null,onClose:()=>x(!1),children:(0,a.jsxs)("div",{className:l().contenedor_popuop,children:[(0,a.jsx)("p",{className:l().nombre_ciudad_popup,children:null==h?void 0:h.nombreTienda}),(0,a.jsx)("a",{title:"Direcci\xf3n",href:null==h?void 0:h.comoLlegar,rel:"noreferrer",target:"_blank",className:l().direccion_popup,children:null==h?void 0:h.direccion}),(0,a.jsx)("br",{}),(0,a.jsxs)("a",{href:"tel:".concat(null==h?void 0:h.telefono),className:l().telefono_popup,title:"Tel\xe9fono",children:[(0,a.jsxs)("span",{children:[(0,a.jsx)(c.Z,{})," "]}),null==h?void 0:h.telefono]}),(0,a.jsx)("a",{title:"C\xf3mo llegar",href:null==h?void 0:h.comoLlegar,rel:"noreferrer",className:l().boton_popUp,children:"C\xf3mo llegar"}),(0,a.jsx)("a",{title:"Llamar",href:"tel:".concat(null==h?void 0:h.telefono),rel:"noreferrer",className:l().boton_popUp,children:"Llamar"}),(0,a.jsx)(u(),{title:"C\xf3mo llegar",href:null==h?void 0:h.url,rel:"noreferrer",className:l().boton_popUp,children:"Web"})]})}):null},e.id))]})})]})};o.Z=p},2786:function(e,o,n){"use strict";n.r(o),n.d(o,{__N_SSG:function(){return C},default:function(){return q}});var a=n(5893),i=n(9008),t=n.n(i),l=n(3915),d=n.n(l),c=n(942),r=n(6531),s=n.n(r),u=n(7186),p=n(2911),m=n(3428),_=n(7699),v=n(38),x=n(7650),j=n(6783),h=n(6817),f=n(7967),g=n(8317),b=n(7319),k=n(2810),C=!0;function q(e){var o,n,i,l,r,C,q,N,y,T,P,I,Z,w,M;let{markers:S,menu_list:z,ciudad:D,general:L}=e,{ref:A,inView:U,entry:B}=(0,x.YD)(),E={"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Quickgold",item:"https://quickgold.es"},{"@type":"ListItem",position:2,name:"Tiendas",item:"https://quickgold.es/tiendas"},{"@type":"ListItem",position:3,name:null==D?void 0:null===(o=D.acf)||void 0===o?void 0:o.ciudad_landing,item:"https://quickgold.es/tiendas/compro-oro-barcelona"}]};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s(),{title:null==D?void 0:null===(n=D.acf)||void 0===n?void 0:n.titulo_del_meta,description:null==D?void 0:null===(i=D.acf)||void 0===i?void 0:i.descripcion_del_meta,icon:"/favicon.png",facebook:{image:"/".concat(null==D?void 0:null===(l=D.acf)||void 0===l?void 0:l.tienda,".jpg"),url:"https://www.facebook.com/quickgold.es/",type:"article"},twitter:{image:"/".concat(null==D?void 0:null===(r=D.acf)||void 0===r?void 0:r.tienda,".jpg"),site:"@quickgoldQG",card:"summary_large_image"}}),(0,a.jsxs)(t(),{children:[(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(E)}}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"stylesheet preload prefetch",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",as:"style"}),(0,a.jsx)("noscript",{children:(0,a.jsx)("link",{rel:"stylesheet",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"})}),(0,a.jsx)("link",{rel:"canonical",href:null==D?void 0:null===(C=D.acf)||void 0===C?void 0:C.canonical})]}),(0,a.jsxs)(_.Z,{menu_list:z,ciudad:D,children:[(0,a.jsxs)("div",{itemScope:!0,itemType:"http://schema.org/Organization",children:[(0,a.jsx)("meta",{itemProp:"name",content:"Quickgold"}),(0,a.jsx)("meta",{itemProp:"url",content:"https://quickgold.es"}),(0,a.jsx)("meta",{itemProp:"logo",content:"https://quickgold.es/wp-content/uploads/img/logo.jpg"}),(0,a.jsx)("meta",{itemProp:"image",content:"https://quickgold.es/wp-content/uploads/img/logo.jpg"}),(0,a.jsx)("meta",{itemProp:"telephone",content:"+34 900 373 629"}),(0,a.jsx)("meta",{itemProp:"email",content:"info@quickgold.es"}),(0,a.jsx)("meta",{itemProp:"sameAs",content:"https://www.facebook.com/quickgold.es"}),(0,a.jsx)("meta",{itemProp:"sameAs",content:"https://twitter.com/quickgoldqg"}),(0,a.jsx)("meta",{itemProp:"sameAs",content:"https://instagram.com/quickgold.es"}),(0,a.jsx)("meta",{itemProp:"address",content:"Av. Diagonal, 335. Barcelona, Provincia de Barcelona, 28100"}),(0,a.jsx)("meta",{itemProp:"address",content:"C/Valencia, 571. TDA-2. El Clot, Provincia de Barcelona, 08026"}),(0,a.jsx)("meta",{itemProp:"address",content:"Calle Creu coberta 68 Bajo 1. Barcelona, Provincia de Barcelona, 08014"}),(0,a.jsx)("meta",{itemProp:"address",content:"Calle Casanova, 3. Barcelona, Provincia de Barcelona, 08011"}),(0,a.jsx)("meta",{itemProp:"address",content:"Calle Mossen Josep Pons, 1 Baixos 2. Sant Adri\xe1, Provincia de Barcelona, 08930"})]}),(0,a.jsxs)("div",{className:d().main,children:[(0,a.jsx)(c.Z,{raiz:"Quickgold",tiendas:"Tiendas",ubicacionActual:null==D?void 0:null===(q=D.acf)||void 0===q?void 0:q.ciudad_landing,iconoRaiz:(0,a.jsx)(g.Z,{}),iconoUbiccionActual:(0,a.jsx)(g.Z,{}),urlNombreCiudad:"https://quickgold.es/tiendas/compro-oro-barcelona",urlNombreTienda:"https://quickgold.es/tiendas/compro-oro-barcelona"}),(0,a.jsx)(j.Z,{ciudad:D}),(null==D?void 0:null===(N=D.acf)||void 0===N?void 0:N.activar_banner_en_tiendas_y_ciudad)&&(null==L?void 0:null===(y=L.acf)||void 0===y?void 0:y.activar_promo_general)?(0,a.jsx)(k.Z,{ciudad:D}):null,(null==D?void 0:null===(T=D.acf)||void 0===T?void 0:T.activar_banner_en_tiendas_y_ciudad)==!1&&(null==L?void 0:null===(P=L.acf)||void 0===P?void 0:P.activar_promo_general)?(0,a.jsx)(f.Z,{general:L}):null,(null==L?void 0:null===(I=L.acf)||void 0===I?void 0:I.activar_promo_general)==!1&&(null==D?void 0:null===(Z=D.acf)||void 0===Z?void 0:Z.activar_banner_en_tiendas_y_ciudad)?(0,a.jsx)(k.Z,{ciudad:D}):null,(0,a.jsxs)("div",{className:d().contenedorSeccionUnoDos,children:[(0,a.jsx)(h.Z,{ciudad:D}),(0,a.jsx)("article",{className:d().contenedorMapaVisible,ref:A,children:U?(0,a.jsx)(b.Z,{markers:S,ciudad:D}):null})]})]}),(null==D?void 0:null===(w=D.acf)||void 0===w?void 0:w.tienda)===""?(0,a.jsx)(u.Z,{ciudad:D}):(0,a.jsx)(p.Z,{ciudad:D}),(0,a.jsx)(v.Z,{ciudad:D}),(null==D?void 0:null===(M=D.acf)||void 0===M?void 0:M.activar_banner_wallapop)?(0,a.jsx)(m.Z,{ciudad:D}):null]})]})}},8302:function(e){e.exports={contenedorSeccionUno:"seccionUno_contenedorSeccionUno__MtPgj",bloqueDer:"seccionUno_bloqueDer__csCt7",linea:"seccionUno_linea__sKg3N"}},8235:function(e){e.exports={contenedorSeccionDos:"seccionDos_contenedorSeccionDos__33bX9"}},5362:function(e){e.exports={contenedorMapa:"mapaCiudades_contenedorMapa__DHLB8",contenedorbloqueIzq:"mapaCiudades_contenedorbloqueIzq__Rp7gq",bloqueDer:"mapaCiudades_bloqueDer__mH701",bloqueIzq:"mapaCiudades_bloqueIzq__DKR5L",linea:"mapaCiudades_linea__O4vPS",reset_map:"mapaCiudades_reset_map__lr2TZ",contenedorTiendas:"mapaCiudades_contenedorTiendas__hZuvd",tienda:"mapaCiudades_tienda__fBGAS","mapboxgl-popup-close-button":"mapaCiudades_mapboxgl-popup-close-button___PgA_",nombre_ciudad_popup:"mapaCiudades_nombre_ciudad_popup__YLhzk",direccion_popup:"mapaCiudades_direccion_popup__IS9wP",telefono_popup:"mapaCiudades_telefono_popup__eqt8Z",boton_como_llegar:"mapaCiudades_boton_como_llegar__8it0V",boton_popUp:"mapaCiudades_boton_popUp__yw3fW",contenedorInfoTiendaMapa:"mapaCiudades_contenedorInfoTiendaMapa__ibqhv",contenedorInfoTiendaMapaActivo:"mapaCiudades_contenedorInfoTiendaMapaActivo__RvQHD"}}},function(e){e.O(0,[1258,3542,2633,4384,1591,3945,9774,2888,179],function(){return e(e.s=8402)}),_N_E=e.O()}]);