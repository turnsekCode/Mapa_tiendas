(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1430],{3851:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/compro-oro-alcorcon",function(){return n(2205)}])},6783:function(e,o,n){"use strict";var i=n(5893);n(7294);var a=n(8302),l=n.n(a);let t=e=>{var o;let{ciudad:n}=e;return(0,i.jsx)("article",{className:l().contenedorSeccionUno,children:(0,i.jsx)("div",{className:l().bloqueDer,children:(0,i.jsx)("h1",{children:null==n?void 0:null===(o=n.acf)||void 0===o?void 0:o.titulo_del_h1})})})};o.Z=t},6817:function(e,o,n){"use strict";var i=n(5893),a=n(7215);n(7294);var l=n(8235),t=n.n(l);let d=e=>{let{ciudad:o}=e;return(0,i.jsx)("article",{className:t().contenedorSeccionDos,children:(0,i.jsx)(a.Z,{ciudad:o})})};o.Z=d},7319:function(e,o,n){"use strict";var i=n(5893),a=n(7294),l=n(5362),t=n.n(l),d=n(6261),c=n(1123),r=n(3545),s=n(1664),u=n.n(s),p=n(3454);let m=e=>{let{markers:o,ciudad:n}=e,l=o.arrayMarker,[s,m]=(0,a.useState)({longitude:o.markerInicial[0].longitude,latitude:o.markerInicial[0].latitude,zoom:o.markerInicial[0].zoom,cooperativeGestures:!0}),_=(0,a.useRef)(),v=()=>{var e;f(!1),null===(e=_.current)||void 0===e||e.flyTo({center:[o.markerInicial[0].longitude,o.markerInicial[0].latitude],duration:2e3,zoom:o.markerInicial[0].zoom})},[x,f]=(0,a.useState)(null),h=()=>{f(!0)},[j,g]=(0,a.useState)({id:"",longitude:"",latitude:"",tienda:"",telefono:"",direccion:"",comoLlegar:"",nombreTienda:"",duration:"",zoom:"",url:""}),[b,k]=(0,a.useState)(""),q=e=>{var o;g({id:e.id,longitude:e.longitude,latitude:e.latitude,tienda:e.tienda,telefono:e.telefono,direccion:e.direccion,comoLlegar:e.comoLlegar,nombreTienda:e.nombreTienda,duration:e.duration,zoom:e.zoom,url:e.url}),null===(o=_.current)||void 0===o||o.flyTo({center:{lng:e.longitude,lat:e.latitude},duration:1500,zoom:e.zoom}),k(e.id)},N=o.arrayMarker[o.arrayMarker.length-1];return(0,i.jsxs)("section",{className:t().contenedorMapa,children:[(0,i.jsxs)("div",{className:t().contenedorbloqueIzq,children:[(0,i.jsx)("div",{className:t().bloqueIzq,children:(0,i.jsxs)("p",{children:["Tiendas: ",(0,i.jsx)("span",{children:null==N?void 0:N.id})]})}),(0,i.jsx)("div",{className:t().contenedorTiendas,children:l.map(e=>(0,i.jsx)(d.rU,{onClick:()=>{h(),q(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,children:(0,i.jsxs)("div",{onClick:()=>{h(),q(e)},className:b===e.id&&x?"".concat(t().contenedorInfoTiendaMapa," ").concat(t().contenedorInfoTiendaMapaActivo):" ".concat(t().contenedorInfoTiendaMapa),children:[(0,i.jsx)("h3",{children:null==e?void 0:e.nombreTienda}),(0,i.jsxs)("div",{className:t().tienda,children:[(0,i.jsx)("p",{children:null==e?void 0:e.direccion}),(0,i.jsx)("p",{children:null==e?void 0:e.telefono})]})]})},e.id))})]}),(0,i.jsx)("div",{className:t().bloqueDer,id:"contenedorMapa2",children:(0,i.jsxs)(r.ZP,{onStyleLoad:!0,ref:_,...s,onMove:e=>m(e.viewState),className:t().mapa,mapStyle:"mapbox://styles/mapbox/streets-v9?optimize=true",mapboxAccessToken:p.env.NEXT_PUBLIC_MAPA,children:[(0,i.jsx)(r.ot,{})," ",(0,i.jsx)(r.$j,{})," ",(0,i.jsx)(r.Pv,{}),(0,i.jsx)("button",{className:t().reset_map,onClick:()=>{v()},children:"Reset Map"}),l.map(e=>(0,i.jsx)(r.Jx,{longitude:e.longitude,latitude:e.latitude,onClick:()=>{q(e),h()},children:x?(0,i.jsx)(r.GI,{style:{top:-25,maxWidth:255},longitude:null==j?void 0:j.longitude,className:"popup",latitude:null==j?void 0:j.latitude,closeOnClick:!1,anchor:null,onClose:()=>f(!1),children:(0,i.jsxs)("div",{className:t().contenedor_popuop,children:[(0,i.jsx)("p",{className:t().nombre_ciudad_popup,children:null==j?void 0:j.nombreTienda}),(0,i.jsx)("a",{title:"Direcci\xf3n",href:null==j?void 0:j.comoLlegar,rel:"noreferrer",target:"_blank",className:t().direccion_popup,children:null==j?void 0:j.direccion}),(0,i.jsx)("br",{}),(0,i.jsxs)("a",{href:"tel:".concat(null==j?void 0:j.telefono),className:t().telefono_popup,title:"Tel\xe9fono",children:[(0,i.jsxs)("span",{children:[(0,i.jsx)(c.Z,{})," "]}),null==j?void 0:j.telefono]}),(0,i.jsx)("a",{title:"C\xf3mo llegar",href:null==j?void 0:j.comoLlegar,rel:"noreferrer",className:t().boton_popUp,children:"C\xf3mo llegar"}),(0,i.jsx)("a",{title:"Llamar",href:"tel:".concat(null==j?void 0:j.telefono),rel:"noreferrer",className:t().boton_popUp,children:"Llamar"}),(0,i.jsx)(u(),{title:"C\xf3mo llegar",href:null==j?void 0:j.url,rel:"noreferrer",className:t().boton_popUp,children:"Web"})]})}):null},e.id))]})})]})};o.Z=m},2205:function(e,o,n){"use strict";n.r(o),n.d(o,{__N_SSG:function(){return q},default:function(){return N}});var i=n(5893),a=n(9008),l=n.n(a),t=n(3915),d=n.n(t),c=n(942),r=n(6531),s=n.n(r),u=n(7186),p=n(2911),m=n(3428),_=n(7699),v=n(38),x=n(7650),f=n(6783),h=n(6817),j=n(7967),g=n(2810),b=n(8317),k=n(7319),q=!0;function N(e){var o,n,a,t,r,q,N,C,T,y,I,w,M,Z,S;let{markers:P,menu_list:z,ciudad:L,general:D}=e,{ref:A,inView:U,entry:E}=(0,x.YD)(),O={"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Quickgold",item:"https://quickgold.es"},{"@type":"ListItem",position:2,name:"Tiendas",item:"https://quickgold.es/tiendas"},{"@type":"ListItem",position:3,name:null==L?void 0:null===(o=L.acf)||void 0===o?void 0:o.ciudad_landing,item:"https://quickgold.es/tiendas/compro-oro-alcorcon"}]};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{title:null==L?void 0:null===(n=L.acf)||void 0===n?void 0:n.titulo_del_meta,description:null==L?void 0:null===(a=L.acf)||void 0===a?void 0:a.descripcion_del_meta,icon:"/favicon.png",facebook:{image:"/".concat(null==L?void 0:null===(t=L.acf)||void 0===t?void 0:t.tienda,".jpg"),url:"https://www.facebook.com/quickgold.es/",type:"article"},twitter:{image:"/".concat(null==L?void 0:null===(r=L.acf)||void 0===r?void 0:r.tienda,".jpg"),site:"@quickgoldQG",card:"summary_large_image"}}),(0,i.jsxs)(l(),{children:[(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(O)}}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"stylesheet preload prefetch",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",as:"style"}),(0,i.jsx)("noscript",{children:(0,i.jsx)("link",{rel:"stylesheet",href:"https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"})}),(0,i.jsx)("link",{rel:"canonical",href:null==L?void 0:null===(q=L.acf)||void 0===q?void 0:q.canonical})]}),(0,i.jsxs)(_.Z,{menu_list:z,ciudad:L,children:[(0,i.jsxs)("div",{itemScope:!0,itemType:"http://schema.org/Organization",children:[(0,i.jsx)("meta",{itemProp:"name",content:"Quickgold"}),(0,i.jsx)("meta",{itemProp:"url",content:"https://quickgold.es"}),(0,i.jsx)("meta",{itemProp:"logo",content:"https://quickgold.es/wp-content/uploads/img/logo.jpg"}),(0,i.jsx)("meta",{itemProp:"image",content:"https://quickgold.es/wp-content/uploads/img/logo.jpg"}),(0,i.jsx)("meta",{itemProp:"telephone",content:"+34 900 373 629"}),(0,i.jsx)("meta",{itemProp:"email",content:"info@quickgold.es"}),(0,i.jsx)("meta",{itemProp:"sameAs",content:"https://www.facebook.com/quickgold.es"}),(0,i.jsx)("meta",{itemProp:"sameAs",content:"https://twitter.com/quickgoldqg"}),(0,i.jsx)("meta",{itemProp:"sameAs",content:"https://instagram.com/quickgold.es"}),(0,i.jsx)("meta",{itemProp:"address",content:"Calle Mayor 74, bajo A, . Alcorc\xf3n, Provincia de Madrid, 28921"})]}),(0,i.jsxs)("div",{className:d().main,children:[(0,i.jsx)(c.Z,{raiz:"Quickgold",tiendas:"Tiendas",ubicacionActual:null==L?void 0:null===(N=L.acf)||void 0===N?void 0:N.ciudad_landing,iconoRaiz:(0,i.jsx)(b.Z,{}),iconoUbiccionActual:(0,i.jsx)(b.Z,{}),urlNombreCiudad:"https://quickgold.es/tiendas/compro-oro-alcorcon",urlNombreTienda:"https://quickgold.es/tiendas/compro-oro-alcorcon"}),(0,i.jsx)(f.Z,{ciudad:L}),(null==L?void 0:null===(C=L.acf)||void 0===C?void 0:C.activar_banner_en_tiendas_y_ciudad)&&(null==D?void 0:null===(T=D.acf)||void 0===T?void 0:T.activar_promo_general)?(0,i.jsx)(g.Z,{ciudad:L}):null,(null==L?void 0:null===(y=L.acf)||void 0===y?void 0:y.activar_banner_en_tiendas_y_ciudad)==!1&&(null==D?void 0:null===(I=D.acf)||void 0===I?void 0:I.activar_promo_general)?(0,i.jsx)(j.Z,{general:D}):null,(null==D?void 0:null===(w=D.acf)||void 0===w?void 0:w.activar_promo_general)==!1&&(null==L?void 0:null===(M=L.acf)||void 0===M?void 0:M.activar_banner_en_tiendas_y_ciudad)?(0,i.jsx)(g.Z,{ciudad:L}):null,(0,i.jsxs)("div",{className:d().contenedorSeccionUnoDos,children:[(0,i.jsx)(h.Z,{ciudad:L}),(0,i.jsx)("article",{className:d().contenedorMapaVisible,ref:A,children:U?(0,i.jsx)(k.Z,{markers:P,ciudad:L}):null})]})]}),(null==L?void 0:null===(Z=L.acf)||void 0===Z?void 0:Z.tienda)===""?(0,i.jsx)(u.Z,{ciudad:L}):(0,i.jsx)(p.Z,{ciudad:L}),(0,i.jsx)(v.Z,{ciudad:L}),(null==L?void 0:null===(S=L.acf)||void 0===S?void 0:S.activar_banner_wallapop)?(0,i.jsx)(m.Z,{ciudad:L}):null]})]})}},8302:function(e){e.exports={contenedorSeccionUno:"seccionUno_contenedorSeccionUno__MtPgj",bloqueDer:"seccionUno_bloqueDer__csCt7",linea:"seccionUno_linea__sKg3N"}},8235:function(e){e.exports={contenedorSeccionDos:"seccionDos_contenedorSeccionDos__33bX9"}},5362:function(e){e.exports={contenedorMapa:"mapaCiudades_contenedorMapa__DHLB8",contenedorbloqueIzq:"mapaCiudades_contenedorbloqueIzq__Rp7gq",bloqueDer:"mapaCiudades_bloqueDer__mH701",bloqueIzq:"mapaCiudades_bloqueIzq__DKR5L",linea:"mapaCiudades_linea__O4vPS",reset_map:"mapaCiudades_reset_map__lr2TZ",contenedorTiendas:"mapaCiudades_contenedorTiendas__hZuvd",tienda:"mapaCiudades_tienda__fBGAS","mapboxgl-popup-close-button":"mapaCiudades_mapboxgl-popup-close-button___PgA_",nombre_ciudad_popup:"mapaCiudades_nombre_ciudad_popup__YLhzk",direccion_popup:"mapaCiudades_direccion_popup__IS9wP",telefono_popup:"mapaCiudades_telefono_popup__eqt8Z",boton_como_llegar:"mapaCiudades_boton_como_llegar__8it0V",boton_popUp:"mapaCiudades_boton_popUp__yw3fW",contenedorInfoTiendaMapa:"mapaCiudades_contenedorInfoTiendaMapa__ibqhv",contenedorInfoTiendaMapaActivo:"mapaCiudades_contenedorInfoTiendaMapaActivo__RvQHD"}}},function(e){e.O(0,[1258,3542,2633,4384,1591,3945,9774,2888,179],function(){return e(e.s=3851)}),_N_E=e.O()}]);