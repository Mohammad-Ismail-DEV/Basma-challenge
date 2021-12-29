<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::post('add_customer', [CustomerController::class, 'add']);

Route::middleware('auth:sanctum')->group(function () {
	Route::get('user', [AuthController::class, 'user']);
	Route::post('logout', [AuthController::class, 'logout']);
	Route::get('average', [CustomerController::class, 'get_average']);
	Route::get('get_customer', [CustomerController::class, 'get']);
});
