"use strict";(self.webpackChunkangular_bootstrap=self.webpackChunkangular_bootstrap||[]).push([[379],{1379:(N,p,r)=>{r.r(p),r.d(p,{TeamModule:()=>M});var l=r(9808),s=r(1810),t=r(4893),u=r(520);let c=(()=>{class i{constructor(e){this.http=e,this._jsonURL="./../../assets/data/teamslist.json"}getallteams(){return this.http.get(this._jsonURL)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(u.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var d=r(9444);function f(i,o){if(1&i&&t._UZ(0,"img",15),2&i){const e=t.oxw().$implicit;t.s9C("src","../../assets/teamimg/"+e.img,t.LSH)}}const _=function(){return["fab","twitter"]};function g(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"a",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2).gettwitterbyindex(a.twitter)}),t._UZ(1,"fa-icon",17),t.qZA()}2&i&&(t.xp6(1),t.Q6J("icon",t.DdM(1,_)))}const x=function(){return["fas","globe"]};function v(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"a",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2).getwebpagebyindex(a.website)}),t._UZ(1,"fa-icon",17),t.qZA()}2&i&&(t.xp6(1),t.Q6J("icon",t.DdM(1,x)))}const T=function(){return["fas","envelope"]};function h(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"a",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2).sendemail(a.email,a.fullname)}),t._UZ(1,"fa-icon",17),t.qZA()}2&i&&(t.xp6(1),t.Q6J("icon",t.DdM(1,T)))}function C(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8),t.YNc(4,f,1,1,"img",9),t.qZA(),t.TgZ(5,"div",10)(6,"div",11)(7,"h5"),t._uU(8),t.qZA(),t.TgZ(9,"i"),t._uU(10),t.qZA()(),t.TgZ(11,"div",12),t.YNc(12,g,2,2,"a",13),t.YNc(13,v,2,2,"a",13),t.YNc(14,h,2,2,"a",13),t.qZA()()(),t.TgZ(15,"a",14),t.NdJ("click",function(){const m=t.CHM(e).$implicit;return t.oxw(2).gotofullteamprofile(m.id)}),t._uU(16,"Full Bio"),t.qZA()()()}if(2&i){const e=o.$implicit;t.xp6(4),t.Q6J("ngIf",e.img),t.xp6(4),t.Oqu(e.fullname),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.twitter),t.xp6(1),t.Q6J("ngIf",e.website),t.xp6(1),t.Q6J("ngIf",e.email)}}function y(i,o){if(1&i&&(t.TgZ(0,"div",3),t.YNc(1,C,17,6,"div",4),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.teamlist)}}let w=(()=>{class i{constructor(e,n){this.route=e,this.router=n,this.teamTypeName=""}ngOnInit(){}gotofullteamprofile(e){this.router.navigate(["teamprofile",e],{relativeTo:this.route})}gettwitterbyindex(e){window.open("https://twitter.com/"+e,"_blank")}getwebpagebyindex(e){e="https://"+e,window.open(e,"_blank")}sendemail(e,n){window.open("https://mail.google.com/mail/?view=cm&fs=1&to="+e+"&su=OMW Member "+n+"&body=Dear "+n)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.gz),t.Y36(s.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-team-list"]],inputs:{teamlist:"teamlist",teamTypeName:"teamTypeName"},decls:4,vars:2,consts:[[1,"bordergroup"],[1,"teamtypetitle"],["class","row",4,"ngIf"],[1,"row"],["class","col-lg-4 col-md-6",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6"],[1,"teamlistprofilepadding"],[1,"team","card","position-relative","overflow-hidden","border-0","mb-4"],[1,"text-center","p-0"],["class","card-img-top-default","alt","",3,"src",4,"ngIf"],[1,"card-body","text-center","p-0"],[1,"flex-column","justify-content-center","bg-light"],[1,"align-items-center","justify-content-center","bg-light"],["class","btn btn-outline-primary rounded-circle text-center mr-2 px-0","style","width: 36px; height: 36px;",3,"click",4,"ngIf"],[1,"font-weight-bold","hyperlink-text","linkcursor","linkcolor",3,"click"],["alt","",1,"card-img-top-default",3,"src"],[1,"btn","btn-outline-primary","rounded-circle","text-center","mr-2","px-0",2,"width","36px","height","36px",3,"click"],[3,"icon"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.YNc(3,y,2,1,"div",2),t.qZA()),2&e&&(t.xp6(2),t.Oqu(n.teamTypeName),t.xp6(1),t.Q6J("ngIf",(null==n.teamlist?null:n.teamlist.length)>0))},directives:[l.O5,l.sg,d.BN],styles:[".teamtypetitle[_ngcontent-%COMP%]{text-align:center}.bordergroup[_ngcontent-%COMP%]{border-style:groove;padding:10px;border-radius:25px;margin:10px}"]}),i})(),Z=(()=>{class i{constructor(e){this.teamService=e}ngOnInit(){this.teamService.getallteams().subscribe(e=>{this.allteamlist=e,this.buildlists()})}buildlists(){this.randdteamlist=this.allteamlist.filter(e=>"R&D"===e.type).sort(function(e,n){var a=e.fullname.toUpperCase(),m=n.fullname.toUpperCase();return a<m?-1:a>m?1:0}),this.dpteamlist=this.allteamlist.filter(e=>"DISTRICTPARTNERS"===e.type).sort(function(e,n){var a=e.fullname.toUpperCase(),m=n.fullname.toUpperCase();return a<m?-1:a>m?1:0}).sort(function(e,n){var a=e.fullname.toUpperCase(),m=n.fullname.toUpperCase();return a<m?-1:a>m?1:0}),this.fromerranddteamlist=this.allteamlist.filter(e=>"FORMERR&D"===e.type).sort(function(e,n){var a=e.fullname.toUpperCase(),m=n.fullname.toUpperCase();return a<m?-1:a>m?1:0}),this.formerdpteamlist=this.allteamlist.filter(e=>"FORMERDISTRICTPARTNERS"===e.type).sort(function(e,n){var a=e.fullname.toUpperCase(),m=n.fullname.toUpperCase();return a<m?-1:a>m?1:0})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-team"]],decls:8,vars:8,consts:[[1,"container","mt-5","pt-5","pb-3"],[1,"d-flex","flex-column","text-center","mb-5"],[1,"display-4","m-0"],[3,"teamTypeName","teamlist"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3,"Meet Our Team Members"),t.qZA()(),t._UZ(4,"app-team-list",3)(5,"app-team-list",3)(6,"app-team-list",3)(7,"app-team-list",3),t.qZA()),2&e&&(t.xp6(4),t.Q6J("teamTypeName","Collaborative Partners")("teamlist",n.dpteamlist),t.xp6(1),t.Q6J("teamTypeName","Research & Development")("teamlist",n.randdteamlist),t.xp6(1),t.Q6J("teamTypeName","Former Collaborative Partners")("teamlist",n.formerdpteamlist),t.xp6(1),t.Q6J("teamTypeName","Former Research & Development")("teamlist",n.fromerranddteamlist))},directives:[w],styles:[""]}),i})();function b(i,o){if(1&i&&t._UZ(0,"img",8),2&i){const e=t.oxw(2);t.s9C("src","assets/teamimg/"+e.teamprofile.img,t.LSH)}}function I(i,o){if(1&i&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div"),t.YNc(5,b,1,1,"img",5),t.qZA()(),t.TgZ(6,"div",6)(7,"div")(8,"h1",7),t._uU(9),t.qZA(),t.TgZ(10,"h5"),t._uU(11),t.qZA(),t.TgZ(12,"p"),t._uU(13),t.qZA()()()()()()),2&i){const e=t.oxw();t.xp6(5),t.Q6J("ngIf",e.teamprofile.img),t.xp6(4),t.Oqu(e.teamprofile.fullname),t.xp6(2),t.Oqu(e.teamprofile.title),t.xp6(2),t.hij("",e.teamprofile.description,".")}}let A=(()=>{class i{constructor(e,n){this.route=e,this.teamService=n}ngOnInit(){this.teamid=+this.route.snapshot.paramMap.get("id"),this.teamService.getallteams().subscribe(e=>{this.teamprofile=e.filter(n=>n.id==this.teamid)[0]})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.gz),t.Y36(c))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-team-item"]],decls:1,vars:1,consts:[["class","teamprofilepage",4,"ngIf"],[1,"teamprofilepage"],[1,"container"],[1,"row"],[1,"col-md-4","col-sm-12"],["class","team-profile-img-top team-img","alt","",3,"src",4,"ngIf"],[1,"col-md-8","col-sm-12","team-text"],[1,"teamtypetitle"],["alt","",1,"team-profile-img-top","team-img",3,"src"]],template:function(e,n){1&e&&t.YNc(0,I,14,4,"div",0),2&e&&t.Q6J("ngIf",n.teamprofile)},directives:[l.O5],styles:[".team-text[_ngcontent-%COMP%]{padding-left:35px}@media (max-width: 480px){.team-img[_ngcontent-%COMP%]{padding-left:15px}}@media (min-width: 481px) and (max-width: 767px){.team-img[_ngcontent-%COMP%]{padding-left:15px}}@media (min-width: 768px) and (max-width: 1024px){.team-img[_ngcontent-%COMP%]{padding-left:0}}@media (min-width: 1025px){.team-img[_ngcontent-%COMP%]{padding-left:0}}"]}),i})(),M=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.ez,d.uH,s.Bz.forChild([{path:"",component:Z},{path:"teamprofile/:id",component:A}])]]}),i})()}}]);