<?php

namespace App\Http\Controllers;

use App\Mail\sendemails;
use App\Models\campaign;
use App\Models\country;
use App\Models\inviteduser;
use App\Models\subscriber;
use App\Models\tags;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;

class EmailmarketingController extends Controller
{
    public function createtag(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $tag = new tags();
        $tag->business_id = Auth::user()->business_id;
        $tag->name = $request->name;
        $tag->created_by = Auth::user()->id;
        $tag->save();
        if ($tag->save()) {
            return redirect('viewtag')->with('success', 'Tags created successfully');
        }

    }

    //for viewing tags
    public function viewtag()
    {
        $tag = tags::where('business_id', auth::user()->business_id)->with("user")->get();
        return view('emailmarketing.viewtags', compact('tag'));
    }

    //for subscriber
    public function addsubsc()
    {
        $tag = tags::where('business_id', Auth::user()->business_id)->get();
        $country = country::all();

        return view('emailmarketing.addsubscriber', compact('tag', 'country'));
    }

    public function createsubscriber(Request $request)
    {

        $request->validate([
            'email' => 'required|email|unique:subscribers',
            'fname' => ['required'],
            'lname' => ['required'],
            'country' => ['required'],
            'state' => ['required'],
            'phone' => 'required|min:11',
            'dob' => ['required'],
            'tag' => ['required'],
        ]);

        $subscrib = new subscriber();
        $subscrib->business_id = auth::user()->business_id;
        $subscrib->email = $request->email;
        $subscrib->fname = $request->fname;
        $subscrib->lname = $request->lname;
        $subscrib->country = $request->country;
        $subscrib->state = $request->state;
        $subscrib->phone = $request->phone;
        $subscrib->dob = $request->dob;
        $subscrib->tag = $request->tag;
        $subscrib->save();
        if ($subscrib->save()) {
            return redirect()->back()->with('status', "Subscriber successfully addedd");
        }

    }

    public function viewsubscriber()
    {
        $subscrib = subscriber::where('business_id', Auth::user()->business_id)->get();
        return view('emailmarketing.viewsubscriber', compact('subscrib'));
    }

    //for campaign

    public function createcampaign(Request $request)
    {

        $request->validate([
            'title' => 'required',
            'recipient' => 'required',
            'from' => 'required',
            'subject' => 'required',
            'content' => 'required',
        ]);

        $camp = new campaign();
        $camp->business_id = auth::user()->business_id;
        $camp->title = $request->title;
        $camp->recipient = $request->recipient;
        $camp->from = $request->from;
        $camp->subject = $request->subject;
        $camp->content = $request->content;
        $camp->save();
        if ($camp->save()) {
            return redirect()->back()->with('status', "Campaign successfully created");

        }

    }

    public function viewcamp()
    {
        $camp = campaign::where('business_id', auth::user()->business_id)->get();
        return view('emailmarketing.viewcampaign', compact('camp'));
    }

    public function inviteuser(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->business_id = Auth::user()->business_id;
        $user->password = Hash::make($request->email);
         $user->save();

        $invited = new inviteduser();
        $invited->user_id = Auth::user()->id;
        $invited->name = $request->name;
        $invited->email = $request->email;
        // $invited->save();

        if ($invited->save()) {

            $mailData = [
                'content' => 'You have been Invited to collaborate with a friend in our workspace by' . ' ' . Auth::user()->name . ' '
                . 'login to your account using the following details',
                'email' => $request->email,
                'password' => $request->email,
                'dashboard-link' => 'http://localhost:8000/home/'.Auth::user()->id
            ];

            Mail::to($request->email)->send(new sendemails($mailData));

            return redirect()->back()->with('success', 'You have Successfully Invited' . ' ' . $request->email . ' ' . 'To your account and we have sent them an email notifying Them of your invitation!!');
        }

    }

    public function collaboration()
    {
        $invite = inviteduser::where('email', Auth::user()->email)->first();
        if ($invite) {
            $user = User::where('id', $invite->user_id)->get();
            return view('emailmarketing.collaborations', compact('invite', 'user'));
        } else {
            return redirect()->back()->with('success', 'No Account have invited you to Collaborate with them!!');
        }
    }
    public function collaborators()
    {
        $usersinvited = inviteduser::where('user_id', Auth::user()->id)->get();
        if ($usersinvited) {

            return view('emailmarketing.collaborators', compact('usersinvited'));
        } else {
            return redirect()->back()->with('success', 'You have not invited any Account to collaborate with you');

        }
    }

    //  public function visitaact($id)
    // {
        
    //     $user = User::find($id)->first();
    //     //   dd($user->id);
    //     return view('dashboard', compact('user'));

    // }

    // public function visitaccount(Request $request)
    // {
    //     Session::flush();

    //     Auth::logout();
    //     //  dd($request->password);
        
    //     if(Auth::attempt(['email'=>$request->email, 'password'=>$request->password])){
    //         return redirect('/home');
    //     }else{
    //         return redirect()->back()->with('success', 'you cant login');
    //     }
    // }
}
