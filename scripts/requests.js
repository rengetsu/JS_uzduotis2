window.requests = {
    get: function (server = servers.rows.current, slug = false) {
        if (!slug || !server){
            console.error('[server, slug] required');
            return false;
        }
        var rawFile = new XMLHttpRequest();
        var result = null;
        rawFile.open("GET", `./data/${server}/${slug}`, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    try {
                        result = JSON.parse(allText);
                    } catch (e) {
                        result = allText;
                        console.error(e);
                    }
                }
            }
        }
        rawFile.send(null);
        return result;
    },
    post: function () {
        return false;
    },
    delete: function () {
        return false;
    }
}