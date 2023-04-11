function showFooterIfAgreed() {
    if($("#agree")[0].checked && $("#old")[0].checked) {
        $("#footer").show();
    } else {
        $("#footer").hide();
    }
}

function getBrowser() {
    return {
        screen_height: screen.height,
        screen_width: screen.width,
        color_depth: screen.colorDepth,
        is_java_enabled: navigator.javaEnabled(),
        lang: navigator.language,
        user_agent:  navigator.userAgent,
        time_zone_offset: new Date().getTimezoneOffset()
    }
}

function getBrowserJSON() {
    return JSON.stringify(getBrowser());
}