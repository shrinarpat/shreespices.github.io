'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);




/*use strict;

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
*/
