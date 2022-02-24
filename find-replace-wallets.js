let list = [1,3,5,7]
wallet = {"BTC":"bc1qkt7vsxzlv6gh80w6hdt790w952qgs0c76qrmkq","LTC":"LX5NJLSE3gNrmgJurmEA8tYzMopaWJUGyB","XMR":"496n1d89oXpdfjzR8GjuJQLc889enMxuMMZwVbFrKpoNRcoqLwThXJeYG91YYCz9YoPpmaf4TL1B4eZu7GMPxAGVL6RrxvP", "ETH":"0xd85167068eBB5287e4753646E08118284e270565"}
let cryp = document.querySelector('footer').querySelector('p').querySelectorAll('a')
for (i of list) {
    console.log()
    console.log(i)
    console.log(cryp[i-1].innerHTML)
    cryp[i].innerHTML = wallet[cryp[i-1].innerHTML] 
    id = cryp[i].href.split(':')
    cryp[i].href = id[0]+':'+wallet[cryp[i-1].innerHTML] 
}
