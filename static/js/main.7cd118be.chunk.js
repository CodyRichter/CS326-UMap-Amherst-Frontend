(this["webpackJsonpumap-amherst-frontend"]=this["webpackJsonpumap-amherst-frontend"]||[]).push([[0],{262:function(e){e.exports=JSON.parse('[{"featureType":"poi.attraction","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"labels.icon","stylers":[{"color":"#651021"},{"visibility":"off"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#C0C0C0"}]}]')},314:function(e,t,s){},315:function(e,t,s){},316:function(e,t,s){},317:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(33),l=s.n(c),i=s(55),r=s(25),o=s(6),d=s(399),j=s(401),u=s(330),b=s(400),h=s(384),m=s(385),O=s(88),x=s(231),p=s(3);function g(e){var t=s(262),n=Object(a.useState)(null),c=Object(o.a)(n,2),l=c[0],i=c[1],r=Object(a.useState)(null),d=Object(o.a)(r,2),j=d[0],u=d[1];return Object(a.useEffect)((function(){!function(){if(l&&j&&e.route){if(!e.route)return;var t=function(e){var t=[];return e.routes[0].legs[0].steps.forEach((function(e,s){t.push({lat:e.start_location.lat,lng:e.start_location.lng}),t.push({lat:e.end_location.lat,lng:e.end_location.lng})})),t}(e.route);new j.Polyline({path:t,geodesic:!0,strokeColor:"#389C29",strokeOpacity:1,strokeWeight:3}).setMap(l)}}()}),[e.route]),Object(p.jsx)(x.a,{defaultCenter:{lat:42.389564,lng:-72.526512},defaultZoom:16,onGoogleApiLoaded:function(e){var t=e.map,s=e.maps;i(t),u(s)},yesIWantToUseGoogleMapApiInternals:!0,bootstrapURLKeys:{key:"AIzaSyAz2oL1-IeVDxCY7lWV2ivTZ3LIpEkrWEE"},options:{disableDefaultUI:!0,draggable:!0,keyboardShortcuts:!1,scaleControl:!0,styles:t,draggableCursor:"grab",draggingCursor:"grabbing"}})}var f=s(34),v=s.n(f);function y(){var e=Object(a.useState)([{classname:"Today",time:"No Upcoming Classes",buildingname:"",room:""}]),t=Object(o.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)([{time:"",location:"No Pitstops"}]),l=Object(o.a)(c,2),r=l[0],x=l[1],f=Object(a.useState)("No more classes today."),y=Object(o.a)(f,2),C=y[0],S=y[1],I=Object(a.useState)(null),w=Object(o.a)(I,2),N=w[0],k=w[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("user")&&localStorage.getItem("user")[0]?JSON.parse(localStorage.getItem("user"))[0]:{},t=e?e.id:-1;-1!==t?v.a.request({method:"get",url:"https://cs326-umap-amherst.herokuapp.com/home?userID="+t}).then((function(e){n(e.data.classes),x(e.data.stops),S(e.data.timeUntilNextClass),k(e.data.route)})).catch((function(e){console.log("Unable to connect to backend to load data.")})):console.log("No user found. Current user data"+localStorage.getItem("user"))}),[]),Object(p.jsxs)(d.a,{container:!0,spacing:3,children:[Object(p.jsx)(d.a,{item:!0,xs:4,children:Object(p.jsxs)(d.a,{container:!0,spacing:2,children:[Object(p.jsx)(d.a,{item:!0,xs:12,children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(u.a,{variant:"h6",children:"Account Information"}),Object(p.jsxs)(d.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:[Object(p.jsx)(d.a,{item:!0,xs:2,children:Object(p.jsx)(h.a,{fontSize:"large"})}),Object(p.jsx)(d.a,{item:!0,xs:10,children:localStorage.getItem("user")&&localStorage.getItem("user")[0]?Object(p.jsx)(u.a,{variant:"body1",children:JSON.parse(localStorage.getItem("user"))[0].email}):Object(p.jsx)(u.a,{variant:"body1",children:"Not Logged In."})})]})]})})}),Object(p.jsx)(d.a,{item:!0,xs:12,children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(j.a,{children:[Object(p.jsxs)(d.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(p.jsx)(d.a,{item:!0,children:Object(p.jsx)(u.a,{variant:"h6",children:"Upcoming Classes"})}),Object(p.jsx)(d.a,{item:!0,children:Object(p.jsx)(i.b,{to:"/classes",children:Object(p.jsx)(O.a,{size:"small",variant:"outlined",children:Object(p.jsx)(m.a,{})})})})]}),0===s.length&&Object(p.jsx)(u.a,{variant:"body1",children:"No more classes today."}),s.map((function(e,t){return Object(p.jsxs)(u.a,{variant:"body1",children:[e.classname,": ",e.buildingname," ",e.room,"  ",Object(p.jsx)("b",{children:e.time})]},t)}))]})})}),Object(p.jsx)(d.a,{item:!0,xs:12,children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(j.a,{children:[Object(p.jsxs)(d.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(p.jsx)(d.a,{item:!0,children:Object(p.jsx)(u.a,{variant:"h6",children:"Scheduled Pit Stops"})}),Object(p.jsx)(d.a,{item:!0,children:Object(p.jsx)(i.b,{to:"/stops",children:Object(p.jsx)(O.a,{size:"small",variant:"outlined",children:Object(p.jsx)(m.a,{})})})})]}),0===r.length&&Object(p.jsx)(u.a,{variant:"body1",children:"No more pitstops today."}),r.map((function(e,t){return Object(p.jsxs)(u.a,{variant:"body1",children:[e.location,"  ",Object(p.jsx)("b",{children:e.time})]},t)}))]})})}),Object(p.jsx)(d.a,{item:!0,xs:12,children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(u.a,{variant:"h6",children:"Time Until Next Class"}),Object(p.jsx)(u.a,{variant:"body1",children:C})]})})})]})}),Object(p.jsx)(d.a,{item:!0,xs:8,className:"mapContainer",children:Object(p.jsx)(g,{route:N})})]})}var C=s(7),S=s(66),I=s.n(S),w=s(32),N=s(100),k=s(39),D=s(23),T=s(159),E=s(70),L=s(46),B=s(107),M=s(158),A=s(75),W=s(83),F=s.n(W);function P(){var e=R();Object(a.useEffect)((function(){function e(){return(e=Object(N.a)(I.a.mark((function e(){var t,s,a,l,i,r,o,d,j,u,b,h,m,O,x,p;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),e.next=3,v.a.get("https://cs326-umap-amherst.herokuapp.com/userid",{params:{email:t[0].email,password:t[0].password}});case 3:return s=e.sent.data.results[0].id,localStorage.setItem("userid",s),n.userID=s,n.email=t[0].email.split("@")[0],e.next=9,v.a.get("https://cs326-umap-amherst.herokuapp.com/classOptions");case 9:return a=e.sent,e.next=12,v.a.get("https://cs326-umap-amherst.herokuapp.com/buildings");case 12:return l=e.sent,e.next=15,v.a.get("https://cs326-umap-amherst.herokuapp.com/userclasses",{params:{userID:n.userID}});case 15:i=e.sent,r=[],i.data.results.map((function(e){return r.push(e.class)})),o=[],d=0;case 20:if(!(d<r.length)){e.next=28;break}return e.next=23,v.a.get("https://cs326-umap-amherst.herokuapp.com/classes",{params:{id:r[d]}});case 23:j=e.sent,o.push(j.data.results[0]);case 25:d++,e.next=20;break;case 28:u=[],b=0;case 30:if(!(b<o.length)){e.next=38;break}return e.next=33,v.a.get("https://cs326-umap-amherst.herokuapp.com/buildings",{params:{id:o[b].building}});case 33:h=e.sent,u.push(h.data.results[0].name);case 35:b++,e.next=30;break;case 38:for(m=[],O=0;O<o.length;O++)x="",!0===o[O].monday&&(x+="Mon "),!0===o[O].tuesday&&(x+="Tues "),!0===o[O].wednesday&&(x+="Wed "),!0===o[O].thursday&&(x+="Thurs "),!0===o[O].friday&&(x+="Fri "),p={name:o[O].name,room:o[O].room,time:o[O].time,building:u[O],days:x},m.push(p);c(Object(w.a)(Object(w.a)({},n),{},{loaded:!0,availableClasses:a.data.results,availableBuildings:l.data.results,currentClasses:i.results,classList:m}));case 41:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!1===n.loaded&&function(){e.apply(this,arguments)}()}));var t=Object(a.useState)({name:"",days:"",building:"",hour:"",minute:"",time:"",room:"001",classList:[],classSelectDOM:[],buildingSelectDOM:[],availableClasses:[],availableBuildings:[],currentClasses:[],keyVal:0,loaded:!1,userID:0,email:""}),s=Object(o.a)(t,2),n=s[0],c=s[1],l=function(e){var t=e.target.name;c(Object(w.a)(Object(w.a)({},n),{},Object(C.a)({},t,e.target.value)))};n.classSelectDOM=[];for(var i=0;i<n.availableClasses.length;i++){var r=Object(p.jsx)(E.a,{value:n.availableClasses[i].name,children:n.availableClasses[i].name},n.keyVal++);n.classSelectDOM.push(r)}n.buildingSelectDOM=[];for(var d=0;d<n.availableBuildings.length;d++){var j=Object(p.jsx)(E.a,{value:n.availableBuildings[d].name,children:n.availableBuildings[d].name},n.keyVal++);n.buildingSelectDOM.push(j)}for(var u=[],b=function(e){var t=Object(p.jsxs)("div",{className:"classes-list-item",children:[Object(p.jsxs)("div",{children:[n.classList[e].name," ",Object(p.jsx)("span",{style:{float:"right"},children:n.classList[e].days})]}),Object(p.jsxs)("div",{children:[n.classList[e].building," ",Object(p.jsx)("span",{style:{float:"right"},children:n.classList[e].time})]}),Object(p.jsxs)("div",{children:["Room ",n.classList[e].room]}),Object(p.jsx)("button",{className:"classes-button",onClick:function(){return c(function(e,t){var s=e.classList;return s.splice(t,1),Object(w.a)(Object(w.a)({},e),{},{classList:s})}(n,e))},children:"Remove"})]},n.keyVal++);u.push(t)},h=0;h<n.classList.length;h++)b(h);return 0===u.length&&(u=Object(p.jsxs)("div",{className:"classes-list-item",children:[Object(p.jsx)("div",{children:"No classes scheduled :("}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:"Try refreshing the page? Or add class through the add button!"}),Object(p.jsx)(A.a,{variant:"contained",endIcon:Object(p.jsx)(F.a,{}),id:"classes-return",onClick:function(){return c(Object(w.a)(Object(w.a)({},n),{},{loaded:!1}))},children:"Refresh"})]})),!1===n.loaded?Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"classes-dashboard",children:[Object(p.jsx)("span",{className:"classes-title",children:"Class Schedule"}),Object(p.jsx)("div",{className:"classes-list",id:"classes-list",children:Object(p.jsx)("div",{className:"classes-list-item",children:Object(p.jsx)("div",{children:"LOADING DATA..."})})})]})}):Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"classes-dashboard",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{className:"classes-title",children:"Class Schedule"}),Object(p.jsx)("button",{className:"classes-button",id:"classes-add",onClick:U,children:"Add Class"})]}),Object(p.jsxs)("div",{className:"classes-list",id:"classes-list",children:[Object(p.jsxs)("div",{className:"classes-list-item",children:[Object(p.jsxs)("div",{style:{textAlign:"center"},children:["Welcome ",n.email," (#",n.userID,")"]}),Object(p.jsxs)("div",{style:{textAlign:"center"},children:["Showing ",n.classList.length," Selected Classes"]})]}),u]}),Object(p.jsxs)("div",{className:"classes-menu",id:"classes-menu",children:[Object(p.jsxs)(B.a,{className:e.formControl,children:[Object(p.jsx)(T.a,{id:"demo-simple-select-label",children:"Class"}),Object(p.jsx)(M.a,{labelId:"demo-simple-select-label",id:"classes-menu-name",value:n.name,name:"name",onChange:l,children:n.classSelectDOM})]}),Object(p.jsxs)(B.a,{className:e.formControl,children:[Object(p.jsx)(T.a,{id:"demo-simple-select-label",children:"Days"}),Object(p.jsxs)(M.a,{labelId:"demo-simple-select-label",id:"classes-menu-days",value:n.days,name:"days",onChange:l,children:[Object(p.jsx)(E.a,{value:"Mon Wed Fri",children:"Mon Wed Fri"}),Object(p.jsx)(E.a,{value:"Mon Wed",children:"Mon Wed"}),Object(p.jsx)(E.a,{value:"Tues Thurs",children:"Tues Thurs"}),Object(p.jsx)(E.a,{value:"Mon",children:"Mon"}),Object(p.jsx)(E.a,{value:"Tues",children:"Tues"}),Object(p.jsx)(E.a,{value:"Wed",children:"Wed"}),Object(p.jsx)(E.a,{value:"Thurs",children:"Thurs"}),Object(p.jsx)(E.a,{value:"Fri",children:"Fri"})]})]}),Object(p.jsxs)(B.a,{className:e.formControl,children:[Object(p.jsx)(T.a,{id:"demo-simple-select-label",children:"Building"}),Object(p.jsx)(M.a,{labelId:"demo-simple-select-label",id:"classes-menu-building",value:n.building,name:"building",onChange:l,children:n.buildingSelectDOM})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(B.a,{className:e.formControl,children:[Object(p.jsx)(T.a,{id:"demo-simple-select-label",children:"Hour"}),Object(p.jsxs)(M.a,{labelId:"demo-simple-select-label",id:"classes-menu-hour",value:n.hour,name:"hour",onChange:l,children:[Object(p.jsx)(E.a,{value:"1",children:"1"}),Object(p.jsx)(E.a,{value:"2",children:"2"}),Object(p.jsx)(E.a,{value:"3",children:"3"}),Object(p.jsx)(E.a,{value:"4",children:"4"}),Object(p.jsx)(E.a,{value:"5",children:"5"}),Object(p.jsx)(E.a,{value:"6",children:"6"}),Object(p.jsx)(E.a,{value:"7",children:"7"}),Object(p.jsx)(E.a,{value:"8",children:"8"}),Object(p.jsx)(E.a,{value:"9",children:"9"}),Object(p.jsx)(E.a,{value:"10",children:"10"}),Object(p.jsx)(E.a,{value:"11",children:"11"}),Object(p.jsx)(E.a,{value:"12",children:"12"}),Object(p.jsx)(E.a,{value:"13",children:"13"}),Object(p.jsx)(E.a,{value:"14",children:"14"}),Object(p.jsx)(E.a,{value:"15",children:"15"}),Object(p.jsx)(E.a,{value:"16",children:"16"}),Object(p.jsx)(E.a,{value:"17",children:"17"}),Object(p.jsx)(E.a,{value:"18",children:"18"}),Object(p.jsx)(E.a,{value:"19",children:"19"}),Object(p.jsx)(E.a,{value:"20",children:"20"}),Object(p.jsx)(E.a,{value:"21",children:"21"}),Object(p.jsx)(E.a,{value:"22",children:"22"}),Object(p.jsx)(E.a,{value:"23",children:"23"}),Object(p.jsx)(E.a,{value:"24",children:"24"})]})]}),Object(p.jsxs)(B.a,{className:e.formControl,children:[Object(p.jsx)(T.a,{id:"demo-simple-select-label",children:"Minute"}),Object(p.jsxs)(M.a,{labelId:"demo-simple-select-label",id:"classes-menu-minute",value:n.minute,name:"minute",onChange:l,children:[Object(p.jsx)(E.a,{value:"00",children:"00"}),Object(p.jsx)(E.a,{value:"05",children:"05"}),Object(p.jsx)(E.a,{value:"10",children:"10"}),Object(p.jsx)(E.a,{value:"15",children:"15"}),Object(p.jsx)(E.a,{value:"20",children:"20"}),Object(p.jsx)(E.a,{value:"25",children:"25"}),Object(p.jsx)(E.a,{value:"30",children:"30"}),Object(p.jsx)(E.a,{value:"35",children:"35"}),Object(p.jsx)(E.a,{value:"40",children:"40"}),Object(p.jsx)(E.a,{value:"45",children:"45"}),Object(p.jsx)(E.a,{value:"50",children:"50"}),Object(p.jsx)(E.a,{value:"55",children:"55"})]})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)(B.a,{className:e.margin,children:[Object(p.jsx)(T.a,{htmlFor:"classes-menu-roomNum",children:"Room"}),Object(p.jsx)(J,{id:"classes-menu-roomNum",value:n.room,name:"room",onChange:l})]}),Object(p.jsx)("div",{className:"classes-add-error",id:"classes-add-error",children:"Please make sure that all items have been selected."})]}),Object(p.jsx)("button",{className:"classes-button",id:"classes-create",onClick:function(){return c(function(e){if(""===e.name||""===e.days||""===e.building||""===e.hour||""===e.minute||"room"===e.room)return document.getElementById("classes-add-error").style.display="block",e;document.getElementById("classes-add-error").style.display="none";var t={name:e.name,days:e.days,building:e.building,time:e.hour+":"+e.minute+":00",room:e.room},s=e.classList;return s.push(t),U(),Object(w.a)(Object(w.a)({},e),{},{classList:s})}(n))},children:"Add New Class"}),Object(p.jsx)(A.a,{variant:"contained",endIcon:Object(p.jsx)(F.a,{}),id:"classes-save",onClick:function(){return function(e,t){var s=e.classList;function a(){return n.apply(this,arguments)}function n(){return(n=Object(N.a)(I.a.mark((function a(){var n,c;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=0;case 1:if(!(n<s.length)){a.next=9;break}return a.next=4,fetch("https://cs326-umap-amherst.herokuapp.com/buildings?name='"+s[n].building+"'",{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()}));case 4:c=a.sent,s[n].building=c.results[0].id;case 6:n++,a.next=1;break;case 9:console.log(s),fetch("https://cs326-umap-amherst.herokuapp.com/saveclasses",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({userID:e.userID,classList:s})}).then(t(Object(w.a)(Object(w.a)({},e),{},{loaded:!1}))).catch((function(e){console.log(e)}));case 11:case"end":return a.stop()}}),a)})))).apply(this,arguments)}a()}(n,c)},children:"Save Classes"}),Object(p.jsx)("a",{href:"#/",children:Object(p.jsx)(A.a,{variant:"contained",endIcon:Object(p.jsx)(F.a,{}),id:"classes-return",children:"Return to Map"})})]})})}function U(){"none"!==document.getElementById("classes-list").style.display?(document.getElementById("classes-list").style.display="none",document.getElementById("classes-save").style.display="none",document.getElementById("classes-return").style.display="none",document.getElementById("classes-add").innerHTML="Go Back",document.getElementById("classes-menu").style.display="block",document.getElementById("classes-create").style.display="block",document.getElementById("classes-add-error").style.display="none"):(document.getElementById("classes-list").style.display="block",document.getElementById("classes-save").style.display="flex",document.getElementById("classes-return").style.display="flex",document.getElementById("classes-menu").style.display="none",document.getElementById("classes-add").innerHTML="Add Class",document.getElementById("classes-create").style.display="none")}var R=Object(k.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),J=Object(D.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(L.c),z=s(42),H=s(43),_=s(74),G=s(81),V=s(80),Z=s(391),q=s(238),K=s(197),Y=s(392),Q=s(227),X=s.n(Q),$=s(396),ee=s(403),te=function(e){Object(G.a)(s,e);var t=Object(V.a)(s);function s(e){var a;return Object(z.a)(this,s),(a=t.call(this,e)).getData=Object(N.a)(I.a.mark((function e(){var t,s,n,c,l,i,r,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),e.next=3,v.a.get("https://cs326-umap-amherst.herokuapp.com/userid",{params:{email:t[0].email,password:t[0].password}});case 3:return s=e.sent.data.results[0].id,localStorage.setItem("userid",s),console.log("ID",s),e.next=8,v.a.get("https://cs326-umap-amherst.herokuapp.com/pitstops");case 8:return n=e.sent,e.next=11,v.a.get("https://cs326-umap-amherst.herokuapp.com/userpitstops",{params:{userID:s}});case 11:c=e.sent,l=n.data,i=c.data.results,r=c.data.results.map((function(e){return e.stopid})),o=l.results.map((function(e){return e.time=new Date,e.selected=0!==i.filter((function(t){return t.stopid===e.id})).length,!0===e.selected&&(e.time=new Date(i.filter((function(t){return t.stopid===e.id}))[0].stoptime)),e})),a.setState({rows:o,selected:r});case 17:case"end":return e.stop()}}),e)}))),a.state={search:"",columns:[{field:"location",headerName:"Location",description:"This column has the location of pit stops",sortable:!0,width:300},{field:"time",headerName:"Time",description:"This column has the time selector",sortable:!1,width:300,renderCell:function(e){return Object(p.jsx)(Z.b,{dateAdapter:Y.a,children:Object(p.jsx)($.a,{renderInput:function(e){return Object(p.jsx)(q.a,Object(w.a)(Object(w.a)({},e),{},{helperText:null}))},inputFormat:"EEEE - hh:mm a",openTo:"date",value:a.state.rows[e.row.id].time,disabled:!a.state.rows[e.row.id].selected,onChange:function(t){var s=a.state.rows;s[e.row.id].time=t,a.setState({rows:s})}})})}}],rows:[{id:0,location:"Worcester Dining Commons",time:new Date,selected:!1},{id:1,location:"Franklin Dining Commons",time:new Date,selected:!1},{id:2,location:"Hampshire Dining Commons",time:new Date,selected:!1},{id:3,location:"Berkshire Dining Commons",time:new Date,selected:!1},{id:4,location:"Blue Wall",time:new Date,selected:!1},{id:5,location:"Procrastination Station",time:new Date,selected:!1},{id:6,location:"Roots Cafe",time:new Date,selected:!1},{id:7,location:"Campus Center",time:new Date,selected:!1},{id:8,location:"W.E.B. Du Bois Library",time:new Date,selected:!1}],selected:[]},a.searchFilter=a.searchFilter.bind(Object(_.a)(a)),a.handleChange=a.handleChange.bind(Object(_.a)(a)),a.getData=a.getData.bind(Object(_.a)(a)),a.saveData=a.saveData.bind(Object(_.a)(a)),a}return Object(H.a)(s,[{key:"componentDidMount",value:function(){this.getData()}},{key:"saveData",value:function(){v.a.post("https://cs326-umap-amherst.herokuapp.com/savepitstops",{userID:localStorage.getItem("userid"),rows:this.state.rows.filter((function(e){return!0===e.selected}))}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState({search:e.target.value})}},{key:"searchFilter",value:function(e){var t=""===this.state.search.trim()||e.location.toLowerCase().includes(this.state.search.toLowerCase()),s=e.selected&&e.time.toLocaleDateString("en-US",{weekday:"long",hour:"numeric",minute:"numeric"}).toLowerCase().includes(this.state.search.toLowerCase());return t||s}},{key:"render",value:function(){var e=this,t=Object(k.a)((function(e){return{margin:{margin:e.spacing(1)}}}));return Object(p.jsx)("div",{children:Object(p.jsxs)(d.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(p.jsx)(d.a,{item:!0,xs:12,children:Object(p.jsx)(u.a,{variant:"h4",children:"Schedule Pit Stops"})}),Object(p.jsx)(d.a,{item:!0,xs:12,children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)("div",{className:t.margin,children:Object(p.jsx)(d.a,{container:!0,spacing:1,alignItems:"flex-end",children:Object(p.jsx)(d.a,{item:!0,children:Object(p.jsxs)(B.a,{variant:"filled",children:[Object(p.jsx)(T.a,{htmlFor:"component-filled",children:"Search"}),Object(p.jsx)(ee.a,{id:"component-filled",value:this.state.search,onChange:this.handleChange})]})})})}),Object(p.jsx)(K.a,{autoHeight:!0,disableColumnFilter:!0,density:"headerHeight",rows:this.state.rows.filter(this.searchFilter),columns:this.state.columns.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{disableClickEventBubbling:!0})})),pageSize:5,checkboxSelection:!0,selectionModel:this.state.selected,onRowSelected:function(t){var s=e.state.rows;s[t.data.id].selected=t.isSelected,e.setState({rows:s})}})]})})}),Object(p.jsx)(d.a,{item:!0,xs:12,children:Object(p.jsx)(d.a,{container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",children:Object(p.jsxs)(d.a,{item:!0,xs:12,style:{textAlign:"right"},children:[Object(p.jsx)(i.b,{to:"/",style:{textDecoration:"none"},children:Object(p.jsx)(A.a,{variant:"contained",endIcon:Object(p.jsx)(F.a,{}),children:"Return to Map"})}),Object(p.jsx)(A.a,{variant:"contained",endIcon:Object(p.jsx)(X.a,{}),onClick:this.saveData,children:"Save Pit Stops"})]})})})]})})}}]),s}(n.a.Component),se=s(228),ae=s.n(se),ne=s(229),ce=s.n(ne),le=s(393),ie=s(406),re=s(405),oe=s(394),de=s(407),je=s(230),ue=s.n(je);function be(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],n=t[1],c=function(){n(!1)},l=Object(a.useState)({id:"",firstName:"",lastName:"",major:"",emailAddress:"",password:"",users:[]}),r=Object(o.a)(l,2),j=(r[0],r[1],Object(a.useState)("")),u=Object(o.a)(j,2),b=u[0],h=u[1],m=Object(a.useState)(""),O=Object(o.a)(m,2),x=O[0],g=O[1],f=[{email:b,password:x}],y=Object(a.useState)(""),C=Object(o.a)(y,2),S=C[0],I=C[1],w=Object(a.useState)(""),N=Object(o.a)(w,2),k=N[0],D=N[1],T=Object(a.useState)(""),E=Object(o.a)(T,2),L=E[0],B=E[1],M=Object(a.useState)(""),W=Object(o.a)(M,2),F=W[0],P=W[1],U=Object(a.useState)(""),R=Object(o.a)(U,2),J=R[0],z=R[1],H=Object(a.useState)(""),_=Object(o.a)(H,2),G=_[0],V=_[1];return Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)("div",{className:"title",children:"UMap Amherst"}),Object(p.jsx)("div",{className:"loginTitle",children:"Login"}),Object(p.jsxs)("div",{className:"emailField",children:[Object(p.jsx)(d.a,{className:"emailIcon",children:Object(p.jsx)(ae.a,{})}),Object(p.jsx)(q.a,{label:"Email Address",variant:"outlined",error:""===b,onChange:function(e){return h(e.target.value)}})]}),Object(p.jsxs)("div",{className:"passwordField",children:[Object(p.jsx)(d.a,{className:"passwordIcon",children:Object(p.jsx)(ce.a,{})}),Object(p.jsx)(q.a,{label:"Password",type:"Password",variant:"outlined",error:""===x,onChange:function(e){return g(e.target.value)}})]}),Object(p.jsx)("div",{className:"loginButton",children:Object(p.jsx)(i.b,{to:"/",className:"loginLink",children:Object(p.jsx)(A.a,{variant:"contained",onClick:function(){v.a.post("https://cs326-umap-amherst.herokuapp.com/savelogin",{email:b,password:x}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),"undefined"!==typeof window&&(localStorage.setItem("user",JSON.stringify(f)),console.log(localStorage.getItem("user")))},disabled:""===b||""===x,children:"Login"})})}),Object(p.jsxs)("div",{className:"createAccount",children:[Object(p.jsx)(A.a,{onClick:function(){n(!0)},children:"Create Account"}),Object(p.jsxs)(le.a,{open:s,className:"form",children:[Object(p.jsx)(de.a,{className:"formTitle",children:" Create Account "}),Object(p.jsx)(d.a,{className:"contactIcon",children:Object(p.jsx)(ue.a,{style:{fontSize:45}})}),Object(p.jsxs)(re.a,{children:[Object(p.jsx)(oe.a,{className:"formHeader",children:"Please fill in each of the fields below."}),Object(p.jsx)(q.a,{label:"ID",variant:"outlined",margin:"dense",error:""===S,onChange:function(e){return I(e.target.value)},fullWidth:!0}),Object(p.jsx)(q.a,{label:"First Name",variant:"outlined",margin:"dense",error:""===k,onChange:function(e){return D(e.target.value)},fullWidth:!0}),Object(p.jsx)(q.a,{label:"Last Name",variant:"outlined",margin:"dense",error:""===L,onChange:function(e){return B(e.target.value)},fullWidth:!0}),Object(p.jsx)(q.a,{label:"Major",variant:"outlined",margin:"dense",error:""===F,onChange:function(e){return P(e.target.value)},fullWidth:!0}),Object(p.jsx)(q.a,{label:"Email Address",variant:"outlined",margin:"dense",error:""===J,onChange:function(e){return z(e.target.value)},fullWidth:!0}),Object(p.jsx)(q.a,{label:"Password",type:"Password",variant:"outlined",margin:"dense",error:""===G,onChange:function(e){return V(e.target.value)},fullWidth:!0})]}),Object(p.jsxs)(ie.a,{children:[Object(p.jsx)(A.a,{onClick:c,children:"Close"}),Object(p.jsx)(A.a,{onClick:function(){v.a.post("https://cs326-umap-amherst.herokuapp.com/savesignup",{id:S,firstName:k,lastName:L,major:F,emailAddress:J,password:G}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),c()},disabled:""===S||""===k||""===L||""===F||""===J||""===G,children:"Sign Up"})]})]})]}),Object(p.jsx)("div",{className:"guest",children:Object(p.jsx)(i.b,{to:"/",className:"guestLink",children:Object(p.jsx)(A.a,{children:"Use as Guest"})})})]})}var he=s(408),me=s(404),Oe=s(395);function xe(){return Object(p.jsx)(d.a,{item:!0,xs:8,className:"innerPage",children:Object(p.jsx)(P,{})})}function pe(){return Object(p.jsx)(d.a,{item:!0,xs:10,className:"innerPage",children:Object(p.jsx)(y,{})})}function ge(){return Object(p.jsx)(d.a,{item:!0,xs:8,className:"innerPage",children:Object(p.jsx)(te,{})})}function fe(){return Object(p.jsx)(d.a,{item:!0,xs:4,className:"innerPage",children:Object(p.jsx)(be,{})})}function ve(){return Object(p.jsxs)(i.a,{basename:"/",children:[Object(p.jsx)(he.a,{position:"sticky",children:Object(p.jsxs)(me.a,{variant:"dense",children:[Object(p.jsx)(i.b,{to:"/",edge:"start",children:Object(p.jsx)(O.a,{children:Object(p.jsx)(Oe.a,{})})}),Object(p.jsx)(u.a,{variant:"h6",children:"UMap Amherst"})]})}),Object(p.jsx)(d.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",className:"pageContainer",children:Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{path:"/",exact:!0,component:pe}),Object(p.jsx)(r.a,{path:"/classes",component:xe}),Object(p.jsx)(r.a,{path:"/stops",component:ge}),Object(p.jsx)(r.a,{path:"/login",component:fe})]})})]})}s(314),s(315),s(316);l.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(ve,{})}),document.getElementById("root"))}},[[317,1,2]]]);
//# sourceMappingURL=main.7cd118be.chunk.js.map