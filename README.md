# HRI Game - Robot Olympics

Created by Matthew Tang

## Technologies used
* Frontend: ReactJS
    * Theme: Material UI
    * Deployment: Github pages
* Backend: NodeJS
    * Deployment: Heroku (https://hri-game-backend.herokuapp.com)

## Frontend

Class Heirarchy Structure:

```mermaid
graph LR
    A2[App.js]
    A2 --> A3[NavBar.js]
    A3 --> B{Game.js}
    B -->|intro| C1(Intro.js)
    B -->|chooseRoom| C2(RoomOptions.js)
    B -->|humanVideo| C3(HumanVideo.js)
    B -->|robotVideo| C4(RobotVideo.js)
    B -->|humanVideo| C5(End.js)
    C2 --> |showHist| D1(History.js)
    C5 --> |showHist| D1(History.js)
    C5 --> |submit| D2[Thank you!]
    D[config.js] --> B
    E[robot_actions.js] --> D
```

Game Structure Flow:
```mermaid
graph TB
    subgraph Intro
    A1[Landing Intro] -->A2[Olympics Intro]
    A2 --> A3[Name/Rules]
    end
    subgraph Game - 5 Stages
    A3 --> B1(Room Options)
    B1 -->|Human chooses| B2(Choice explanation)
    B2 --> B3(Human Video)
    B3 --> |Robot chooses | B4(Robot Video)
    B4 --> B5(Remarks on robot choice)
    B5 --> |Repeat x5| B1
    end
    subgraph Debrief
    B5 --> |End of 5th round | C1(End Questionnaire)
    C1 --> |submit| D2[Thank you!]
    end
```


## Backend
The frontend sends data to the backend to store in a google sheet using google sheets API. I used the Google-Spreadsheet Node package for this which can be found [here](https://www.npmjs.com/package/google-spreadsheet).

Data is stored in [this](https://docs.google.com/spreadsheets/d/1aVNGZKTV20RuaPTpeTE8UQ0p_gevxrxDKdD0-2HUS5U/edit#gid=0) spreadsheet.

## Backend Endpoints
Server accepts only POST requests. Do not send arrays as parameters or the backend will be unable to parse them.

### raw
Stores data progress in "raw" sheet to avoid losing partial responses.
###### Endpoint
```
https://hri-game-backend.herokuapp.com/raw
```
###### Body
- **<code>JSON</code> payload** — JSON containing data to store in spreadsheet. See example below.
- Content-Type: `application/x-www-form-urlencoded`

###### Return Format
- None

###### Example Body
```
{ 
    Name: 'Name',
    ID: 22496,
    FirstTime: true,
    Date: '7-30-2019 14:3:12',
    History: '1_2',
    TotalScore: '3.0',
    H0: 'Response here',
    R0: 'Response here',
    ...
    SiteVersion: 1.1
}
```

---

### complete
Stores data progress in "complete" sheet to avoid losing partial responses. Similar body/return as above
###### Endpoint
```
https://hri-game-backend.herokuapp.com/complete
```

###### Example Body
```
{ 
    Name: 'Name',
    ID: 22496,
    FirstTime: true,
    Date: '7-30-2019 14:3:12',
    History: '1_2',
    TotalScore: '3.0',
    H0: 'Response here',
    R0: 'Response here',
    ...
    D1: 'Debrief'
    ...
    A1: 'Slider1'
    ..
    SiteVersion: 1.1
}
```

---

### Google Sheets API
I have a google cloud service account linked to the output spreadsheet (hri-game-admin@hri-game.iam.gserviceaccount.com). Please contact me (matthewtang@berkeley.edu) if you need these credentials. Credentials must be placed in the `credentials.json` file in the root folder of the server. Credentials should never be stored on github for security concerns.

Google sheets API is free so there is no practical concern for call rate-limiting.

The backend currently runs on a Heroku server using a free web dyno using my free credits. It doesn't need to run 24/7 which means I can maintain it easily without incurring charges (it can idle when nobody is using the site since data storage calls are asynchronous).

