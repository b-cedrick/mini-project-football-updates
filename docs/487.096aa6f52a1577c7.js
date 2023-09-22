"use strict";(self.webpackChunkmini_project_football_updates=self.webpackChunkmini_project_football_updates||[]).push([[487],{1487:(b,c,g)=>{g.r(c),g.d(c,{StandingsComponent:()=>U});var t=g(4769),l=g(6814),r=g(3822),f=g(9773);const p={ENGLAND:{league:{id:39,name:"Premier League",type:"League",logo:"https://media.api-sports.io/football/leagues/2.png"},country:{name:"England",code:"GB",flag:"https://media.api-sports.io/flags/gb.svg"}},SPAIN:{league:{id:140,name:"La Liga",type:"League",logo:"https://media-4.api-sports.io/football/leagues/140.png"},country:{name:"Spain",code:"ES",flag:"https://media-4.api-sports.io/flags/es.svg"}},FRANCE:{league:{id:61,name:"Ligue 1",type:"League",logo:"https://media-4.api-sports.io/football/leagues/61.png"},country:{name:"France",code:"FR",flag:"https://media-4.api-sports.io/flags/fr.svg"}},GERMANY:{league:{id:78,name:"Bundesliga",type:"League",logo:"https://media-4.api-sports.io/football/leagues/78.png"},country:{name:"Germany",code:"DE",flag:"https://media-4.api-sports.io/flags/de.svg"}},ITALY:{league:{id:135,name:"Serie A",type:"League",logo:"https://media-4.api-sports.io/football/leagues/135.png"},country:{name:"Italy",code:"IT",flag:"https://media-4.api-sports.io/flags/it.svg"}}};var i,h=g(7582),Z=g(7398),x=g(4141),S=g(5723),d=g(4306),A=g(7613);class u{constructor(s){this.apiService=s}getStandigns(s){return this.apiService.getList("standings",s).pipe((0,Z.U)(a=>a?.response[0]?.league?.standings[0]))}}(i=u).\u0275fac=function(s){return new(s||i)(t.LFG(A.s))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),(0,h.gn)([(0,x.q)({storageStrategy:S.N,maxAge:d.V.GET_STADINGS_MAX_AGE,maxCacheCount:d.P.MAX_CACHE_COUNT})],u.prototype,"getStandigns",null);var v=g(8081);function y(e,s){if(1&e&&(t.ynx(0),t._UZ(1,"img",3),t.TgZ(2,"span",4),t._uU(3),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("src",n.league.logo,t.LSH),t.xp6(2),t.Oqu(n.league.name)}}function C(e,s){1&e&&(t.ynx(0),t.TgZ(1,"span",4),t._uU(2,"No league selected"),t.qZA(),t.BQk())}const O=function(e){return{team:e}};function T(e,s){if(1&e&&(t.TgZ(0,"tr",8)(1,"td",9),t._uU(2),t.qZA(),t.TgZ(3,"td",9),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"td",9)(6,"a",10),t._uU(7),t.qZA()(),t.TgZ(8,"td",9),t._uU(9),t.qZA(),t.TgZ(10,"td",9),t._uU(11),t.qZA(),t.TgZ(12,"td",9),t._uU(13),t.qZA(),t.TgZ(14,"td",9),t._uU(15),t.qZA(),t.TgZ(16,"td",9),t._uU(17),t.qZA(),t.TgZ(18,"td",9),t._uU(19),t.qZA()()),2&e){const n=s.$implicit,a=s.index,o=t.oxw(2);t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Q6J("src",n.team.logo,t.LSH),t.xp6(2),t.Q6J("routerLink","/team-results/"+n.team.id+"/"+o.league.id+"/"+o.currentSeason+"/"+o.leagueKey)("state",t.VKq(11,O,n.team)),t.xp6(1),t.Oqu(n.team.name),t.xp6(2),t.Oqu(n.all.played),t.xp6(2),t.Oqu(n.all.win),t.xp6(2),t.Oqu(n.all.lose),t.xp6(2),t.Oqu(n.all.draw),t.xp6(2),t.Oqu(n.goalsDiff),t.xp6(2),t.Oqu(n.points)}}function L(e,s){if(1&e&&(t.TgZ(0,"table",5)(1,"thead")(2,"tr"),t._UZ(3,"th",6)(4,"th",6),t.TgZ(5,"th",6),t._uU(6,"Name"),t.qZA(),t.TgZ(7,"th",6),t._uU(8,"Games"),t.qZA(),t.TgZ(9,"th",6),t._uU(10,"W"),t.qZA(),t.TgZ(11,"th",6),t._uU(12,"L"),t.qZA(),t.TgZ(13,"th",6),t._uU(14,"D"),t.qZA(),t.TgZ(15,"th",6),t._uU(16,"Goal Difference"),t.qZA(),t.TgZ(17,"th",6),t._uU(18,"Points"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,T,20,13,"tr",7),t.qZA()()),2&e){const n=t.oxw();t.xp6(20),t.Q6J("ngForOf",n.standings)}}let U=(()=>{var e;class s extends v.${set topLeagueKey(a){if(a){const o=Object.keys(p),m=a.toUpperCase();o.includes(m)&&(this.league=p[m].league,this.leagueKey=a,this.getStandings({league:this.league.id,season:this.currentSeason}))}}constructor(){super(),this.standingService=(0,t.f3M)(u),this.currentSeason=(new Date).getFullYear()}ngOnInit(){this.getStandings({league:this.league.id,season:this.currentSeason})}getStandings(a){this.standingService.getStandigns(a).pipe((0,f.R)(this.unsubscribe$)).subscribe({next:o=>{this.standings=o},error:o=>{console.log("Erreur: ",o),alert(o)}})}}return(e=s).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-standings"]],inputs:{topLeagueKey:"topLeagueKey"},standalone:!0,features:[t.qOj,t.jDz],decls:5,vars:3,consts:[[1,"league"],[4,"ngIf"],["class","table",4,"ngIf"],[3,"src"],[1,"league__name"],[1,"table"],[1,"th"],["class","tr",4,"ngFor","ngForOf"],[1,"tr"],[1,"td"],["routerLinkActive","isActive",3,"routerLink","state"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0),t._uU(1," League : "),t.YNc(2,y,4,2,"ng-container",1),t.YNc(3,C,3,0,"ng-container",1),t.qZA(),t.YNc(4,L,21,1,"table",2)),2&a&&(t.xp6(2),t.Q6J("ngIf",o.league),t.xp6(1),t.Q6J("ngIf",!o.league),t.xp6(1),t.Q6J("ngIf",o.league&&o.standings))},dependencies:[l.ez,l.sg,l.O5,r.Bz,r.rH,r.Od],styles:[".league[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1.2rem;margin:20px auto}.league[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px;width:20px}.league__name[_ngcontent-%COMP%]{font-weight:600}.table[_ngcontent-%COMP%]{width:100%;box-shadow:var(--box-shadow);padding:5px;border-radius:5px;margin-bottom:20px}.th[_ngcontent-%COMP%]{text-align:left;padding:5px 0}.tr[_ngcontent-%COMP%]{border:var(--border-default)}.td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}.td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .td[_ngcontent-%COMP%]   a.isActive[_ngcontent-%COMP%]{color:#00f}"]}),s})()}}]);