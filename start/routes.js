'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Send Confirm Booking to Mail
Route.get('/bookings/:id/send/confirm', 'BookingController.sendConfirmBooking')

// Confirm Booking from Email link
Route.get('/bookings/:id/confirm', 'BookingController.confirmBooking')

// Login
Route.post('/user/login', 'AuthController.login').middleware('guest')

Route.group(() => {
  Route.get('/user/me', 'AuthController.me')

  Route.get('/booking/me', 'BookingController.getMyBooking').namespace('Booking')

}).middleware('auth')
