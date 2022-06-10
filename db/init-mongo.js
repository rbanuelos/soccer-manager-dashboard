db.createUser(
  {
    user: "dt",
    pwd: "dt",
    roles: [{
      role: "readWrite",
      db: "soccer-manager-db"
    }]
  }
);

db = new Mongo().getDB("soccer-manager-db");

db.createCollection('tacticGroup', { capped: false });

db.tacticGroup.insert([
  {
    "name": "Template3vs3",
    "tactics": [
        {
            "sequence": 0,
            "elements": [
                {
                    "id": 550,
                    "name": "element 1",
                    "type": 0,
                    "index": 550,
                    "position": {
                        "x": 10,
                        "y": 10
                    },
                    "attributes": {
                        "arrow": "topLeft",
                        "number": 1,
                        "team": "team1"
                    }
                },
                {
                    "id": 733,
                    "name": "element 2",
                    "type": 0,
                    "index": 733,
                    "position": {
                        "x": 13,
                        "y": 13
                    },
                    "attributes": {
                        "arrow": null,
                        "number": 2,
                        "team": "team1"
                    }
                },
                {
                    "id": 977,
                    "name": "element 3",
                    "type": 0,
                    "index": 977,
                    "position": {
                        "x": 17,
                        "y": 17
                    },
                    "attributes": {
                        "arrow": "topLeft",
                        "number": 3,
                        "team": "team1"
                    }
                },
                {
                    "id": 1160,
                    "name": "element 4",
                    "type": 0,
                    "index": 1160,
                    "position": {
                        "x": 20,
                        "y": 20
                    },
                    "attributes": {
                        "arrow": null,
                        "number": 1,
                        "team": "team2"
                    }
                },
                {
                    "id": 1770,
                    "name": "element 5",
                    "type": 0,
                    "index": 1770,
                    "position": {
                        "x": 30,
                        "y": 30
                    },
                    "attributes": {
                        "arrow": "right",
                        "number": 2,
                        "team": "team2"
                    }
                },
                {
                    "id": 2380,
                    "name": "element 6",
                    "type": 0,
                    "index": 2380,
                    "position": {
                        "x": 40,
                        "y": 40
                    },
                    "attributes": {
                        "arrow": "right",
                        "number": 3,
                        "team": "team2"
                    }
                },
                {
                    "id": 245,
                    "name": "element 7",
                    "type": 1,
                    "index": 245,
                    "position": {
                        "x": 5,
                        "y": 5
                    },
                    "attributes": {
                        "arrow": "right",
                        "number": 3,
                        "team": "team2"
                    }
                }
            ]
        }
    ]
}
]);
