(this["webpackJsonpclicky-game-app"]=this["webpackJsonpclicky-game-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"./assets/imgs/Alice_Charles.png","clicked":false},{"id":2,"image":"./assets/imgs/Astrid_Sloane.png","clicked":false},{"id":3,"image":"./assets/imgs/Dede_Standish.png","clicked":false},{"id":4,"image":"./assets/imgs/Georgina_Hobart.png","clicked":false},{"id":5,"image":"./assets/imgs/Hadassah_Gold.png","clicked":false},{"id":6,"image":"./assets/imgs/Infinity_Jackson.png","clicked":false},{"id":7,"image":"./assets/imgs/James_Sullivan.png","clicked":false},{"id":8,"image":"./assets/imgs/Keaton_Hobart.png","clicked":false},{"id":9,"image":"./assets/imgs/McAfee_Westbrook.png","clicked":false},{"id":10,"image":"./assets/imgs/Payton_Hobart.png","clicked":false},{"id":11,"image":"./assets/imgs/River_Barkley.png","clicked":false},{"id":12,"image":"./assets/imgs/Skye_Leighton.png","clicked":false}]')},,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),r=a.n(i),l=a(4),s=a(5),o=a(7),d=a(6),m=(a(13),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),u=(a(14),function(e){return c.a.createElement("nav",null,c.a.createElement("div",{className:"brand animated lightSpeedIn"},c.a.createElement("a",{href:"/clicky-game/"},e.title)),c.a.createElement("div",{className:"scores"},c.a.createElement("div",{className:"current-score"},"Current Score: ",e.score),c.a.createElement("div",{className:"current-score"},"Top Score: ",e.topScore)))}),g=(a(15),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),f=(a(16),function(e){return c.a.createElement("div",{className:"title"},e.children)}),h=function(e){return c.a.createElement("div",{className:"container"},e.children)},p=a(1),k=(a(17),a(18),function(e){return c.a.createElement("div",{id:"gameOver"},e.gameOver)});function v(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}var S=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={friends:p,currentScore:0,topScore:0,gameOver:"",clicked:[]},e.handleClick=function(t){-1===e.state.clicked.indexOf(t)?(e.handleIncrement(),e.setState({clicked:e.state.clicked.concat(t)})):e.handleReset()},e.handleIncrement=function(){var t=e.state.currentScore+1;e.setState({currentScore:t,gameOver:""}),t>=e.state.topScore&&e.setState({topScore:t}),t===p.length&&(console.log("You won!"),e.setState({gameOver:"You won the election! Payton would be so proud!"})),e.handleShuffle()},e.handleReset=function(){e.setState({currentScore:0,topScore:e.state.topScore,gameOver:"OHHH NO! You lost the election! Click on any card to restart the game.",clicked:[]}),e.handleShuffle()},e.handleShuffle=function(){var t=v(p);e.setState({friends:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(u,{title:"The Politician Clicky Game",score:this.state.currentScore,topScore:this.state.topScore}),c.a.createElement(f,null,'Take your chance to hang out with the crew from "The Politician" but click on any character more than once and the election will be lost!'),c.a.createElement(h,null,this.state.friends.map((function(t){return c.a.createElement("div",{className:"card-container",key:t.id},c.a.createElement(m,{handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))),c.a.createElement(k,{gameOver:this.state.gameOver}))}}]),a}(n.Component);a(19);r.a.render(c.a.createElement(S,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.f8e3b161.chunk.js.map