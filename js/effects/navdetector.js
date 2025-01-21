function navdet() {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Chrome") > -1) {
        return "Google";
    } else if (userAgent.indexOf("Firefox") > -1) {
        return "Mozilla";
    } else if (userAgent.indexOf("Safari") > -1) {
        return "Apple";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        return "Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
        return "Edge";
    } else {
        return "desconocido";
    }
}
