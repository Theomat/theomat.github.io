import{d as n,o,b as t,e as p,B as c,aa as f,x as r,g as s,f as m,l as _}from"./modules/vue-DGhvnXeY.js";import{u as a}from"./slidev/context-BeKZMaej.js";import{r as d}from"./layout-helper-DI9cn39J.js";const g={class:"flex flex-col items-center justify-center"},h=["alt","src"],N={key:0,class:"mt-3 text-center text-xs"},b={key:0},C=n({__name:"FigureWithOptionalCaption",props:{caption:{},footnoteNumber:{},url:{}},setup(i){return a(),(e,u)=>(o(),t("figure",g,[p("img",{alt:e.caption,class:"max-h-full",src:c(d)(e.url)},null,8,h),e.caption?(o(),t("figcaption",N,[f(r(e.caption),1),e.footnoteNumber?(o(),t("sup",b,r(e.footnoteNumber),1)):s("v-if",!0)])):s("v-if",!0)]))}}),v={class:"slidev-layout default h-full"},F=n({__name:"figure",props:{figureCaption:{},figureFootnoteNumber:{},figureUrl:{}},setup(i){return a(),(e,u)=>{const l=C;return o(),t("div",v,[m(e.$slots,"default"),_(l,{class:"h-5/6 p-4",caption:e.figureCaption,footnoteNumber:e.figureFootnoteNumber,url:e.figureUrl},null,8,["caption","footnoteNumber","url"])])}}});export{F as _};