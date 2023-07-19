var de=Object.defineProperty;var G=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var Y=(p,m,r)=>m in p?de(p,m,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[m]=r,M=(p,m)=>{for(var r in m||(m={}))ce.call(m,r)&&Y(p,r,m[r]);if(G)for(var r of G(m))ue.call(m,r)&&Y(p,r,m[r]);return p};import{C as me,B,z as ve,a0 as fe,k as V,Y as pe,X as _e,r as d,o as c,e as F,f as s,l as y,w as o,h as u,u as l,i as $,t as g,j as b,F as q,y as ye,m as ge}from"./vendor.1f5ca20c.js";import{c as be,i as he,e as Be,j as xe,g as P}from"./main.5b3dbb25.js";import{_ as Ie}from"./SendInvoiceModal.b7c33fae.js";import{_ as ke}from"./InvoiceIndexDropdown.b9c6c060.js";import{L as Se}from"./LoadingIcon.05d2601c.js";import"./mail-driver.71d0f877.js";const we={class:"text-sm mr-3"},Te={class:"fixed top-0 left-0 hidden h-full pt-16 pb-[6.4rem] ml-56 bg-white xl:ml-64 w-88 xl:block"},Ve={class:"flex items-center justify-between px-4 pt-8 pb-2 border border-gray-200 border-solid height-full"},Fe={class:"mb-6"},Ee={class:"flex mb-6 ml-3",role:"group","aria-label":"First group"},De={class:"px-2 py-1 pb-2 mb-1 mb-2 text-sm border-b border-gray-200 border-solid"},$e={class:"flex-2"},je={class:"mt-1 mb-2 text-xs not-italic font-medium leading-5 text-gray-600"},Le={class:"flex-1 whitespace-nowrap right"},Ne={class:"text-sm not-italic font-normal leading-5 text-right text-gray-600 est-date"},Ae={key:0,class:"flex justify-center p-4 items-center"},Ce={key:1,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},ze={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},Me=["src"],qe={setup(p){const m=be(),r=he(),j=Be(),W=xe(),{t:h}=me(),n=B(null),I=ve(),E=B(!1),k=B(!1),f=B(null),S=B(1),L=B(1),R=B(null),t=fe({orderBy:null,orderByField:null,searchText:null}),X=V(()=>n.value.invoice_number),U=V(()=>t.orderBy==="asc"||t.orderBy==null);V(()=>U.value?h("general.ascending"):h("general.descending"));const J=V(()=>`/invoices/pdf/${n.value.unique_hash}`);V(()=>n.value&&n.value.id?invoice.value.id:null),pe(I,(e,i)=>{e.name==="invoices.view"&&O()});async function K(){W.openDialog({title:h("general.are_you_sure"),message:h("invoices.invoice_mark_as_sent"),yesLabel:h("general.ok"),noLabel:h("general.cancel"),variant:"primary",hideNoButton:!1,size:"lg"}).then(async e=>{E.value=!1,e&&(await r.markAsSent({id:n.value.id,status:"SENT"}),n.value.status="SENT",E.value=!0),E.value=!1})}async function Q(e){m.openModal({title:h("invoices.send_invoice"),componentName:"SendInvoiceModal",id:n.value.id,data:n.value})}function Z(e){return I.params.id==e}async function w(e,i=!1){if(k.value)return;let v={};t.searchText!==""&&t.searchText!==null&&t.searchText!==void 0&&(v.search=t.searchText),t.orderBy!==null&&t.orderBy!==void 0&&(v.orderBy=t.orderBy),t.orderByField!==null&&t.orderByField!==void 0&&(v.orderByField=t.orderByField),k.value=!0;let T=await r.fetchInvoices(M({page:e},v));k.value=!1,f.value=f.value?f.value:[],f.value=[...f.value,...T.data.data],S.value=e||1,L.value=T.data.meta.last_page;let D=f.value.find(x=>x.id==I.params.id);i==!1&&!D&&S.value<L.value&&Object.keys(v).length===0&&w(++S.value),D&&setTimeout(()=>{i==!1&&ee()},500)}function ee(){const e=document.getElementById(`invoice-${I.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"),te())}function te(){R.value.addEventListener("scroll",e=>{e.target.scrollTop>0&&e.target.scrollTop+e.target.clientHeight>e.target.scrollHeight-200&&S.value<L.value&&w(++S.value,!0)})}async function O(){let e=await r.fetchInvoice(I.params.id);e.data&&(n.value=M({},e.data.data))}async function _(){f.value=[],w()}function ae(){return t.orderBy==="asc"?(t.orderBy="desc",_(),!0):(t.orderBy="asc",_(),!0)}return w(),O(),_=_e.exports.debounce(_,500),(e,i)=>{const v=d("BaseButton"),T=d("router-link"),D=d("BasePageHeader"),x=d("BaseIcon"),se=d("BaseInput"),N=d("BaseRadio"),A=d("BaseInputGroup"),C=d("BaseDropdownItem"),oe=d("BaseDropdown"),le=d("BaseText"),ne=d("BaseEstimateStatusBadge"),re=d("BaseFormatMoney"),ie=d("BasePage");return c(),F(q,null,[s(Ie),n.value?(c(),y(ie,{key:0,class:"xl:pl-96 xl:ml-8"},{default:o(()=>{var H;return[s(D,{title:l(X)},{actions:o(()=>[u("div",we,[n.value.status==="DRAFT"&&l(j).hasAbilities(l(P).EDIT_INVOICE)?(c(),y(v,{key:0,disabled:E.value,variant:"primary-outline",onClick:K},{default:o(()=>[$(g(e.$t("invoices.mark_as_sent")),1)]),_:1},8,["disabled"])):b("",!0)]),n.value.status==="DRAFT"&&l(j).hasAbilities(l(P).SEND_INVOICE)?(c(),y(v,{key:0,variant:"primary",class:"text-sm",onClick:Q},{default:o(()=>[$(g(e.$t("invoices.send_invoice")),1)]),_:1})):b("",!0),l(j).hasAbilities(l(P).CREATE_PAYMENT)?(c(),y(T,{key:1,to:`/admin/payments/${e.$route.params.id}/create`},{default:o(()=>[n.value.status==="SENT"||n.value.status==="OVERDUE"||n.value.status==="VIEWED"?(c(),y(v,{key:0,variant:"primary"},{default:o(()=>[$(g(e.$t("invoices.record_payment")),1)]),_:1})):b("",!0)]),_:1},8,["to"])):b("",!0),s(ke,{class:"ml-3",row:n.value,"load-data":w},null,8,["row"])]),_:1},8,["title"]),u("div",Te,[u("div",Ve,[u("div",Fe,[s(se,{modelValue:l(t).searchText,"onUpdate:modelValue":i[0]||(i[0]=a=>l(t).searchText=a),placeholder:e.$t("general.search"),type:"text",variant:"gray",onInput:i[1]||(i[1]=a=>_())},{right:o(()=>[s(x,{name:"SearchIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"])]),u("div",Ee,[s(oe,{class:"ml-3",position:"bottom-start"},{activator:o(()=>[s(v,{size:"md",variant:"gray"},{default:o(()=>[s(x,{name:"FilterIcon"})]),_:1})]),default:o(()=>[u("div",De,g(e.$t("general.sort_by")),1),s(C,{class:"flex px-1 py-2 cursor-pointer"},{default:o(()=>[s(A,{class:"-mt-3 font-normal"},{default:o(()=>[s(N,{id:"filter_invoice_date",modelValue:l(t).orderByField,"onUpdate:modelValue":[i[2]||(i[2]=a=>l(t).orderByField=a),_],label:e.$t("reports.invoices.invoice_date"),size:"sm",name:"filter",value:"invoice_date"},null,8,["modelValue","label"])]),_:1})]),_:1}),s(C,{class:"flex px-1 py-2 cursor-pointer"},{default:o(()=>[s(A,{class:"-mt-3 font-normal"},{default:o(()=>[s(N,{id:"filter_due_date",modelValue:l(t).orderByField,"onUpdate:modelValue":[i[3]||(i[3]=a=>l(t).orderByField=a),_],label:e.$t("invoices.due_date"),value:"due_date",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1}),s(C,{class:"flex px-1 py-2 cursor-pointer"},{default:o(()=>[s(A,{class:"-mt-3 font-normal"},{default:o(()=>[s(N,{id:"filter_invoice_number",modelValue:l(t).orderByField,"onUpdate:modelValue":[i[4]||(i[4]=a=>l(t).orderByField=a),_],label:e.$t("invoices.invoice_number"),value:"invoice_number",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),s(v,{class:"ml-1",size:"md",variant:"gray",onClick:ae},{default:o(()=>[l(U)?(c(),y(x,{key:0,name:"SortAscendingIcon"})):(c(),y(x,{key:1,name:"SortDescendingIcon"}))]),_:1})])]),u("div",{ref:(a,z)=>{z.invoiceListSection=a,R.value=a},class:"h-full overflow-y-scroll border-l border-gray-200 border-solid base-scroll"},[(c(!0),F(q,null,ye(f.value,(a,z)=>(c(),F("div",{key:z},[a?(c(),y(T,{key:0,id:"invoice-"+a.id,to:`/admin/invoices/${a.id}/view`,class:ge(["flex justify-between side-invoice p-4 cursor-pointer hover:bg-gray-100 items-center border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":Z(a.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:o(()=>[u("div",$e,[s(le,{text:a.customer.name,length:30,class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},null,8,["text"]),u("div",je,g(a.invoice_number),1),s(ne,{status:a.status,class:"px-1 text-xs"},{default:o(()=>[$(g(a.status),1)]),_:2},1032,["status"])]),u("div",Le,[s(re,{class:"mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900 block",amount:a.total,currency:a.customer.currency},null,8,["amount","currency"]),u("div",Ne,g(a.formatted_invoice_date),1)])]),_:2},1032,["id","to","class"])):b("",!0)]))),128)),k.value?(c(),F("div",Ae,[s(Se,{class:"h-6 m-1 animate-spin text-primary-400"})])):b("",!0),!((H=f.value)==null?void 0:H.length)&&!k.value?(c(),F("p",Ce,g(e.$t("invoices.no_matching_invoices")),1)):b("",!0)],512)]),u("div",ze,[u("iframe",{src:`${l(J)}`,class:"flex-1 border border-gray-400 border-solid bg-white rounded-md frame-style"},null,8,Me)])]}),_:1})):b("",!0)],64)}}};export{qe as default};