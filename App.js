const heading = React.createElement("div", {id:"parent"}, 
React.createElement("div", {id:"child"},
React.createElement("h1", {class:"ramesh-class"}, "Hello world")
 )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);