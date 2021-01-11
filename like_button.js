use strict;

const e = react.createElement;

class Liked extends React.Component {
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
