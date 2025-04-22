<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('app');
});




<<<<<<< HEAD
use App\Http\Controllers\AuthController;
Route::post('/login',    [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
=======
// use App\Http\Controllers\AuthController;
// Route::post('/login',    [AuthController::class, 'login']);
// Route::post('/logout',   [AuthController::class, 'logout']);

>>>>>>> 0cb89ea070af09fbefd4d81c3b024f9a62f06cb0



use App\Http\Controllers\PatientController;
Route::resource('/patients', PatientController::class);

use App\Http\Controllers\RendezVousController;
Route::resource('/rendez_vouss', RendezVousController::class);

use App\Http\Controllers\CompteController;
Route::resource('/comptes', CompteController::class);

use App\Http\Controllers\DoctorController;
Route::resource('/doctors', DoctorController::class);

use App\Http\Controllers\LitController;
Route::resource('/lits', LitController::class);

use App\Http\Controllers\Auth\AuthController;

// Route::get('/login', fn() => view('auth.login'))->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('compte.login');
Route::post('/logout', [AuthController::class, 'logout'])->name('compte.logout');
// Route::post('/register', [CompteAuthController::class, 'register'])->name('compte.register');
