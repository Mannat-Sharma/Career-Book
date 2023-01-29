import React, {Component, component} from "react";
class Ourbot extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = {"appId":"3aa3f49a362149893d6ed1c553d2cb316","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default Ourbot;