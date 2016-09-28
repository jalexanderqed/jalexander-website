var Projects = React.createClass({
    render: function () {
        return (
            <div>
                <div className="projectsElement">
                    Android application that tags faces with age, gender, expression, and more:&nbsp;
                    <a target="_blank" href="https://github.com/jalexanderqed/MicrosoftCognitiveFrontend_android">
                        GitHub
                    </a>
                </div>
                <br/>
                <div className="projectsElement">
                    Corresponding server that receives a picture and sends it to the Microsoft Cognitive Services API:&nbsp;
                    <a target="_blank" href="https://github.com/jalexanderqed/msft-cognitive-server">
                        GitHub
                    </a>
                </div>
            </div>
        );
    }
});