function setPlayerStyle(player) {
    player.style.border = '1px solid lightblue';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '20px';
}
const players = document.getElementsByClassName('player');
for (player of players) {
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'teal';
    //     console.log(10)
    // })
}
function addPlayer() {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
        <h3 class="player-name">New player</h3>
        <p>Accusantium, rem eum beatae temporibus blanditiis soluta quas? Laudantium ipsam fugiat, magnam quos
        fuga repudiandae molestias. Fugiat inventore saepe hic architecto repudiandae ipsum alias voluptate
        et. Quidem quisquam exercitationem quibusdam.</p>
    `;
    setPlayerStyle(player);
    playerContainer.appendChild(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'teal';
    //     console.log(10)
    // })
    // console.log(player)
}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'teal';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'teal';
    }
})