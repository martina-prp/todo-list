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
    var id = 1;

    var tempData = localStorage.getItem('task-manager');
      if (tempData) {
        console.log(tempData);
        data = JSON.parse(tempData);
        id = data.length + 1;
      }
    var newTask = new Task(taskTitle, taskDate, taskDescription, taskStarred, id);
    data.push(newTask);
    localStorage.setItem('task-manager', JSON.stringify(data));
  });

  $('.task-options').on('click', function(event) {
    event.preventDefault();
    console.log($(this).parent().attr('id'));
  });

  function Task(title, date, description, star, id) {
    this.title = title;
    this.date = date;
    this.description = description;
    this.star = star;
    this.id = id;

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

    this.getId = function() {
      return this.id;
    }
  }

  var counter = (function() {
  var count = 0;

  return function() {
    count = count + 1;
    return count;
  }
} () );
});
