(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(t,e,n){t.exports=n(44)},32:function(t,e,n){},33:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(2),i=n.n(o),c=(n(32),n(3)),l=n(14),u=n(15),s=n(23),h=n(16),f=n(24),d=(n(33),n(17)),p=n.n(d),m=n(18),g=n(4),v=n(9);n(39);function b(){var t=Object(c.a)(["\n  background-image: linear-gradient(to bottom right, #989ade, #5f6ccc);\n  height: 100%;\n  width: 100%;\n"]);return b=function(){return t},t}function w(){var t=Object(c.a)(["\n  height: 40px;\n  width: 150px;\n  display: block;\n  margin: auto;\n  font-size: 16px;\n  margin-top: 5px;\n"]);return w=function(){return t},t}function O(){var t=Object(c.a)(["\n  height: 40px;\n  width: 150px;\n  margin: auto;\n  text-align: center;\n  justify-content: center;\n"]);return O=function(){return t},t}function E(){var t=Object(c.a)(["\n  height: 50px;\n  width: 100%;\n  margin-top: 5px;\n"]);return E=function(){return t},t}function k(){var t=Object(c.a)(["\n  height: 100%;\n  width: 300px;\n  margin: auto;\n"]);return k=function(){return t},t}function j(){var t=Object(c.a)(["\n  height: 30px;\n  width: 100%;\n  border: 1px solid black;\n  background-color:#ffffff;\n"]);return j=function(){return t},t}var x=0,C=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).notify=function(){Object(v.b)(x+"\uac1c \ubcc0\uacbd \uc644\ub8cc \ub2e4\uc6b4 \ubc1b\uc73c\uc138\uc694",{position:"bottom-center",autoClose:1e3,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!1,draggable:!1})},n.state={before:"",after:"",col:"",inputdata:[],filename:""},n.handleForce=function(t){n.setState({inputdata:t})},n.handleList=function(){console.log(n.state.inputdata);var t=0;if(0!==n.state.inputdata.length)return n.state.inputdata[0].map(function(e){return r.a.createElement(y,{key:t},t++,":",e)})},n.handleBefore=function(t){n.setState({before:t.target.value})},n.handleAfter=function(t){n.setState({after:t.target.value})},n.handleCol=function(t){n.setState({col:t.target.value})},n.handleName=function(t){n.setState({filename:t.target.value})},n.OutputButton=function(t,e,a,r){for(var o=0;o<t.length;o++)t[o][r]===e&&(t[o][r]=a,x++);n.setState({inputdata:t}),n.notify(),x=0},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null),r.a.createElement(A,null,r.a.createElement(S,null,r.a.createElement(p.a,{cssClass:"react-csv-input",label:"CSV\ud30c\uc77c \uc120\ud0dd",onFileLoaded:this.handleForce}),this.handleList(),r.a.createElement(B,{placeholder:"\uce7c\ub7fc\ubc88\ud638",value:this.state.col,onChange:this.handleCol}),r.a.createElement(B,{placeholder:"\ubcc0\uacbd \uc804",value:this.state.before,onChange:this.handleBefore}),r.a.createElement(B,{placeholder:"\ubcc0\uacbd \ud6c4",value:this.state.after,onChange:this.handleAfter}),r.a.createElement(B,{placeholder:"\uc0dd\uc131 \ud30c\uc77c\uba85",value:this.state.filename,onChange:this.handleName}),r.a.createElement(L,{onClick:function(){t.OutputButton(t.state.inputdata,t.state.before,t.state.after,t.state.col)}},"\ubcc0\uacbd\ud558\uae30"),r.a.createElement(F,null,r.a.createElement(m.CSVLink,{data:this.state.inputdata,filename:this.state.filename+".csv",className:"buttonhi",target:"_blank"},"\ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc")))))}}]),e}(a.Component),y=g.a.div(j()),S=g.a.div(k()),B=g.a.input(E()),F=g.a.div(O()),L=g.a.button(w()),A=g.a.div(b()),N=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.18631f4b.chunk.js.map