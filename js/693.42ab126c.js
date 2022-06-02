"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[693],{9273:(e,l,o)=>{o.d(l,{h:()=>g});var a=o(499),t=o(9835),n=o(3100),i=o(8910),s=o(2007),c=o(4328);const u=({color:e="primary",message:l="",icon:o=""})=>{c.Z.create({message:l,color:e,icon:o,position:"top"})};var m=o(7155),r=o(9443),d=o(9048),p=o(9017);const{t:v}=s.i18n.global,g=()=>{const e=(0,a.qj)({invoice:{...m.N},isLoading:!1}),{getters:l,dispatch:o}=(0,n.oR)(),c=(0,i.tv)(),g=(0,p.hJ)(d.F,"invoices"),w=(0,a.iH)(!1),b=async()=>{w.value=!0,await o("loadInvoices"),w.value=!1},y=async l=>{try{e.isLoading=!0;const o=(0,p.JU)(d.F,"invoices",l),a=await(0,p.QT)(o,l);e.invoice=await{...a.data(),id:a.id},e.invoice.name||c.push({name:"404Page"})}catch(o){console.log(o)}finally{e.isLoading=!1}},f=async e=>{try{(0,p.ET)(g,{...e}),u({color:"positive",message:v("common.invoiceAction.create.success"),icon:"assignment"})}catch(l){u({color:"negative",message:v("common.invoiceAction.create.error"),icon:"error"}),console.log(l)}},q=async(e,l)=>{try{const o=(0,p.JU)(d.F,"invoices",e);await(0,p.r7)(o,{...l}),u({color:"positive",message:v("common.invoiceAction.edit.success"),icon:"delete"})}catch(o){u({color:"negative",message:v("common.invoiceAction.edit.error"),icon:"error"}),console.log(o)}},_=async e=>{try{const l=(0,p.JU)(d.F,"invoices",e);await(0,p.oe)(l),u({color:"positive",message:v("common.invoiceAction.delete.success"),icon:"delete"})}catch(l){u({color:"negative",message:v("common.invoiceAction.delete.error"),icon:"error"}),console.log(l)}finally{c.push({name:"HomePage"})}},U=(0,a.iH)(r.Do.value[0]),S=(0,t.Fl)((()=>"All"===U.value.value?l.getInvoices:l.getInvoices.filter((({invoiceStatus:e})=>e.value.toLowerCase()===U.value.value.toLowerCase()))));return(0,t.YP)((()=>s.i18n.global.locale),(()=>{U.value.label=v(`common.${U.value.value.toLowerCase()}`)})),{filteredInvoices:S,statusFilter:U,isLoading:w,loadInvoices:b,loadSingleInvoice:y,invoiceDetailsState:e,createInvoice:f,editInvoice:q,deleteInvoice:_}}},7155:(e,l,o)=>{o.d(l,{N:()=>n,v:()=>i});var a=o(2007);const{t}=a.i18n.global,n={name:null,street:null,city:null,country:null,email:null,zipCode:null,paymentDueDate:null,paymentAmount:null,invoiceStatus:null},i=e=>null!==e&&""!==e?null:t("invoiceForm.requiredField")},9443:(e,l,o)=>{o.d(l,{Do:()=>i,hZ:()=>s,zF:()=>c});var a=o(2007),t=o(9835);const{t:n}=a.i18n.global,i=(0,t.Fl)((()=>[{label:n("common.all"),value:"All"},{label:n("common.pending"),value:"Pending"},{label:n("common.paid"),value:"Paid"}])),s=(0,t.Fl)((()=>[{label:n("common.pending"),value:"pending"},{label:n("common.paid"),value:"paid"}])),c=(0,t.Fl)((()=>[{name:"id",field:"id",label:n("common.invoiceId"),align:"left"},{name:"name",field:"name",label:n("common.name"),align:"left"},{name:"paymentDueDate",field:"paymentDueDate",label:n("common.dueDate"),align:"left"},{name:"invoiceStatus",field:"invoiceStatus",label:n("common.status"),align:"center"},{name:"paymentTotal",field:"paymentTotal",label:n("common.total"),sortable:!0}]))},7039:(e,l,o)=>{o.d(l,{Z:()=>j});var a=o(9835),t=o(6970),n=o(499);const i={name:"TheDialog",props:{width:{type:[Number,String],default:300}},setup(e){const l=!0;return(o,n)=>{const i=(0,a.up)("q-btn"),s=(0,a.up)("q-card-actions"),c=(0,a.up)("q-card-section"),u=(0,a.up)("q-card"),m=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(m,{modelValue:l,"onUpdate:modelValue":n[1]||(n[1]=e=>l=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"",style:(0,t.j5)(`width: ${e.width}px`)},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{flat:"",icon:"close",color:"red",onClick:n[0]||(n[0]=e=>o.$emit("close-popup"))})])),_:1}),(0,a.WI)(o.$slots,"popupHeader"),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.WI)(o.$slots,"popupContent")])),_:3}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.WI)(o.$slots,"popupFooter")])),_:3})])),_:3},8,["style"])])),_:3})}}};var s=o(7743),c=o(4458),u=o(1821),m=o(4455),r=o(3190),d=o(9984),p=o.n(d);const v=i,g=v;p()(i,"components",{QDialog:s.Z,QCard:c.Z,QCardActions:u.Z,QBtn:m.Z,QCardSection:r.Z});var w=o(7155),b=o(9443);const y={class:"text-h5 q-pl-md q-ma-none"},f={class:"q-my-md"},q={class:"text-subtitle1 q-mb-xs text-grey"},_={class:"q-mb-sm"},U={class:"row q-gutter-sm q-mb-sm"},S={class:"col"},F={class:"col"},W={class:"row q-gutter-sm"},h={class:"col"},V={class:"col"},$={class:"col"},I={class:"q-my-md"},k={class:"text-subtitle1 q-mb-xs text-grey"},D={class:"row q-gutter-sm"},Z={class:"col"},z={class:"col"},C={class:"col"},Q={class:"row justify-end"},L={name:"InvoiceForm",props:{actionBtnLabel:{type:String,required:!0},formHeader:{type:String,required:!0},invoice:{type:Object,default:()=>({...w.N})}},emits:["closePopup","submitForm"],setup(e,{emit:l}){const o=e,i=(0,n.qj)({...o.invoice}),s=(0,a.Fl)((()=>{for(const e in i)if(""===i[e]||null===i[e]||"undefined"==typeof i[e])return!1;return!0})),c=()=>{for(const e in i)i[e]=null};return(0,a.Jd)(c),(l,o)=>{const c=(0,a.up)("q-input"),u=(0,a.up)("q-select"),m=(0,a.up)("q-form"),r=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.j4)(g,{width:"600",onClosePopup:o[10]||(o[10]=e=>l.$emit("closePopup"))},{popupHeader:(0,a.w5)((()=>[(0,a._)("p",y,(0,t.zw)(e.formHeader),1)])),popupContent:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a._)("div",f,[(0,a._)("p",q,(0,t.zw)(l.$t("invoiceForm.billTo")),1),(0,a._)("div",_,[(0,a.Wm)(c,{modelValue:i.name,"onUpdate:modelValue":o[0]||(o[0]=e=>i.name=e),"lazy-rules":"",rules:[(0,n.SU)(w.v)],label:l.$t("invoiceForm.name"),filled:""},null,8,["modelValue","rules","label"])]),(0,a._)("div",U,[(0,a._)("div",S,[(0,a.Wm)(c,{modelValue:i.email,"onUpdate:modelValue":o[1]||(o[1]=e=>i.email=e),"lazy-rules":"",rules:[(0,n.SU)(w.v)],label:l.$t("invoiceForm.email"),filled:""},null,8,["modelValue","rules","label"])]),(0,a._)("div",F,[(0,a.Wm)(c,{modelValue:i.street,"onUpdate:modelValue":o[2]||(o[2]=e=>i.street=e),"lazy-rules":"",rules:[(0,n.SU)(w.v)],label:l.$t("invoiceForm.street"),filled:""},null,8,["modelValue","rules","label"])])]),(0,a._)("div",W,[(0,a._)("div",h,[(0,a.Wm)(c,{modelValue:i.zipCode,"onUpdate:modelValue":o[3]||(o[3]=e=>i.zipCode=e),"lazy-rules":"",rules:[(0,n.SU)(w.v)],label:l.$t("invoiceForm.zipCode"),filled:""},null,8,["modelValue","rules","label"])]),(0,a._)("div",V,[(0,a.Wm)(c,{modelValue:i.city,"onUpdate:modelValue":o[4]||(o[4]=e=>i.city=e),"lazy-rules":"",rules:[(0,n.SU)(w.v)],label:l.$t("invoiceForm.city"),filled:""},null,8,["modelValue","rules","label"])]),(0,a._)("div",$,[(0,a.Wm)(c,{modelValue:i.country,"onUpdate:modelValue":o[5]||(o[5]=e=>i.country=e),"lazy-rules":"",rules:[(0,n.SU)(w.v)],label:l.$t("invoiceForm.country"),filled:""},null,8,["modelValue","rules","label"])])])]),(0,a._)("div",I,[(0,a._)("p",k,(0,t.zw)(l.$t("invoiceForm.paymentDetails")),1),(0,a._)("div",D,[(0,a._)("div",Z,[(0,a.Wm)(c,{modelValue:i.paymentDueDate,"onUpdate:modelValue":o[6]||(o[6]=e=>i.paymentDueDate=e),filled:"",mask:"date",label:l.$t("invoiceForm.paymentDueDate"),rules:["date",(0,n.SU)(w.v)]},null,8,["modelValue","label","rules"])]),(0,a._)("div",z,[(0,a.Wm)(c,{modelValue:i.paymentAmount,"onUpdate:modelValue":o[7]||(o[7]=e=>i.paymentAmount=e),"lazy-rules":"",rules:[(0,n.SU)(w.v)],maxlength:"10",label:l.$t("invoiceForm.paymentAmount"),filled:""},null,8,["modelValue","rules","label"])]),(0,a._)("div",C,[(0,a.Wm)(u,{filled:"",modelValue:i.invoiceStatus,"onUpdate:modelValue":o[8]||(o[8]=e=>i.invoiceStatus=e),options:(0,n.SU)(b.hZ),"model-value":i.invoiceStatus,rules:[(0,n.SU)(w.v)],label:l.$t("invoiceForm.invoiceStatus")},null,8,["modelValue","options","model-value","rules","label"])])])])])),_:1})])),popupFooter:(0,a.w5)((()=>[(0,a._)("div",Q,[(0,a.Wm)(r,{onClick:o[9]||(o[9]=e=>l.$emit("submitForm",i)),disabled:!(0,n.SU)(s),type:"submit",class:"q-ml-sm",color:"positive"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(e.actionBtnLabel),1)])),_:1},8,["disabled"])])])),_:1})}}};var x=o(8326),A=o(6611),P=o(7509);const T=L,j=T;p()(L,"components",{QForm:x.Z,QInput:A.Z,QSelect:P.Z,QBtn:m.Z})},3693:(e,l,o)=>{o.r(l),o.d(l,{default:()=>D});var a=o(9835),t=o(7039),n=o(499),i=o(6970),s=o(9443),c=o(9273);const u=(e,l=10)=>e.length>l?`${e.slice(0,l)}...`:e,m={class:"q-pt-lg"},r={class:"col-2 q-table__title flex items-center"},d={name:"InvoicesTable",setup(e){const{statusFilter:l,filteredInvoices:o,isLoading:t,loadInvoices:d}=(0,c.h)();return(0,a.wF)((()=>d())),(e,c)=>{const d=(0,a.up)("q-inner-loading"),p=(0,a.up)("q-badge"),v=(0,a.up)("q-space"),g=(0,a.up)("q-select"),w=(0,a.up)("q-btn"),b=(0,a.up)("router-link"),y=(0,a.up)("q-td"),f=(0,a.up)("q-tr"),q=(0,a.up)("q-table");return(0,a.wg)(),(0,a.iD)("div",m,[(0,a.Wm)(q,{rows:(0,n.SU)(o),columns:(0,n.SU)(s.zF),loading:(0,n.SU)(t),class:"q-pa-lg invoices-table","row-key":"invoiceId","rows-per-page-label":e.$t("common.rowsPerPage"),"pagination-label":(l,o,a)=>e.$t("common.paginationLabel",{firstRowIndex:l,endRowIndex:o,totalRowsNumber:a}),"no-data-label":e.$t("common.noInvoicesLabel"),"loading-label":e.$t("common.loading")},{loading:(0,a.w5)((()=>[(0,a.Wm)(d,{showing:"",color:"primary"})])),top:(0,a.w5)((t=>[(0,a._)("div",r,[(0,a.Uk)((0,i.zw)(e.$t("common.invoices"))+" ",1),(0,a.Wm)(p,{class:"q-ml-md q-pa-sm text-weight-bold",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)((0,n.SU)(o).length),1)])),_:1})]),(0,a.Wm)(v),(0,a.Wm)(g,{filled:"",modelValue:(0,n.SU)(l),"onUpdate:modelValue":c[0]||(c[0]=e=>(0,n.dq)(l)?l.value=e:null),options:(0,n.SU)(s.Do),style:{width:"160px"},label:e.$t("common.status")},null,8,["modelValue","options","label"]),(0,a.Wm)(w,{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen",onClick:t.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])])),body:(0,a.w5)((l=>[(0,a.Wm)(f,{props:l},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{key:"id",props:l},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{class:"text-secondary",to:{name:"InvoiceDetails",params:{id:l.row.id}}},{default:(0,a.w5)((()=>[(0,a.Uk)("# "+(0,i.zw)(l.row.id),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,a.Wm)(y,{key:"name",props:l},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)((0,n.SU)(u)(l.row.name,25)),1)])),_:2},1032,["props"]),(0,a.Wm)(y,{key:"paymentDueDate",props:l},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(l.row.paymentDueDate),1)])),_:2},1032,["props"]),(0,a.Wm)(y,{key:"invoiceStatus",props:l},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{color:"pending"===l.row.invoiceStatus.value?"grey-7":"positive"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.$t(`common.${l.row.invoiceStatus.value.toLowerCase()}`)),1)])),_:2},1032,["color"])])),_:2},1032,["props"]),(0,a.Wm)(y,{key:"paymentTotal",props:l},{default:(0,a.w5)((()=>[(0,a.Uk)("$ "+(0,i.zw)(l.row.paymentAmount),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","loading","rows-per-page-label","pagination-label","no-data-label","loading-label"])])}}};var p=o(1639),v=o(8841),g=o(854),w=o(990),b=o(136),y=o(7509),f=o(4455),q=o(1233),_=o(7220),U=o(9984),S=o.n(U);const F=(0,p.Z)(d,[["__scopeId","data-v-584493c5"]]),W=F;S()(d,"components",{QTable:v.Z,QInnerLoading:g.Z,QBadge:w.Z,QSpace:b.Z,QSelect:y.Z,QBtn:f.Z,QTr:q.Z,QTd:_.Z});var h=o(3100);const V={class:"row justify-end"},$={name:"MainLayout",setup(e){const{createInvoice:l}=(0,c.h)(),{dispatch:o}=(0,h.oR)(),i=async e=>{m(),await l(e),await o("loadInvoices")},s=(0,n.iH)(!1),u=()=>s.value=!0,m=()=>s.value=!1;return(e,l)=>{const o=(0,a.up)("q-btn"),n=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(n,{class:"q-pa-sm"},{default:(0,a.w5)((()=>[(0,a._)("div",V,[(0,a.Wm)(o,{label:e.$t("common.newInvoice"),icon:"add",color:"positive",onClick:u},null,8,["label"])]),s.value?((0,a.wg)(),(0,a.j4)(t.Z,{key:0,onSubmitForm:i,onClosePopup:m,actionBtnLabel:e.$t("invoiceForm.createInvoice"),formHeader:e.$t("invoiceForm.newInvoice")},null,8,["actionBtnLabel","formHeader"])):(0,a.kq)("",!0),(0,a.Wm)(W)])),_:1})}}};var I=o(1967);const k=$,D=k;S()($,"components",{QLayout:I.Z,QBtn:f.Z})}}]);