(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{40:function(e,t,r){"use strict";r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return h}));var a=r(38),n=r.n(a),c=r(39),i=r(43),s=r.n(i);s.a.defaults.baseURL="https://api.themoviedb.org/3/";var o="a270cdf6cdb8b60438fe81cf5da8eacf",u=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("trending/movie/day?api_key=".concat(o)).then((function(e){return e.data.results}));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("movie/".concat(t,"?api_key=").concat(o)).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("movie/".concat(t,"/credits?api_key=").concat(o)).then((function(e){return e.data.cast}));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("movie/".concat(t,"/reviews?api_key=").concat(o)).then((function(e){return e.data.results}));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("search/movie?api_key=".concat(o,"&query=").concat(t)).then((function(e){return e.data.results}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},44:function(e,t,r){e.exports={form:"SearchBar_form__1sIts",input:"SearchBar_input__1Dp2F",button:"SearchBar_button__213Ep"}},74:function(e,t,r){e.exports={castList:"Cast_castList__1lBDk",castItem:"Cast_castItem__1qf7d",castImg:"Cast_castImg__lTwBx",castTitle:"Cast_castTitle__1AaWR"}},75:function(e,t,r){e.exports={reviewList:"Reviews_reviewList__2YIKs",reviewItem:"Reviews_reviewItem__29kgx",reviewTitle:"Reviews_reviewTitle__4Z3Fm",review__rating:"Reviews_review__rating__27tt2",review__date:"Reviews_review__date__3AYxf",reviewText:"Reviews_reviewText__2nYRU"}},76:function(e,t,r){e.exports={wrapper:"MovieDetails_wrapper__4Llfh",movieImg:"MovieDetails_movieImg__2xua6",movieTitle:"MovieDetails_movieTitle__1DVeb",movieSubtitle:"MovieDetails_movieSubtitle__2L6tC",movieOverview:"MovieDetails_movieOverview__1K0qT",movieGenreList:"MovieDetails_movieGenreList__1Ee23",detailsItem:"MovieDetails_detailsItem__3A6PK",movieLink:"MovieDetails_movieLink__2stfD"}},93:function(e,t,r){"use strict";r.r(t);var a=r(38),n=r.n(a),c=r(39),i=r(16),s=r(17),o=r(19),u=r(18),v=r(0),l=r(44),p=r.n(l),h=r(40),m=r(41),d=r.p+"static/media/default.2e01288c.jpg",b=r(74),j=r.n(b),f=r(1),_=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={actors:[]},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=Object(c.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match.params.id,e.next=4,Object(h.b)(t);case 4:r=e.sent,this.setState({actors:Object(m.a)(r)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.actors;return console.log("actors",e),Object(f.jsx)("div",{children:e.length?Object(f.jsx)("ul",{className:j.a.castList,children:e.map((function(e){var t=e.id,r=e.profile_path,a=e.name;return Object(f.jsxs)("li",{className:j.a.castItem,children:[Object(f.jsx)("img",{className:j.a.castImg,src:r?"https://image.tmdb.org/t/p/w300".concat(r):d,alt:a}),Object(f.jsx)("h2",{className:j.a.castTitle,children:a})]},t)}))}):Object(f.jsx)("h2",{className:j.a.castTitle,children:"Page not found "})})}}]),r}(v.Component),w=r(75),x=r.n(w),O=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={reviews:[]},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=Object(c.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match.params.id,e.next=4,Object(h.c)(t);case 4:r=e.sent,this.setState({reviews:Object(m.a)(r)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.reviews;return Object(f.jsx)("div",{children:e.length?Object(f.jsx)("ul",{className:x.a.reviewList,children:e.map((function(e){return Object(f.jsxs)("li",{className:x.a.reviewItem,children:[Object(f.jsx)("h2",{className:x.a.reviewTitle,children:e.author}),Object(f.jsx)("p",{className:x.a.reviewText,children:e.content})]},e.author)}))}):Object(f.jsx)("h2",{className:x.a.reviewTitle,children:"We don't have any reviews for this movie."})})}}]),r}(v.Component),g=r(9),k=r(2),y=r(76),N=r.n(y),I="/movies/:id/cast",L="/movies/:id/reviews",T=Object(k.f)((function(e){var t=e.movie,r=e.movieId;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:N.a.wrapper,children:[Object(f.jsx)("img",{src:"\n                  https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(t.poster_path),alt:t.original_title,className:N.a.movieImg}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("h2",{className:N.a.movieTitle,children:[t.original_title," (",Number.parseInt(t.release_date),")"]}),Object(f.jsxs)("p",{className:N.a.movieSubtitle,children:["User Score: ",10*t.vote_average,"%"]}),Object(f.jsx)("h3",{className:N.a.movieSubtitle,children:"Overview"}),Object(f.jsx)("p",{className:N.a.movieOverview,children:t.overview}),Object(f.jsx)("h3",{className:N.a.movieSubtitle,children:"Genres"}),Object(f.jsx)("ul",{className:N.a.movieGenreList,children:t.genres.map((function(e){return Object(f.jsx)("li",{className:N.a.detailsItem,children:e.name},e.id)}))})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:N.a.movieSubtitle,children:"Additional information"}),Object(f.jsx)(g.b,{className:N.a.movieLink,to:"/movies/".concat(r,"/reviews"),children:"Reviews"}),Object(f.jsx)(g.b,{className:N.a.movieLink,to:"/movies/".concat(r,"/cast"),children:"Cast"})]}),Object(f.jsxs)(k.c,{children:[Object(f.jsx)(k.a,{path:I,exact:!0,component:_}),Object(f.jsx)(k.a,{path:L,exact:!0,component:O})]})]})})),D=r(7),S=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={movie:{}},e.handleGoBack=function(){var t,r=e.props,a=r.location;r.history.push((null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.from)||D.a.home)},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=Object(c.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match.params.movieId,e.next=4,Object(h.a)(t);case 4:r=e.sent,this.setState({movie:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movie,t=this.props.match.params.movieId||"";return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("button",{type:p.a.button,onClick:this.handleGoBack,children:"Go back"}),e.id&&Object(f.jsx)(T,{movie:e,movieId:t})]})}}]),r}(v.Component);t.default=S}}]);
//# sourceMappingURL=movie-details-page.884623f5.chunk.js.map