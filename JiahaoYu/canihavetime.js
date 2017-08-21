function asktime(hour, minute, period) {
    if (period == "AM") {
        if (minute > 30 && hour == 11) {
            console.log("It's almost 12 in the afternoon.");
        } else if (minute > 30 && hour < 11) {
            console.log("It's almost " + (hour + 1) + " in the morning.");
        } else if (minute < 30 && hour < 11) {
            console.log("It's just after " + hour + " in the morning.")
        }
    } 
    else if (period == "PM" && hour > 12 && hour < 19) {
        if (minute > 30 && hour > 12 && hour < 19) {
            console.log("It's almost " + (hour + 1) + " in the afternoon.");
        }
        else if(minute > 30 && hour == 6) {
            console.log("It's almost "  + 7 + " in the afternoon.");
        }
        else if(minute < 30) {
            console.log("It's just after " + hour + " in the afternoon.");
        }
    }
    else if (period == "PM" && hour >= 19 && hour < 24) {
        if (minute > 30 && hour == 23) {
            console.log("It's almost 0 in the morning.");
        }
        else if (minute > 30 && hour < 23) {
            console.log("It's almost " + (hour + 1) + " in the evening.");
        }
        else if (minute < 30) {
            console.log("It's just after " + hour + " in the evening.");
        }
    }
}

        
        
        
        
        