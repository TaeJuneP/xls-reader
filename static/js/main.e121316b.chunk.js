(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,n){t.exports=n(36)},27:function(t,e,n){},28:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),l=(n(27),n(1)),c=n(11),u=n(12),s=n(18),h=n(13),f=n(19),d=(n(28),n(14)),p=n.n(d),g=n(15),m=n(2);function v(){var t=Object(l.a)(["\n  height: 40px;\n  width: 150px;\n  display: block;\n  margin: auto;\n  font-size:16px;\n  margin-top:5px;\n"]);return v=function(){return t},t}function b(){var t=Object(l.a)(["\n  height:40px;\n  width:150px;\n  margin:auto;\n  text-align:center;\n  justify-content:center;\n"]);return b=function(){return t},t}function w(){var t=Object(l.a)(["\n  height: 50px;\n  width: 100%;\n  margin-top:5px;\n"]);return w=function(){return t},t}function x(){var t=Object(l.a)(["\n  height: 100%;\n  width: 300px;\n  margin: auto;\n"]);return x=function(){return t},t}function E(){var t=Object(l.a)(["\n  height: 30px;\n  width: 100%;\n  border: 1px solid black;\n"]);return E=function(){return t},t}var O=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).state={before:"",after:"",col:"",inputdata:[],filename:""},n.handleForce=function(t){n.setState({inputdata:t})},n.handleList=function(){console.log(n.state.inputdata);var t=0;if(0!==n.state.inputdata.length)return n.state.inputdata[0].map(function(e){return o.a.createElement(j,{key:t},t++,":",e)})},n.handleBefore=function(t){n.setState({before:t.target.value})},n.handleAfter=function(t){n.setState({after:t.target.value})},n.handleCol=function(t){n.setState({col:t.target.value})},n.handleName=function(t){n.setState({filename:t.target.value})},n.OutputButton=function(t,e,n,a){console.log(t.length),console.log(t[a]);for(var o=0;o<t.length;o++)t[o][a]===e&&(t[o][a]=n);console.log(t)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(k,null,o.a.createElement(p.a,{cssClass:"react-csv-input",label:"CSV\ud30c\uc77c \uc120\ud0dd",onFileLoaded:this.handleForce}),this.handleList(),o.a.createElement(C,{placeholder:"\uce7c\ub7fc\ubc88\ud638",value:this.state.col,onChange:this.handleCol}),o.a.createElement(C,{placeholder:"\ubcc0\uacbd \uc804",value:this.state.before,onChange:this.handleBefore}),o.a.createElement(C,{placeholder:"\ubcc0\uacbd \ud6c4",value:this.state.after,onChange:this.handleAfter}),o.a.createElement(C,{placeholder:"\uc0dd\uc131 \ud30c\uc77c\uba85",value:this.state.filename,onChange:this.handleName}),o.a.createElement(S,{onClick:function(){t.OutputButton(t.state.inputdata,t.state.before,t.state.after,t.state.col)}},"\ubcc0\uacbd\ud558\uae30"),o.a.createElement(y,null,o.a.createElement(g.CSVLink,{data:this.state.inputdata,filename:this.state.filename+".csv",className:"buttonhi",target:"_blank"},"\ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc")))}}]),e}(a.Component),j=m.a.div(E()),k=m.a.div(x()),C=m.a.input(w()),y=m.a.div(b()),S=m.a.button(v()),B=O;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.e121316b.chunk.js.map