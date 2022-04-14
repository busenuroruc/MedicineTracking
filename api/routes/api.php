<?php

use App\Http\Controllers\PatientController;
use App\Http\Controllers\MedicineController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('api')->get('/patient', [PatientController::class, 'index']);
Route::middleware('api')->post('/patient/new', [PatientController::class, 'store']);
Route::middleware('api')->post('/patient/update/{id}', [PatientController::class, 'update']);
Route::middleware('api')->delete('/patient/delete/{id}', [PatientController::class, 'destroy']);

Route::middleware('api')->get('/medicine', [MedicineController::class, 'index']);
Route::middleware('api')->post('/medicine/new', [MedicineController::class, 'store']);
Route::middleware('api')->post('/medicine/update/{id}', [MedicineController::class, 'update']);
Route::middleware('api')->delete('/medicine/delete/{id}', [MedicineController::class, 'destroy']);
