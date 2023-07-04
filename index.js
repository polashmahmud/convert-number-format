function convertNumberFormat(number, format = "en") {
    if (format === "en") {
        var parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    } else {
        return number.toString().replace(/(\d)(?=(\d{2})+\d(?!\d))/g, "$1,");
    }
}