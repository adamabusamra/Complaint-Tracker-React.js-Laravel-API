<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ComplaintController;

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

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/admin/approve/{id}', [ComplaintController::class, 'approve']);
Route::get('/admin/dismiss/{id}', [ComplaintController::class, 'dismiss']);

// Protected Routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::apiResource('/complaints', ComplaintController::class);
    Route::get('/authinticate', function(Request $request){
        return $request;
    });

    Route::post('/logout', [AuthController::class, 'logout']);
});

