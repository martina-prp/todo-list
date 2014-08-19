'use strict';

$(document).ready(function() {

  var tempData = localStorage.getItem('task-manager'),
    data = [];
  if (tempData) {
    data = JSON.parse(tempData);
    var taskTemp = $('#task-tpl').html();
    var template = Handlebars.compile(taskTemp);
    var html = template({tasks: data});
    $('.task-table').append(html);
  }

  $('.create-task').on('click', function(event) {
    event.preventDefault();
    var taskTitle = $('.task-title').val();
    var taskDate = $('.task-date').val();
    var taskDescription = $('.task-description').val();
    var taskStarred = $('input[name="task-starred"]').is(':checked');

    var newTask = new Task(taskTitle, taskDate, taskDescription, taskStarred);
    var tempData = localStorage.getItem('task-manager');
      if (tempData) {
        console.log(tempData);
        data = JSON.parse(tempData);
      }
      data.push(newTask);
      localStorage.setItem('task-manager', JSON.stringify(data));
  });

  function Task(title, date, description, star) {
    this.title = title;
    this.date = date;
    this.description = description;
    this.star = star;

    this.getTitle = function() {
      return this.title;
    }

    this.getDate = function() {
      return this.date;
    }

    this.getDescription = function() {
      return this.description;
    }

    this.getStar = function() {
      return this.star;
    }
  }
});
