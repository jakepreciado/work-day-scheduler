# work-day-scheduler
A simple calendar for scheduling your work day. This project uses real time through dayjs() and dynamically updates the page through time, or in this case, hours of the work day. It features save buttons that save user input to localstorsge which gives the user the ability to not lose their schedule. (Persistent data is stored and loaded)

Gray timeblocks indicate the past.
Red timeblocks indicate the present.
Green timeblocks indicate the future.

## Your Task

Create a simple calendar application that allows a user to save events for each hour of a typical working day (9am&ndash;5pm) by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Example

<img src="./assets/images/work-day-scheduler-Complete.jpg" alt="Screenshot of final product workday scheduler.">

## Link
A link to the deployed application: https://jmpre28.github.io/work-day-scheduler/
