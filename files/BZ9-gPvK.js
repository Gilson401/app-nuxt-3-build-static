import{_ as h}from"./DY0s8795.js";import{d as x,j as b,h as v,o as d,c as n,a as t,u as s,t as e,f as _,b as y,w,p as g,g as C,_ as k}from"./WZPZbsBb.js";import{u as S}from"./B_dRD5ix.js";import{a as F}from"./Z7ywJBlV.js";import{u as I}from"./BYJplNoc.js";const l=a=>(g("data-v-20f5aa7c"),a=a(),C(),a),N=l(()=>t("h2",{class:"text-2xl font-bold my-4"}," Detalhe do produto ",-1)),V={class:"md:flex my-auto"},j={class:"md:shrink-0 md:w-1/3 p-3"},A=["src","alt"],B={class:"p-8"},D={class:"text-2xl font-bold my-4"},E={class:"text-gray-700 mb-4"},L={class:"flex flex-col md:flex-row items-center justify-between"},R={class:"text-2xl font-bold text-green-500"},$={class:"flex flex-row items-center"},M=l(()=>t("span",{class:"text-gray-700 mr-2"},"Avaliação:",-1)),P={key:0},Q=l(()=>t("i",{class:"fas fa-star text-yellow-500"},null,-1)),T={key:1},U={class:"mt-4"},W=x({__name:"[id]",async setup(a){let c,i;const{id:u}=b().params,{data:o}=([c,i]=v(()=>S(F.productbyId(u[0]),"$EMoWv3NfQu")),c=await c,i(),c),r=I(),p=()=>{o.value!=null&&r.addFavorito(o.value)},m=()=>{r.addCart(o.value)};return(q,z)=>{const f=h;return d(),n("div",null,[N,t("div",V,[t("div",j,[t("img",{class:"w-full object-cover aspect-auto border-2",src:s(o).image,alt:s(o).title},null,8,A)]),t("div",B,[t("h2",D,e(s(o).title),1),t("p",E,e(s(o).description),1),t("div",L,[t("div",null,[t("span",R,"R$ "+e(s(o).price),1)]),t("div",$,[M,s(o).rateCount>0?(d(),n("span",P,[Q,_(" "+e(s(o).rateValue.toFixed(1))+" / 5 ("+e(s(o).rateCount)+") ",1)])):(d(),n("span",T," Sem avaliações ainda "))])]),t("div",{class:"mt-4"},[t("button",{class:"bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors",onClick:p}," Favoritar ")]),t("div",{class:"mt-4"},[t("button",{class:"bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors",onClick:m}," Add Cart ")]),t("div",U,[y(f,{to:"/fake-store",class:"bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"},{default:w(()=>[_(" Voltar Lista ")]),_:1})])])])])}}}),X=k(W,[["__scopeId","data-v-20f5aa7c"]]);export{X as default};
