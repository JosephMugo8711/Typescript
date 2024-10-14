function handleMsg(log) {
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
