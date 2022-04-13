import { Route, Link, Switch, Prompt } from "react-router-dom";

function WrapperLink(props) {
    debugger;

    function handleClick() {
        console.log("Link Changed...");
    }

    console.dir(props)

    return <Link onClick={handleClick} {...props}>{props.children}</Link>
}

export default function ContentComponent() {
    return (
        <div style={{height: "300px", padding: "15px", border: "1px solid red", margin: "5px"}}>

            <nav>
                <Link to="/home" style={{marginRight: "10px"}}>Home</Link>

                <Link to="/home/mayank/12/developer?q=10" style={{marginRight: "10px"}}>Home Other</Link>
                <Link to="/help" style={{marginRight: "10px"}}>Help</Link>

                <WrapperLink to="/about" style={{marginRight: "10px"}}>About</WrapperLink>
            </nav>

            <h1>This is Content Component</h1>

            <div>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} userName="asdfajshd" userage="dsjfdjs" />}></Route>
                    <Route exact path="/home/:name/:id/:designation" component={Home}></Route>
                    <Route exact path="/help/:someid" render={(props) => <Help {...props} userName="asdfajshd" userage="dsjfdjs" />}></Route>
                    <Route exact path="/about" component={About}></Route>
                </Switch>
            </div>
        </div>
    )
}

function Home(props) {

    debugger;
    function updateUrl(whereToRedirect) {
        props.history.push(whereToRedirect)
    }

    var allowRedirect = false;
    
    return (
        <>
            <Prompt when={allowRedirect === false} message="Cannot Redirect"  />
            <h1>This is Home Page {props.match.params.name}</h1>
            <input type="button" value="Go to Help Page" onClick={() => updateUrl("/help")} />
            <input type="button" value="Go to About Page" onClick={() => updateUrl("/about")} />
        </>
    )
}

function HomeA() {
    return <h2>This is HomeA Component</h2>
}

function HomeB() {
    return <h2>This is HomeB Component</h2>
}

function HomeC() {
    return <h2>This is HomeC Component</h2>
}

function Sample() {
    return <h2>This is Sample Component</h2>
}

function Help(props) {
    debugger;
    return <h2>This is Help</h2>
}

function HelpUpdated() {
    return <h2>This is Help Updated</h2>
}

function About() {
    return <h2>This is About</h2>
}