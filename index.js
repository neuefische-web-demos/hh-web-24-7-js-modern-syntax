// 1. Destructuring Objects
console.log("---1---");
{
  const name = "Felix";
  const player = {
    name: "Toni Kroos",
    position: "Midfielder",
    team: "Real Madrid",
    nationality: "german",
  };

  const { postion, name: playerName } = player;

  console.log(playerName);
}

// 2. Destructuring Arrays
console.log("---2---");

{
  const soccerPlayers = ["Toni Kroos", "Oli Kahn", "Michael Ballack"];

  // const firstPlayer = soccerPlayers[0];
  const [brokkoli, third, firstPlayer] = soccerPlayers;
  console.log(brokkoli);
}

// 3. Rest Operator
console.log("---3---");

{
  const soccerPlayers = [
    "Toni Kroos",
    "Der Lothar",
    "Oli Kahn",
    "Michael Ballack",
  ];

  const player = {
    name: "Toni Kroos",
    position: "Midfielder",
    team: "Real Madrid",
    nationality: "german",
  };

  const [firstPlayer, ...remainingTeam] = soccerPlayers;
  console.log(remainingTeam);

  const { team, position, ...brokkoli } = player;
  console.log(brokkoli);

  function printPlayers(firstPlayer, ...players) {
    console.log("first player is ", firstPlayer);
    console.log(players);
  }

  printPlayers(
    soccerPlayers[0],
    soccerPlayers[1],
    soccerPlayers[2],
    "Diego Maradonna"
  );
}

// 4. Spread Operator
console.log("---4---");
{
  const players = ["Diego Maradonna", "Toni Kroos", "Der Lothar", "Oli Kahn"];
  const trainers = ["Rudi Völler", "Otto Rehagel", "Ernst Happel"];

  const everyone = [...trainers, ...players, "Jürgen Kliensmann"];

  console.log(everyone);

  const player = {
    name: "Toni Kroos",
    position: "Midfielder",
    team: "Real Madrid",
    nationality: "german",
  };

  const stats = {
    goals: 23,
    wins: "yes",
  };

  const playerWithStats = {
    name: "Michael Ballack",
    ...player,
    ...stats,
  };
  console.log(playerWithStats);

  const secondReference = player;
  const playerCopy = { ...player };

  secondReference.name = "Michael Ballack";

  console.log(player);
  console.log(secondReference);
  console.log(playerCopy);

  function printPlayers(...players) {
    console.log(players);
  }

  printPlayers(...everyone);
}
