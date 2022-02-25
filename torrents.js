torrents = document.getElementById('torrents')
for (i of Array((document.getElementById("torrents").getElementsByTagName("li").length)-1).keys()) {
    let mag = document.getElementById("torrents").getElementsByTagName("li")[i+1].getElementsByClassName('item-icons')[0].querySelectorAll('a')[0];
    mag = mag.href;
    console.log(mag)
    //console.log(document.getElementById("torrents").getElementsByTagName("li")[i])
}
