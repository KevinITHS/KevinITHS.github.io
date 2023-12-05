import{_ as g,m as p,r as d,o,c as a,a as e,b as h,w as D,e as f,q as y,t,F as u,g as v,d as c,p as S,j as I}from"./index-9ff4980a.js";const b={name:"SpecificDetail",data(){return{gameId:"",gameDetails:null,notFound:null}},methods:{async getGameDetails(){this.gameDetails=null,this.notFound=null;try{const l=await p(this.gameId);this.gameDetails=JSON.parse(l)}catch(l){console.error("Error fetching game details:",l),this.notFound={status_message:"No game found with that ID"}}}}},n=l=>(S("data-v-356f1e37"),l=l(),I(),l),k={class:"fixed-button back-button"},x=n(()=>e("i",{class:"fa-solid fa-circle-left fa-2xl"},null,-1)),q={class:"specific-detail"},F=n(()=>e("h1",null,"Insert a random game ID from 1 - 511 for more information!",-1)),G=n(()=>e("h2",{style:{"font-size":"16px"}},"(340 to 432 are currently unavailable)",-1)),w={key:0},M={class:"game-details-container"},C=["src","alt"],N=["innerHTML"],E=["href"],V=n(()=>e("h3",null,"Minimum System Requirements:",-1)),B=n(()=>e("h3",null,"Screenshots:",-1)),L={class:"screenshots"},P=["src","alt"],T={key:1,class:"not-found"},H=n(()=>e("p",null,"Client Error",-1));function O(l,r,R,j,s,m){const _=d("router-link");return o(),a(u,null,[e("div",k,[h(_,{to:"/"},{default:D(()=>[x]),_:1})]),e("div",q,[F,G,f(e("input",{"onUpdate:modelValue":r[0]||(r[0]=i=>s.gameId=i),type:"number",placeholder:"Enter Game ID"},null,512),[[y,s.gameId]]),e("button",{onClick:r[1]||(r[1]=(...i)=>m.getGameDetails&&m.getGameDetails(...i))},"Search"),s.gameDetails?(o(),a("div",w,[e("div",M,[e("h2",null,t(s.gameDetails.title),1),e("img",{src:s.gameDetails.thumbnail,alt:s.gameDetails.title},null,8,C),e("p",null,"Status: "+t(s.gameDetails.status),1),e("div",{innerHTML:s.gameDetails.description},null,8,N),e("p",null,"Genre: "+t(s.gameDetails.genre),1),e("p",null,"Platform: "+t(s.gameDetails.platform),1),e("p",null,"Publisher: "+t(s.gameDetails.publisher),1),e("p",null,"Developer: "+t(s.gameDetails.developer),1),e("p",null,"Release Date: "+t(s.gameDetails.release_date),1),e("a",{href:s.gameDetails.game_url,target:"_blank"},"More Info",8,E),V,e("ul",null,[e("li",null,"OS: "+t(s.gameDetails.minimum_system_requirements.os),1),e("li",null," Processor: "+t(s.gameDetails.minimum_system_requirements.processor),1),e("li",null,"Memory: "+t(s.gameDetails.minimum_system_requirements.memory),1),e("li",null," Graphics: "+t(s.gameDetails.minimum_system_requirements.graphics),1),e("li",null," Storage: "+t(s.gameDetails.minimum_system_requirements.storage),1)]),B,e("div",L,[(o(!0),a(u,null,v(s.gameDetails.screenshots,i=>(o(),a("img",{key:i.id,src:i.image,alt:s.gameDetails.title},null,8,P))),128))])])])):c("",!0),s.notFound?(o(),a("div",T,[H,e("p",null,"Status: "+t(s.notFound.status_message),1)])):c("",!0)])],64)}const J=g(b,[["render",O],["__scopeId","data-v-356f1e37"]]);export{J as default};
