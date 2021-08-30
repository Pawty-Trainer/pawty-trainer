(this["webpackJsonppawty-trainer"]=this["webpackJsonppawty-trainer"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var s,r=n(2),o=n(54),i=n.n(o),a=(n(68),n(60)),c=n(28),d=n(10),h=(n(69),n(70),n(26)),u=n(3),l=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Pawty Trainer"}),Object(u.jsxs)("nav",{children:[Object(u.jsx)(h.b,{to:"/",children:"Dashboard"}),Object(u.jsx)(h.b,{to:"/calendar",children:"Calendar"}),Object(u.jsx)(h.b,{to:"/create",children:"Create Dog"})]})]})},j=n(56),b=(n(79),n(96)),m=n(95),p=(n(80),[{code:301,message:"Moved Permanently",description:"The URL of the requested resource has been changed\n      permanently. The new URL is given in the response."},{code:401,message:"Unauthorized",description:'Although the HTTP standard specifies "unauthorized",\n      semantically this response means "unauthenticated". That is, the client\n      must authenticate itself to get the requested response.'},{code:403,message:"Forbidden",description:"The client does not have access rights to the content;\n      that is, it is unauthorized, so the server is refusing to give the\n      requested resource. Unlike 401, the client's identity is known to the\n      server."},{code:404,message:"Not Found",description:"The server can not find the requested resource. In the\n      browser, this means the URL is not recognized. In an API, this can also\n      mean that the endpoint is valid but the resource itself does not exist.\n      Servers may also send this response instead of 403 to hide the existence\n      of a resource from an unauthorized client. This response code is probably \n      the most famous one due to its frequent occurrence on the web."},{code:408,message:"Request Timeout",description:"This response is sent on an idle connection by some \n      servers, even without any previous request by the client. It means that \n      the server would like to shut down this unused connection. This response \n      is used much more since some browsers, like Chrome, Firefox 27+, or IE9, \n      use HTTP pre-connection mechanisms to speed up surfing. Also note that \n      some servers merely shut down the connection without sending this \n      message."},{code:429,message:"Too Many Requests",description:'The user has sent too many requests in a given amount of \n      time ("rate limiting").'},{code:500,message:"Internal Server Error",description:"The server has encountered a situation it doesn't know how \n      to handle."},{code:502,message:"Bad Gateway",description:"This error response means that the server, while working as \n      a gateway to get a response needed to handle the request, got an invalid \n      response."},{code:503,message:"Service Unavailable",description:"The server is not ready to handle the request. Common \n      causes are a server that is down for maintenance or that is overloaded. \n      Note that together with this response, a user-friendly page explaining \n      the problem should be sent. This response should be used for temporary \n      conditions and the Retry-After: HTTP header should, if possible, contain \n      the estimated time before the recovery of the service. The webmaster must \n      also take care about the caching-related headers that are sent along with \n      this response, as these temporary condition responses should usually not \n      be cached."},{code:504,message:"Gateway Timeout",description:"This error response is given when the server is acting as a \n      gateway and cannot get a response in time."}]),O=function(e){var t=e.errorCode,n=p.find((function(e){return e.code===t}));return Object(u.jsx)("article",{className:"error-container",children:Object(u.jsxs)("div",{className:"error-div",children:[Object(u.jsxs)("h2",{className:"error-h2",children:["Error ",n.code]}),Object(u.jsx)("h3",{children:n.message}),Object(u.jsx)("p",{children:n.description}),Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("button",{className:"details-back",children:"Home"})})]})})},g=function(e){var t=e.userID,n=Object(b.a)(Object(m.a)(s||(s=Object(j.a)(["\n    query {\n      user(id: ",") {\n        id\n        name\n      }\n    }\n  "])),t)),r=n.loading,o=n.error,i=n.data;return r?Object(u.jsx)("p",{children:"Loading..."}):o?Object(u.jsx)(O,{errorCode:o}):i?(console.log(i),Object(u.jsxs)("section",{className:"dashboard",children:[Object(u.jsxs)("h2",{children:["Welcome ",i.user.name,"!"]}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h3",{children:"My Dogs"}),Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:"Fifi"})})]}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h3",{children:"Upcoming Events"}),Object(u.jsxs)("dl",{children:[Object(u.jsx)("dt",{children:"Today"}),Object(u.jsx)("dd",{children:"6pm - Sit with Fifi"}),Object(u.jsx)("dt",{children:"Tomorrow"}),Object(u.jsx)("dd",{children:"4pm - Play with Fifi"})]})]})]})]})):void 0},x=(n(82),function(e){var t=e.addDog,n=Object(r.useState)(""),s=Object(c.a)(n,2),o=s[0],i=s[1],a=Object(r.useState)(""),d=Object(c.a)(a,2),h=d[0],l=d[1],j=Object(r.useState)(""),b=Object(c.a)(j,2),m=b[0],p=b[1],O=Object(r.useState)(""),g=Object(c.a)(O,2),x=g[0],f=g[1],v=function(){i(""),l(""),p("")},y=function(){f("")};return Object(u.jsxs)("form",{children:[Object(u.jsx)("h1",{className:"train-dog-title",children:"Train your dog!"}),Object(u.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:o,onChange:function(e){return i(e.target.value)},required:!0}),Object(u.jsx)("input",{type:"number",placeholder:"Age",name:"age",value:h,onChange:function(e){return l(e.target.value)},required:!0}),Object(u.jsx)("input",{type:"text",placeholder:"Breed",name:"breed",value:m,onChange:function(e){return p(e.target.value)},required:!0}),Object(u.jsx)("button",{onClick:function(e){return function(e){e.preventDefault();var n={id:Date.now(),Name:o,Age:h,Breed:m};o&&h&&m?(t(n),y(),v()):f("Sorry, you must input all fields before creating a dog!")}(e)},children:"Create"}),Object(u.jsx)("p",{children:x})]})}),f=function(){var e=Object(r.useState)(0),t=Object(c.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)([]),i=Object(c.a)(o,2),h=i[0],j=i[1];return Object(r.useEffect)((function(){s(1)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{}),Object(u.jsx)("main",{children:Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(u.jsx)(g,{userID:n})}}),Object(u.jsx)(d.b,{path:"/create",children:Object(u.jsx)(x,{addDog:function(e){h.includes(e)||j([e].concat(Object(a.a)(h)))}})}),Object(u.jsx)(d.b,{exact:!0,path:"/404",render:function(){return Object(u.jsx)(O,{errorCode:404})}}),Object(u.jsx)(d.a,{to:"/404"})]})})]})},v=n(93),y=n(94),w=n(92),T=new v.a({uri:"https://pawty-trainer-api.herokuapp.com/graphql",cache:new y.a});i.a.render(Object(u.jsx)(h.a,{children:Object(u.jsx)(w.a,{client:T,children:Object(u.jsx)(f,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.599a384e.chunk.js.map