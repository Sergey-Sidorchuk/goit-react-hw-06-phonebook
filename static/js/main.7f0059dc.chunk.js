(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={input:"Filter_input__3_WR3",label:"Filter_label__1UiGp"}},15:function(e,t,n){e.exports={name:"Contact_name__3WO-6",btn:"Contact_btn__3zonu"}},16:function(e,t,n){e.exports={list:"Contacts_list__1Zsq0",item:"Contacts_item__1QL-V"}},19:function(e,t,n){e.exports={container:"Container_container__3EPiW"}},30:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),s=n.n(r),o=n(3),i=n(18),b=(n(30),n(19)),l=n.n(b),u=n(1),j=function(e){var t=e.children;return Object(u.jsx)("div",{className:l.a.container,children:t})},m=n(17),d=n(4),O=n(36),f=Object(d.b)("contacts/add",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(O.a)(),name:t,number:n}}})),p=Object(d.b)("contacts/delete"),h=Object(d.b)("contacts/changeFilte"),_=n(6),x=n.n(_);function v(e){e.onSubmit;var t=Object(o.b)(),n=Object(o.c)((function(e){return e.contacts.item})),c=Object(a.useState)(""),r=Object(m.a)(c,2),s=r[0],i=r[1],b=Object(a.useState)(""),l=Object(m.a)(b,2),j=l[0],d=l[1],O=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":d(a);break;default:return}};return Object(u.jsxs)("form",{className:x.a.form,onSubmit:function(e){e.preventDefault(),s&&j&&(n.map((function(e){return e.name})).includes(s)&&alert("".concat(s," is already in contacs.")),t(f({name:s,number:j})),i(""),d(""))},children:[Object(u.jsxs)("label",{className:x.a.label,children:["Name",Object(u.jsx)("input",{className:x.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:s,onChange:O})]}),Object(u.jsxs)("label",{className:x.a.label,children:["Number",Object(u.jsx)("input",{className:x.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:O})]}),Object(u.jsx)("button",{className:x.a.btn,type:"submit",children:"Add contact"})]})}var C=n(14),g=n.n(C),N=function(){var e=Object(o.b)();return Object(u.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(u.jsx)("input",{className:g.a.input,type:"text",onChange:function(t){return e(h(t.target.value))}})]})},y=n(15),k=n.n(y),F=function(e){var t=e.name,n=e.number,a=e.onDeleteContact;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:k.a.name,children:[t,": ",Object(u.jsx)("span",{children:n})]}),Object(u.jsx)("button",{className:k.a.btn,onClick:a,children:"Delete"})]})},w=n(16),A=n.n(w),z=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){var t=e.contacts,n=t.filter,a=t.item,c=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(c)}))}));return Object(u.jsx)("ul",{className:A.a.list,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(u.jsx)("li",{className:A.a.item,children:Object(u.jsx)(F,{name:a,number:c,onDeleteContact:function(){return function(t){return e(p(t))}(n)}})},n)}))})};function S(){return Object(u.jsxs)(j,{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(v,{}),Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(N,{}),Object(u.jsx)(z,{})]})}var q,D=n(10),Z=n(21),B=n(2),J=Object(d.c)([],(q={},Object(D.a)(q,f,(function(e,t){var n=t.payload;return[].concat(Object(Z.a)(e),[n])})),Object(D.a)(q,p,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),q)),L=Object(d.c)("",Object(D.a)({},h,(function(e,t){return t.payload}))),M=Object(B.b)({item:J,filter:L}),W=n(5),E=n(20),I={key:"root",storage:n.n(E).a,blacklist:["filter"]},P=Object(d.a)({reducer:{contacts:Object(W.g)(I,M)},middleware:Object(d.d)({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}}),devTools:!1}),T={store:P,persistor:Object(W.h)(P)};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(o.a,{store:T.store,children:Object(u.jsx)(i.a,{loading:null,persistor:T.persistor,children:Object(u.jsx)(S,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"ContactsForm_form__2Mq2h",label:"ContactsForm_label__cygvF",input:"ContactsForm_input__3oB_c",btn:"ContactsForm_btn__1IVfy"}}},[[34,1,2]]]);
//# sourceMappingURL=main.7f0059dc.chunk.js.map