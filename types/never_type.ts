type Status = "Pending" | "Working" | "Complete" | "Cancelled";

function doSomeAction(status: Status) {
    switch (status) {
        case "Pending":
            // some code
            break;
        case "Working":
            // some code
            break;
        case "Complete":
            // some code
            break;
        case "Cancelled":
            // some code
            break;
        default:
            neverReached(status);
    }
}

doSomeAction("Pending");

function neverReached(never: never) {}

const keepLogging = (message: string) => {
    while (true) {
      console.log(message);
    }
  };