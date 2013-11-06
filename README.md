api-testing
================

A repository that holds a simple AngularJS app to test our APIs


## Requirements
In order to use the template you will need the following:
- NodeJS
- Bower

## Installation
In the folder you cloned the repo perform the following:

```sh
$ sudo npm -g install simple-http-server
$ bower install
$ nserver -p {port}
```

## Example
Here is an example of how I tested the Greenkeeper-API:
- Host: localhost:8181
- Path: events
- httpMethod: POST
- Request data:
```
{
    "title": "tasks.titles.watering.repair_sprinkler",
    "start": 1383886800,
    "end": 1383890400,
    "all_day": false,
    "task_id": 48,
    "club_id": 1
}
```
