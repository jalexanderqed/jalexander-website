var MainMenu = React.createClass({
    getInitialState: function () {
        return {numTabs: 2, selected: "bioTabButton"}
    },
    render: function () {
        let specialStyle = {
            width: "50%"
        }

        let menuStyle = {
            overflow: "hidden",
            display: "flex"
        }

        return (
            <div id="mainMenu" style={menuStyle}>
                <div className={(this.state.selected == "bioTabButton" ? "selectedTabButton " : "") + "leftTabButton tabButton"} id="bioTabButton" style={specialStyle}>
                    Bio
                </div>
                <div className={(this.state.selected == "projectsTabButton" ? "selectedTabButton " : "") + "rightTabButton tabButton"} id="projectsTabButton" style={specialStyle}>
                    Projects
                </div>
            </div>
        );
    }
});