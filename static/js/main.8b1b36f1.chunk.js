(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),i=(a(15),a(2)),s=a(3),l=a(5),d=a(4),u=a(6),m=(a(16),a(1)),h=(a(17),a(18),function(e){return o.a.createElement("button",{className:"button ".concat(e.color),onClick:e.action},e.text)}),v=(a(19),function(e){var t="input";return e.hasError&&(t="".concat(t," error")),o.a.createElement("input",{className:t,onChange:e.handleChange,value:e.value})});function b(e){return e.length>0}var p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={value:"",hasError:!1},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a.clearForm=a.clearForm.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({value:t,hasError:!b(t)})}},{key:"handleSubmit",value:function(e){var t=this.state.value;b(t)?(this.props.addTodo(t),this.clearForm()):this.setState({hasError:!0}),e.preventDefault()}},{key:"clearForm",value:function(){this.setState({value:""})}},{key:"render",value:function(){return o.a.createElement("div",{className:"TodoInput"},o.a.createElement("div",{className:"TodoInput-header"},o.a.createElement("img",{className:"TodoInput-mascot",alt:"betsuni",src:"https://cdn.discordapp.com/attachments/511245116871278594/549145630560223232/nishikino_maki_love_live_school_idol_project_and_etc_drawn_by_ikiyouz__0f8800bc2bf59bf9b62cb86f33953.png"}),o.a.createElement("div",{className:"TodoInput-message"},o.a.createElement("span",null,function(e){var t=e.length;return 0===t?"No Todos!":"".concat(t," Todos")}(this.props.todos)))),o.a.createElement("form",{className:"TodoInput-input",onSubmit:this.handleSubmit},o.a.createElement(v,{value:this.state.value,handleChange:this.handleChange,hasError:this.state.hasError}),o.a.createElement("div",{className:"TodoInput-buttons"},o.a.createElement(h,{text:"Add Todo",color:"pink",action:this.handleSubmit}))))}}]),t}(n.Component),f=(a(20),a(21),function(e){return o.a.createElement("article",{className:"TodoCard"},o.a.createElement("div",{className:"TodoCard-content"},o.a.createElement("span",null,e.todo.title)),o.a.createElement("div",{className:"TodoCard-button"},o.a.createElement(h,{color:"pink",text:"Complete",action:function(){e.removeTodo(e.index)}})))}),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"TodoList"},this.props.todos.map(function(t,a){return o.a.createElement(f,{todo:t,key:t.created_at.getMilliseconds(),index:a,removeTodo:e.props.removeTodo})}))}}]),t}(n.Component),j=(a(22),function e(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date;Object(i.a)(this,e),this.title=t,this.completed=a,this.created_at=new Date(n)});function E(e){var t=JSON.stringify(e);localStorage.setItem("todos",t)}function T(){var e=localStorage.getItem("todos");return null===e?[]:e=(e=JSON.parse(e)).map(function(e){return new j(e.title,e.completed,e.created_at)})}var g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={todos:T()},a.addTodo=a.addTodo.bind(Object(m.a)(Object(m.a)(a))),a.removeTodo=a.removeTodo.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"addTodo",value:function(e){var t=new j(e),a=this.state.todos;a.push(t),this.setState({todos:a}),E(a)}},{key:"removeTodo",value:function(e){var t=this.state.todos;t.splice(e,1),this.setState({todos:t}),E(t)}},{key:"render",value:function(){return o.a.createElement("div",{className:"Feed"},o.a.createElement(p,{addTodo:this.addTodo,todos:this.state.todos}),o.a.createElement(O,{todos:this.state.todos,removeTodo:this.removeTodo}))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Maki"},o.a.createElement("main",{className:"Maki-content"},o.a.createElement(g,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.8b1b36f1.chunk.js.map