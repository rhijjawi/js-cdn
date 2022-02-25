torrents = document.getElementById('torrents')
for (i of Array(document.getElementById("torrents").getElementsByTagName("li").length).keys()) {
    let mag = document.getElementById("torrents").getElementsByTagName("li")[i].getElementsByClassName('item-icons')[0].getElementsByTagName('a')[0]
    mag = mag.getAttribute('href');
    console.log(mag)
    //console.log(document.getElementById("torrents").getElementsByTagName("li")[i])
}
