(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9175],{8873:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/compro-oro-malaga",function(){return n(5685)}])},6783:function(e,o,n){"use strict";var a=n(5893);n(7294);var i=n(8302),l=n.n(i);let t=e=>{var o;let{ciudad:n}=e;return(0,a.jsx)("article",{className:l().contenedorSeccionUno,children:(0,a.jsx)("div",{className:l().bloqueDer,children:(0,a.jsx)("h1",{children:null==n?void 0:null===(o=n.acf)||void 0===o?void 0:o.titulo_del_h1})})})};o.Z=t},6817:function(e,o,n){"use strict";var a=n(5893),i=n(7215);n(7294);var l=n(8235),t=n.n(l);let d=e=>{let{ciudad:o}=e;return(0,a.jsx)("article",{className:t().contenedorSeccionDos,children:(0,a.jsx)(i.Z,{ciudad:o})})};o.Z=d},7319:function(e,o,n){"use strict";var a=n(5893),i=n(7294),l=n(5362),t=n.n(l),d=n(6261),c=n(1123),r=n(3545),s=n(1664),u=n.n(s);let p=e=>{let{markers:o,ciudad:n}=e,l=o.arrayMarker,[s,p]=(0,i.useState)({longitude:o.markerInicial[0].longitude,latitude:o.markerInicial[0].latitude,zoom:o.markerInicial[0].zoom,cooperativeGestures:!0}),m=(0,i.useRef)(),_=()=>{var e;x(!1),null===(e=m.current)||void 0===e||e.flyTo({center:[o.markerInicial[0].longitude,o.markerInicial[0].latitude],duration:2e3,zoom:o.markerInicial[0].zoom})},[v,x]=(0,i.useState)(null),g=()=>{x(!0)},[h,j]=(0,i.useState)({id:"",longitude:"",latitude:"",tienda:"",telefono:"",direccion:"",comoLlegar:"",nombreTienda:"",duration:"",zoom:"",url:""}),[f,b]=(0,i.useState)(""),k=e=>{var o;j({id:e.id,longitude:e.longitude,latitude:e.latitude,tienda:e.tienda,telefono:e.telefono,direccion:e.direccion,comoLlegar:e.comoLlegar,nombreTienda:e.nombreTienda,duration:e.duration,zoom:e.zoom,url:e.url}),null===(o=m.current)||void 0===o||o.flyTo({center:{lng:e.longitude,lat:e.latitude},duration:1500,zoom:e.zoom}),b(e.id)},q=o.arrayMarker[o.arrayMarker.length-1];return(0,a.jsxs)("section",{className:t().contenedorMapa,children:[(0,a.jsxs)("div",{className:t().contenedorbloqueIzq,children:[(0,a.jsx)("div",{className:t().bloqueIzq,children:(0,a.jsxs)("p",{children:["Tiendas: ",(0,a.jsx)("span",{children:null==q?void 0:q.id})]})}),(0,a.jsx)("div",{className:t().contenedorTiendas,children:l.map(e=>(0,a.jsx)(d.rU,{onClick:()=>{g(),k(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,children:(0,a.jsxs)("div",{onClick:()=>{g(),k(e)},className:f===e.id&&v?"".concat(t().contenedorInfoTiendaMapa," ").concat(t().contenedorInfoTiendaMapaActivo):" ".concat(t().contenedorInfoTiendaMapa),children:[(0,a.jsx)("h3",{children:null==e?void 0:e.nombreTienda}),(0,a.jsxs)("div",{className:t().tienda,children:[(0,a.jsx)("p",{children:null==e?void 0:e.direccion}),(0,a.jsx)("p",{children:null==e?void 0:e.telefono})]})]},e.id)}))})]}),(0,a.jsx)("div",{className:t().bloqueDer,id:"contenedorMapa2",children:(0,a.jsxs)(r.ZP,{onStyleLoad:!0,ref:m,...s,onMove:e=>p(e.viewState),className:t().mapa,mapStyle:"mapbox://styles/mapbox/streets-v9?optimize=true",mapboxAccessToken:"pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",children:[(0,a.jsx)(r.ot,{})," ",(0,a.jsx)(r.$j,{})," ",(0,a.jsx)(r.Pv,{}),(0,a.jsx)("button",{className:t().reset_map,onClick:()=>{_()},children:"Reset Map"}),l.map(e=>(0,a.jsx)(r.Jx,{longitude:e.longitude,latitude:e.latitude,onClick:()=>{k(e),g()},children:v?(0,a.jsx)(r.GI,{style:{top:-25,maxWidth:255},longitude:null==h?void 0:h.longitude,className:"popup",latitude:null==h?void 0:h.latitude,closeOnClick:!1,anchor:null,onClose:()=>x(!1),children:(0,a.jsxs)("div",{className:t().contenedor_popuop,children:[(0,a.jsx)("p",{className:t().nombre_ciudad_popup,children:null==h?void 0:h.nombreTienda}),(0,a.jsx)("a",{title:"Direcci\xf3n",href:null==h?void 0:h.comoLlegar,rel:"noreferrer",target:"_blank",className:t().direccion_popup,children:null==h?void 0:h.direccion}),(0,a.jsx)("br",{}),(0,a.jsxs)("a",{href:"tel:".concat(null==h?void 0:h.telefono),className:t().telefono_popup,title:"Tel\xe9fono",children:[(0,a.jsxs)("span",{children:[(0,a.jsx)(c.Z,{})," "]}),null==h?void 0:h.telefono]}),(0,a.jsx)("a",{title:"C\xf3mo llegar",href:null==h?void 0:h.comoLlegar,rel:"noreferrer",className:t().boton_popUp,children:"C\xf3mo llegar"}),(0,a.jsx)("a",{title:"Llamar",href:"tel:".concat(null==h?void 0:h.telefono),rel:"noreferrer",className:t().boton_popUp,children:"Llamar"}),(0,a.jsx)(u(),{title:"C\xf3mo llegar",href:null==h?void 0:h.url,rel:"noreferrer",className:t().boton_popUp,children:"Web"})]})}):null},e.id))]})})]})};o.Z=p},5685:function(e,o,n){"use strict";n.r(o),n.d(o,{__N_SSG:function(){return q},default:function(){return N}});var a=n(5893),i=n(9008),l=n.n(i),t=n(3915),d=n.n(t),c=n(942),r=n(6531),s=n.n(r),u=n(7186),p=n(2911),m=n(3428),_=n(7699),v=n(38),x=n(7650),g=n(6783),h=n(6817),j=n(7967),f=n(8317),b=n(7319),k=n(2810),q=!0;function N(e){var o,n,i,t,r,q,N,C,y,M,T,I,Z,w,P;let{markers:S,menu_list:z,ciudad:L,general:D}=e,{ref:U,inView:A,entry:R}=(0,x.YD)(),E={"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Quickgold",item:"https://quickgold.es"},{"@type":"ListItem",position:2,name:"Tiendas",item:"https://quickgold.es/tiendas"},{"@type":"ListItem",position:3,name:null==L?void 0:null===(o=L.acf)||void 0===o?void 0:o.ciudad_landing,item:"https://quickgold.es/tiendas/compro-oro-malaga"}]};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s(),{title:null==L?void 0:null===(n=L.acf)||void 0===n?void 0:n.titulo_del_meta,description:null==L?void 0:null===(i=L.acf)||void 0===i?void 0:i.descripcion_del_meta,icon:"/favicon.png",facebook:{image:"/".concat(null==L?void 0:null===(t=L.acf)||void 0===t?void 0:t.tienda,".jpg"),url:"https://www.facebook.com/quickgold.es/",type:"article"},twitter:{image:"/".concat(null==L?void 0:null===(r=L.acf)||void 0===r?void 0:r.tienda,".jpg"),site:"@quickgoldQG",card:"summary_large_image"}}),(0,a.jsxs)(l(),{children:[(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(E)}}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"stylesheet preload prefetch",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",as:"style"}),(0,a.jsx)("noscript",{children:(0,a.jsx)("link",{rel:"stylesheet",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"})}),(0,a.jsx)("link",{rel:"canonical",href:null==L?void 0:null===(q=L.acf)||void 0===q?void 0:q.canonical})]}),(0,a.jsxs)(_.Z,{menu_list:z,ciudad:L,children:[(0,a.jsxs)("div",{itemScope:!0,itemType:"http://schema.org/Organization",children:[(0,a.jsx)("meta",{itemProp:"name",content:"Quickgold"}),(0,a.jsx)("meta",{itemProp:"url",content:"https://quickgold.es"}),(0,a.jsx)("meta",{itemProp:"logo",content:"https://quickgold.es/wp-content/uploads/img/logo.jpg"}),(0,a.jsx)("meta",{itemProp:"image",content:"https://quickgold.es/wp-content/uploads/img/logo.jpg"}),(0,a.jsx)("meta",{itemProp:"telephone",content:"+34 900 373 629"}),(0,a.jsx)("meta",{itemProp:"email",content:"info@quickgold.es"}),(0,a.jsx)("meta",{itemProp:"sameAs",content:"https://www.facebook.com/quickgold.es"}),(0,a.jsx)("meta",{itemProp:"sameAs",content:"https://twitter.com/quickgoldqg"}),(0,a.jsx)("meta",{itemProp:"sameAs",content:"https://instagram.com/quickgold.es"}),(0,a.jsx)("meta",{itemProp:"address",content:"Calle \xc1lamos, 40. M\xe1laga, Provincia de M\xe1laga, 29012"}),(0,a.jsx)("meta",{itemProp:"address",content:"Calle Camino Su\xe1rez 32. M\xe1laga, Provincia de M\xe1laga, 29011"}),(0,a.jsx)("meta",{itemProp:"address",content:"Av. de la Aurora, 18. M\xe1laga, Provincia de M\xe1laga, 29002"})]}),(0,a.jsxs)("div",{className:d().main,children:[(0,a.jsx)(c.Z,{raiz:"Quickgold",tiendas:"Tiendas",ubicacionActual:null==L?void 0:null===(N=L.acf)||void 0===N?void 0:N.ciudad_landing,iconoRaiz:(0,a.jsx)(f.Z,{}),iconoUbiccionActual:(0,a.jsx)(f.Z,{}),urlNombreCiudad:"https://quickgold.es/tiendas/compro-oro-malaga",urlNombreTienda:"https://quickgold.es/tiendas/compro-oro-malaga"}),(0,a.jsx)(g.Z,{ciudad:L}),(null==L?void 0:null===(C=L.acf)||void 0===C?void 0:C.activar_banner_en_tiendas_y_ciudad)&&(null==D?void 0:null===(y=D.acf)||void 0===y?void 0:y.activar_promo_general)?(0,a.jsx)(k.Z,{ciudad:L}):null,(null==L?void 0:null===(M=L.acf)||void 0===M?void 0:M.activar_banner_en_tiendas_y_ciudad)==!1&&(null==D?void 0:null===(T=D.acf)||void 0===T?void 0:T.activar_promo_general)?(0,a.jsx)(j.Z,{general:D}):null,(null==D?void 0:null===(I=D.acf)||void 0===I?void 0:I.activar_promo_general)==!1&&(null==L?void 0:null===(Z=L.acf)||void 0===Z?void 0:Z.activar_banner_en_tiendas_y_ciudad)?(0,a.jsx)(k.Z,{ciudad:L}):null,(0,a.jsxs)("div",{className:d().contenedorSeccionUnoDos,children:[(0,a.jsx)(h.Z,{ciudad:L}),(0,a.jsx)("article",{className:d().contenedorMapaVisible,ref:U,children:A?(0,a.jsx)(b.Z,{markers:S,ciudad:L}):null})]})]}),(null==L?void 0:null===(w=L.acf)||void 0===w?void 0:w.tienda)===""?(0,a.jsx)(u.Z,{ciudad:L}):(0,a.jsx)(p.Z,{ciudad:L}),(0,a.jsx)(v.Z,{ciudad:L}),(null==L?void 0:null===(P=L.acf)||void 0===P?void 0:P.activar_banner_wallapop)?(0,a.jsx)(m.Z,{ciudad:L}):null]})]})}},8302:function(e){e.exports={contenedorSeccionUno:"seccionUno_contenedorSeccionUno__MtPgj",bloqueDer:"seccionUno_bloqueDer__csCt7",linea:"seccionUno_linea__sKg3N"}},8235:function(e){e.exports={contenedorSeccionDos:"seccionDos_contenedorSeccionDos__33bX9"}},5362:function(e){e.exports={contenedorMapa:"mapaCiudades_contenedorMapa__DHLB8",contenedorbloqueIzq:"mapaCiudades_contenedorbloqueIzq__Rp7gq",bloqueDer:"mapaCiudades_bloqueDer__mH701",bloqueIzq:"mapaCiudades_bloqueIzq__DKR5L",linea:"mapaCiudades_linea__O4vPS",reset_map:"mapaCiudades_reset_map__lr2TZ",contenedorTiendas:"mapaCiudades_contenedorTiendas__hZuvd",tienda:"mapaCiudades_tienda__fBGAS","mapboxgl-popup-close-button":"mapaCiudades_mapboxgl-popup-close-button___PgA_",nombre_ciudad_popup:"mapaCiudades_nombre_ciudad_popup__YLhzk",direccion_popup:"mapaCiudades_direccion_popup__IS9wP",telefono_popup:"mapaCiudades_telefono_popup__eqt8Z",boton_como_llegar:"mapaCiudades_boton_como_llegar__8it0V",boton_popUp:"mapaCiudades_boton_popUp__yw3fW",contenedorInfoTiendaMapa:"mapaCiudades_contenedorInfoTiendaMapa__ibqhv",contenedorInfoTiendaMapaActivo:"mapaCiudades_contenedorInfoTiendaMapaActivo__RvQHD"}}},function(e){e.O(0,[1258,3542,2633,4384,1591,3945,9774,2888,179],function(){return e(e.s=8873)}),_N_E=e.O()}]);