document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementsByTagName('form')[0].addEventListener("submit", {subForm});
});
function subForm(){
    torname = document.getElementById('tname').value
    tor = document.getElementById('t').value
    req = {"magnet": tor, "name": torname}
    const res = axios.post('/torrent/add-magnet', req, {headers: {'Authorization':'475ad896d774ce50ad01aa47fa5f3b7eaf4be2f148971f35'}
    });
    console.log(res.data)
    return false;
}
