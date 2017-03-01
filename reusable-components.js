/*
 * ReactJS
 * Re-usable Components
**/

// re-usable component
// defined as a Stateless Function Component
// (as opposed to a Class-based Component definition)
var ClickableImage = function(props) {
  return (
    <a href={props.href}>
      <img src={props.src}/>
    </a>
  );
}

// combined components
var Clubs = function(props) {
  return (
    <div className="footballClubs">
      <ClickableImage href="http://www.ccfc.co.uk/" src="http://www.ccfc.co.uk/cms_images/team-header/coventry144-35036.png" />
      <ClickableImage href="http://www.newport-county.co.uk/" src="http://www.newport-county.co.uk/cms_images/team/county-logo536-9872.gif" />
    </div>
  );
}

// define data and render it within components
var data = [
  {href: "http://www.ccfc.co.uk/", src: "http://www.ccfc.co.uk/cms_images/team-header/coventry144-35036.png"},
  {href: "http://www.newport-county.co.uk/", src: "http://www.newport-county.co.uk/cms_images/team/county-logo536-9872.gif"}
]

var FootballClubs = function(props) {
  return (
    <list>
      {props.data.map(club => <ClickableImage {...club}/>)}
    </list>
  );
}

// render the component(s) on the page
ReactDOM.render(
  // single component
  <ClickableImage href="http://www.ccfc.co.uk/" src="http://www.ccfc.co.uk/cms_images/team-header/coventry144-35036.png" />,

  // combined components
  // <Clubs/>,

  // from data
  // <FootballClubs data={data}/>,

  document.getElementById('root')
);

