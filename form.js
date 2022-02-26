document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementsByTagName('form')[0].addEventListener("submit", {subForm});
});
function subForm(){
    torname = document.getElementById('tname').value
    tor = document.getElementById('t').value
    req = {"magnet": tor, "name": torname}
    const res = axios.post('/torrent/add-magnet', req, {headers: {'Authorization' : document.getElementById('key').value}
    }).then((response) => {Swal.fire({icon: 'success',title: 'That worked!', text: 'This torrent has been added to your account!',footer: '<p>Click <a href="https://api.ramzihijjawi.me/torrent/get-status">here</a> to check your torrent status</p>'})}, (error) => {Swal.fire({icon: 'error',title: 'Oops...',text: "The API key you've inserted is invalid",footer: '<a href="">Why do I have this issue?</a>'})});
    return false;
}
