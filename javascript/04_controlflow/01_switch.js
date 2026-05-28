// we skipped basic conditionals

const month = 3
switch (month) {
    case 1:
        console.log("jan")
        break;       // without break all the cases after the correct value case will get automatically executed except default
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("apr")
        break;
    case 5:
        console.log("may")
        break;

    default:
        console.log("errrororororor")
        break;
}

/// we can also use strings as values , just by using "  " at the case section