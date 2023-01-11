const moment = require("moment");

const formatTimestamp = (timestamp, options = {}) => {
    const { monthLength = "short", dateSuffix = true } = options;

    const date = moment(timestamp);
    const formattedDate = date.format("MMMM Do, YYYY [at] h:mm a");
    const formattedMonth = monthLength === "short" ? date.format("MMM") : date.format("MMMM");
    const dayOfMonth = dateSuffix ? date.format("Do") : date.format("D");

    return `${formattedMonth} ${dayOfMonth}, ${date.format("YYYY [at] h:mm a")}`;
};

module.exports = formatTimestamp;
