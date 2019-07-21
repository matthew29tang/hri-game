(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),c=(a(78),a(14)),s=a(12),l=a(17),u=a(15),m=a(16),p=(a(79),a(60)),h=a.n(p),d=a(4),b=a(150),g=a(144),f=a(145),v=a(105),y=a(63),E=a(33),O=a(104),N=a(148),w=a(143),j=function(){return o.a.createElement("h1",null,"Not found")},S=a(27),R=[[1,3,2.5,2],[8,10,7.5,6],[10,10,25,7],[3,4,5,2],[6,5,20,5]],k=[[1,1,0,1],[0,1,1,1],[1,1,0,1],[1,0,0,1],[1,1,0,1]],x={0:"Room A",1:"Room B",2:"Room C",3:"Room D"},P=a(141),C=a(146),G=a(149),D=a(140),B=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={name:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,"Introduction text here explaining the game.",o.a.createElement("p",null,"By playing this game, you agree to take part in data collection which will keep a record of your score and actions in this game."),o.a.createElement(C.a,{id:"outlined-name",label:"Name",defaultValue:"",className:e.textField,margin:"normal",onChange:this.props.setName("name"),variant:"outlined"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(D.a,{control:o.a.createElement(G.a,{checked:this.state.checked,onChange:this.props.validData,color:"primary"}),label:"This is my first time playing this game"}),o.a.createElement("br",null),o.a.createElement(P.a,{variant:"contained",color:"primary",className:e.button,onClick:this.props.nextPage,disabled:this.props.name.length<=2},"Begin"))}}]),t}(o.a.Component),_=Object(d.a)(function(e){return{button:{margin:e.spacing(2)},input:{display:"none"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},body:{textAlign:"left"}}})(B),V=a(142),W=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateState=function(e,t){n.setState(Object(S.a)({},e,t))},n.updatePreview=function(e){n.setState({preview:e})},n.state={preview:0},n.images=[a(42)("./Room".concat(4*n.props.stage,".PNG")),a(42)("./Room".concat(4*n.props.stage+1,".PNG")),a(42)("./Room".concat(4*n.props.stage+2,".PNG")),a(42)("./Room".concat(4*n.props.stage+3,".PNG"))],n.rooms=[[0,"Room A"],[1,"Room B"],[2,"Room C"],[3,"Room D"]],n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement("div",{className:"Rooms"},o.a.createElement("div",{className:t.header},o.a.createElement("h1",null,"Room Selection"),o.a.createElement(V.a,null),o.a.createElement("br",null),"Choose a room for the robot to do by clicking a button. Hover over a room diagram to enlarge.",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement(O.a,{className:t.paper},o.a.createElement("img",{className:t.preview,src:this.images[this.state.preview],alt:"Enlarged"})),o.a.createElement("br",null),o.a.createElement(w.a,{container:!0,spacing:3},this.rooms.map(function(a,n){return o.a.createElement(w.a,{item:!0,xs:3,key:n},o.a.createElement(O.a,{className:t.paper},o.a.createElement("img",{className:t.room,src:e.images[a[0]],alt:a[1],onMouseOver:function(){return e.updatePreview(a[0])}})),o.a.createElement("br",null),o.a.createElement(P.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){return e.props.nextPage(a[0])}},a[1]))})))}}]),t}(o.a.Component),A=Object(d.a)(function(e){return{card:{minWidth:275,marginBottom:20,padding:18},container:{flex:1,flexDirection:"row",flexWrap:"wrap",alignItems:"flex-start"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},room:{width:"100%"},preview:{width:"50%"}}})(W),I=a(47),T=a.n(I),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).playVideo=function(){a.setState({playing:!0})},a.updateState=function(e,t){a.setState(function(a){var n,o=a.playtime>.99||a.videoDone;return n={},Object(S.a)(n,e,t.played),Object(S.a)(n,"videoDone",o),n})},a.state={playing:!1,playtime:0,videoDone:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement("div",{className:"humanVideo"},o.a.createElement("h1",null," Your choice"),o.a.createElement(V.a,null),o.a.createElement("br",null),"The robot received your command to attempt ",x[this.props.action]," worth ",parseInt(R[this.props.stage][this.props.action])," points. Click the button to see the results.",o.a.createElement("br",null),o.a.createElement("br",null),this.state.playing?o.a.createElement("div",{className:"player-wrapper"},o.a.createElement("center",null,o.a.createElement(T.a,{className:"react-player",url:"https://www.youtube.com/watch?v=LDU_Txk06tM",playing:this.state.playing,controls:!0,onProgress:function(t){return e.updateState("playtime",t)},ref:function(t){e.player=t}}))):"",this.state.playing?"":o.a.createElement(P.a,{variant:"contained",color:"primary",className:t.button,onClick:this.playVideo},"Play Video"),o.a.createElement("br",null),this.state.videoDone&&this.props.roundScore>0?"Congrats! You have won ".concat(this.props.roundScore," point(s). Click continue to see what the robot will choose!"):"",this.state.videoDone&&0===this.props.roundScore?"Unfortunately the robot failed the room. You scored 0 points. Click continue to see what the robot will choose!":"",this.state.videoDone?o.a.createElement("div",{className:"buttons"},o.a.createElement(P.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){return e.player.seekTo(0,"seconds")}},"Replay"),o.a.createElement(P.a,{variant:"contained",color:"primary",className:t.button,onClick:this.props.nextPage},"Continue")):"",this.state.playtime>0&&!this.state.videoDone?"Finish watching the video to proceed.":"")}}]),t}(o.a.Component),F=Object(d.a)(function(e){return{card:{minWidth:275,marginBottom:20,padding:18},title:{fontSize:14},header:{fontSize:18},button:{margin:2*e.spacing(1)}}})(z),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).playVideo=function(){a.setState({playing:!0})},a.updateState=function(e,t){a.setState(function(a){var n,o=a.playtime>.99||a.videoDone;return n={},Object(S.a)(n,e,t.played),Object(S.a)(n,"videoDone",o),n})},a.state={playing:!1,playtime:0,videoDone:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement("div",{className:"RobotVideo"},o.a.createElement("h1",null," Robot's choice"),o.a.createElement(V.a,null),o.a.createElement("br",null),"The robot has chosen to attempt ",x[this.props.action]," worth ",parseInt(R[this.props.stage][this.props.action])," points. Click the button to see the results.",o.a.createElement("br",null),o.a.createElement("br",null),this.state.playing?o.a.createElement("div",{className:"player-wrapper"},o.a.createElement("center",null,o.a.createElement(T.a,{className:"react-player",url:"https://www.youtube.com/watch?v=FTQbiNvZqaY",playing:this.state.playing,controls:!0,onProgress:function(t){return e.updateState("playtime",t)},ref:function(t){e.player=t}}))):"",this.state.playing?"":o.a.createElement(P.a,{variant:"contained",color:"primary",className:t.button,onClick:this.playVideo},"Play Video"),o.a.createElement("br",null),this.state.videoDone&&this.props.roundScore>0?"The robot succeeded! Your total score is ".concat(this.props.roundScore," point(s). Click continue to play another round with the same robot!"):"",this.state.videoDone&&0===this.props.roundScore?"Unfortunately the robot failed the room. Your total score is ".concat(this.props.roundScore," point(s) Click continue to play another round with the same robot!"):"",this.state.videoDone?o.a.createElement("div",{className:"buttons"},o.a.createElement(P.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){return e.player.seekTo(0,"seconds")}},"Replay"),o.a.createElement(P.a,{variant:"contained",color:"primary",className:t.button,onClick:this.props.nextPage},"Continue")):"",this.state.playtime>0&&!this.state.videoDone?"Finish watching the video to proceed.":"")}}]),t}(o.a.Component),H=Object(d.a)(function(e){return{card:{minWidth:275,marginBottom:20,padding:18},title:{fontSize:14},header:{fontSize:18},button:{margin:2*e.spacing(1)}}})(Y),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._updateHistory=function(e){a.setState(function(t){return{history:t.history.concat(e)}})},a._updateScore=function(e,t){var n=k[a.state.stage][e]?R[a.state.stage][e]:0;console.log("Gained "+n+" pts"),a.setState(function(e){return{score:e.score+n}}),"human"===t?a.setState({roundScore:n}):a.setState(function(e){return{roundScore:e.roundScore+n}})},a._updatePage=function(e){a.setState({page:e})},a.beginGame=function(){a._updatePage("chooseRoom")},a.setName=function(e){return function(t){a.setState(Object(S.a)({},e,t.target.value))}},a.validData=function(){a.setState(function(e){return{valid:!e.valid}})},a.chooseRoom=function(e){a._updateScore(e,"human"),a._updateHistory(e),a._updatePage("humanVideo")},a.getRobotAction=function(){a._updateScore(0,"robot"),a._updateHistory(0),a._updatePage("robotVideo")},a.incrementStage=function(){a.setState(function(e){return{stage:e.stage+1,roundScore:0}}),a._updatePage("chooseRoom")},a.state={name:"",valid:!1,history:[],stage:0,score:0,page:"intro",roundScore:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"game"},"intro"===this.state.page?o.a.createElement(_,{nextPage:this.beginGame,setName:this.setName,validData:this.validData,name:this.state.name}):"","chooseRoom"===this.state.page?o.a.createElement(A,{stage:this.state.stage,nextPage:this.chooseRoom}):"","humanVideo"===this.state.page?o.a.createElement(F,{stage:this.state.stage,action:this.state.history[this.state.history.length-1],score:this.state.roundScore,roundScore:this.state.roundScore,nextPage:this.getRobotAction}):"","robotVideo"===this.state.page?o.a.createElement(H,{stage:this.state.stage,action:this.state.history[this.state.history.length-1],score:this.state.roundScore,roundScore:this.state.roundScore,nextPage:this.incrementStage}):"")}}]),t}(o.a.Component),L=Object(d.a)(function(e){return{card:{minWidth:275,marginBottom:20,padding:18},title:{fontSize:14},header:{fontSize:18}}})(U),M=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"About"},o.a.createElement("h1",null,"About"),o.a.createElement(V.a,null),o.a.createElement("br",null),o.a.createElement("div",{align:"left","word-wrap":"break-word"},"Explanation here"))}}]),t}(o.a.Component),J=o.a.createElement(y.a,null,o.a.createElement("div",{className:"Router"},o.a.createElement(E.c,null,o.a.createElement(E.a,{exact:!0,path:"/",component:L}),o.a.createElement(E.a,{path:"/about/",component:M}),o.a.createElement(E.a,{component:j})))),q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(w.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},o.a.createElement(N.a,{width:"75%",maxWidth:1e3},o.a.createElement(O.a,{className:e.root},J)))}}]),t}(o.a.Component),Q=Object(d.a)(function(e){return{root:{padding:e.spacing(3,2)}}})(q),Z=function(e){return{root:{display:"flex",overflowScrolling:"touch",WebkitOverflowScrolling:"touch"},toolbar:{paddingRight:24},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing(1),height:"100vh",overflow:"auto",overflowScrolling:"touch",WebkitOverflowScrolling:"touch"},h5:{marginBottom:2*e.spacing(1)}}},$=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(b.a,null),o.a.createElement(g.a,{position:"absolute",className:h()(e.appBar)},o.a.createElement(f.a,{disableGutters:!0,className:e.toolbar},o.a.createElement(v.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"HRI Game"))),o.a.createElement("main",{className:e.content},o.a.createElement("div",{className:e.appBarSpacer}),o.a.createElement(Q,null)))}}]),t}(o.a.Component),K=Object(d.a)(Z)($),X=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(K,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){var n={"./Room0.PNG":90,"./Room1.PNG":91,"./Room2.PNG":92,"./Room3.PNG":93,"./Room4.PNG":94,"./Room5.PNG":95,"./Room6.PNG":96,"./Room7.PNG":97};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=42},73:function(e,t,a){e.exports=a(103)},78:function(e,t,a){},79:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/Room0.a57c1100.PNG"},91:function(e,t,a){e.exports=a.p+"static/media/Room1.397b61bc.PNG"},92:function(e,t,a){e.exports=a.p+"static/media/Room2.750261ad.PNG"},93:function(e,t,a){e.exports=a.p+"static/media/Room3.6dcde804.PNG"},94:function(e,t,a){e.exports=a.p+"static/media/Room4.c64aeb08.PNG"},95:function(e,t,a){e.exports=a.p+"static/media/Room5.34f00fd2.PNG"},96:function(e,t,a){e.exports=a.p+"static/media/Room6.5307f2fd.PNG"},97:function(e,t,a){e.exports=a.p+"static/media/Room7.f6f054c2.PNG"}},[[73,1,2]]]);
//# sourceMappingURL=main.7c194c70.chunk.js.map