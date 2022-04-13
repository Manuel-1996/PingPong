import logo from './logo.svg';
import './App.css';
import { SingleEliminationBracket, DoubleEliminationBracket, Match, MATCH_STATES, SVGViewer, createTheme  } from '@g-loot/react-tournament-brackets';

let dati = [

  {
    "id": 19875,
    "name": "Finale",
    "nextMatchId": null,
    "nextLooserMatchId": null,
    "tournamentRoundText": "5",
    "startTime": "",
    "state": "SCHEDULED",
    "participants": [
      {
        "id": "e7fe8889-13e8-46f7-8515-3c9d89c07ba1",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name" : "",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19876,
    "name": "Semifinale - Match 1",
    "nextMatchId": 19875,
    "nextLooserMatchId": null,
    "tournamentRoundText": "4",
    "startTime": "",
    "state": "DONE",
    "participants": [
      {
        "id": "059743f7-9501-471e-8f9e-2d1032eccc67",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name" : "",
        "picture": null
      }
    ]
  },
  {
    "id": 19891,
    "name": "Semifinale - Match 2",
    "nextMatchId": 19875,
    "nextLooserMatchId": null,
    "tournamentRoundText": "4",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "e7fe8889-13e8-46f7-8515-3c9d89c07ba1",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "c266ef2c-eab7-4b14-b41a-03265b6dfd74",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": null
      }
    ]
  },
  {
    "id": 19877,
    "name": "Quarti - Match 1",
    "nextMatchId": 19876,
    "nextLooserMatchId": null,
    "tournamentRoundText": "3",
    "startTime": "",
    "state": "DONE",
    "participants": [
      {
        "id": "acf45434-78a1-4907-bf19-92235d180e8b",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name": "",
        "picture": null
      },
	        {
        "id": "acf4df34-78a1-4907-bf19-92235d180e8b",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name": "",
        "picture": null
      }
    ]
  },
  {
    "id": 19884,
    "name": "Quarti - Match 2",
    "nextMatchId": 19876,
    "nextLooserMatchId": null,
    "tournamentRoundText": "3",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "51c449a7-fb04-445a-b478-1ca95feeeafa",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": null
      },
      {
        "id": "059743f7-9501-471e-8f9e-2d1032eccc67",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": null
      }
    ]
  },
  {
    "id": 19892,
    "name": "Quarti - Match 3",
    "nextMatchId": 19891,
    "nextLooserMatchId": null,
    "tournamentRoundText": "3",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "e7fe8889-13e8-46f7-8515-3c9d89c07ba1",
        "resultText": "",
        "isWinner": false,
        "status": "",
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "7eac0db4-2e53-4f42-a670-58847b1f5e4c",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19899,
    "name": "Quarti - Match 4",
    "nextMatchId": 19891,
    "nextLooserMatchId": null,
    "tournamentRoundText": "3",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "9d13814a-81b9-43d1-b9f9-42da1fe22578",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/G-Loot_Logo_Portrait_Green_Black128px_yhkf4w"
      },
      {
        "id": "c266ef2c-eab7-4b14-b41a-03265b6dfd74",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": null
      }
    ]
  },
  {
    "id": 19878,
    "name": "Ottavi - Match 1",
    "nextMatchId": 19877,
    "nextLooserMatchId": null,
    "tournamentRoundText": "2",
    "startTime": "",
    "state": "DONE",
    "participants": [
      {
        "id": "6d9ec9e8-d10d-424b-a00f-2078d4e08d39",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "a552ca06-579d-41ee-9405-4cedd187c5bf",
        "resultText": null,
        "isWinner": false,
        "status": null,
        "name": "",
        "picture": null
      }
    ]
  },
  {
    "id": 19881,
    "name": "Ottavi - Match 2",
    "nextMatchId": 19877,
    "nextLooserMatchId": null,
    "tournamentRoundText": "2",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "fdce979a-002e-4906-a80f-d161f108bcde",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "acf45434-78a1-4907-bf19-92235d180e8b",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": null
      }
    ]
  },
  {
    "id": 19885,
    "name": "Ottavi - Match 3",
    "nextMatchId": 19884,
    "nextLooserMatchId": null,
    "tournamentRoundText": "2",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "059743f7-9501-471e-8f9e-2d1032eccc67",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": null
      },
      {
        "id": "c7a2ec6b-389f-429d-819e-53594e94d475",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19888,
    "name": "Ottavi - Match 4",
    "nextMatchId": 19884,
    "nextLooserMatchId": null,
    "tournamentRoundText": "2",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "51c449a7-fb04-445a-b478-1ca95feeeafa",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": null
      },
      {
        "id": "ce914b1b-fe1e-4be9-8409-681049265614",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19893,
    "name": "Ottavi - Match 5",
    "nextMatchId": 19892,
    "nextLooserMatchId": null,
    "tournamentRoundText": "2",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "43ddad56-5798-4364-bd5c-81ba2640e22a",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": null
      },
      {
        "id": "e7fe8889-13e8-46f7-8515-3c9d89c07ba1",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19896,
    "name": "Ottavi - Match 6",
    "nextMatchId": 19892,
    "nextLooserMatchId": null,
    "tournamentRoundText": "2",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "7eac0db4-2e53-4f42-a670-58847b1f5e4c",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "85568369-9f06-4098-be5f-1922e2ae61e5",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": null
      }
    ]
  },
  {
    "id": 19900,
    "name": "Ottavi - Match 7",
    "nextMatchId": 19899,
    "nextLooserMatchId": null,
    "tournamentRoundText": "2",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "9d13814a-81b9-43d1-b9f9-42da1fe22578",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/G-Loot_Logo_Portrait_Green_Black128px_yhkf4w"
      },
      {
        "id": "5b29528f-0dab-4dea-97d8-e6528b6cfc6c",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 19903,
    "name": "Ottavi - Match 8",
    "nextMatchId": 19899,
    "nextLooserMatchId": null,
    "tournamentRoundText": "2",
    "startTime": "",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "8055f16b-3cc9-495a-b40a-2742712be6c6",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "c266ef2c-eab7-4b14-b41a-03265b6dfd74",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "",
        "picture": null
      }
    ]
  },
  {
    "id": 1,
    "name": "Sedicesimi - Match 1",
    "nextMatchId": 19878,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "lele-bott",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Lele Bottone",
        "picture": "teamlogos/px6aikyzeej5vhecturj"
      },
      {
        "id": "mar-donz",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Mario Donzelli",
        "picture": null
      }
    ]
  },
  {
    "id": 2,
    "name": "Sedicesimi - Match 2",
    "nextMatchId": 19878,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "alf-sic",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Alfredo Sicignano",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "vin-aq",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Vincenzo Aquino",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 3,
    "name": "Sedicesimi - Match 3",
    "nextMatchId": 19881,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "ant-carot",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Antonio Carotenuto",
        "picture": null
      },
      {
        "id": "mar-mart",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Mario Martone",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 4,
    "name": "Sedicesimi - Match 4",
    "nextMatchId": 19881,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "nello-di-don",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Nello Di Donna",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "mario-vas",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Mario Vassallo",
        "picture": null
      }
    ]
  },
  {
    "id": 5,
    "name": "Sedicesimi - Match 5",
    "nextMatchId": 19885,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "max",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Max Di Lauro",
        "picture": null
      },
      {
        "id": "fracaiaz",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Francesco Caiazzo",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 6,
    "name": "Sedicesimi - Match 6",
    "nextMatchId": 19885,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "fabio-pace",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Fabio Della Pace",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "gambino",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Salvatore Gambino",
        "picture": null
      }
    ]
  },
  {
    "id": 7,
    "name": "Sedicesimi - Match 7",
    "nextMatchId": 19888,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "vin-zan",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Vincenzo Zannetti",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "cipri",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Antonio Cipriano",
        "picture": null
      }
    ]
  },
  {
    "id": 8,
    "name": "Sedicesimi - Match 8",
    "nextMatchId": 19888,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "diograzia",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Alessandro Diograzia",
        "picture": null
      },
      {
        "id": "ant-guida",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Antonio Guida",
        "picture": null
      }
    ]
  },
  {
    "id": 9,
    "name": "Sedicesimi - Match 9",
    "nextMatchId": 19893,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "raf-carot",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Raffaele Carotenuto",
        "picture": "teamlogos/5o7zgmejbgc41_ip4xil"
      },
      {
        "id": "ser-cir",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Serena Cirillo",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 10,
    "name": "Sedicesimi - Match 10",
    "nextMatchId": 19893,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "man-per",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Manuel Perna",
        "picture": null
      },
      {
        "id": "mat-sup",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Matia Supino",
        "picture": null
      }
    ]
  },
  {
    "id": 11,
    "name": "Sedicesimi - Match 11",
    "nextMatchId": 19896,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "ser-nap",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Sergio Nappi",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "aless-vit",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Alessandro Vitiello",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 12,
    "name": "Sedicesimi - Match 12",
    "nextMatchId": 19896,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "dan-font",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Daniele Fontana",
        "picture": null
      },
      {
        "id": "ant-coll",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Antonio Colletto",
        "picture": null
      }
    ]
  },
  {
    "id": 13,
    "name": "Sedicesimi - Match 13",
    "nextMatchId": 19900,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "gius-zan",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Giuseppe Zannetti",
        "picture": "teamlogos/image_8_grwpnj"
      },
      {
        "id": "gian-laur",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Gianluca Di Lauro",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    "id": 14,
    "name": "Sedicesimi - Match 14",
    "nextMatchId": 19900,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "dav-luca",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Davide De Luca",
        "picture": null
      },
      {
        "id": "vin-gallo",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Vincenzo Gallo",
        "picture": "teamlogos/G-Loot_Logo_Portrait_Green_Black128px_yhkf4w"
      }
    ]
  },
  {
    "id": 15,
    "name": "Sedicesimi - Match 15",
    "nextMatchId": 19903,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "SCORE_DONE",
    "participants": [
      {
        "id": "marc-long",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Marco Longobardi",
        "picture": null
      },
      {
        "id": "mar-casc",
        "resultText": "",
        "isWinner": false,
        "status": "PLAYED",
        "name": "Mario Cascone",
        "picture": null
      }
    ]
  },
  {
    "id": 16,
    "name": "Sedicesimi - Match 16",
    "nextMatchId": 19903,
    "nextLooserMatchId": null,
    "tournamentRoundText": "1",
    "startTime": "13-04-2022",
    "state": "WALK_OVER",
    "participants": [
      {
        "id": "raf-mal",
        "resultText": "",
        "isWinner": false,
        "status": "null",
        "name": "Raffaele Malafronte",
        "picture": "teamlogos/client_team_default_logo"
      },
      {
        "id": "ant-aca",
        "resultText": "",
        "isWinner": false,
        "status": "null",
        "name": "Antonio Acanfora",
        "picture": "teamlogos/client_team_default_logo"
      }
    ]
  }
]

export const DoubleElimination = () => (
  <DoubleEliminationBracket
    matches={{
      "upper": [
        {
          "id": 260006, // Unique identifier of any kind
          "name": "Semi Final - Match",
          "nextMatchId": null,  // Id for the next match in upper bracket, if it's final match it must be null OR undefined
          "nextLooserMatchId": null,  // Id for the next match in lower bracket, if it's final match or a lower bracket match it must be null OR undefined
          "startTime": "2021-05-30",
          "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
          "participants": [
            {
              "id": "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc", // Unique identifier of any kind
              "resultText": "WON", // Any string works
              "isWinner": false,
              "status": null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
              "name": "giacomo123"
            },
            {
              "id": "9ea9ce1a-4794-4553-856c-9a3620c0531b",
              "resultText": "LOST", // Any string works
              "isWinner": true,
              "status": null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
              "name": "Ant"
            }
          ]
        }
      ],
      "lower": [
        {
          "id": 260005,
          "name": "Semi Final - Match",
          "nextMatchId": 260006,
          "nextLooserMatchId": null,
          "tournamentRoundText": "4",
          "startTime": "2021-05-30",
          "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
          "participants": [
            {
              "id": "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc", // Unique identifier of any kind
              "resultText": "WON", // Any string works
              "isWinner": false,
              "status": null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
              "name": "giacomo123"
            },
            {
              "id": "9ea9ce1a-4794-4553-856c-9a3620c0531b",
              "resultText": null,
              "isWinner": true,
              "status": null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
              "name": "Ant"
            }
          ]
        }
      ]
    }}
    matchComponent={Match}
    svgWrapper={({ children, ...props }) => (
      <SVGViewer width={500} height={500} {...props}>
        {children}
      </SVGViewer>
    )}
  />
);

const WhiteTheme = createTheme({
  textColor: { main: '#000000', highlighted: '#07090D', dark: '#3E414D' },
  matchBackground: { wonColor: '#daebf9', lostColor: '#96c6da' },
  score: {
    background: { wonColor: '#87b2c4', lostColor: '#87b2c4' },
    text: { highlightedWonColor: '#7BF59D', highlightedLostColor: '#FB7E94' },
  },
  border: {
    color: '#CED1F2',
    highlightedColor: '#da96c6',
  },
  roundHeader: { backgroundColor: '#da96c6', fontColor: '#000' },
  connectorColor: '#CED1F2',
  connectorColorHighlight: '#da96c6',
  svgBackground: '#000000',
});

function App() {
  return (
    <div className="App">



      <SingleEliminationBracket
        matches={dati}
        matchComponent={Match}     
      />

        {/*
<svg content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2022-04-11T14:52:58.702Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36&quot; etag=&quot;ToZvV0gKg43PZKSQ4wA1&quot; version=&quot;17.4.2&quot; type=&quot;device&quot;>&lt;diagram id=&quot;4QrTWG1qNXum3w5xOeF7&quot; name=&quot;Page-1&quot;>7Zxdb+I4FIZ/DZetYjuflzOddmc1u1KlSrvS3qxcYkg0ATPGFNhfvzFxACcBDCROUihSRQ6Ok5zn+OT1yccAPU1WvzE8i/6kIUkG0ApXA/RtAKHv+ul/YVhnBtuHmWHM4jAzgZ3hLf6PSKMlrYs4JHOlIac04fFMNQ7pdEqGXLFhxuhSbTaiibrVGR6TkuFtiJOy9e845JE8LOjt7N9JPI7yLQM3yH6Z4LyxPJJ5hEO63DOh5wF6YpTy7Ntk9UQS4bvcL9l6Lwd+3e4YI1OuswJ7/n3xNv/1718/opH1z8v7d/SRPAAn6+YDJwt5xHJv+Tp3wZjRxUw2I4yTVZXj8Xve3CrvGNgebhomhE4IZ+u0SR4jco21urjcudt1pC3ac7VtSSOWiMfbnndeSL9IR5zhFPu0T8g0/CKiK12a0mlq/BrxSbqRbyD9mvprGhKxBStdytYlYSnOdv45gqbstT2/VLkltzGSYB5/qButcpXcwiuN093ZUih5d04XbEhkq/0wy1fMG3LMxoSXGm5IbA/jcjgaAft54WjDWBUGjiE47i3DKfr84pHUEjzvluFdC8tBzmPg2gEQJzDPAt7xGGgYpX/LKHMiAXwMfGg7LrAt5FhBzaOyJbS5MK6J7YhO+RNNKNusiV42f8IeJ8mefeSIT2qfc0Z/kqo1ehYlEh9E3qNzZiTIVYELi6s2zR4YYV9ibG3++se42UxwvFsEDccGuiQ2QjyPNvEA1EAR9lfMOWHTjQVaYBsY+TwYHgmh4YJ9bPvtadScd0Y3GzUpRrzeazYTDeaXHgzaJsFdUGZbqDVEoZFiw1mhJLsPbMUfUC7uBRoI3HKkAcs9HFVXlSCAxkxKTebLKObkbYaH4tclwzN1QB8aqAddfdKl8IBL85hy9XzoNVXFARrzGXHc8RAnf+B3krzSecxjKhLeO+WcTlQP5m2/JPFYtOFUuBjLpWHqLMJEjozwTPQ+WY1FQfRxlFDKZgmePg4jHDOjKGQ3sIwCVeRNBBsi4WoU1LJxLxQKxxJCYB1zSlOpwC7o+3xxz3nQqsoF9pEzzFXuczQCuZZcoO37kz7OiB/0MfILJ71yqqgK0MZShaMxX+5UqjBGCthIQZUn1bZSiRPcSR0ipWoYLyiTAmVSMGgq6WvUKbpK6qHh9AfVMeW3TEqjqnAntRlTbZOC/SUF/EZJ+aqkALbTMiqNckxXUZkE9VAh/oyCAn3Tflpkjt9xAV11jgOscsHDqKwDfZN1NUBAsGMQYJ8V2xmnl+NYQKBWZCFouXoC+yzPasMCna5h6bEWqw8LAl3D0mPdpT+XOQHFc9Uzi1uuYZqFolEA7iqUM2aYJ04sKOgYFY1rTE3f+wt8tWqFQOuX3qCpcrtWTB0hd9CpD7aqLKsuxRmtr8NPOce6CE3FpWWzg/4GZ1qwMNOqSjJGIaC7pBe/FiS93fZ16rzj28YCQdew9Fg91iUeoa9KeuS1LB6Rxr1cXYVSn6Qv3r3XNhVbQ7s2LeltS0fSe2WvAAs15RYN/dmypM/InXU3nVEJb39K3XgWiryblk+HTt/K9DUkWtvXUPAmrxo6dwUvsOhIRaNY7gpeYPC6huVelIeOraHgjULp8bSqNgWPXA0Fb5TKte830H6o7+vmMzj/Wa0DHjXzVBYoPn7rFxSv7nNYW9F2qKOm32Nx7bsSPjnoouKDF3Iu9APtujCni7uX92TNd29AQs//Aw==&lt;/diagram>&lt;/mxfile>" height="402px" style={{"backgroundColor":"rgb(255, 255, 255)"}} width="652px" version="1.1" viewBox="-0.5 -0.5 652 402" xmlns="http://www.w3.org/2000/svg">
	<defs/>
	<g>
		<path d="M 0 400 L 0 0" fill="none" stroke="rgb(0, 0, 0)"/>
		<path d="M 0 0 L 650 0" fill="none" stroke="rgb(0, 0, 0)"/>
		<path d="M 650 400 L 650 0" fill="none" stroke="rgb(0, 0, 0)"/>
		<path d="M 0 400 L 535.96 400" fill="none" stroke="rgb(0, 0, 0)"/>
		<path d="M 592.98 400 L 650 400" fill="none" stroke="rgb(0, 0, 0)"/>
		<path d="M 0 237.5 L 0 162.5" fill="none" stroke="#ffffff"/>
		<path d="M 592.98 400 L 592.98 325" fill="none" stroke="#000000"/>
		<path d="M 535.96 400 Q 535.96 337.5 592.98 325" fill="none" stroke="rgb(0, 0, 0)" strokeDasharray="2 2" strokeWidth="2"/>
		<path d="M 147.4 34.84 L 149.59 49.51 C 150 51.67 148.86 53.83 146.68 55.02 C 139.2 56 131.6 56 124.12 55.02 C 121.94 53.83 120.8 51.67 121.21 49.51 L 123.4 34.84 C 123.82 33.22 125.9 31.97 128.49 31.79 L 142.31 31.79 C 144.9 31.97 146.98 33.22 147.4 34.84 Z M 127.89 31.79 L 124.15 27.91 M 132.05 31.79 L 130.8 27.36 M 137.03 31.79 L 138.69 27.36 M 141.18 31.79 L 145.34 27.91 M 146.58 28.12 C 138.89 27.11 131.02 27.11 123.32 28.12 L 120 25.67 C 129.84 24 140.07 24 149.91 25.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"/>
		<path d="M 620.4 77.84 L 622.59 92.51 C 623 94.67 621.86 96.83 619.68 98.02 C 612.2 99 604.6 99 597.12 98.02 C 594.94 96.83 593.8 94.67 594.21 92.51 L 596.4 77.84 C 596.82 76.22 598.9 74.97 601.49 74.79 L 615.31 74.79 C 617.9 74.97 619.98 76.22 620.4 77.84 Z M 600.89 74.79 L 597.15 70.91 M 605.05 74.79 L 603.8 70.36 M 610.03 74.79 L 611.69 70.36 M 614.18 74.79 L 618.34 70.91 M 619.58 71.12 C 611.89 70.11 604.02 70.11 596.32 71.12 L 593 68.67 C 602.84 67 613.07 67 622.91 68.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(90,608,83)"/>
		<path d="M 622.32 138.83 L 624.57 152.12 C 625 154.08 623.82 156.03 621.56 157.11 C 613.84 158 605.98 158 598.26 157.11 C 596.01 156.03 594.83 154.08 595.26 152.12 L 597.51 138.83 C 597.94 137.36 600.09 136.22 602.77 136.06 L 617.05 136.06 C 619.73 136.22 621.88 137.36 622.32 138.83 Z M 602.16 136.06 L 598.29 132.55 M 606.45 136.06 L 605.16 132.05 M 611.6 136.06 L 613.31 132.05 M 615.89 136.06 L 620.18 132.55 M 621.47 132.73 C 613.52 131.82 605.38 131.82 597.44 132.73 L 594 130.52 C 604.17 129 614.74 129 624.9 130.52 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(90,609.5,143.5)"/>
		<path d="M 510.32 77.83 L 512.57 91.12 C 513 93.08 511.82 95.03 509.56 96.11 C 501.84 97 493.98 97 486.26 96.11 C 484.01 95.03 482.83 93.08 483.26 91.12 L 485.51 77.83 C 485.94 76.36 488.09 75.22 490.77 75.06 L 505.05 75.06 C 507.73 75.22 509.88 76.36 510.32 77.83 Z M 490.16 75.06 L 486.29 71.55 M 494.45 75.06 L 493.16 71.05 M 499.6 75.06 L 501.31 71.05 M 503.89 75.06 L 508.18 71.55 M 509.47 71.73 C 501.52 70.82 493.38 70.82 485.44 71.73 L 482 69.52 C 492.17 68 502.74 68 512.9 69.52 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-90,497.5,82.5)"/>
		<path d="M 510.32 137.83 L 512.57 151.12 C 513 153.08 511.82 155.03 509.56 156.11 C 501.84 157 493.98 157 486.26 156.11 C 484.01 155.03 482.83 153.08 483.26 151.12 L 485.51 137.83 C 485.94 136.36 488.09 135.22 490.77 135.06 L 505.05 135.06 C 507.73 135.22 509.88 136.36 510.32 137.83 Z M 490.16 135.06 L 486.29 131.55 M 494.45 135.06 L 493.16 131.05 M 499.6 135.06 L 501.31 131.05 M 503.89 135.06 L 508.18 131.55 M 509.47 131.73 C 501.52 130.82 493.38 130.82 485.44 131.73 L 482 129.52 C 492.17 128 502.74 128 512.9 129.52 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-90,497.5,142.5)"/>
		<path d="M 566.32 204.83 L 568.57 218.12 C 569 220.08 567.82 222.03 565.56 223.11 C 557.84 224 549.98 224 542.26 223.11 C 540.01 222.03 538.83 220.08 539.26 218.12 L 541.51 204.83 C 541.94 203.36 544.09 202.22 546.77 202.06 L 561.05 202.06 C 563.73 202.22 565.88 203.36 566.32 204.83 Z M 546.16 202.06 L 542.29 198.55 M 550.45 202.06 L 549.16 198.05 M 555.6 202.06 L 557.31 198.05 M 559.89 202.06 L 564.18 198.55 M 565.47 198.73 C 557.52 197.82 549.38 197.82 541.44 198.73 L 538 196.52 C 548.17 195 558.74 195 568.9 196.52 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(180,553.5,209.5)"/>
		<path d="M 566.32 27.83 L 568.57 41.12 C 569 43.08 567.82 45.03 565.56 46.11 C 557.84 47 549.98 47 542.26 46.11 C 540.01 45.03 538.83 43.08 539.26 41.12 L 541.51 27.83 C 541.94 26.36 544.09 25.22 546.77 25.06 L 561.05 25.06 C 563.73 25.22 565.88 26.36 566.32 27.83 Z M 546.16 25.06 L 542.29 21.55 M 550.45 25.06 L 549.16 21.05 M 555.6 25.06 L 557.31 21.05 M 559.89 25.06 L 564.18 21.55 M 565.47 21.73 C 557.52 20.82 549.38 20.82 541.44 21.73 L 538 19.52 C 548.17 18 558.74 18 568.9 19.52 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"/>
		<path d="M 207.4 34.84 L 209.59 49.51 C 210 51.67 208.86 53.83 206.68 55.02 C 199.2 56 191.6 56 184.12 55.02 C 181.94 53.83 180.8 51.67 181.21 49.51 L 183.4 34.84 C 183.82 33.22 185.9 31.97 188.49 31.79 L 202.31 31.79 C 204.9 31.97 206.98 33.22 207.4 34.84 Z M 187.89 31.79 L 184.15 27.91 M 192.05 31.79 L 190.8 27.36 M 197.03 31.79 L 198.69 27.36 M 201.18 31.79 L 205.34 27.91 M 206.58 28.12 C 198.89 27.11 191.02 27.11 183.32 28.12 L 180 25.67 C 189.84 24 200.07 24 209.91 25.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"/>
		<path d="M 267.4 34.84 L 269.59 49.51 C 270 51.67 268.86 53.83 266.68 55.02 C 259.2 56 251.6 56 244.12 55.02 C 241.94 53.83 240.8 51.67 241.21 49.51 L 243.4 34.84 C 243.82 33.22 245.9 31.97 248.49 31.79 L 262.31 31.79 C 264.9 31.97 266.98 33.22 267.4 34.84 Z M 247.89 31.79 L 244.15 27.91 M 252.05 31.79 L 250.8 27.36 M 257.03 31.79 L 258.69 27.36 M 261.18 31.79 L 265.34 27.91 M 266.58 28.12 C 258.89 27.11 251.02 27.11 243.32 28.12 L 240 25.67 C 249.84 24 260.07 24 269.91 25.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"/>
		<path d="M 146.4 146.84 L 148.59 161.51 C 149 163.67 147.86 165.83 145.68 167.02 C 138.2 168 130.6 168 123.12 167.02 C 120.94 165.83 119.8 163.67 120.21 161.51 L 122.4 146.84 C 122.82 145.22 124.9 143.97 127.49 143.79 L 141.31 143.79 C 143.9 143.97 145.98 145.22 146.4 146.84 Z M 126.89 143.79 L 123.15 139.91 M 131.05 143.79 L 129.8 139.36 M 136.03 143.79 L 137.69 139.36 M 140.18 143.79 L 144.34 139.91 M 145.58 140.12 C 137.89 139.11 130.02 139.11 122.32 140.12 L 119 137.67 C 128.84 136 139.07 136 148.91 137.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-180,134,152)"/>
		<path d="M 206.4 146.84 L 208.59 161.51 C 209 163.67 207.86 165.83 205.68 167.02 C 198.2 168 190.6 168 183.12 167.02 C 180.94 165.83 179.8 163.67 180.21 161.51 L 182.4 146.84 C 182.82 145.22 184.9 143.97 187.49 143.79 L 201.31 143.79 C 203.9 143.97 205.98 145.22 206.4 146.84 Z M 186.89 143.79 L 183.15 139.91 M 191.05 143.79 L 189.8 139.36 M 196.03 143.79 L 197.69 139.36 M 200.18 143.79 L 204.34 139.91 M 205.58 140.12 C 197.89 139.11 190.02 139.11 182.32 140.12 L 179 137.67 C 188.84 136 199.07 136 208.91 137.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-180,194,152)"/>
		<path d="M 266.4 146.84 L 268.59 161.51 C 269 163.67 267.86 165.83 265.68 167.02 C 258.2 168 250.6 168 243.12 167.02 C 240.94 165.83 239.8 163.67 240.21 161.51 L 242.4 146.84 C 242.82 145.22 244.9 143.97 247.49 143.79 L 261.31 143.79 C 263.9 143.97 265.98 145.22 266.4 146.84 Z M 246.89 143.79 L 243.15 139.91 M 251.05 143.79 L 249.8 139.36 M 256.03 143.79 L 257.69 139.36 M 260.18 143.79 L 264.34 139.91 M 265.58 140.12 C 257.89 139.11 250.02 139.11 242.32 140.12 L 239 137.67 C 248.84 136 259.07 136 268.91 137.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-180,254,152)"/>
		<path d="M 323.4 90.84 L 325.59 105.51 C 326 107.67 324.86 109.83 322.68 111.02 C 315.2 112 307.6 112 300.12 111.02 C 297.94 109.83 296.8 107.67 297.21 105.51 L 299.4 90.84 C 299.82 89.22 301.9 87.97 304.49 87.79 L 318.31 87.79 C 320.9 87.97 322.98 89.22 323.4 90.84 Z M 303.89 87.79 L 300.15 83.91 M 308.05 87.79 L 306.8 83.36 M 313.03 87.79 L 314.69 83.36 M 317.18 87.79 L 321.34 83.91 M 322.58 84.12 C 314.89 83.11 307.02 83.11 299.32 84.12 L 296 81.67 C 305.84 80 316.07 80 325.91 81.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(90,311,96)"/>
		<path d="M 86.4 90.84 L 88.59 105.51 C 89 107.67 87.86 109.83 85.68 111.02 C 78.2 112 70.6 112 63.12 111.02 C 60.94 109.83 59.8 107.67 60.21 105.51 L 62.4 90.84 C 62.82 89.22 64.9 87.97 67.49 87.79 L 81.31 87.79 C 83.9 87.97 85.98 89.22 86.4 90.84 Z M 66.89 87.79 L 63.15 83.91 M 71.05 87.79 L 69.8 83.36 M 76.03 87.79 L 77.69 83.36 M 80.18 87.79 L 84.34 83.91 M 85.58 84.12 C 77.89 83.11 70.02 83.11 62.32 84.12 L 59 81.67 C 68.84 80 79.07 80 88.91 81.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-90,74,96)"/>
		<path d="M 107.4 244.84 L 109.59 259.51 C 110 261.67 108.86 263.83 106.68 265.02 C 99.2 266 91.6 266 84.12 265.02 C 81.94 263.83 80.8 261.67 81.21 259.51 L 83.4 244.84 C 83.82 243.22 85.9 241.97 88.49 241.79 L 102.31 241.79 C 104.9 241.97 106.98 243.22 107.4 244.84 Z M 87.89 241.79 L 84.15 237.91 M 92.05 241.79 L 90.8 237.36 M 97.03 241.79 L 98.69 237.36 M 101.18 241.79 L 105.34 237.91 M 106.58 238.12 C 98.89 237.11 91.02 237.11 83.32 238.12 L 80 235.67 C 89.84 234 100.07 234 109.91 235.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"/>
		<path d="M 167.4 244.84 L 169.59 259.51 C 170 261.67 168.86 263.83 166.68 265.02 C 159.2 266 151.6 266 144.12 265.02 C 141.94 263.83 140.8 261.67 141.21 259.51 L 143.4 244.84 C 143.82 243.22 145.9 241.97 148.49 241.79 L 162.31 241.79 C 164.9 241.97 166.98 243.22 167.4 244.84 Z M 147.89 241.79 L 144.15 237.91 M 152.05 241.79 L 150.8 237.36 M 157.03 241.79 L 158.69 237.36 M 161.18 241.79 L 165.34 237.91 M 166.58 238.12 C 158.89 237.11 151.02 237.11 143.32 238.12 L 140 235.67 C 149.84 234 160.07 234 169.91 235.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"/>
		<path d="M 106.4 356.84 L 108.59 371.51 C 109 373.67 107.86 375.83 105.68 377.02 C 98.2 378 90.6 378 83.12 377.02 C 80.94 375.83 79.8 373.67 80.21 371.51 L 82.4 356.84 C 82.82 355.22 84.9 353.97 87.49 353.79 L 101.31 353.79 C 103.9 353.97 105.98 355.22 106.4 356.84 Z M 86.89 353.79 L 83.15 349.91 M 91.05 353.79 L 89.8 349.36 M 96.03 353.79 L 97.69 349.36 M 100.18 353.79 L 104.34 349.91 M 105.58 350.12 C 97.89 349.11 90.02 349.11 82.32 350.12 L 79 347.67 C 88.84 346 99.07 346 108.91 347.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-180,94,362)"/>
		<path d="M 166.4 356.84 L 168.59 371.51 C 169 373.67 167.86 375.83 165.68 377.02 C 158.2 378 150.6 378 143.12 377.02 C 140.94 375.83 139.8 373.67 140.21 371.51 L 142.4 356.84 C 142.82 355.22 144.9 353.97 147.49 353.79 L 161.31 353.79 C 163.9 353.97 165.98 355.22 166.4 356.84 Z M 146.89 353.79 L 143.15 349.91 M 151.05 353.79 L 149.8 349.36 M 156.03 353.79 L 157.69 349.36 M 160.18 353.79 L 164.34 349.91 M 165.58 350.12 C 157.89 349.11 150.02 349.11 142.32 350.12 L 139 347.67 C 148.84 346 159.07 346 168.91 347.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-180,154,362)"/>
		<path d="M 233.4 300.84 L 235.59 315.51 C 236 317.67 234.86 319.83 232.68 321.02 C 225.2 322 217.6 322 210.12 321.02 C 207.94 319.83 206.8 317.67 207.21 315.51 L 209.4 300.84 C 209.82 299.22 211.9 297.97 214.49 297.79 L 228.31 297.79 C 230.9 297.97 232.98 299.22 233.4 300.84 Z M 213.89 297.79 L 210.15 293.91 M 218.05 297.79 L 216.8 293.36 M 223.03 297.79 L 224.69 293.36 M 227.18 297.79 L 231.34 293.91 M 232.58 294.12 C 224.89 293.11 217.02 293.11 209.32 294.12 L 206 291.67 C 215.84 290 226.07 290 235.91 291.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(90,221,306)"/>
		<path d="M 56.4 300.84 L 58.59 315.51 C 59 317.67 57.86 319.83 55.68 321.02 C 48.2 322 40.6 322 33.12 321.02 C 30.94 319.83 29.8 317.67 30.21 315.51 L 32.4 300.84 C 32.82 299.22 34.9 297.97 37.49 297.79 L 51.31 297.79 C 53.9 297.97 55.98 299.22 56.4 300.84 Z M 36.89 297.79 L 33.15 293.91 M 41.05 297.79 L 39.8 293.36 M 46.03 297.79 L 47.69 293.36 M 50.18 297.79 L 54.34 293.91 M 55.58 294.12 C 47.89 293.11 40.02 293.11 32.32 294.12 L 29 291.67 C 38.84 290 49.07 290 58.91 291.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-90,44,306)"/>
		<path d="M 367.4 244.84 L 369.59 259.51 C 370 261.67 368.86 263.83 366.68 265.02 C 359.2 266 351.6 266 344.12 265.02 C 341.94 263.83 340.8 261.67 341.21 259.51 L 343.4 244.84 C 343.82 243.22 345.9 241.97 348.49 241.79 L 362.31 241.79 C 364.9 241.97 366.98 243.22 367.4 244.84 Z M 347.89 241.79 L 344.15 237.91 M 352.05 241.79 L 350.8 237.36 M 357.03 241.79 L 358.69 237.36 M 361.18 241.79 L 365.34 237.91 M 366.58 238.12 C 358.89 237.11 351.02 237.11 343.32 238.12 L 340 235.67 C 349.84 234 360.07 234 369.91 235.67 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"/>
		<path d="M 428.32 243.83 L 430.57 257.12 C 431 259.08 429.82 261.03 427.56 262.11 C 419.84 263 411.98 263 404.26 262.11 C 402.01 261.03 400.83 259.08 401.26 257.12 L 403.51 243.83 C 403.94 242.36 406.09 241.22 408.77 241.06 L 423.05 241.06 C 425.73 241.22 427.88 242.36 428.32 243.83 Z M 408.16 241.06 L 404.29 237.55 M 412.45 241.06 L 411.16 237.05 M 417.6 241.06 L 419.31 237.05 M 421.89 241.06 L 426.18 237.55 M 427.47 237.73 C 419.52 236.82 411.38 236.82 403.44 237.73 L 400 235.52 C 410.17 234 420.74 234 430.9 235.52 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)"/>
		<path d="M 367.32 355.83 L 369.57 369.12 C 370 371.08 368.82 373.03 366.56 374.11 C 358.84 375 350.98 375 343.26 374.11 C 341.01 373.03 339.83 371.08 340.26 369.12 L 342.51 355.83 C 342.94 354.36 345.09 353.22 347.77 353.06 L 362.05 353.06 C 364.73 353.22 366.88 354.36 367.32 355.83 Z M 347.16 353.06 L 343.29 349.55 M 351.45 353.06 L 350.16 349.05 M 356.6 353.06 L 358.31 349.05 M 360.89 353.06 L 365.18 349.55 M 366.47 349.73 C 358.52 348.82 350.38 348.82 342.44 349.73 L 339 347.52 C 349.17 346 359.74 346 369.9 347.52 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-180,354.5,360.5)"/>
		<path d="M 427.32 355.83 L 429.57 369.12 C 430 371.08 428.82 373.03 426.56 374.11 C 418.84 375 410.98 375 403.26 374.11 C 401.01 373.03 399.83 371.08 400.26 369.12 L 402.51 355.83 C 402.94 354.36 405.09 353.22 407.77 353.06 L 422.05 353.06 C 424.73 353.22 426.88 354.36 427.32 355.83 Z M 407.16 353.06 L 403.29 349.55 M 411.45 353.06 L 410.16 349.05 M 416.6 353.06 L 418.31 349.05 M 420.89 353.06 L 425.18 349.55 M 426.47 349.73 C 418.52 348.82 410.38 348.82 402.44 349.73 L 399 347.52 C 409.17 346 419.74 346 429.9 347.52 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-180,414.5,360.5)"/>
		<path d="M 494.32 299.83 L 496.57 313.12 C 497 315.08 495.82 317.03 493.56 318.11 C 485.84 319 477.98 319 470.26 318.11 C 468.01 317.03 466.83 315.08 467.26 313.12 L 469.51 299.83 C 469.94 298.36 472.09 297.22 474.77 297.06 L 489.05 297.06 C 491.73 297.22 493.88 298.36 494.32 299.83 Z M 474.16 297.06 L 470.29 293.55 M 478.45 297.06 L 477.16 293.05 M 483.6 297.06 L 485.31 293.05 M 487.89 297.06 L 492.18 293.55 M 493.47 293.73 C 485.52 292.82 477.38 292.82 469.44 293.73 L 466 291.52 C 476.17 290 486.74 290 496.9 291.52 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(90,481.5,304.5)"/>
		<path d="M 317.32 299.83 L 319.57 313.12 C 320 315.08 318.82 317.03 316.56 318.11 C 308.84 319 300.98 319 293.26 318.11 C 291.01 317.03 289.83 315.08 290.26 313.12 L 292.51 299.83 C 292.94 298.36 295.09 297.22 297.77 297.06 L 312.05 297.06 C 314.73 297.22 316.88 298.36 317.32 299.83 Z M 297.16 297.06 L 293.29 293.55 M 301.45 297.06 L 300.16 293.05 M 306.6 297.06 L 308.31 293.05 M 310.89 297.06 L 315.18 293.55 M 316.47 293.73 C 308.52 292.82 300.38 292.82 292.44 293.73 L 289 291.52 C 299.17 290 309.74 290 319.9 291.52 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(-90,304.5,304.5)"/>
		<path d="M 70 400 Q 70 400 150 400" fill="none" stroke="#b3b3b3"/>
		<path d="M 0 240 Q 0 240 0 160" fill="none" stroke="#b3b3b3"/>
		<rect height="70" width="196" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" x="94" y="60"/>
		<rect height="70" width="130" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" transform="rotate(90,553,117)" x="488" y="82"/>
		<rect height="70" width="130" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" x="64" y="270"/>
		<rect height="70" width="130" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" x="324" y="270"/>
	</g>
</svg>
        */}


    </div>
  );
}

export default App;
