(this["webpackJsonpketo-meal-webpage"]=this["webpackJsonpketo-meal-webpage"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(19),o=n.n(i),s=(n(25),n(5)),l=n(6),r=n(8),h=n(7),b=(n.p,n(26),n(12)),u=n(0),j=c.a.createContext(),d=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={Meals:!1,About:!0,MealsStyleInActive:{textDecoration:"none",fontSize:"30px",fontWeight:"bold",color:"black",transition:"ease-in-out",transitionDuration:"0.2s"},MealsStyleActive:{textDecoration:"none",fontSize:"30px",fontWeight:"bold",color:"#FF3030",borderBottom:"3px solid #FF3030",transition:"ease-in-out",transitionDuration:"0.2s"},AboutStyleInActive:{textDecoration:"none",fontSize:"30px",fontWeight:"bold",color:"black",transition:"ease-in-out",transitionDuration:"0.2s"},AboutStyleActive:{textDecoration:"none",fontSize:"30px",fontWeight:"bold",color:"#FF3030",borderBottom:"3px solid #FF3030",transition:"ease-in-out",transitionDuration:"0.2s"}},e.mealsOnClick=function(){e.state.Meals||setTimeout((function(){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{Meals:!0,About:!1,MealsHoverBool:!0}))}),100)},e.aboutOnClick=function(){e.state.About||setTimeout((function(){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{Meals:!1,About:!0,MealsHoverBool:!1}))}),100)},e.onMealClick=function(){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{Meals:!1,About:!1}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(j.Provider,{value:Object(b.a)(Object(b.a)({},this.state),{},{mealsOnClick:this.mealsOnClick,aboutOnClick:this.aboutOnClick,onMealClick:this.onMealClick}),children:this.props.children})}}]),n}(c.a.Component),m=n(3),x=n(2),O=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("main",{children:[Object(u.jsxs)("header",{className:"HomeScreenNav",children:[Object(u.jsxs)("h1",{children:["Keto ",Object(u.jsx)("span",{style:{color:"black"},children:"Meals"})]}),Object(u.jsxs)("nav",{role:"navigation menu",className:"NavLinkContainer",children:[Object(u.jsx)(x.b,{role:"link to meals page",style:this.context.Meals?this.context.MealsStyleActive:this.context.MealsStyleInActive,onClick:function(){return e.context.mealsOnClick()},to:"/Meals",children:"Meals"}),Object(u.jsx)(x.b,{role:"link to about page",style:this.context.About?this.context.AboutStyleActive:this.context.AboutStyleInActive,onClick:function(){return e.context.aboutOnClick()},to:"/KetoMenu",children:"About Keto"}),Object(u.jsx)("a",{role:"link to github",href:"https://github.com/SDHeizler/KetoMenu",target:"_blank",children:"GitHub"})]})]}),Object(u.jsx)("div",{role:"image",className:"HomeScreenParaImage"}),Object(u.jsx)("h1",{role:"title",className:"KetoTitle",children:"What is the Keto Diet?"}),Object(u.jsx)("p",{role:"keto description",className:"KetoAbout",children:"The ketogenic diet is a high-fat, adequate-protein, low-carbohydrate diet that in medicine is used mainly to treat hard-to-control (refractory) epilepsy in children. The diet forces the body to burn fats rather than carbohydrates. Normally carbohydrates in food are converted into glucose, which is then transported around the body and is important in fueling brain function. But if little carbohydrate remains in the diet, the liver converts fat into fatty acids and ketone bodies, the latter passing into the brain and replacing glucose as an energy source. An elevated level of ketone bodies in the blood (a state called ketosis) eventually lowers the frequency of epileptic seizures. Around half of children and young people with epilepsy who have tried some form of this diet saw the number of seizures drop by at least half, and the effect persists after discontinuing the diet. Some evidence shows that adults with epilepsy may benefit from the diet and that a less strict regimen, such as a modified Atkins diet, is similarly effective. Side effects may include constipation, high cholesterol, growth slowing, acidosis, and kidney stones."}),Object(u.jsx)("div",{className:"clrfloat"})]})}}]),n}(c.a.Component);O.contextType=j;var k=O,p=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("main",{children:[Object(u.jsxs)("header",{className:"HomeScreenNav",children:[Object(u.jsxs)("h1",{role:"main title",children:["Keto ",Object(u.jsx)("span",{style:{color:"black"},children:"Meals"})]}),Object(u.jsxs)("nav",{role:"navigation menu",className:"NavLinkContainer",children:[Object(u.jsx)(x.b,{role:"link to meals page",style:this.context.Meals?this.context.MealsStyleActive:this.context.MealsStyleInActive,onClick:function(){return e.context.mealsOnClick()},to:"/Meals",children:"Meals"}),Object(u.jsx)(x.b,{role:"link to about page",style:this.context.About?this.context.AboutStyleActive:this.context.AboutStyleInActive,onClick:function(){return e.context.aboutOnClick()},to:"/KetoMenu",children:"About Keto"}),Object(u.jsx)("a",{role:"link to github",href:"https://github.com/SDHeizler/KetoMenu",target:"_blank",children:"GitHub"})]})]}),Object(u.jsxs)("ul",{role:"meal options container",className:"HomeScreenUl",children:[Object(u.jsxs)("li",{role:"breakfast meal option",className:"Breakfast",children:[Object(u.jsx)("div",{className:"BgFilterA"}),Object(u.jsx)(x.b,{onClick:function(){e.context.onMealClick()},className:"BreakfastA",to:"/Breakfast",children:"Breakfast"})]}),Object(u.jsxs)("li",{role:"lunch meal option",className:"Lunch",children:[Object(u.jsx)("div",{className:"BgFilterA"}),Object(u.jsx)(x.b,{onClick:function(){e.context.onMealClick()},className:"LunchA",to:"/Lunch",children:"Lunch"})]}),Object(u.jsxs)("li",{role:"dinner meal option",className:"Dinner",children:[Object(u.jsx)("div",{className:"BgFilterA"}),Object(u.jsx)(x.b,{onClick:function(){e.context.onMealClick()},className:"DinnerA",to:"/Dinner",children:"Dinner"})]}),Object(u.jsxs)("li",{role:"snacks meal option",className:"Snacks",children:[Object(u.jsx)("div",{className:"BgFilterA"}),Object(u.jsx)(x.b,{onClick:function(){e.context.onMealClick()},className:"SnacksA",to:"/Snacks",children:"Snacks"})]})]})]})}}]),n}(c.a.Component);p.contextType=j;var f=p,v=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("main",{children:Object(u.jsx)("header",{children:Object(u.jsxs)("nav",{className:"HomeScreenNav",children:[Object(u.jsxs)("h1",{children:["Keto ",Object(u.jsx)("span",{style:{color:"black"},children:"Meals"})]}),Object(u.jsxs)("div",{className:"NavLinkContainer",children:[Object(u.jsx)(x.b,{to:"/About",children:"Meals"}),Object(u.jsx)(x.b,{to:"/About",children:"About Keto"}),Object(u.jsx)("a",{href:"https://github.com/SDHeizler?tab=repositories",target:"_blank",children:"GitHub"})]})]})})})}}]),n}(c.a.Component);v.contextType=j;var g=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("main",{children:[Object(u.jsxs)("header",{className:"HomeScreenNav",children:[Object(u.jsxs)("h1",{role:"main title",children:["Keto ",Object(u.jsx)("span",{style:{color:"black"},children:"Meals"})]}),Object(u.jsxs)("nav",{role:"navigation menu",className:"NavLinkContainer",children:[Object(u.jsx)(x.b,{role:"link to meals page",style:this.context.Meals?this.context.MealsStyleActive:this.context.MealsStyleInActive,onClick:function(){return e.context.mealsOnClick()},to:"/Meals",children:"Meals"}),Object(u.jsx)(x.b,{role:"link to about page",style:this.context.About?this.context.AboutStyleActive:this.context.AboutStyleInActive,onClick:function(){return e.context.aboutOnClick()},to:"/KetoMenu",children:"About Keto"}),Object(u.jsx)("a",{role:"link to github",href:"https://github.com/SDHeizler/KetoMenu",target:"_blank",children:"GitHub"})]})]}),Object(u.jsx)("div",{role:"image",className:"BreakfastPageParaImage"}),Object(u.jsx)("h1",{role:"breakfast title",className:"BreakfastPageMainTitle",children:"What's a good breakfast option on keto?"}),Object(u.jsx)("h2",{role:"breakfast meal title",className:"BreakfastPageTitle",children:"Classic bacon and eggs!"}),Object(u.jsx)("p",{role:"meal description",style:{marginBottom:"5vh"},className:"KetoAbout",children:"One of the all-time best keto breakfasts ever! Step up your keto bacon and eggs game with this classic recipe. Gauge your hunger meter and enjoy as many eggs as you need to feel satisfied. We\u2019re drooling just thinking about this plate of keto deliciousness!"}),Object(u.jsx)("a",{role:"link to meal",className:"BreakfastRecipe",target:"_blank",href:"https://www.dietdoctor.com/recipes/classic-bacon-and-eggs",children:"Click here for recipe"})]})}}]),n}(c.a.Component);g.contextType=j;var y=g,A=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("main",{children:[Object(u.jsxs)("header",{className:"HomeScreenNav",children:[Object(u.jsxs)("h1",{roel:"main title",children:["Keto ",Object(u.jsx)("span",{style:{color:"black"},children:"Meals"})]}),Object(u.jsxs)("nav",{role:"navigation menu",className:"NavLinkContainer",children:[Object(u.jsx)(x.b,{role:"link to meals page",style:this.context.Meals?this.context.MealsStyleActive:this.context.MealsStyleInActive,onClick:function(){return e.context.mealsOnClick()},to:"/Meals",children:"Meals"}),Object(u.jsx)(x.b,{role:"link to about page",style:this.context.About?this.context.AboutStyleActive:this.context.AboutStyleInActive,onClick:function(){return e.context.aboutOnClick()},to:"/KetoMenu",children:"About Keto"}),Object(u.jsx)("a",{role:"link to github",href:"https://github.com/SDHeizler/KetoMenu",target:"_blank",children:"GitHub"})]})]}),Object(u.jsx)("div",{role:"image",className:"LunchPageParaImage"}),Object(u.jsx)("h1",{role:"lunch title",className:"LunchPageMainTitle",children:"What's a good lunch option on keto?"}),Object(u.jsx)("h2",{role:"lunch meal title",className:"LunchPageTitle",children:"Keto French quiche!"}),Object(u.jsx)("p",{role:"meal description",style:{marginBottom:"5vh"},className:"KetoAbout",children:"The most classic of all savory pies! An authentic quiche is of French descent with a few, well-chosen ingredients making up the filling \u2013 cheese, eggs \u2013 and of course, bacon!"}),Object(u.jsx)("a",{role:"link to meal",className:"LunchRecipe",target:"_blank",href:"https://www.dietdoctor.com/recipes/keto-french-quiche",children:"Click here for recipe"})]})}}]),n}(c.a.Component);A.contextType=j;var M=A,C=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("main",{children:[Object(u.jsxs)("header",{className:"HomeScreenNav",children:[Object(u.jsxs)("h1",{role:"main title",children:["Keto ",Object(u.jsx)("span",{style:{color:"black"},children:"Meals"})]}),Object(u.jsxs)("nav",{role:"navigation menu",className:"NavLinkContainer",children:[Object(u.jsx)(x.b,{role:"link to meals page",style:this.context.Meals?this.context.MealsStyleActive:this.context.MealsStyleInActive,onClick:function(){return e.context.mealsOnClick()},to:"/Meals",children:"Meals"}),Object(u.jsx)(x.b,{role:"link to about page",style:this.context.About?this.context.AboutStyleActive:this.context.AboutStyleInActive,onClick:function(){return e.context.aboutOnClick()},to:"/KetoMenu",children:"About Keto"}),Object(u.jsx)("a",{role:"link to github",href:"https://github.com/SDHeizler/KetoMenu",target:"_blank",children:"GitHub"})]})]}),Object(u.jsx)("div",{role:"image",className:"DinnerPageParaImage"}),Object(u.jsx)("h1",{role:"dinner title",className:"DinnerPageMainTitle",children:"What's a good dinner option on keto?"}),Object(u.jsx)("h2",{role:"dinner meal title",className:"DinnerPageTitle",children:"Ginger lime chicken!"}),Object(u.jsx)("p",{role:"meal description",style:{marginBottom:"5vh"},className:"KetoAbout",children:"This quick and easy low-carb Asian inspired chicken recipe is not only incredibly flavorful, but it is also very versatile. You can double the recipe and have it for dinner one night, and then use the leftover chicken for salads throughout the week."}),Object(u.jsx)("a",{role:"link to meal",className:"DinnerRecipe",target:"_blank",href:"https://www.dietdoctor.com/recipes/ginger-lime-chicken",children:"Click here for recipe"})]})}}]),n}(c.a.Component);C.contextType=j;var N=C,S=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("main",{children:[Object(u.jsxs)("header",{className:"HomeScreenNav",children:[Object(u.jsxs)("h1",{role:"main title",children:["Keto ",Object(u.jsx)("span",{style:{color:"black"},children:"Meals"})]}),Object(u.jsxs)("nav",{role:"navigation menu",className:"NavLinkContainer",children:[Object(u.jsx)(x.b,{role:"link to meals page",style:this.context.Meals?this.context.MealsStyleActive:this.context.MealsStyleInActive,onClick:function(){return e.context.mealsOnClick()},to:"/Meals",children:"Meals"}),Object(u.jsx)(x.b,{role:"link to about page",style:this.context.About?this.context.AboutStyleActive:this.context.AboutStyleInActive,onClick:function(){return e.context.aboutOnClick()},to:"/KetoMenu",children:"About Keto"}),Object(u.jsx)("a",{role:"link to github",href:"https://github.com/SDHeizler/KetoMenu",target:"_blank",children:"GitHub"})]})]}),Object(u.jsx)("div",{role:"image",className:"SnacksPageParaImage"}),Object(u.jsx)("h1",{role:"snacks title",className:"SnacksPageMainTitle",children:"What's a good snack option on keto?"}),Object(u.jsx)("h2",{role:"snacks meal title",className:"SnacksPageTitle",children:"Keto salami and cheese chips!"}),Object(u.jsx)("p",{role:"meal description",style:{marginBottom:"5vh"},className:"KetoAbout",children:"Craving a crunchy, low-carb snack? We\u2019ve got one that only takes a few minutes to prepare. Salami & cheese is quite possibly the best combination EVER! Pop this goodness in the oven and before you know it, you\u2019ll be crunching away!"}),Object(u.jsx)("a",{role:"link to meal",className:"SnacksRecipe",target:"_blank",href:"https://www.dietdoctor.com/recipes/salami-cheese-chips",children:"Click here for recipe"})]})}}]),n}(c.a.Component);S.contextType=j;var w=S,K=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(d,{children:Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.a,{exact:!0,path:"/KetoMenu",children:Object(u.jsx)(k,{})}),Object(u.jsx)(m.a,{path:"/Meals",children:Object(u.jsx)(f,{})}),Object(u.jsx)(m.a,{path:"/Breakfast",children:Object(u.jsx)(y,{})}),Object(u.jsx)(m.a,{path:"/Lunch",children:Object(u.jsx)(M,{})}),Object(u.jsx)(m.a,{path:"/Dinner",children:Object(u.jsx)(N,{})}),Object(u.jsx)(m.a,{path:"/Snacks",children:Object(u.jsx)(w,{})})]})})}}]),n}(c.a.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(K,{})})}),document.getElementById("root")),D()}},[[36,1,2]]]);
//# sourceMappingURL=main.df660d3a.chunk.js.map