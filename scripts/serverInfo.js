var latestPing = Date.now();
var missedConnections = 0;
var serverDisconnected = false;
/*
socket.on('server info', (info) => {
  Ping = Date.now() - latestPing;
  missedConnections = 0;
  if (ClientVersion !== info.version || ClientNumber !== info.version2) {
    if (ClientVersion === undefined) {
      ClientVersion = info.version;
      ClientNumber = info.version2;
    }
    else {
      if (ClientVersion !== info.version) {
        worldText.push(new Text(`You are on version ${ClientVersion}.${ClientNumber}, server is on version ${info.version}.${info.version2}. page will auto refresh soon. New Update description: ${info.desc}`, myCanvas.width / 2, 40, 7, true));
      } else {
        worldText.push(new Text(`You are on version ${ClientVersion}.${ClientNumber}, server is on version ${info.version}.${info.version2}. page will auto refresh soon.`, myCanvas.width / 2, 40, 7, true));
      }
      setTimeout(() => {
        location.reload();
      }, 300000);
    }
      
  }
  worldRecords = info.wr;
  peopleLeft = info.peopleLeft;
  lvlData[69].about.diff = `${peopleLeft} Remaining...`;
});
function getServerInfo() {
  latestPing = Date.now();
  if (missedConnections >= 10 && missedConnections % 8 === 2) {
    serverDisconnected = true;
    AddChat('Disconnected from servers, progress will not save');
    AddChat('This may be servers going down, no internet, or getting kicked');
  }
  if (missedConnections === 0 && serverDisconnected) {
    AddChat('Reconnected!');
    serverDisconnected = false;
  }
  missedConnections++;
  socket.emit('server info');
}
socket.on('player update', (players) => {
  for (const plyr of players) {
    if (plyr[3] === Username) continue;
    if (plyr[3] in OtherPlayers) {
      OtherPlayers[plyr[3]].x = plyr[0];
      OtherPlayers[plyr[3]].y = plyr[1];
      OtherPlayers[plyr[3]].location = plyr[2];
      OtherPlayers[plyr[3]].img = cliDir + 'textures/skins/' + plyr[4];
    } else {
      OtherPlayers[plyr[3]] = new OnlinePlayer(cliDir + 'textures/skins/' + plyr[4], plyr[0], plyr[1], plyr[3]);
    }
  }
  for (const plyr in OtherPlayers) {
    if (plyr === Username) {
      delete OtherPlayers[plyr];
      continue;
    }
    var contain = false;
    for (const us of players) {
      if (us[3] === plyr) {
        contain = true;
        break;
      }
    }
    if (contain === false) {
      delete OtherPlayers[plyr];
    }
  }
  if (Username !== '' && GAME !== undefined)
    socket.emit('send player', [Player.x, Player.y, WorldId, Username]);
});
setInterval(getServerInfo, 1000);
getServerInfo();
function cl(cmd) {
  socket.emit('console', cmd);
}
socket.on('chat', (msg) => {
  AddChat(msg);
});
socket.on('set position', (loc) => {
  if (loc[2] !== WorldId) {
    CreateWorld(loc[2]);
  }
  cheatsEnabled = true;
  Player.x = loc[0];
  Player.y = loc[1];
});
socket.on('sync progress', (info) => {
  if ('levelsComplete' in info) {
    levelsComplete = info.levelsComplete;
    for (const i in levelsComplete) {
      if (!(levelsComplete[i] > 0)) continue;
      if (!('reward' in lvlData[i])) continue;
      for (const b in lvlData[i].reward) {
        if (!(b in LevelRewards)) {
          LevelRewards[b] = lvlData[i].reward[b];
        } else {
          LevelRewards[b] += lvlData[i].reward[b];
        }
      }
    }
  }
  if ('Inventory' in info)
    PlayerSkin = cliDir + 'textures/skins/' + info.Inventory.equip.skins;
    Player.img = PlayerSkin;
});
socket.io.on("reconnect", (attempt) => {
  if (localStorage.getItem('login') !== null) {
    autoLogin(JSON.parse(localStorage.getItem('login')));
  }
});
*/

function syncProgress() {
  const lvls = localStorage.getItem("levels");
  console.log("synced levels")
  if (lvls == null) return;
  levelsComplete = JSON.parse(lvls);
}
levelsComplete = new Array(lvlData.length).fill(false);
syncProgress()