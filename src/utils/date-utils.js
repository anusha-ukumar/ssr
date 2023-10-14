export const formatDate = (date) => {
    // let formattedDate = new Date(date).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"});
    let isRecent = false;
    let currentDate = new Date();
    let formattedDate="";
    let dateObj = new Date(date);

    let diff = (currentDate-dateObj);
    console.log("diff",currentDate-dateObj);
    if (diff<86400000) {
        isRecent=true;
        console.log(currentDate.getHours(),", ",dateObj.getHours());
        if (diff>3600000) {
            const hrs = parseInt(diff/3600000);
            formattedDate=`${hrs} hrs ago`
        } else if (diff>60000) {
            formattedDate=`${currentDate.getMinutes()-dateObj.getMinutes()} mins ago`
        } else {
            formattedDate=`${currentDate.getSeconds()-dateObj.getSeconds()} secs ago`
        }

    } else {
        formattedDate=dateObj.toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"});
    }

    
    return {
        isRecent: isRecent,
        date: formattedDate
    };
}