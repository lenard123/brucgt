<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Support\Facades\Route;


Route::get('/register', [RegisterController::class, 'register']);