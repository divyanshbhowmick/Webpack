import Notification from "./Notification";
require("./style.css");
var notification = new Notification();
notification.announce("Done with classes");
notification.log("Done");
