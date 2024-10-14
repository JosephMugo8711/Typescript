type Log = Warning | Info | Success;
interface Warning {
    type: "Warning";
    msg: string;
}
interface Info {
    type: "Info";
    text: string;
}
interface Success {
    type: "Success";
    message: string;
}
declare function handleMsg(log: Log): void;
