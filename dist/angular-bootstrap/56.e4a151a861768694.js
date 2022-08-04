"use strict";(self.webpackChunkangular_bootstrap=self.webpackChunkangular_bootstrap||[]).push([[56],{6056:(k,a,r)=>{r.r(a),r.d(a,{BiosModule:()=>A});var p=r(9808),o=r(4893),s=r(1810),m=r(520);let f=(()=>{class i{constructor(t){this.http=t,this._jsonURL="./../../assets/data/bioslist.json"}getallbios(){return this.http.get(this._jsonURL)}}return i.\u0275fac=function(t){return new(t||i)(o.LFG(m.eN))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),b=(()=>{class i{constructor(t,n){this._elementRef=t,this._router=n}ngOnChanges(){var t;if(this.html){this._uniqueId||(this._uniqueId=[...this._elementRef.nativeElement.attributes].find(l=>l.name.startsWith("_ngcontent-")).name),this._elementRef.nativeElement.innerHTML=this.html;const n=this._elementRef.nativeElement.querySelectorAll("*");for(const l of n)if(l.setAttribute(this._uniqueId,""),"A"===l.tagName){const c=null===(t=l.href)||void 0===t?void 0:t.toLowerCase();(null==c?void 0:c.startsWith(location.origin.toLowerCase()))&&l.addEventListener("click",g=>{this._router.navigate([c.substring(location.origin.length)]),g.preventDefault()})}}else this._elementRef.nativeElement.innerHTML=null}}return i.\u0275fac=function(t){return new(t||i)(o.Y36(o.SBq),o.Y36(s.F0))},i.\u0275dir=o.lG2({type:i,selectors:[["","html",""]],inputs:{html:"html"},features:[o.TTD]}),i})();function d(i,e){if(1&i&&(o.TgZ(0,"span"),o._uU(1),o.qZA()),2&i){const t=e.$implicit;o.xp6(1),o.hij(" | ",t," ")}}function _(i,e){if(1&i&&(o.TgZ(0,"p",32),o._uU(1),o.qZA()),2&i){const t=o.oxw(2);o.xp6(1),o.hij("Life: ",t.biosprofile.life,"")}}function u(i,e){if(1&i&&(o.TgZ(0,"p",33),o._uU(1),o.qZA()),2&i){const t=o.oxw(2);o.xp6(1),o.hij("Location: ",t.biosprofile.location,"")}}function h(i,e){if(1&i&&(o.TgZ(0,"p",33),o._uU(1),o.qZA()),2&i){const t=o.oxw(2);o.xp6(1),o.hij("Known For: ",t.biosprofile.knownfor,"")}}function x(i,e){if(1&i&&(o.TgZ(0,"li"),o._UZ(1,"html",34),o.qZA()),2&i){const t=e.$implicit;o.xp6(1),o.Q6J("html",t)}}function v(i,e){if(1&i&&(o.TgZ(0,"p",24),o._uU(1),o.qZA()),2&i){const t=o.oxw(2);o.xp6(1),o.hij("Fun Fact: ",t.biosprofile.funfact,"")}}function C(i,e){if(1&i&&(o.TgZ(0,"div",35),o._UZ(1,"img",18)(2,"div",10),o.qZA()),2&i){const t=o.oxw(2);o.xp6(1),o.s9C("src","../../../../assets/bioimg/"+t.biosprofile.profileimage2,o.LSH)}}function O(i,e){if(1&i&&(o.TgZ(0,"li"),o._UZ(1,"html",34),o.qZA()),2&i){const t=e.$implicit;o.xp6(1),o.Q6J("html",t)}}function Z(i,e){if(1&i&&(o.TgZ(0,"li")(1,"div",36),o._uU(2),o.qZA()()),2&i){const t=e.$implicit;o.xp6(2),o.Oqu(t)}}function P(i,e){if(1&i&&(o.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"h3",4),o._uU(4,"OURMATHWORLD.COM"),o.qZA(),o.TgZ(5,"p",5),o._uU(6),o.qZA()(),o.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"div"),o._UZ(11,"img",9)(12,"div",10),o.qZA()(),o.TgZ(13,"div",11)(14,"div",12),o.YNc(15,d,2,1,"span",13),o._uU(16,"| "),o.qZA()()(),o.TgZ(17,"div",7)(18,"div",8)(19,"h1",14)(20,"span",15),o._uU(21),o.qZA()()()()(),o.TgZ(22,"div",7)(23,"div",16)(24,"p"),o._uU(25),o.qZA()(),o.TgZ(26,"div",17),o._UZ(27,"img",18)(28,"div",10),o.qZA(),o.TgZ(29,"div",19)(30,"p"),o._uU(31),o.qZA(),o.YNc(32,_,2,1,"p",20),o.YNc(33,u,2,1,"p",21),o.YNc(34,h,2,1,"p",21),o.qZA()(),o.TgZ(35,"div",7)(36,"div",22)(37,"h1",23),o._uU(38,"MATH HERO"),o.qZA(),o.TgZ(39,"p",24),o._uU(40),o.qZA(),o.TgZ(41,"ul",25),o.YNc(42,x,2,1,"li",13),o.qZA(),o.YNc(43,v,2,1,"p",26),o.YNc(44,C,3,1,"div",27),o.qZA(),o.TgZ(45,"div",6)(46,"h1",14)(47,"span",28),o._uU(48),o.qZA()(),o.TgZ(49,"ul",29),o.YNc(50,O,2,1,"li",13),o.qZA(),o.TgZ(51,"h2",30)(52,"span",31),o._uU(53,"REFERENCES"),o.qZA()(),o.TgZ(54,"ul",25),o.YNc(55,Z,3,1,"li",13),o.qZA()()()()()),2&i){const t=o.oxw();o.xp6(6),o.Oqu(t.biosprofile.jobtitle),o.xp6(9),o.Q6J("ngForOf",t.biosprofile.jobs),o.xp6(6),o.Oqu(t.biosprofile.fullname),o.xp6(4),o.hij('"',t.biosprofile.quote,'"'),o.xp6(2),o.s9C("src","../../../../assets/bioimg/"+t.biosprofile.profileimage,o.LSH),o.xp6(4),o.lnq("Pronunciation: ","{","",t.biosprofile.pronunciation,"","}",""),o.xp6(1),o.Q6J("ngIf",t.biosprofile.life),o.xp6(1),o.Q6J("ngIf",t.biosprofile.location),o.xp6(1),o.Q6J("ngIf",t.biosprofile.knownfor),o.xp6(6),o.Oqu(t.biosprofile.mathhero),o.xp6(2),o.Q6J("ngForOf",t.biosprofile.mathherobullet),o.xp6(1),o.Q6J("ngIf",t.biosprofile.funfact),o.xp6(1),o.Q6J("ngIf",t.biosprofile.profileimage2),o.xp6(4),o.Oqu(t.biosprofile.jobdescription),o.xp6(2),o.Q6J("ngForOf",t.biosprofile.jobdescriptionbullets),o.xp6(5),o.Q6J("ngForOf",t.biosprofile.references)}}let M=(()=>{class i{constructor(t,n){this.route=t,this.biosservice=n}ngOnInit(){this.bioid=+this.route.snapshot.paramMap.get("id"),this.biosservice.getallbios().subscribe(t=>{this.biosprofile=t.filter(n=>n.id==this.bioid)[0]})}getlinkfromlistbyindex(t){window.open(this.biosprofile.mathherobulletlinks[t],"_blank")}getreferencelinkbyindex(t){window.open(this.biosprofile.referenceslinks[t],"_blank")}getjobnamelink(){window.open(this.biosprofile.namelink,"_blank")}}return i.\u0275fac=function(t){return new(t||i)(o.Y36(s.gz),o.Y36(f))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-bios-profile"]],decls:1,vars:1,consts:[["class","container ",4,"ngIf"],[1,"container"],[1,"row","biosprofile"],[1,"col","yellowbg"],[1,"text-15","paddingtitle"],[1,"whitetext","text-30"],[1,"col-md-7","col-sm-12"],[1,"row"],[1,"col"],["src","'../../../../assets/OurMathWorld.png","alt","",1,"profile-logo-image"],[2,"width","100%","height","100%","position","absolute","top","0","left","0"],[1,"col-md-8","col-sm-12"],[1,"job-titles","paddingtitle"],[4,"ngFor","ngForOf"],[1,"display-4","m-0"],[1,"text-primary"],[1,"col-md-4","col-sm-12","darkbg","whitetext","text-30","mathheromargin"],[1,"col-md-5","col-sm-12","bio-profile-img-div"],["alt","",1,"bio-profile-img",3,"src"],[1,"col","yellowbg","text-20","shrinkrightmargin"],["class","lifetext",4,"ngIf"],["class","othertext",4,"ngIf"],[1,"col","yellowbg","mathheromargin"],[1,"whitetext","text-35"],[1,""],[1,"bulletlinks"],["class","",4,"ngIf"],["class","col bio-profile-img-div",4,"ngIf"],[1,"text-primary","text-35"],[1,"bulletlinks","text-20"],[1,"m-0"],[1,"text-primary","job-reference"],[1,"lifetext"],[1,"othertext"],[3,"html"],[1,"col","bio-profile-img-div"],[1,"bio-profile-jobdescription"]],template:function(t,n){1&t&&o.YNc(0,P,56,18,"div",0),2&t&&o.Q6J("ngIf",n.biosprofile)},directives:[p.O5,p.sg,b],styles:[".biosprofile[_ngcontent-%COMP%]{border-left:2px solid black;border-right:2px solid black;border-bottom:2px solid black;color:#000;margin-bottom:-25px!important}.biosprofile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000}.biosprofile[_ngcontent-%COMP%]   .profile-logo-image[_ngcontent-%COMP%]{width:160px;height:100px;border-radius:50%;overflow:hidden;margin-top:-6px}.biosprofile[_ngcontent-%COMP%]   .job-titles[_ngcontent-%COMP%]{text-align:right;margin-right:10px}.biosprofile[_ngcontent-%COMP%]   .shrinkrightmargin[_ngcontent-%COMP%]{margin-right:-27px}.biosprofile[_ngcontent-%COMP%]   .mathheromargin[_ngcontent-%COMP%]{margin-left:3px}.biosprofile[_ngcontent-%COMP%]   .yellowbg[_ngcontent-%COMP%]{background-color:#f1bc31}.biosprofile[_ngcontent-%COMP%]   .darkbg[_ngcontent-%COMP%]{background-color:#000}.biosprofile[_ngcontent-%COMP%]   .whitetext[_ngcontent-%COMP%]{color:#fff}.biosprofile[_ngcontent-%COMP%]   .bio-profile-img[_ngcontent-%COMP%]{width:100%;height:100%}.biosprofile[_ngcontent-%COMP%]   .bio-profile-img-div[_ngcontent-%COMP%]{margin-left:-15px;margin-right:-15px}.biosprofile[_ngcontent-%COMP%]   .lifetext[_ngcontent-%COMP%]{font-weight:700;margin-bottom:-5px}.biosprofile[_ngcontent-%COMP%]   .othertext[_ngcontent-%COMP%]{margin-bottom:-5px}.biosprofile[_ngcontent-%COMP%]   ul.bulletlinks[_ngcontent-%COMP%]{list-style-type:square;margin-left:30px}.biosprofile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:underline}.biosprofile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:navy}.biosprofile[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]{font-size:35px}.biosprofile[_ngcontent-%COMP%]   .job-reference[_ngcontent-%COMP%]{font-size:16px}.biosprofile[_ngcontent-%COMP%]   .text-15[_ngcontent-%COMP%]{font-size:15px}.biosprofile[_ngcontent-%COMP%]   .text-20[_ngcontent-%COMP%]{font-size:20px}.biosprofile[_ngcontent-%COMP%]   .text-30[_ngcontent-%COMP%]{font-size:30px}.biosprofile[_ngcontent-%COMP%]   .text-35[_ngcontent-%COMP%]{font-size:35px}.biosprofile[_ngcontent-%COMP%]   .paddingtitle[_ngcontent-%COMP%]{padding-top:15px;padding-bottom:15px}.bioprofilelinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000!important;text-decoration:underline!important}.bioprofilelinks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:navy!important}.bio-profile-mathhero[_ngcontent-%COMP%]{background-color:#f1bc31;color:#000}.bio-profile-jobdescription[_ngcontent-%COMP%]{color:#000}"]}),i})();function T(i,e){if(1&i){const t=o.EpF();o.TgZ(0,"div",2)(1,"div",3),o._UZ(2,"img",4),o.TgZ(3,"div",5)(4,"h4",6),o._uU(5),o.qZA(),o.TgZ(6,"div",7)(7,"p",8),o._UZ(8,"i",9),o._uU(9),o.qZA()(),o.TgZ(10,"p"),o._uU(11),o.qZA(),o.TgZ(12,"a",10),o.NdJ("click",function(){const c=o.CHM(t).$implicit;return o.oxw().gotobiosprofile(c.id)}),o._uU(13,"Read More"),o.qZA()()()()}if(2&i){const t=e.$implicit;o.xp6(2),o.s9C("src","../../../../assets/bioimg/"+t.profileimage,o.LSH),o.xp6(3),o.Oqu(t.fullname),o.xp6(4),o.hij(" ",t.jobtitle,""),o.xp6(2),o.Oqu(t.knownfor)}}let q=(()=>{class i{constructor(t,n){this.route=t,this.router=n}ngOnInit(){}gotobiosprofile(t){this.router.navigate(["biosprofile",t],{relativeTo:this.route})}}return i.\u0275fac=function(t){return new(t||i)(o.Y36(s.gz),o.Y36(s.F0))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-bios-list"]],inputs:{bioslist:"bioslist"},decls:2,vars:1,consts:[[1,"row","pb-3"],["class","col-lg-6 col-md-6 col-sm-12 mb-4",4,"ngFor","ngForOf"],[1,"col-lg-6","col-md-6","col-sm-12","mb-4"],[1,"card","border-0","mb-2"],["alt","",1,"card-img-top-default",3,"src"],[1,"card-body","bg-light","p-4"],[1,"card-title"],[1,"d-flex","mb-3"],[1,"mr-2"],[1,"fa","fa-user","text-muted"],[1,"font-weight-bold","hyperlink-text","linkcursor","linkcolor",3,"click"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0),o.YNc(1,T,14,4,"div",1),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngForOf",n.bioslist))},directives:[p.sg],styles:[""]}),i})(),w=(()=>{class i{constructor(t){this.biosservice=t}ngOnInit(){this.biosservice.getallbios().subscribe(t=>{this.biographylist=t})}}return i.\u0275fac=function(t){return new(t||i)(o.Y36(f))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-bios"]],decls:6,vars:1,consts:[[1,"container","pt-5"],[1,"d-flex","flex-column","text-center","mb-5","pt-5"],[1,"display-4","m-0"],[1,"text-primary"],[3,"bioslist"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h1",2)(3,"span",3),o._uU(4,"Our Mathematical World Biographies"),o.qZA()()(),o._UZ(5,"app-bios-list",4),o.qZA()),2&t&&(o.xp6(5),o.Q6J("bioslist",n.biographylist))},directives:[q],styles:[""]}),i})(),A=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[[p.ez,s.Bz.forChild([{path:"",component:w},{path:"biosprofile/:id",component:M}])],s.Bz]}),i})()}}]);