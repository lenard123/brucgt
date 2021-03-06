<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Routes for authentication
require 'auth.php';

Route::get('/category', [CategoryController::class, 'index']);
Route::post('/category', [CategoryController::class, 'create'])->middleware('auth:sanctum', 'admin');

Route::get('/attribute', [AttributeController::class, 'index']);
Route::post('/attribute', [AttributeController::class, 'create'])->middleware('auth:sanctum', 'admin');

Route::any('/{path}', fn() => abort(404))->where('path', '(.*)');