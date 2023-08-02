<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EmailmarketingController;

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

Route::get('dashboard/', function () {
    return view('dashboard');
});
Route::post('bulksubscribe', [EmailmarketingController::class, 'bulksubscribe'])->name('bulksubscribe');

// Route::get('addtag', function () {
//     return view('emailmarketing.addtags');
// });

// Route::get('adduser', function () {
//     return view('emailmarketing.adduser');
// });

// Route::get('addcamp', function () {
//     return view('emailmarketing.createcampaign');
// });

Route::post('forgetpas', [UserController::class, 'forgetpassword']);
Route::post('registering', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
// Route::get('viewtags', [EmailmarketingController::class, 'viewtags'])->name('viewtags');


Route::group(['middleware' => 'auth:sanctum'], function (){
    Route::post('changepassword', [UserController::class, 'changepass']);
    Route::post('createtags', [EmailmarketingController::class, 'createtags'])->name('createtags');
    Route::post('addsubscrib', [EmailmarketingController::class, 'addsubscrib'])->name('addsubscrib');
    // Route::post('createsubscriber', [EmailmarketingController::class, 'createsubscriber'])->name('createsubscriber');
    Route::get('viewtags', [EmailmarketingController::class, 'viewtags'])->name('viewtags');
    Route::get('edittags/{id}', [EmailmarketingController::class, 'edittags'])->name('edittags');
    Route::put('updatetags/{id}', [EmailmarketingController::class, 'updatetags'])->name('updatetags');
    Route::get('viewsubscrib', [EmailmarketingController::class, 'viewsubscribers'])->name('viewsubscrib');
    Route::get('unsubscribe', [EmailmarketingController::class, 'viewunsubscribers'])->name('unsubscribe');
    Route::post('createcampaigns', [emailmarketingController::class, 'createcampaigns'])->name('createcampaigns');
    Route::get('viewcamps', [emailmarketingController::class, 'viewcamps'])->name('viewcamps');
    Route::post('inviteusers', [EmailmarketingController::class, 'inviteusers'])->name('inviteusers');
    Route::get('collaborations', [EmailmarketingController::class, 'collaborations'])->name('collaborations');
    Route::get('collaborators', [EmailmarketingController::class, 'collaborator'])->name('collaborators');
    Route::post('create_spamreport', [EmailmarketingController::class, 'create_spamreport'])->name('create_spamreport');
    Route::get('list_spamreport', [EmailmarketingController::class, 'list_spamreport'])->name('list_spamreport');
    Route::post('blasklisted', [EmailmarketingController::class, 'blasklisted'])->name('blasklisted');
    Route::get('viewblacklisted', [EmailmarketingController::class, 'viewblacklisted'])->name('viewblacklisted');
    Route::get('totalsubscriber', [EmailmarketingController::class, 'totalsubscriber'])->name('totalsubscriber');
    // for activities log
    Route::post('addactivitylog', [EmailmarketingController::class, 'addactivitylog'])->name('addactivitylog');
    Route::get('viewactivitylog', [EmailmarketingController::class, 'viewactivitylog'])->name('viewactivitylog');
    //for api for general and user template
    Route::get('generaltemp', [EmailmarketingController::class, 'generaltemp'])->name('generaltemp');
    Route::post('usertemplate', [EmailmarketingController::class, 'usertemplate'])->name('usertemplate');
    Route::get('viewusertemp', [EmailmarketingController::class, 'viewusertemp'])->name('viewusertemp');
    //for list subscriber email
    Route::get('subscribermail', [EmailmarketingController::class, 'subscribermail'])->name('subscribermail');
    //for recent campaigns
    Route::get('recentcamp', [EmailmarketingController::class, 'recentcamp'])->name('recentcamp');

    Route::post('bulksubscribe', [EmailmarketingController::class, 'bulksubscribe'])->name('bulksubscribe');


});

