(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9563],{2277:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/compro-oro-marbella",function(){return n(6684)}])},6783:function(e,o,n){"use strict";var i=n(5893);n(7294);var a=n(8302),l=n.n(a);let t=e=>{var o;let{ciudad:n}=e;return(0,i.jsx)("header",{className:l().contenedorSeccionUno,children:(0,i.jsx)("div",{className:l().bloqueDer,children:(0,i.jsxs)("h1",{children:["Tiendas Quickgold en ",null==n?void 0:null===(o=n.acf)||void 0===o?void 0:o.ciudad_landing,(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:l().textoMenos,children:"Compro oro. Cambio de divisa. Empe\xf1ar Oro."})]})})})};o.Z=t},6817:function(e,o,n){"use strict";var i=n(5893),a=n(7215);n(7294);var l=n(8235),t=n.n(l);let d=e=>{let{ciudad:o}=e;return(0,i.jsx)("article",{className:t().contenedorSeccionDos,children:(0,i.jsx)(a.Z,{ciudad:o})})};o.Z=d},5956:function(e,o,n){"use strict";n.d(o,{Z:function(){return r}});var i=n(5893);n(7294);var a=n(38),l=n(1376),t=n.n(l);let d=e=>{var o;let{general:n}=e;return(0,i.jsx)("section",{className:t().contenedorHtml,dangerouslySetInnerHTML:{__html:null==n?void 0:null===(o=n.acf)||void 0===o?void 0:o.html}})},c=e=>{var o,n;let{ciudad:l,general:t}=e;(null==l?void 0:null===(o=l.acf)||void 0===o?void 0:o.html)===""?(0,i.jsx)(d,{general:t}):(null==t||null===(n=t.acf)||void 0===n||n.html,(0,i.jsx)(a.Z,{ciudad:l}))};var r=c},7319:function(e,o,n){"use strict";var i=n(5893),a=n(7294),l=n(5362),t=n.n(l),d=n(6261),c=n(1123),r=n(3545),s=n(1664),u=n.n(s);let p=e=>{let{markers:o,ciudad:n}=e,l=o.arrayMarker,[s,p]=(0,a.useState)({longitude:o.markerInicial[0].longitude,latitude:o.markerInicial[0].latitude,zoom:o.markerInicial[0].zoom,cooperativeGestures:!0}),m=(0,a.useRef)(),_=()=>{var e;x(!1),null===(e=m.current)||void 0===e||e.flyTo({center:[o.markerInicial[0].longitude,o.markerInicial[0].latitude],duration:2e3,zoom:o.markerInicial[0].zoom})},[v,x]=(0,a.useState)(null),h=()=>{x(!0)},[f,j]=(0,a.useState)({id:"",longitude:"",latitude:"",tienda:"",telefono:"",direccion:"",comoLlegar:"",nombreTienda:"",duration:"",zoom:"",url:""}),[g,b]=(0,a.useState)(""),k=e=>{var o;j({id:e.id,longitude:e.longitude,latitude:e.latitude,tienda:e.tienda,telefono:e.telefono,direccion:e.direccion,comoLlegar:e.comoLlegar,nombreTienda:e.nombreTienda,duration:e.duration,zoom:e.zoom,url:e.url}),null===(o=m.current)||void 0===o||o.flyTo({center:{lng:e.longitude,lat:e.latitude},duration:1500,zoom:e.zoom}),b(e.id)},N=o.arrayMarker[o.arrayMarker.length-1];return(0,i.jsxs)("section",{className:t().contenedorMapa,children:[(0,i.jsxs)("div",{className:t().contenedorbloqueIzq,children:[(0,i.jsx)("div",{className:t().bloqueIzq,children:(0,i.jsxs)("p",{children:["Tiendas: ",(0,i.jsx)("span",{children:null==N?void 0:N.id})]})}),(0,i.jsx)("div",{className:t().contenedorTiendas,children:l.map(e=>(0,i.jsx)(d.rU,{onClick:()=>{h(),k(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,children:(0,i.jsxs)("div",{onClick:()=>{h(),k(e)},className:g===e.id&&v?"".concat(t().contenedorInfoTiendaMapa," ").concat(t().contenedorInfoTiendaMapaActivo):" ".concat(t().contenedorInfoTiendaMapa),children:[(0,i.jsx)("h3",{children:null==e?void 0:e.nombreTienda}),(0,i.jsxs)("div",{className:t().tienda,children:[(0,i.jsx)("p",{children:null==e?void 0:e.direccion}),(0,i.jsx)("p",{children:null==e?void 0:e.telefono})]})]})},e.id))})]}),(0,i.jsx)("div",{className:t().bloqueDer,id:"contenedorMapa2",children:(0,i.jsxs)(r.ZP,{onStyleLoad:!0,ref:m,...s,onMove:e=>p(e.viewState),className:t().mapa,mapStyle:"mapbox://styles/mapbox/streets-v9?optimize=true",mapboxAccessToken:"pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",children:[(0,i.jsx)(r.ot,{})," ",(0,i.jsx)(r.$j,{})," ",(0,i.jsx)(r.Pv,{}),(0,i.jsx)("button",{className:t().reset_map,onClick:()=>{_()},children:"Reset Map"}),l.map(e=>(0,i.jsx)(r.Jx,{longitude:e.longitude,latitude:e.latitude,onClick:()=>{k(e),h()},children:v?(0,i.jsx)(r.GI,{style:{top:-25,maxWidth:255},longitude:null==f?void 0:f.longitude,className:"popup",latitude:null==f?void 0:f.latitude,closeOnClick:!1,anchor:null,onClose:()=>x(!1),children:(0,i.jsxs)("div",{className:t().contenedor_popuop,children:[(0,i.jsx)("p",{className:t().nombre_ciudad_popup,children:null==f?void 0:f.nombreTienda}),(0,i.jsx)("a",{title:"Direcci\xf3n",href:null==f?void 0:f.comoLlegar,rel:"noreferrer",target:"_blank",className:t().direccion_popup,children:null==f?void 0:f.direccion}),(0,i.jsx)("br",{}),(0,i.jsxs)("a",{href:"tel:".concat(null==f?void 0:f.telefono),className:t().telefono_popup,title:"Tel\xe9fono",children:[(0,i.jsxs)("span",{children:[(0,i.jsx)(c.Z,{})," "]}),null==f?void 0:f.telefono]}),(0,i.jsx)("a",{title:"C\xf3mo llegar",href:null==f?void 0:f.comoLlegar,rel:"noreferrer",className:t().boton_popUp,children:"C\xf3mo llegar"}),(0,i.jsx)("a",{title:"Llamar",href:"tel:".concat(null==f?void 0:f.telefono),rel:"noreferrer",className:t().boton_popUp,children:"Llamar"}),(0,i.jsx)(u(),{title:"C\xf3mo llegar",href:null==f?void 0:f.url,rel:"noreferrer",className:t().boton_popUp,children:"Web"})]})}):null},e.id))]})})]})};o.Z=p},6684:function(e,o,n){"use strict";n.r(o),n.d(o,{__N_SSG:function(){return N},default:function(){return q}});var i=n(5893),a=n(9008),l=n.n(a),t=n(3915),d=n.n(t),c=n(942),r=n(6531),s=n.n(r),u=n(7186),p=n(2911),m=n(3428),_=n(7699),v=n(5956),x=n(7650),h=n(6783),f=n(6817),j=n(7967),g=n(8317),b=n(7319),k=n(2810),N=!0;function q(e){var o,n,a,t,r,N,q,C,y,T,I,Z,M,w,S;let{markers:z,menu_list:L,ciudad:P,general:D}=e,{ref:U,inView:A,entry:H}=(0,x.YD)(),R={"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Quickgold",item:"https://quickgold.es"},{"@type":"ListItem",position:2,name:"Tiendas",item:"https://quickgold.es/tiendas"},{"@type":"ListItem",position:3,name:null==P?void 0:null===(o=P.acf)||void 0===o?void 0:o.ciudad_landing,item:"https://quickgold.es/tiendas/compro-oro-marbella"}]};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{title:null==P?void 0:null===(n=P.acf)||void 0===n?void 0:n.titulo_del_meta,description:null==P?void 0:null===(a=P.acf)||void 0===a?void 0:a.descripcion_del_meta,icon:"/favicon.png",facebook:{image:"/".concat(null==P?void 0:null===(t=P.acf)||void 0===t?void 0:t.tienda,".jpg"),url:"https://www.facebook.com/quickgold.es/",type:"article"},twitter:{image:"/".concat(null==P?void 0:null===(r=P.acf)||void 0===r?void 0:r.tienda,".jpg"),site:"@quickgoldQG",card:"summary_large_image"}}),(0,i.jsxs)(l(),{children:[(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(R)}}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"stylesheet preload prefetch",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",as:"style"}),(0,i.jsx)("noscript",{children:(0,i.jsx)("link",{rel:"stylesheet",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"})}),(0,i.jsx)("link",{rel:"canonical",href:null==P?void 0:null===(N=P.acf)||void 0===N?void 0:N.canonical})]}),(0,i.jsxs)(_.Z,{menu_list:L,ciudad:P,children:[(0,i.jsxs)("div",{itemScope:!0,itemType:"http://schema.org/Organization",children:[(0,i.jsx)("meta",{itemProp:"name",content:"Quickgold"}),(0,i.jsx)("meta",{itemProp:"url",content:"https://quickgold.es"}),(0,i.jsx)("meta",{itemProp:"logo",content:"https://quickgold.es/wp-content/uploads/img/logo.jpg"}),(0,i.jsx)("meta",{itemProp:"image",content:"https://quickgold.es/wp-content/uploads/img/logo.jpg"}),(0,i.jsx)("meta",{itemProp:"telephone",content:"+34 900 373 629"}),(0,i.jsx)("meta",{itemProp:"email",content:"info@quickgold.es"}),(0,i.jsx)("meta",{itemProp:"sameAs",content:"https://www.facebook.com/quickgold.es"}),(0,i.jsx)("meta",{itemProp:"sameAs",content:"https://twitter.com/quickgoldqg"}),(0,i.jsx)("meta",{itemProp:"sameAs",content:"https://instagram.com/quickgold.es"}),(0,i.jsx)("meta",{itemProp:"address",content:"Av. Ricardo Soriano, 7. Marbella, Provincia de Marbella, 29601"})]}),(0,i.jsxs)("article",{className:d().main,children:[(0,i.jsx)(c.Z,{raiz:"Quickgold",tiendas:"Tiendas",ubicacionActual:null==P?void 0:null===(q=P.acf)||void 0===q?void 0:q.ciudad_landing,iconoRaiz:(0,i.jsx)(g.Z,{}),iconoUbiccionActual:(0,i.jsx)(g.Z,{}),urlNombreCiudad:"https://quickgold.es/tiendas/compro-oro-marbella",urlNombreTienda:"https://quickgold.es/tiendas/compro-oro-marbella"}),(0,i.jsx)(h.Z,{ciudad:P}),(null==P?void 0:null===(C=P.acf)||void 0===C?void 0:C.activar_banner_en_tiendas_y_ciudad)&&(null==D?void 0:null===(y=D.acf)||void 0===y?void 0:y.activar_promo_general)?(0,i.jsx)(k.Z,{ciudad:P}):null,(null==P?void 0:null===(T=P.acf)||void 0===T?void 0:T.activar_banner_en_tiendas_y_ciudad)==!1&&(null==D?void 0:null===(I=D.acf)||void 0===I?void 0:I.activar_promo_general)?(0,i.jsx)(j.Z,{general:D}):null,(null==D?void 0:null===(Z=D.acf)||void 0===Z?void 0:Z.activar_promo_general)==!1&&(null==P?void 0:null===(M=P.acf)||void 0===M?void 0:M.activar_banner_en_tiendas_y_ciudad)?(0,i.jsx)(k.Z,{ciudad:P}):null,(0,i.jsxs)("div",{className:d().contenedorSeccionUnoDos,children:[(0,i.jsx)(f.Z,{ciudad:P}),(0,i.jsx)("aside",{className:d().contenedorMapaVisible,ref:U,children:A?(0,i.jsx)(b.Z,{markers:z,ciudad:P}):null})]})]}),(null==P?void 0:null===(w=P.acf)||void 0===w?void 0:w.tienda)===""?(0,i.jsx)(u.Z,{ciudad:P}):(0,i.jsx)(p.Z,{ciudad:P}),(0,i.jsx)(v.Z,{ciudad:P,general:D}),(null==P?void 0:null===(S=P.acf)||void 0===S?void 0:S.activar_banner_wallapop)?(0,i.jsx)(m.Z,{ciudad:P}):null]})]})}},1376:function(e){e.exports={contenedorHtml:"htmlGeneral_contenedorHtml__V4osI"}},8302:function(e){e.exports={contenedorSeccionUno:"seccionUno_contenedorSeccionUno__MtPgj",bloqueDer:"seccionUno_bloqueDer__csCt7",linea:"seccionUno_linea__sKg3N",textoMenos:"seccionUno_textoMenos__mLuez"}},8235:function(e){e.exports={contenedorSeccionDos:"seccionDos_contenedorSeccionDos__33bX9"}},5362:function(e){e.exports={contenedorMapa:"mapaCiudades_contenedorMapa__DHLB8",contenedorbloqueIzq:"mapaCiudades_contenedorbloqueIzq__Rp7gq",bloqueDer:"mapaCiudades_bloqueDer__mH701",bloqueIzq:"mapaCiudades_bloqueIzq__DKR5L",linea:"mapaCiudades_linea__O4vPS",reset_map:"mapaCiudades_reset_map__lr2TZ",contenedorTiendas:"mapaCiudades_contenedorTiendas__hZuvd",tienda:"mapaCiudades_tienda__fBGAS","mapboxgl-popup-close-button":"mapaCiudades_mapboxgl-popup-close-button___PgA_",nombre_ciudad_popup:"mapaCiudades_nombre_ciudad_popup__YLhzk",direccion_popup:"mapaCiudades_direccion_popup__IS9wP",telefono_popup:"mapaCiudades_telefono_popup__eqt8Z",boton_como_llegar:"mapaCiudades_boton_como_llegar__8it0V",boton_popUp:"mapaCiudades_boton_popUp__yw3fW",contenedorInfoTiendaMapa:"mapaCiudades_contenedorInfoTiendaMapa__ibqhv",contenedorInfoTiendaMapaActivo:"mapaCiudades_contenedorInfoTiendaMapaActivo__RvQHD"}}},function(e){e.O(0,[1258,3542,2633,4384,1591,3945,9774,2888,179],function(){return e(e.s=2277)}),_N_E=e.O()}]);