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


use App\Http\Controllers\PatientController;
Route::resource('/patients', PatientController::class);
//--------------------------------------patient ----------------------------------------------
use App\Http\Controllers\RendezVousController;
Route::post('/rendez_vous', [RendezVousController::class, 'store']);
