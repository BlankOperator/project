let getTime = () => {
    let hours = new Date().getHours();
    if (hours >= 6 && hours <= 11) {
        return "早上";
    } else if (hours > 11 && hours <= 14) {
        return "中午";
    } else {
        return "晚上";
    }
}

export default getTime