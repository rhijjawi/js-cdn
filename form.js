document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementsByTagName('form')[0].addEventListener("submit", {subForm});
});
function subForm(){
    torname = document.getElementById('tname').value
    tor = document.getElementById('t').value
    req = {"magnet": tor, "name": torname}
    const res = axios.post('/torrent/add-magnet', req, {headers: {'Authorization' : document.getElementById('key').value}
    });
    console.log(res.data)
    return false;
}
