<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Support\Facades\Route;


Route::post('/register', [RegisterController::class, 'register']);