(this["webpackJsonppawty-trainer"]=this["webpackJsonppawty-trainer"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(19),a=n.n(s),o=(n(26),n(9)),c=n.n(o),i=n(12),u=n(21),h=n(8),d=n(2),l=(n(28),n(29),n(7)),b=n(1),p=function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)(l.c,{to:"/",children:"Dashboard"}),Object(b.jsx)(l.c,{to:"/calendar",children:"Calendar"}),Object(b.jsx)(l.c,{to:"/create",children:"Create Dog"})]})},j=(n(39),function(){return Object(b.jsx)("h1",{children:"Test continuous deploy"})}),m=(n(40),[{code:301,message:"Moved Permanently",description:"The URL of the requested resource has been changed\n      permanently. The new URL is given in the response."},{code:401,message:"Unauthorized",description:'Although the HTTP standard specifies "unauthorized",\n      semantically this response means "unauthenticated". That is, the client\n      must authenticate itself to get the requested response.'},{code:403,message:"Forbidden",description:"The client does not have access rights to the content;\n      that is, it is unauthorized, so the server is refusing to give the\n      requested resource. Unlike 401, the client's identity is known to the\n      server."},{code:404,message:"Not Found",description:"The server can not find the requested resource. In the\n      browser, this means the URL is not recognized. In an API, this can also\n      mean that the endpoint is valid but the resource itself does not exist.\n      Servers may also send this response instead of 403 to hide the existence\n      of a resource from an unauthorized client. This response code is probably \n      the most famous one due to its frequent occurrence on the web."},{code:408,message:"Request Timeout",description:"This response is sent on an idle connection by some \n      servers, even without any previous request by the client. It means that \n      the server would like to shut down this unused connection. This response \n      is used much more since some browsers, like Chrome, Firefox 27+, or IE9, \n      use HTTP pre-connection mechanisms to speed up surfing. Also note that \n      some servers merely shut down the connection without sending this \n      message."},{code:429,message:"Too Many Requests",description:'The user has sent too many requests in a given amount of \n      time ("rate limiting").'},{code:500,message:"Internal Server Error",description:"The server has encountered a situation it doesn't know how \n      to handle."},{code:502,message:"Bad Gateway",description:"This error response means that the server, while working as \n      a gateway to get a response needed to handle the request, got an invalid \n      response."},{code:503,message:"Service Unavailable",description:"The server is not ready to handle the request. Common \n      causes are a server that is down for maintenance or that is overloaded. \n      Note that together with this response, a user-friendly page explaining \n      the problem should be sent. This response should be used for temporary \n      conditions and the Retry-After: HTTP header should, if possible, contain \n      the estimated time before the recovery of the service. The webmaster must \n      also take care about the caching-related headers that are sent along with \n      this response, as these temporary condition responses should usually not \n      be cached."},{code:504,message:"Gateway Timeout",description:"This error response is given when the server is acting as a \n      gateway and cannot get a response in time."}]),f=function(e){var t=e.errorCode,n=e.clearSelected,r=m.find((function(e){return e.code===t}));return Object(b.jsx)("article",{className:"error-container",children:Object(b.jsxs)("div",{className:"error-div",children:[Object(b.jsxs)("h2",{className:"error-h2",children:["Error ",r.code]}),Object(b.jsx)("h3",{children:r.message}),Object(b.jsx)("p",{children:r.description}),Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)("button",{className:"details-back",onClick:n,children:"Back"})})]})})},g=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",v(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=4;break}throw new Error(t.status);case 4:return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(n(41),function(e){var t=e.addDog,n=Object(r.useState)(""),s=Object(h.a)(n,2),a=s[0],o=s[1],c=Object(r.useState)(""),i=Object(h.a)(c,2),u=i[0],d=i[1],l=Object(r.useState)(""),p=Object(h.a)(l,2),j=p[0],m=p[1],f=Object(r.useState)(""),g=Object(h.a)(f,2),v=g[0],O=g[1],x=function(){o(""),d(""),m("")},w=function(){O("")};return Object(b.jsxs)("form",{children:[Object(b.jsx)("h1",{className:"train-dog-title",children:"Train your dog!"}),Object(b.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:a,onChange:function(e){return o(e.target.value)},required:!0}),Object(b.jsx)("input",{type:"number",placeholder:"Age",name:"age",value:u,onChange:function(e){return d(e.target.value)},required:!0}),Object(b.jsx)("input",{type:"text",placeholder:"Breed",name:"breed",value:j,onChange:function(e){return m(e.target.value)},required:!0}),Object(b.jsx)("button",{onClick:function(e){return function(e){e.preventDefault();var n={id:Date.now(),Name:a,Age:u,Breed:j};a&&u&&j?(t(n),w(),x()):O("Sorry, you must input all fields before creating a dog!")}(e)},children:"Create"}),Object(b.jsx)("p",{children:v})]})}),x=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(0),o=Object(h.a)(a,2),l=o[0],m=o[1],v=Object(r.useState)([]),x=Object(h.a)(v,2),w=x[0],y=x[1],T=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("https://rancid-tomatillos.herokuapp.com/api/v2/movies");case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(Number(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){T()}),[]);var k=function(){m(0)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)("main",{children:[0!==l&&Object(b.jsx)(f,{errorCode:l,clearSelected:k}),!l&&Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(j,{fetchedData:n})}}),Object(b.jsx)(d.b,{exact:!0,path:"/404",render:function(){return Object(b.jsx)(f,{errorCode:404,clearSelected:k})}}),Object(b.jsx)(d.b,{path:"/create",children:Object(b.jsx)(O,{addDog:function(e){w.includes(e)||y([e].concat(Object(u.a)(w)))}})}),Object(b.jsx)(d.a,{to:"/404"})]})]})]})},w=Object(b.jsxs)(l.a,{children:[" ",Object(b.jsx)(x,{})," "]});a.a.render(w,document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.78d112e7.chunk.js.map