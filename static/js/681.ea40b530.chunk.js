"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,t,i){i.r(t),i.d(t,{default:function(){return o}});var s=i(439),n=i(689),a=i(87),r=i(791),l=i(243),c=i(474),d=i(184),h=function(e){var t=e.filmImg,i=e.filmdDate,s=e.filmTitle,l=e.filmVote,h=e.filmOverview,o=e.filmGenres,m=new Date(i).getFullYear();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:t?(0,d.jsx)("img",{src:t,alt:s}):(0,d.jsx)("p",{children:"Ops, image not found"})}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:[s," (",m,")"]}),(0,d.jsxs)("p",{children:["User score: ",Math.round(10*l)+"%"]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:h})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{children:o.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional Information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsx)(r.Suspense,{fallback:(0,d.jsx)(c.Z,{}),children:(0,d.jsx)(n.j3,{})})]})},o=function(){var e,t,i=(0,n.UO)().movieId,o=(0,r.useState)(""),m=(0,s.Z)(o,2),j=m[0],u=m[1],f=(0,r.useState)(""),x=(0,s.Z)(f,2),p=x[0],v=x[1],g=(0,r.useState)(""),w=(0,s.Z)(g,2),Z=w[0],I=w[1],O=(0,r.useState)(""),k=(0,s.Z)(O,2),S=k[0],J=k[1],Y=(0,r.useState)(""),_=(0,s.Z)(Y,2),M=_[0],N=_[1],T=(0,r.useState)([]),U=(0,s.Z)(T,2),b=U[0],C=U[1],F=(0,r.useState)(!1),G=(0,s.Z)(F,2),W=G[0],D=G[1],y=(0,r.useState)(!0),z=(0,s.Z)(y,2),B=z[0],V=z[1],A=(0,r.useState)(!0),E=(0,s.Z)(A,2),L=E[0],Q=E[1],H="https://api.themoviedb.org/3/movie/".concat(i,"?language=en-US"),R=null!==(e=null===(t=(0,n.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,r.useEffect)((function(){if(B){l.Z.get(H,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjBjOWZhNTA0MDcxMTlhOWY3MWZlMTUwMGRjZWUxMCIsInN1YiI6IjY0OWYwODcwNmY2YTk5MDEzYTg5ZjQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CNFILj_LKfHuzNXrxVFMlOf4mJknB8NFdiCkmm6wFOY"}}).then((function(e){e.data.poster_path?u("https://image.tmdb.org/t/p/w300".concat(e.data.poster_path)):u("https://www.flagstaff365.com/wp-content/themes/apollo/inc/admin/assets/images/placeholder-1.png"),v(e.data.release_date),I(e.data.original_title),J(e.data.vote_average),N(e.data.overview),C(e.data.genres),V(!1),Q(!1)})).catch((function(e){D(!0),V(!1),Q(!1)}))}}),[B,H]),(0,d.jsx)("main",{children:L?(0,d.jsx)(c.Z,{}):W?(0,d.jsx)(d.Fragment,{children:"Ops! Not found!"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.rU,{to:R,children:"Go back"}),(0,d.jsx)(h,{filmImg:j,filmdDate:p,filmTitle:Z,filmVote:S,filmOverview:M,filmGenres:b})]})})}}}]);
//# sourceMappingURL=681.ea40b530.chunk.js.map