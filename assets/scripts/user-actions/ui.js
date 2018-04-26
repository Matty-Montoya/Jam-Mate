'use strict '

const store = require('../store.js')

const signUpSuccess = function () {
  $('.status').text('You have successfully signed up! Please sign in!')
  setTimeout(() => $('.status').text(''), 2000)
  $('#myModal1').modal('toggle')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const signUpFailure = function () {
  $('.authmessage1').text('Please try again!')
  setTimeout(() => $('.authmessage1').text(''), 2000)
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const signInSuccess = function (data) {
  $('.status').text('You have successfully signed in!')
  setTimeout(() => $('.status').text(''), 2000)
  $('#myModal').modal('toggle')
  $('.sign-in').addClass('hidden')
  $('.sign-up').addClass('hidden')
  $('.change-password').removeClass('hidden')
  $('.sign-out').removeClass('hidden')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('#instrument-data').removeClass('hidden')
  $('#create-instrument-data').removeClass('hidden')
  $('.jumbotron').addClass('hidden')
  $('.status').removeClass('hidden')
  store.user = data.user
}

const signInFailure = function () {
  $('.authmessage').text('Please try again!')
  setTimeout(() => $('.authmessage').html(''), 5000)
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const changePasswordSuccess = function () {
  $('.status').text('You have successfully changed password!')
  setTimeout(() => $('.status').text(''), 2000)
  $('#myModal2').modal('toggle')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const changePasswordFailure = function () {
  $('.authmessage2').text('Please try again!')
  setTimeout(() => $('.authmessage2').text(''), 2000)
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const signOutSuccess = function () {
  $('.status3').text('You have signed out!')
  setTimeout(() => $('.status3').text(''), 2000)
  $('.sign-in').removeClass('hidden')
  $('.sign-up').removeClass('hidden')
  $('.change-password').addClass('hidden')
  $('.sign-out').addClass('hidden')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('#instrument-data').addClass('hidden')
  $('#create-instrument-data').addClass('hidden')
  $('.content').empty()
  $('.jumbotron').removeClass('hidden')
  $('.status').addClass('hidden')
  store.user = null
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
