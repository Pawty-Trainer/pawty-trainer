(this["webpackJsonppawty-trainer"]=this["webpackJsonppawty-trainer"]||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c,s,r,i,a,d=n(3),o=n(59),j=n.n(o),h=(n(73),n(37)),l=n(11),b=n(103),u=n(10),O=(n(74),n(75),n(14)),m=n(1),g=function(){return Object(m.jsxs)("header",{children:[Object(m.jsx)("h1",{children:"Pawty Trainer"}),Object(m.jsxs)("nav",{children:[Object(m.jsx)(O.b,{to:"/",children:"Dashboard"}),Object(m.jsx)(O.b,{to:"/create",children:"Add Dog"}),Object(m.jsx)(O.b,{to:"/add_event",children:"Add Event"}),Object(m.jsx)(O.b,{to:"/calendar",children:"Calendar"})]})]})},x=(n(84),n(85),n(104)),v=n(34),p=n(102),f=Object(p.a)(c||(c=Object(v.a)(["\n  mutation ($name: String!, $userId: Int!, $breed: String!, $age: Int!) {\n    createDog(input: {\n        name: $name,\n        userId: $userId,\n        breed: $breed,\n        age: $age\n  }) {\n      dog {\n        id\n        userId\n        name\n        breed\n        age\n      }\n      errors\n    }\n  }\n"]))),D=Object(p.a)(s||(s=Object(v.a)(["\n  mutation ($id: ID!) {\n    destroyDog(input: {\n      id: $id\n    }) {\n      id\n    }\n  }\n"]))),y=Object(p.a)(r||(r=Object(v.a)(["\n  mutation ($name: String!, $dogId: Int!, $eventDatetime: ISO8601DateTime!){\n    createEvent(input: {\n      name: $name,\n      dogId: $dogId,\n      completed: false,\n      eventDatetime: $eventDatetime,  \n  }) {\n      event {\n        id\n        dogId\n        name\n        completed\n        eventDatetime\n      }\n      errors\n    }\n  }\n"]))),I=Object(p.a)(i||(i=Object(v.a)(["\n  mutation ($eventId: ID!){\n    updateEvent(\n      input: { \n        id: $eventId, \n        completed: true \n      }) {\n        event {\n          id\n          name\n          completed\n          dogId\n            dog {\n              id\n              name\n              breed\n              age\n                user {\n                  name\n                }\n        }\n      }\n    }\n  }\n"]))),w=Object(p.a)(a||(a=Object(v.a)(["\n  query {\n    user(id: 1) {\n      id\n      name\n    } dogs {\n      id\n      name\n      breed\n      age\n    } events {\n      id\n      name\n      completed\n      eventDatetime\n      dogId\n        dog {\n          name\n          breed\n          age\n          userId\n          user {\n            name\n        }\n      }\n    }\n  }\n"]))),N=function(e){var t=e.event,n=Object(x.a)(I,{refetchQueries:[w]}),c=Object(l.a)(n,1)[0];return Object(m.jsxs)("section",{className:"event-card",children:[Object(m.jsxs)("dl",{children:[Object(m.jsx)("dt",{children:"Event Name"}),Object(m.jsx)(O.b,{to:"/event/".concat(t.id),children:Object(m.jsx)("dd",{children:t.name})},t.id),Object(m.jsx)("dt",{children:"Event Date"}),Object(m.jsx)("dd",{children:t.eventDatetime}),Object(m.jsx)("dt",{children:"Dog ID"}),Object(m.jsx)("dd",{children:t.dogId})]}),Object(m.jsx)("input",{type:"checkbox",id:"complete",name:"complete",value:"true",onClick:function(){c({variables:{eventId:t.id}})}}),Object(m.jsx)("label",{children:"Complete Event"}),Object(m.jsx)("br",{})]},t.id)},S=function(e){var t=e.userName,n=e.dogs,c=e.events,s=[];n.length&&(s=n.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(O.b,{to:"/dog/".concat(e.id),children:e.name})},e.id)})));var r=[];if(c.length){var i=Object(h.a)(c);i.splice(2),r=i.map((function(e){return Object(m.jsx)(O.b,{to:"/event/".concat(e.id),children:Object(m.jsx)(N,{event:e})},e.id)}))}return n.length&&c.length?Object(m.jsxs)("section",{className:"dashboard",children:[Object(m.jsxs)("h2",{children:["Welcome ",t,"!"]}),Object(m.jsxs)("section",{children:[Object(m.jsxs)("section",{children:[Object(m.jsx)("h3",{children:"My Dogs"}),Object(m.jsx)("ul",{children:s})]}),Object(m.jsxs)("section",{children:[Object(m.jsx)("h3",{children:"Upcoming Events"}),r]})]})]}):n.length&&!c.length?Object(m.jsxs)("section",{className:"dashboard",children:[Object(m.jsxs)("h2",{children:["Welcome ",t,"!"]}),Object(m.jsxs)("section",{children:[Object(m.jsxs)("section",{children:[Object(m.jsx)("h3",{children:"My Dogs"}),Object(m.jsx)("ul",{children:s})]}),Object(m.jsx)("section",{children:Object(m.jsx)("h3",{children:"No Upcoming Events"})})]})]}):!n.length&&c.length?Object(m.jsxs)("section",{className:"dashboard",children:[Object(m.jsxs)("h2",{children:["Welcome ",t,"!"]}),Object(m.jsxs)("section",{children:[Object(m.jsx)("section",{children:Object(m.jsx)("h3",{children:"Add a dog!"})}),Object(m.jsxs)("section",{children:[Object(m.jsx)("h3",{children:"Upcoming Events"}),r]})]})]}):Object(m.jsxs)("section",{className:"dashboard",children:[Object(m.jsxs)("h2",{children:["Welcome ",t,"!"]}),Object(m.jsxs)("section",{children:[Object(m.jsx)("section",{children:Object(m.jsx)("h3",{children:"Add a dog!"})}),Object(m.jsx)("section",{children:Object(m.jsx)("h3",{children:"No Upcoming Events"})})]})]})},T=(n(87),[{code:301,message:"Moved Permanently",description:"The URL of the requested resource has been changed\n      permanently. The new URL is given in the response."},{code:401,message:"Unauthorized",description:'Although the HTTP standard specifies "unauthorized",\n      semantically this response means "unauthenticated". That is, the client\n      must authenticate itself to get the requested response.'},{code:403,message:"Forbidden",description:"The client does not have access rights to the content;\n      that is, it is unauthorized, so the server is refusing to give the\n      requested resource. Unlike 401, the client's identity is known to the\n      server."},{code:404,message:"Not Found",description:"The server can not find the requested resource. In the\n      browser, this means the URL is not recognized. In an API, this can also\n      mean that the endpoint is valid but the resource itself does not exist.\n      Servers may also send this response instead of 403 to hide the existence\n      of a resource from an unauthorized client. This response code is probably \n      the most famous one due to its frequent occurrence on the web."},{code:408,message:"Request Timeout",description:"This response is sent on an idle connection by some \n      servers, even without any previous request by the client. It means that \n      the server would like to shut down this unused connection. This response \n      is used much more since some browsers, like Chrome, Firefox 27+, or IE9, \n      use HTTP pre-connection mechanisms to speed up surfing. Also note that \n      some servers merely shut down the connection without sending this \n      message."},{code:429,message:"Too Many Requests",description:'The user has sent too many requests in a given amount of \n      time ("rate limiting").'},{code:500,message:"Internal Server Error",description:"The server has encountered a situation it doesn't know how \n      to handle."},{code:502,message:"Bad Gateway",description:"This error response means that the server, while working as \n      a gateway to get a response needed to handle the request, got an invalid \n      response."},{code:503,message:"Service Unavailable",description:"The server is not ready to handle the request. Common \n      causes are a server that is down for maintenance or that is overloaded. \n      Note that together with this response, a user-friendly page explaining \n      the problem should be sent. This response should be used for temporary \n      conditions and the Retry-After: HTTP header should, if possible, contain \n      the estimated time before the recovery of the service. The webmaster must \n      also take care about the caching-related headers that are sent along with \n      this response, as these temporary condition responses should usually not \n      be cached."},{code:504,message:"Gateway Timeout",description:"This error response is given when the server is acting as a \n      gateway and cannot get a response in time."}]),C=function(e){var t=e.errorCode,n=T.find((function(e){return e.code===t}));return Object(m.jsx)("article",{className:"error-container",children:Object(m.jsxs)("div",{className:"error-div",children:[Object(m.jsxs)("h2",{className:"error-h2",children:["Error ",n.code]}),Object(m.jsx)("h3",{children:n.message}),Object(m.jsx)("p",{children:n.description}),Object(m.jsx)(O.b,{to:"/",children:Object(m.jsx)("button",{className:"details-back",children:"Home"})})]})})},E=(n(88),function(e){var t=e.dogs,n=Object(d.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],i=Object(d.useState)(""),a=Object(l.a)(i,2),o=a[0],j=a[1],h=Object(d.useState)(0),b=Object(l.a)(h,2),u=b[0],O=b[1],g=Object(d.useState)(""),v=Object(l.a)(g,2),p=v[0],f=v[1],D=Object(x.a)(y,{refetchQueries:[w]}),I=Object(l.a)(D,2),N=I[0],S=I[1],T=S.loading,C=S.error,E=function(){r(""),j(""),O(0)};return T?"Submitting...":C?"Submission error! ".concat(C.message):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{children:[Object(m.jsx)("h1",{children:"Add New Event"}),Object(m.jsx)("input",{type:"text",placeholder:"Event Name",value:s,onChange:function(e){return r(e.target.value)},required:!0}),Object(m.jsx)("label",{children:"Select dog:"}),Object(m.jsxs)("select",{onChange:function(e){return O(e.target.value)},children:[Object(m.jsx)("option",{placeholder:"Dog Name",value:u,children:"Dog Name"},u),t.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(m.jsx)("label",{children:"Set event date:"}),Object(m.jsx)("input",{type:"date",placeholder:"EventDateTime",value:o,onChange:function(e){return j(e.target.value)},required:!0}),Object(m.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),s&&o&&u?(N({variables:{dogId:Number(u),name:s,eventDatetime:o}}),f(""),E()):f("Sorry, you must input all fields before creating an event!")}(e)},children:"Submit"}),Object(m.jsx)("p",{children:p})]})})}),q=(n(89),function(e){var t=e.events,n=[];return t.length&&(n=t.map((function(e){return Object(m.jsx)(N,{event:e})}))),t.length?Object(m.jsxs)("section",{className:"calendar",children:[Object(m.jsx)("h2",{children:"Calendar!"}),Object(m.jsx)("section",{children:n})]}):Object(m.jsxs)("section",{className:"calendar",children:[Object(m.jsx)("h2",{children:"Calendar!"}),Object(m.jsx)("p",{children:"You have no events scheduled."})]})}),$=(n(90),function(e){var t=e.matchingEvent;return Object(m.jsx)("section",{className:"event",children:Object(m.jsxs)("dl",{children:[Object(m.jsx)("dt",{children:"Event Name"}),Object(m.jsx)("dd",{children:t.name}),Object(m.jsx)("dt",{children:"Event Date"}),Object(m.jsx)("dd",{children:t.eventDatetime}),Object(m.jsx)("dt",{children:"Dog ID"}),Object(m.jsx)("dd",{children:t.dogId})]})})}),k=(n(91),function(e){var t=e.matchingDog,n=e.removeDog,c=Object(u.g)(),s=Object(x.a)(D),r=Object(l.a)(s,2),i=r[0],a=r[1],d=a.loading,o=a.error;return d?"Submitting...":o?"Submission error! ".concat(o.message):Object(m.jsxs)("section",{className:"dog-details",children:[Object(m.jsxs)("dl",{children:[Object(m.jsx)("dt",{children:"Dog ID"}),Object(m.jsx)("dd",{children:t.id}),Object(m.jsx)("dt",{children:"Dog Name"}),Object(m.jsx)("dd",{children:t.name}),Object(m.jsx)("dt",{children:"Dog Age"}),Object(m.jsx)("dd",{children:t.age}),Object(m.jsx)("dt",{children:"Dog Breed"}),Object(m.jsx)("dd",{children:t.breed})]}),Object(m.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),i({variables:{id:Number(t.id)}}),n(t),c.push("/")}(e)},children:"Delete This Dog"})]})}),A=(n(92),function(e){var t=e.userID,n=Object(d.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],i=Object(d.useState)(""),a=Object(l.a)(i,2),o=a[0],j=a[1],h=Object(d.useState)(""),b=Object(l.a)(h,2),u=b[0],O=b[1],g=Object(d.useState)(""),v=Object(l.a)(g,2),p=v[0],D=v[1],y=Object(x.a)(f,{refetchQueries:[w]}),I=Object(l.a)(y,2),N=I[0],S=I[1],T=S.loading,C=S.error,E=function(){r(""),j(""),O("")};return T?"Submitting...":C?"Submission error! ".concat(C.message):Object(m.jsxs)("form",{children:[Object(m.jsx)("h1",{className:"train-dog-title",children:"Train your dog!"}),Object(m.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:s,onChange:function(e){return r(e.target.value)},required:!0}),Object(m.jsx)("input",{type:"number",placeholder:"Age",name:"age",value:o,onChange:function(e){return j(e.target.value)},required:!0}),Object(m.jsx)("input",{type:"text",placeholder:"Breed",name:"breed",value:u,onChange:function(e){return O(e.target.value)},required:!0}),Object(m.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),s&&o&&u?(N({variables:{name:s,userId:t,breed:u,age:Number(o)}}),D(""),E()):D("Sorry, you must input all fields before creating a dog!")}(e)},children:"Create"}),Object(m.jsx)("p",{children:p})]})}),U=function(){var e=Object(b.a)(w),t=e.loading,n=e.error,c=e.data,s=Object(d.useState)({}),r=Object(l.a)(s,2),i=r[0],a=r[1],o=Object(d.useState)([]),j=Object(l.a)(o,2),O=j[0],x=j[1],v=Object(d.useState)([]),p=Object(l.a)(v,2),f=p[0],D=p[1];Object(d.useEffect)((function(){!t&&c&&(a(c.user),x(c.dogs),D(I(c.events)))}),[c,t]);var y=function(e){var t=Object(h.a)(O),n=t.indexOf(e);t.splice(n,1),x(Object(h.a)(t))};if(t)return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{}),Object(m.jsx)("p",{children:"Loading..."})]});if(n)return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{}),Object(m.jsx)(C,{errorCode:n})]});var I=function(e){return Object(h.a)(e).sort((function(e,t){return new Date(e.eventDatetime)-new Date(t.eventDatetime)}))};return c?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{}),Object(m.jsx)("main",{children:Object(m.jsxs)(u.d,{children:[Object(m.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(S,{userName:i.name,dogs:O,events:f})}}),Object(m.jsx)(u.b,{path:"/create",children:Object(m.jsx)(A,{userID:1})}),Object(m.jsx)(u.b,{path:"/add_event",children:Object(m.jsx)(E,{dogs:O})}),Object(m.jsx)(u.b,{path:"/calendar",children:Object(m.jsx)(q,{events:f})}),Object(m.jsx)(u.b,{path:"/dog/:id",render:function(e){var t=e.match,n=O.find((function(e){return e.id===t.params.id}));return n?Object(m.jsx)(k,{matchingDog:n,removeDog:y}):Object(m.jsx)("div",{children:"Couldn't find this dog."})}}),Object(m.jsx)(u.b,{path:"/event/:id",render:function(e){var t=e.match,n=f.find((function(e){return e.id===t.params.id}));return n?Object(m.jsx)($,{matchingEvent:n}):Object(m.jsx)("div",{children:"Couldn't find this event."})}}),Object(m.jsx)(u.b,{exact:!0,path:"/404",render:function(){return Object(m.jsx)(C,{errorCode:404})}}),Object(m.jsx)(u.a,{to:"/404"})]})})]}):void 0},F=n(100),P=n(101),R=n(99),z=new F.a({uri:"https://pawty-trainer-api.herokuapp.com/graphql",cache:new P.a});j.a.render(Object(m.jsx)(O.a,{children:Object(m.jsx)(R.a,{client:z,children:Object(m.jsx)(U,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.916a594e.chunk.js.map