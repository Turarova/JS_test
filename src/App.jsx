import './App.css'

function Welcome(props) {
    return <h2>Welcome, {props.name}!</h2>;
}

function App() {
    return (
        <div>
            <h1>Engineering College React Demo</h1>
            <Welcome name="Elima"/>
            <Welcome name="Aigerim"/>
            <Welcome name="Nurkamila"/>
        </div>
    );
}

export default App;