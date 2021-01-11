use strict;

const e = react.createElement;

class LikeButton extends React.Component {
constructor(props){
super(props);
this.state = { liked:false};
}

render(){
if(this.state.liked){
return 'You likes this';
}
return e(
Button,
{  onClick: () => { 
this.setState( {liked:true} )
}
},
'Like'
);
}
}

const domContianer = document.querySelector('#like_button_continer');
ReactDOM.render(e(LikeButton),domContianer);
