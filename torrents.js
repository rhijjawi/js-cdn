torrents = document.getElementById('torrents')
for (i of Array((document.getElementById("torrents").getElementsByTagName("li").length)-1).keys()) {
    let nm = ''
    let mag = document.getElementById("torrents").getElementsByTagName("li")[i+1].getElementsByClassName('item-icons')[0].querySelectorAll('a')[0];
    let name = document.getElementById("torrents").getElementsByTagName("li")[i+1].getElementsByClassName('item-name')[0].querySelectorAll('a')[0].innerHTML;
    mag = mag.href;
    let urlenc = "https://api.ramzihijjawi.me/add-torrent?magnet="+mag
    let source = document.getElementById("torrents").getElementsByTagName("li")[i+1].getElementsByClassName('item-icons')[0].getElementsByTagName('img')[1];
    if (typeof(source) == 'object') {
        let source = document.getElementById("torrents").getElementsByTagName("li")[i+1].getElementsByClassName('item-icons')[0].getElementsByTagName('img')[1].getAttribute('alt');
        if (source == "VIP" || source == "Trusted") {
            urlenc = urlenc + '&source=' + source;
        }
        else {}
    }
    else {urlenc = urlenc + '&source=untrusted';}
}
