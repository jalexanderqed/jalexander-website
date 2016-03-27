var Portfolio = React.createClass({
    handleClick: function(event) {
        console.log(event);
    },
    render: function () {
        return (
            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        <MainTitle />
                        <MainMenu type="bio" />
                    </div>
                </div>
            </div>
        );
    }
});