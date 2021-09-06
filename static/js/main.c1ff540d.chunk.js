(this["webpackJsonppawty-trainer"]=this["webpackJsonppawty-trainer"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var c,s,r,a,i,o=n(1),d=n(39),j=n.n(d),l=(n(78),n(27)),h=n(11),b=n(118),u=n(12),m=(n(79),n(80),n(14)),O=n(2),g=function(){return Object(O.jsxs)("header",{children:[Object(O.jsx)("section",{className:"header-container",children:Object(O.jsx)("h1",{className:"title",children:"Pawty Trainer"})}),Object(O.jsxs)("nav",{children:[Object(O.jsx)(m.b,{to:"/",children:"Dashboard"}),Object(O.jsx)(m.b,{to:"/create",children:"Add Dog"}),Object(O.jsx)(m.b,{to:"/add_event",children:"Add Event"}),Object(O.jsx)(m.b,{to:"/calendar",children:"Calendar"})]})]})},x=(n(89),n(90),n(119)),p=n(35),v=n(117),f=Object(v.a)(c||(c=Object(p.a)(["\n  mutation ($name: String!, $userId: Int!, $breed: String!, $age: Int!) {\n    createDog(input: {\n        name: $name,\n        userId: $userId,\n        breed: $breed,\n        age: $age\n  }) {\n      dog {\n        id\n        userId\n        name\n        breed\n        age\n      }\n      errors\n    }\n  }\n"]))),N=Object(v.a)(s||(s=Object(p.a)(["\n  mutation ($id: ID!) {\n    destroyDog(input: {\n      id: $id\n    }) {\n      id\n    }\n  }\n"]))),y=Object(v.a)(r||(r=Object(p.a)(["\n  mutation ($name: String!, $dogId: Int!, $eventDatetime: ISO8601DateTime!){\n    createEvent(input: {\n      name: $name,\n      dogId: $dogId,\n      completed: false,\n      eventDatetime: $eventDatetime,  \n  }) {\n      event {\n        id\n        dogId\n        name\n        completed\n        eventDatetime\n      }\n      errors\n    }\n  }\n"]))),D=Object(v.a)(a||(a=Object(p.a)(["\n  mutation ($eventId: ID!){\n    updateEvent(\n      input: { \n        id: $eventId, \n        completed: true \n      }) {\n        event {\n          id\n          name\n          completed\n          dogId\n            dog {\n              id\n              name\n              breed\n              age\n                user {\n                  name\n                }\n        }\n      }\n    }\n  }\n"]))),w=Object(v.a)(i||(i=Object(p.a)(["\n  query {\n    user(id: 1) {\n      id\n      name\n    } dogs {\n      id\n      name\n      breed\n      age\n    } events {\n      id\n      name\n      completed\n      eventDatetime\n      dogId\n        dog {\n          name\n          breed\n          age\n          userId\n          user {\n            name\n        }\n      }\n    }\n  }\n"]))),S=function(e){var t=e.event,n=Object(x.a)(D,{refetchQueries:[w]}),c=Object(h.a)(n,1)[0];return Object(O.jsxs)("section",{className:"event-card",children:[Object(O.jsxs)("dl",{children:[Object(O.jsx)("div",{className:"description-container",children:Object(O.jsx)("dd",{className:"dog-name",children:t.dog.name})}),Object(O.jsx)("div",{children:Object(O.jsx)("dd",{className:"description-container event-name",children:Object(O.jsx)(m.b,{to:"/event/".concat(t.id),children:Object(O.jsx)("em",{children:t.name})},t.id)})}),Object(O.jsx)("dt",{className:"card-title event-date",children:"To be completed by"}),Object(O.jsx)("dd",{className:"date",children:new Date(t.eventDatetime).toLocaleString()})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",id:t.id,name:"complete",value:"true",onClick:function(){c({variables:{eventId:t.id}})}}),Object(O.jsx)("label",{className:"complete-title",children:"Complete Event"})]})]},t.id)},I=function(e){var t=e.userName,n=e.dogs,c=e.events,s=e.completedEvents,r=[];n.length&&(r=n.map((function(e){return Object(O.jsxs)("li",{className:"dog-name-list-container",children:[Object(O.jsx)("p",{className:"material-icons",children:"pets"}),Object(O.jsx)(m.b,{to:"/dog/".concat(e.id),children:e.name})]},e.id)})));var a=[];if(c.length){var i=Object(l.a)(c);i.splice(2),a=i.map((function(e){return Object(O.jsx)(S,{event:e},e.id)}))}var o=[];if(s){o=["\u2605"];for(var d=1;d<s;d++)d%3||(o=[].concat(Object(l.a)(o),["\u2605"]))}return n.length&&c.length?Object(O.jsxs)("section",{className:"dashboard",children:[Object(O.jsxs)("h2",{children:["Welcome ",t,"!"]}),Object(O.jsx)("p",{className:"rewards",children:o}),Object(O.jsxs)("section",{className:"sections",children:[Object(O.jsxs)("section",{className:"my-dogs",children:[Object(O.jsx)("h3",{className:"section-titles",children:"My Dogs"}),Object(O.jsx)("ul",{className:"dog-list",children:r})]}),Object(O.jsxs)("section",{className:"Upcoming",children:[Object(O.jsx)("h3",{className:"section-titles",children:"Upcoming Events"}),a]})]})]}):n.length&&!c.length?Object(O.jsxs)("section",{className:"dashboard",children:[Object(O.jsxs)("h2",{children:["Welcome ",t,"!"]}),Object(O.jsx)("p",{children:o}),Object(O.jsxs)("section",{children:[Object(O.jsxs)("section",{children:[Object(O.jsx)("h3",{children:"My Dogs"}),Object(O.jsx)("ul",{className:"dog-list-names",children:r})]}),Object(O.jsx)("section",{children:Object(O.jsx)("h3",{children:"No Upcoming Events"})})]})]}):!n.length&&c.length?Object(O.jsxs)("section",{className:"dashboard",children:[Object(O.jsxs)("h2",{children:["Welcome ",t,"!"]}),Object(O.jsx)("p",{children:o}),Object(O.jsxs)("section",{children:[Object(O.jsx)("section",{children:Object(O.jsx)("h3",{children:"Add a dog!"})}),Object(O.jsxs)("section",{children:[Object(O.jsx)("h3",{children:"Upcoming Events"}),a]})]})]}):Object(O.jsxs)("section",{className:"dashboard",children:[Object(O.jsxs)("h2",{children:["Welcome ",t,"!"]}),Object(O.jsx)("p",{children:o}),Object(O.jsxs)("section",{children:[Object(O.jsx)("section",{children:Object(O.jsx)("h3",{children:"Add a dog!"})}),Object(O.jsx)("section",{children:Object(O.jsx)("h3",{children:"No Upcoming Events"})})]})]})},T=(n(92),[{code:301,message:"Moved Permanently",description:"The URL of the requested resource has been changed\n      permanently. The new URL is given in the response."},{code:401,message:"Unauthorized",description:'Although the HTTP standard specifies "unauthorized",\n      semantically this response means "unauthenticated". That is, the client\n      must authenticate itself to get the requested response.'},{code:403,message:"Forbidden",description:"The client does not have access rights to the content;\n      that is, it is unauthorized, so the server is refusing to give the\n      requested resource. Unlike 401, the client's identity is known to the\n      server."},{code:404,message:"Not Found",description:"The server can not find the requested resource. In the\n      browser, this means the URL is not recognized. In an API, this can also\n      mean that the endpoint is valid but the resource itself does not exist.\n      Servers may also send this response instead of 403 to hide the existence\n      of a resource from an unauthorized client. This response code is probably \n      the most famous one due to its frequent occurrence on the web."},{code:408,message:"Request Timeout",description:"This response is sent on an idle connection by some \n      servers, even without any previous request by the client. It means that \n      the server would like to shut down this unused connection. This response \n      is used much more since some browsers, like Chrome, Firefox 27+, or IE9, \n      use HTTP pre-connection mechanisms to speed up surfing. Also note that \n      some servers merely shut down the connection without sending this \n      message."},{code:429,message:"Too Many Requests",description:'The user has sent too many requests in a given amount of \n      time ("rate limiting").'},{code:500,message:"Internal Server Error",description:"The server has encountered a situation it doesn't know how \n      to handle."},{code:502,message:"Bad Gateway",description:"This error response means that the server, while working as \n      a gateway to get a response needed to handle the request, got an invalid \n      response."},{code:503,message:"Service Unavailable",description:"The server is not ready to handle the request. Common \n      causes are a server that is down for maintenance or that is overloaded. \n      Note that together with this response, a user-friendly page explaining \n      the problem should be sent. This response should be used for temporary \n      conditions and the Retry-After: HTTP header should, if possible, contain \n      the estimated time before the recovery of the service. The webmaster must \n      also take care about the caching-related headers that are sent along with \n      this response, as these temporary condition responses should usually not \n      be cached."},{code:504,message:"Gateway Timeout",description:"This error response is given when the server is acting as a \n      gateway and cannot get a response in time."}]),C=function(e){var t=e.errorCode,n=T.find((function(e){return e.code===t}));return Object(O.jsx)("article",{className:"error-container",children:Object(O.jsxs)("div",{className:"error-div",children:[Object(O.jsxs)("h2",{className:"error-h2",children:["Error ",n.code]}),Object(O.jsx)("h3",{children:n.message}),Object(O.jsx)("p",{children:n.description}),Object(O.jsx)(m.b,{to:"/",children:Object(O.jsx)("button",{className:"details-back",children:"Home"})})]})})},E=(n(93),function(e){var t=e.dogs,n=Object(o.useState)(""),c=Object(h.a)(n,2),s=c[0],r=c[1],a=Object(o.useState)(""),i=Object(h.a)(a,2),d=i[0],j=i[1],l=Object(o.useState)(0),b=Object(h.a)(l,2),u=b[0],m=b[1],g=Object(o.useState)(""),p=Object(h.a)(g,2),v=p[0],f=p[1],N=Object(x.a)(y,{refetchQueries:[w]}),D=Object(h.a)(N,2),S=D[0],I=D[1],T=I.loading,C=I.error,E=function(){r(""),j(""),m(0)};return T?"Submitting...":C?"Submission error! ".concat(C.message):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{children:[Object(O.jsx)("h2",{className:"text",children:"Add New Event"}),Object(O.jsx)("input",{type:"text",placeholder:"Event Name",value:s,onChange:function(e){return r(e.target.value)},required:!0}),Object(O.jsx)("label",{className:"text",children:"Select dog:"}),Object(O.jsxs)("select",{onChange:function(e){return m(e.target.value)},children:[Object(O.jsx)("option",{placeholder:"Dog Name",value:u,children:"Dog Name"},u),t.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(O.jsx)("label",{className:"text",children:"Set event date:"}),Object(O.jsx)("input",{type:"date",placeholder:"EventDateTime",value:d,onChange:function(e){return j(e.target.value)},required:!0}),Object(O.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),s&&d&&u?(S({variables:{dogId:Number(u),name:s,eventDatetime:d}}),f(""),E()):f("Sorry, you must input all fields before creating an event!")}(e)},children:"Submit"}),Object(O.jsx)("p",{children:v})]})})}),$=(n(94),function(e){var t=e.events,n=[];return t.length&&(n=t.map((function(e){return Object(O.jsx)(S,{event:e},e.id)}))),t.length?Object(O.jsxs)("section",{className:"calendar",children:[Object(O.jsx)("h2",{children:"Calendar"}),Object(O.jsx)("section",{children:n})]}):Object(O.jsxs)("section",{className:"calendar",children:[Object(O.jsx)("h2",{children:"Calendar"}),Object(O.jsx)("p",{children:"You have no events scheduled."})]})}),q=(n(95),function(e){var t=e.matchingEvent;return Object(O.jsxs)("section",{className:"event",children:[Object(O.jsxs)("dl",{children:[Object(O.jsx)("dt",{children:"Dog"}),Object(O.jsx)("dd",{children:t.dog.name}),Object(O.jsx)("dt",{children:"Event Name"}),Object(O.jsx)("dd",{children:t.name}),Object(O.jsx)("dt",{children:"Event Date"}),Object(O.jsx)("dd",{children:new Date(t.eventDatetime).toLocaleString()})]}),Object(O.jsx)(m.b,{to:"/",children:Object(O.jsx)("button",{children:"Home"})})]})}),k=(n(96),function(e){var t=e.matchingDog,n=e.removeDog,c=Object(u.g)(),s=Object(x.a)(N),r=Object(h.a)(s,2),a=r[0],i=r[1],o=i.loading,d=i.error;return o?"Submitting...":d?"Submission error! ".concat(d.message):Object(O.jsxs)("section",{className:"dog-details",children:[Object(O.jsxs)("dl",{children:[Object(O.jsx)("dt",{children:"Dog Name"}),Object(O.jsx)("dd",{children:t.name}),Object(O.jsx)("dt",{children:"Dog Age"}),Object(O.jsx)("dd",{children:t.age}),Object(O.jsx)("dt",{children:"Dog Breed"}),Object(O.jsx)("dd",{children:t.breed})]}),Object(O.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),a({variables:{id:Number(t.id)}}),n(t),c.push("/")}(e)},children:"Delete This Dog"})]})}),A=(n(97),n(68)),U=function(e){var t=e.userID,n=e.breeds,c=Object(o.useState)(""),s=Object(h.a)(c,2),r=s[0],a=s[1],i=Object(o.useState)(""),d=Object(h.a)(i,2),j=d[0],l=d[1],b=Object(o.useState)(""),u=Object(h.a)(b,2),m=u[0],g=u[1],p=Object(o.useState)(""),v=Object(h.a)(p,2),N=v[0],y=v[1],D=Object(x.a)(f,{refetchQueries:[w]}),S=Object(h.a)(D,2),I=S[0],T=S[1],C=T.loading,E=T.error,$=function(){a(""),l(""),g("")};if(C)return"Submitting...";if(E)return"Submission error! ".concat(E.message);var q=n.map((function(e){return{label:e.name,value:e.name}}));return q.push({label:"Mixed",value:"Mixed"}),Object(O.jsxs)("form",{className:"add-dog",children:[Object(O.jsx)("h2",{className:"train-dog-title text",children:"Train your dog!"}),Object(O.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:r,onChange:function(e){return a(e.target.value)},required:!0}),Object(O.jsx)("input",{type:"number",placeholder:"Age",name:"age",min:"0",value:j,onChange:function(e){return l(e.target.value)},required:!0}),Object(O.jsx)("label",{className:"text",children:"Select Breed:"}),Object(O.jsx)(A.a,{className:"select",options:q,onChange:function(e){return g(e.value)}}),Object(O.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),r&&j&&m?(I({variables:{name:r,userId:t,breed:m,age:Number(j)}}),y(""),$()):y("Sorry, you must input all fields before creating a dog!")}(e)},children:"Create"}),Object(O.jsx)("p",{children:N})]})},F=function(){var e=Object(b.a)(w),t=e.loading,n=e.error,c=e.data,s=Object(o.useState)({}),r=Object(h.a)(s,2),a=r[0],i=r[1],d=Object(o.useState)([]),j=Object(h.a)(d,2),m=j[0],x=j[1],p=Object(o.useState)([]),v=Object(h.a)(p,2),f=v[0],N=v[1],y=Object(o.useState)(0),D=Object(h.a)(y,2),S=D[0],T=D[1],A=Object(o.useState)([]),F=Object(h.a)(A,2),L=F[0],M=F[1];Object(o.useEffect)((function(){if(fetch("https://api.thedogapi.com/v1/breeds",{headers:{"X-Api-Key":"519cd25b-a229-4cd2-a69c-ebcd7d8dea4f"}}).then((function(e){return e.json()})).then((function(e){M(e)})),!t&&c){i(c.user),x(c.dogs);var e=R(c.events),n=z(e);N(n.outstanding),T(n.completed.length)}}),[c,t]);var P=function(e){var t=Object(l.a)(m),n=t.indexOf(e);t.splice(n,1),x(Object(l.a)(t))};if(t)return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{}),Object(O.jsx)("p",{children:"Loading..."})]});if(n)return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(C,{errorCode:n})]});var R=function(e){return Object(l.a)(e).sort((function(e,t){return new Date(e.eventDatetime)-new Date(t.eventDatetime)}))},z=function(e){var t=new Date;return Object(l.a)(e).reduce((function(e,n){return n.completed&&(e.completed=[].concat(Object(l.a)(e.completed),[n])),!n.completed&&new Date(n.eventDatetime)>=t&&(e.outstanding=[].concat(Object(l.a)(e.outstanding),[n])),e}),{completed:[],outstanding:[]})};return c?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{}),Object(O.jsx)("main",{children:Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(I,{userName:a.name,dogs:m,events:f,completedEvents:S})}}),Object(O.jsx)(u.b,{path:"/create",children:Object(O.jsx)(U,{userID:1,breeds:L})}),Object(O.jsx)(u.b,{path:"/add_event",children:Object(O.jsx)(E,{dogs:m})}),Object(O.jsx)(u.b,{path:"/calendar",children:Object(O.jsx)($,{events:f})}),Object(O.jsx)(u.b,{path:"/dog/:id",render:function(e){var t=e.match,n=m.find((function(e){return e.id===t.params.id}));return n?Object(O.jsx)(k,{matchingDog:n,removeDog:P}):Object(O.jsx)("div",{children:"Couldn't find this dog."})}}),Object(O.jsx)(u.b,{path:"/event/:id",render:function(e){var t=e.match,n=f.find((function(e){return e.id===t.params.id}));return n?Object(O.jsx)(q,{matchingEvent:n}):Object(O.jsx)("div",{children:"Couldn't find this event."})}}),Object(O.jsx)(u.b,{exact:!0,path:"/404",render:function(){return Object(O.jsx)(C,{errorCode:404})}}),Object(O.jsx)(u.a,{to:"/404"})]})})]}):void 0},L=n(115),M=n(116),P=n(114),R=new L.a({uri:"https://pawty-trainer-api.herokuapp.com/graphql",cache:new M.a});j.a.render(Object(O.jsx)(m.a,{children:Object(O.jsx)(P.a,{client:R,children:Object(O.jsx)(F,{})})}),document.getElementById("root"))},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.c1ff540d.chunk.js.map