(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{363:function(n,t,e){"use strict";e.r(t);var r=e(6),o=(e(26),e(10),{head:function(){return{title:"About - GrahamSH"}},methods:{send:function(){return Object(r.a)(regeneratorRuntime.mark((function n(){var body;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"",console.log("Sending"),body={version:"",userAgent:navigator.userAgent,language:navigator.language,content:document.querySelector("#message").value,username:document.querySelector("#grid-first-name").value},n.next=5,fetch("https://grahamsh-contact.glitch.me/send",{method:"POST",body:JSON.stringify(body)});case 5:n.sent;case 7:case"end":return n.stop()}}),n)})))()}}}),l=e(9),component=Object(l.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("main",[e("h1",{staticClass:"\n      text-4xl\n      mb-6\n      tracking-tight\n      font-extrabold\n      text-gray-900\n      sm:text-5xl\n      md:text-6xl\n    "},[n._v("\n    Contact\n  ")]),n._v(" "),e("form",{staticClass:"w-full max-w-lg"},[n._m(0),n._v(" "),n._m(1),n._v(" "),e("div",{staticClass:"md:flex md:items-center"},[e("div",{staticClass:"md:w-1/3"},[e("button",{staticClass:"\n            shadow\n            bg-indigo-700\n            hover:bg-indigo-400\n            focus:shadow-outline\n            focus:outline-none\n            text-white\n            font-bold\n            py-2\n            px-4\n            rounded\n          ",attrs:{type:"button"},on:{click:function(t){return n.send()}}},[n._v("\n          Send\n        ")])]),n._v(" "),e("div",{staticClass:"md:w-2/3"})])])])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[e("div",{staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[e("label",{staticClass:"\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",attrs:{for:"grid-first-name"}},[n._v("\n          Username\n        ")]),n._v(" "),e("input",{staticClass:"\n            appearance-none\n            block\n            w-full\n            bg-gray-200\n            text-gray-700\n            border\n            rounded\n            py-3\n            px-4\n            mb-3\n            leading-tight\n            focus:outline-none\n            focus:bg-white\n          ",attrs:{id:"grid-first-name",type:"text",placeholder:"GrahamSH"}})])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[e("div",{staticClass:"w-full px-3"},[e("label",{staticClass:"\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",attrs:{for:"grid-password"}},[n._v("\n          Message\n        ")]),n._v(" "),e("textarea",{staticClass:"\n            no-resize\n            appearance-none\n            block\n            w-full\n            bg-gray-200\n            text-gray-700\n            border\n            rounded\n            py-3\n            px-4\n            mb-3\n            leading-tight\n            focus:outline-none\n            focus:bg-white\n            focus:border-gray-500\n            h-48\n            resize-none\n          ",attrs:{id:"message"}}),n._v(" "),e("p",{staticClass:"text-gray-600 text-xs italic"},[n._v("\n          What do you want to tell me? Write above.\n        ")])])])}],!1,null,null,null);t.default=component.exports}}]);