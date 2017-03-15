/*
 * ReactJS
 * Re-usable Components
 * Define and render a timer component
 * uses old-school JS and ES6 as an alternative
**/

var Timer = React.createClass({
  getInitialState: function() {
    return{
      counter: this.props.intialSeconds
    }
  },

  componentDidMount: function() {
    var component = this, currentCounter;

    component.timerId = setInterval(function() {
      currentCounter = component.state.counter;

      if (currentCounter === 1) {
        clearInterval(component.timerId);
      }

      component.setState({
        counter: currentCounter - 1
      });
    }, 1000);
  },

  render: function() {
    return (
      <div>
        {this.state.counter}
      </div>
    );
  }
});

// Defined using ES2015 syntax
class TimerES6 extends React.Component {
  // constructor replaces getInitialState
  constructor(props) {
    super(props);
    this.state = {counter: this.props.intialSeconds};
  }

  // removes function() syntax
  componentDidMount() {
    let currentCounter;

    // removes function() syntax
    // setInterval uses arrow syntax, obviating the need for a closure in order to use this
    this.timerId = setInterval(() => {
      currentCounter = this.state.counter;

      if (currentCounter === 1) {
        clearInterval(this.timerId);
      }

      this.setState({
        counter: currentCounter - 1
      });
    }, 1000);
  }

  // removes function() syntax
  render() {
    return (
      <div>
        {this.state.counter}
      </div>
    );
  }
};

// render the component(s) on the page
ReactDOM.render(
  <TimerES6 intialSeconds={10} />,
  document.getElementById('root')
);
