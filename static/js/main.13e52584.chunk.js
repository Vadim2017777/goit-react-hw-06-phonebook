(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={theme_selector:"Header_theme_selector__PQfAN",label:"Header_label__1UJfb",switch:"Header_switch__2EEfe",slider:"Header_slider__2CRFT"}},21:function(e,t,n){e.exports={phone_filter:"Filter_phone_filter__1Ysls",phone_filterInp:"Filter_phone_filterInp__1ojjO"}},22:function(e,t,n){e.exports={list_PhoneLs:"ContactListItem_list_PhoneLs__19Uxv",buttonPhoneLs:"ContactListItem_buttonPhoneLs__13AIp"}},26:function(e,t,n){e.exports={Contact_list:"ContactList_Contact_list__3jUq_"}},27:function(e,t,n){e.exports={enter:"ContactLsTransition_enter__32UPv",enterActive:"ContactLsTransition_enterActive__1Tg_4",exit:"ContactLsTransition_exit__vzLmM",exitActive:"ContactLsTransition_exitActive__2lQZ7"}},29:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a,o=n(0),c=n.n(o),r=n(7),l=n.n(r),i=n(1),s=n(5),u=n(6),m=n(23),h=n(4),b=n(44),d=Object(s.b)("contact/addContacts",(function(e){var t=e.name,n=e.number;return{payload:{items:{id:Object(b.a)(),name:t,number:n}}}})),p=Object(s.b)("contact/addToLocalStorage"),_={addContacts:d,removeContacts:Object(s.b)("contact/removeContacts"),changeFilter:Object(s.b)("contact/changeFilter"),changeTheme:Object(s.b)("contact/changeTheme"),addToLocalStrg:p},f=Object(s.c)([],(a={},Object(u.a)(a,_.addContacts,(function(e,t){return[].concat(Object(m.a)(e),[t.payload.items])})),Object(u.a)(a,_.removeContacts,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Object(u.a)(a,_.addToLocalStrg,(function(e,t){return Object(m.a)(t.payload)})),a)),g=Object(s.c)("",Object(u.a)({},_.changeFilter,(function(e,t){return t.payload}))),v=Object(s.c)("light",Object(u.a)({},_.changeTheme,(function(e,t){return t.payload?"dark":"light"}))),C=Object(h.c)({items:f,filter:g,theme:v}),j=Object(s.a)({reducer:{contacts:C}}),O=n(14),E=n(15),k=n(17),y=n(16),L={light:{headerBg:"#d2e0e3",fontColor:"#2a5c69",bodybg:"#9ab7ba"},dark:{headerBg:"#3c3c3c",fontColor:"white",bodybg:"black"}},N=n(12),T=n.n(N),B={toggleTheme:_.changeTheme},x=Object(i.b)((function(e){return{theme:e.contacts.theme}}),B)((function(e){var t=e.theme,n=e.toggleTheme;return c.a.createElement("header",{style:{background:L[t].headerBg,color:L[t].fontColor}},c.a.createElement("div",{className:T.a.theme_selector},c.a.createElement("span",{className:T.a.label},"Toggle theme: ","",t),c.a.createElement("label",{className:T.a.switch},c.a.createElement("input",{type:"checkbox",onChange:function(e){return n(e.currentTarget.checked)}}),c.a.createElement("span",{className:T.a.slider}))))})),F=Object(i.b)((function(e){return{theme:e.contacts.theme}}),null)((function(e){var t=e.theme,n=e.children;return c.a.createElement("div",{style:{color:L[t].fontColor,background:L[t].bodybg}},n)})),S=n(10),A={name:"",number:""},I=n(8),P=n.n(I),w=function(e){Object(k.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state=Object(S.a)({},A),e.handleInputChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(u.a)({},a,o))},e.handleSubmit=function(t){var n=e.props,a=n.contacts,o=n.onAddContacts,c=e.state.name;if(t.preventDefault(),!a.some((function(e){return e.name===c})))return e.reset(),o(Object(S.a)({},e.state));alert("".concat(c," is already in contacts"))},e.reset=function(){e.setState(Object(S.a)({},A))},e}return Object(E.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return c.a.createElement("div",{className:P.a.phoneBook_form},c.a.createElement("h2",{className:P.a.phoneBook_item},"Phonebook"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",{className:P.a.phoneBook_lb},"Name",c.a.createElement("input",{className:P.a.phoneBook_inp,type:"text",value:t,name:"name",onChange:this.handleInputChange})),c.a.createElement("label",{className:P.a.phoneBook_lb},"Number",c.a.createElement("input",{className:P.a.phoneBook_inp,type:"tel",value:n,name:"number",onChange:this.handleInputChange})),c.a.createElement("button",{type:"submit",className:P.a.buttonPhonBk},"Add contact")))}}]),n}(o.Component),U={onAddContacts:_.addContacts},H=Object(i.b)((function(e){return{contacts:e.contacts.items}}),U)(w),J=n(21),D=n.n(J),R={onChange:_.changeFilter},Q=Object(i.b)((function(e){return{value:e.contacts.filter}}),R)((function(e){var t=e.filter,n=e.onChange;return c.a.createElement("div",{className:D.a.phone_filter},c.a.createElement("h3",null,"Find my contacts"),c.a.createElement("input",{type:"text",className:D.a.phone_filterInp,value:t,onChange:function(e){return n(e.target.value)}}))})),M=n(45),q=n(43),z=n(22),V=n.n(z),W=function(e){var t=e.theme,n=e.name,a=e.number,o=e.onRemove,r=void 0===o?function(){return null}:o;return c.a.createElement("li",{className:V.a.list_PhoneLs,style:{color:L[t].fontColor,background:L[t].bodybg}},c.a.createElement("p",null,n,":",a),c.a.createElement("button",{type:"button",className:V.a.buttonPhoneLs,onClick:r},"Delete"))},X=Object(i.b)((function(e,t){var n=e.contacts.items.find((function(e){return e.id===t.id})),a=e.contacts.theme;return Object(S.a)({theme:a},n)}),(function(e,t){return{onRemove:function(){return e(_.removeContacts(t.id))}}}))(W);W.defaultProps={contacts:[]};var Y=n(26),Z=n.n(Y),G=n(27),K=n.n(G),$={onRemove:_.removeContacts},ee=Object(i.b)((function(e){var t=e.contacts,n=t.items,a=t.filter.toLowerCase(),o=e.contacts.theme;return{contacts:n.filter((function(e){return e.name.toLowerCase().includes(a)})),theme:o}}),$)((function(e){var t=e.contacts,n=e.theme;return c.a.createElement("div",{className:Z.a.Contact_list,style:{color:L[n].fontColor,background:L[n].bodybg}},c.a.createElement("h2",null,"Contacts"),c.a.createElement(M.a,{component:"ul"},t.map((function(e){var t=e.id;return c.a.createElement(q.a,{key:t,timeout:200,classNames:K.a},c.a.createElement(X,{key:t,id:t}))}))))})),te=function(e){Object(k.a)(n,e);var t=Object(y.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=this.props.onAddToLS;e&&t(JSON.parse(e))}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var e=this.props.contacts.length;return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,null),c.a.createElement(F,null,c.a.createElement(H,null),e>1&&c.a.createElement(Q,null),c.a.createElement(ee,null)))}}]),n}(o.Component),ne={onAddToLS:_.addToLocalStrg},ae=Object(i.b)((function(e){return{contacts:e.contacts.items}}),ne)(te);n(39);l.a.render(c.a.createElement(i.a,{store:j},c.a.createElement(ae,null)),document.getElementById("root"))},8:function(e,t,n){e.exports={phoneBook_form:"ContactForm_phoneBook_form__2FUp5",phoneBook_item:"ContactForm_phoneBook_item__3HU9Q",buttonPhonBk:"ContactForm_buttonPhonBk__1VXI7",phoneBook_inp:"ContactForm_phoneBook_inp__3FwWA"}}},[[29,1,2]]]);
//# sourceMappingURL=main.13e52584.chunk.js.map