(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),a=n(2),o=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),b=(n(12),n(0)),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).timerId=void 0,t.state={currentDate:new Date},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({currentDate:new Date}),console.log(t.state.currentDate.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.currentDate;return Object(b.jsxs)("div",{className:"current-time",children:["Current time:"," ",t.toLocaleTimeString()]})}}]),n}(u.a.Component),j=(n(14),function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"App__title",children:"React clock"}),this.state.isClockVisible&&Object(b.jsx)(h,{}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:this.showClock,className:"buttons__button",children:"Show Clock"}),Object(b.jsx)("button",{type:"button",onClick:this.hideClock,className:"buttons__button",children:"Hide Clock"})]})]})}}]),n}(u.a.Component)),d=j;i.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.03592e95.chunk.js.map