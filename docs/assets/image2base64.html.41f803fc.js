import{_,e as t,o as p,c as g,a as e,w as f,f as h,F as v,b as m}from"./app.652f3b59.js";var A="/images/image2base64/cloud-upload.png";const b=e("h1",{id:"\u56FE\u7247\u8F6Cbase64",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56FE\u7247\u8F6Cbase64","aria-hidden":"true"},"#"),m(" \u56FE\u7247\u8F6CBase64")],-1),w=e("img",{src:A},null,-1),k=e("h4",null,"\u5355\u51FB\u6B64\u5904\uFF0C\u9009\u62E9\u56FE\u7247",-1),x={class:"resultarea"},R={class:"codebox"},y=["value"],j={class:"previewwrapper"},B=e("div",{class:"fntip"},[e("p",null,"\u793A\u4F8B\uFF1ABase64 \u5728CSS\u4E2D\u7684\u4F7F\u7528\uFF1A"),e("code",null,' .demoImg{ background-image: url("data:image/jpg;base64,/9j/4QMZRXhpZgAASUkqAAgAAAAL...."); } ')],-1),C=e("div",{class:"fntip"},[e("p",null,"\u793A\u4F8B\uFF1ABase64 \u5728HTML\u4E2D\u7684\u4F7F\u7528\uFF1A"),e("code",null,' <img width="40" height="30" src="data:image/jpg;base64,/9j/4QMZRXhpZgAASUkqAAgAAAAL...." /> ')],-1),F={setup(S){const l=t(null),i=t(null),s=t(null);function c(){l.value.click()}function d(a){a.preventDefault(),u(a.target.files)}function u(a){var n=a[0],r=new FileReader;r.readAsDataURL(n),r.onload=function(o){s.value=o.target.result,i.value.src=o.target.result}}return(a,n)=>(p(),g(v,null,[b,e("div",{id:"drop_area",class:"wrapper",onClick:c},[w,k,e("input",{ref_key:"fileinputRef",ref:l,type:"file",id:"imagefile",onChange:d,accept:".jpg,.jpeg,.ico,.bmp,.png"},null,544)]),f(e("div",x,[e("div",R,[e("textarea",{value:s.value,readonly:"",rows:"10"},null,8,y)]),e("div",j,[e("img",{ref_key:"previewImgRef",ref:i,class:"preview",alt:"preview"},null,512)])],512),[[h,s.value]]),B,C],64))}};var U=_(F,[["__file","image2base64.html.vue"]]);export{U as default};
