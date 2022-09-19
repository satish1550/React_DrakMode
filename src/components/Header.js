export default function Header(props) {
    return (
        <nav className = {props.darkMode ? "dark" : ""}  >
            <img src = {require("../Images/react-icon.png")} alt = "img" className = "react-img"/>
            <h3 className = "text">ReactFacts</h3>
            <div className = "toggler">
                <p className = "toggler-light">Light</p>
                <div className = "toggler-slider" onClick = {props.toggleDarkMode}>
                    <div className = "toggler-slider-circle"></div>
                </div>
                <p className = "toggler-dark">Dark</p>
            </div>
        </nav>
    )
}