
type Log = Warning | Info | Success


interface Warning {
    type: "Warning" // adding a propety that is same in all interfaces
    msg: string;

}

interface Info {
    type: "Info"; // adding a propety that is same in all interfaces
    text: string;
    
}

interface Success {
    type: "Success" // adding a propety that is same in all interfaces
    message: string;
    
}


function handleMsg(log: Log) {
    switch (log.type) {
        case "Warning":
            console.log(`Warning: ${log.msg}`);
            break;
        case "Info":
            console.log(`Info: ${log.text}`);
            break;
        case "Success":
            console.log(`Success: ${log.message}`);
            break;
    }
}