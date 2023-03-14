<?php

namespace App\Http\Controllers;

use App\Jobs\CommunicationJob;
use App\Mail\sendemails;
use App\Models\audithtrail;
use App\Models\Blacklisted;
use App\Models\campaign;
use App\Models\country;
use App\Models\inviteduser;
use App\Models\Spamreport;
use App\Models\subscriber;
use App\Models\tags;
use App\Models\template;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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
                'dashboard-link' => 'http://localhost:8000/home/' . Auth::user()->id,
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

    //for apis
    public function createtags(Request $request)
    {
        // if (Auth::check()) {
        $request->validate([
            'name' => 'required',
        ]);

        $tag = new tags();
        $tag->business_id = Auth::user()->business_id;
        $tag->name = $request->name;
        $tag->created_by = Auth::user()->id;
        $tag->save();
        if ($tag->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Tag has been created successfully!',

            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unable to create tag',

            ]);
        }
        // }else{
        //     return response()->json([
        //         'status' => false,
        //         'message' => 'Unauthorized',
        //     ]);
        // }
    }

    public function edittags($id)
    {
        if (Auth::check()) {

            $edit = tags::find($id);
            return response()->json([
                'status' => true,
                'message' => $edit,

            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unable to create tag',

            ]);
        }

    }

    public function updatetags(Request $request, $id)
    {
        if (Auth::check()) {
            $updatetags = tags::find($id);
            if (tags::where('business_id', Auth::user()->business_id)) {
                $updatetags->name = $request->name;
                $updatetags->update();

                if ($updatetags->update()) {
                    return response()->json([
                        'status' => true,
                        'message' => 'You successfully updated your tag',
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'message' => 'Unable to update your tag',
                    ]);
                }
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'You are not authorizr to carry out this action',
                ]);
            }

        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unable to create tag',

            ]);
        }
    }

    public function viewtags()
    {
        if (Auth::check()) {
            $tag = tags::where('business_id', auth::user()->business_id)->with("user")->get();
            return response()->json([
                'status' => true,
                'message' => $tag,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function addsubscrib(Request $request)
    {
        // if(Auth::check()){
        $request->validate([
            'email' => 'required',
            'fname' => ['required'],
            'lname' => ['required'],
            'country' => ['required'],
            'state' => ['required'],
            'phone' => ['required'],
            'dob' => ['required'],
            'tag' => ['required'],
        ]);
        $duplicate = subscriber::where('email', $request->email)->where('phone', $request->phone)->exists();

        $subscrib = new subscriber();
        $subscrib->business_id = Auth::user()->business_id;
        $subscrib->email = $request->email;
        $subscrib->fname = $request->fname;
        $subscrib->lname = $request->lname;
        $subscrib->country = $request->country;
        $subscrib->state = $request->state;
        $subscrib->phone = $request->phone;
        $subscrib->dob = $request->dob;
        $subscrib->tag = $request->tag;
        if ($duplicate) {
            return response()->json([
                'status' => false,
                'message' => 'Email or phone number already exist',
            ]);
        } else {
            $subscrib->save();
            if ($subscrib->save()) {
                return response()->json([
                    'status' => true,
                    'message' => 'Subscriber created successfully',
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Unable to create Subscriber',
                ]);
            }
        }

        // }else{
        //     return response()->json([
        //         'status' => false,
        //         'message' => 'Unauthorized',
        //     ]);
        // }
    }

    public function viewsubscribers()
    {
        if (Auth::check()) {
            $subscrib = subscriber::where('business_id', Auth::user()->business_id)->where('status', 1)->get();
            if ($subscrib) {
                return response()->json([
                    'status' => true,
                    'message' => $subscrib,
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'No body has subscribe from your website',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function totalsubscriber()
    {
        if (Auth::check()) {
            $totalsubscrib = subscriber::where('business_id', Auth::user()->business_id)->where('status', 1)->count();
            return response()->json([
                'status' => true,
                'message' => $totalsubscrib,
            ]);

        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function viewunsubscribers()
    {
        if (Auth::check()) {
            $subscrib = subscriber::where('business_id', Auth::user()->business_id)->where('status', 0)->get();
            if ($subscrib) {
                return response()->json([
                    'status' => true,
                    'message' => $subscrib,
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'No body has unsubscribe from your website',
                ]);
            }

        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function createcampaigns(Request $request)
    {
        if (Auth::check()) {
            $request->validate([
                'tag_id' => 'required',
                'content' => 'required',
                'content_type' => 'required',
                'schedule_date' => 'required',
                'status' => 'required',
            ]);

            $camp = new campaign();
            $camp->business_id = Auth::user()->business_id;
            $camp->tag_id = $request->tag_id;
            $camp->title = $request->title;
            // $camp->receipient = $request->receipient;
            $camp->reply_to = $request->reply_to;
            $camp->from_name = $request->from_name;
            $camp->from_email = $request->from_email;
            $camp->subject = $request->subject;
            $camp->content = $request->content;
            $camp->content_type = $request->content_type;
            $camp->schedule_date = $request->schedule_date;
            $camp->status = $request->status;

            $camp->save();
            if ($camp->save()) {

                //Do not remove
                $data['campaign'] = $camp;
                $data['subscribers'] = Subscriber::where('tag_id', $camp->tag_id )->get();
                CommunicationJob::dispatch($data);

                //do not remove ends
                
                return response()->json([
                    'status' => true,
                    'message' => 'Campgn created Successully!',
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Unable to create campaign',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function viewcamps()
    {
        if (Auth::check()) {
            $camp = campaign::where('business_id', auth::user()->business_id)->get();
            return response()->json([
                'status' => true,
                'message' => $camp,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function inviteusers(Request $request)
    {
        if (Auth::check()) {
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
                    'dashboard-link' => 'http://localhost:8000/home/' . Auth::user()->id,
                ];

                Mail::to($request->email)->send(new sendemails($mailData));
                return response()->json([
                    'status' => true,
                    'message' => 'You have Successfully Invited' . ' ' . $request->email . ' ' . 'To your account and we have sent them an email notifying Them of your invitation!!',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }

    }
    public function collaborations()
    {
        if (Auth::check()) {
            $invite = inviteduser::where('email', Auth::user()->email)->first();
            if ($invite) {
                $user = User::where('id', $invite->user_id)->get();
                return response()->json([
                    'status' => true,
                    'message' => $user,
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'success' => 'No Account have invited you to Collaborate with them!!',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }

    }

    public function collaborator()
    {
        if (Auth::check()) {
            $usersinvited = inviteduser::where('user_id', Auth::user()->id)->get();
            if ($usersinvited) {

                return response()->json([
                    'status' => true,
                    'message' => $usersinvited,
                ]);

            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'You have not invited any Account to collaborate with you',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }
    //for spamreports

    public function create_spamreport(Request $request)
    {
        if (Auth::check()) {
            $request->validate([
                'email' => 'required',
            ]);

            $spam = new Spamreport();
            $spam->business_id = Auth::user()->business_id;
            $spam->email = $request->email;
            $spam->save();
            if ($spam->save()) {
                return response()->json([
                    'status' => true,
                    'message' => 'You have Successully Reported this email!',
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'Unable to report this email for spam!',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function list_spamreport()
    {
        if (Auth::check()) {
            $spamrep = Spamreport::where('business_id', auth::user()->business_id)->latest()->get();
            if ($spamrep) {
                return response()->json([
                    'status' => true,
                    'message' => $spamrep,
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'You have not reported the email for spam',
                ]);
            }

        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function blasklisted(Request $request)
    {
        if (Auth::check()) {
            $request->validate([
                'email' => 'required',
            ]);

            $blacklisted = new Blacklisted();

            $blacklisted->business_id = Auth::user()->business_id;
            $blacklisted->email = $request->email;

            $blacklisted->save();
            if ($blacklisted->save()) {
                return response()->json([
                    'status' => true,
                    'message' => 'You have Successully Blacklisted this email!',
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'Unable to Blacklist this email!',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function viewblacklisted()
    {
        if (Auth::check()) {
            $viewblacklist = Blacklisted::where('business_id', Auth::user()->business_id)->latest()->get();
            if ($viewblacklist) {
                return response()->json([
                    'status' => true,
                    'message' => $viewblacklist,
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'You have not blacklisted any email',
                ]);
            }

        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    //for activities log
    public function addactivitylog(Request $request)
    {
        if (Auth::check()) {

            $activitylog = new audithtrail();
            $activitylog->user_id = Auth::user()->id;
            $activitylog->business_id = Auth::user()->business_id;
            $activitylog->ip_address = $request->ip();
            // dd($activitylog->ip_address);
            $activitylog->device = $request->header('User-Agent');
            $activitylog->action = $request->action;
            $activitylog->save();
            if ($activitylog->save()) {
                return response()->json([
                    'status' => true,
                    'message' => 'Activity log successfully saved',
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'Unable to save Activity log',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function viewactivitylog()
    {
        if (Auth::check()) {
            $viewactivitylog = audithtrail::where('business_id', Auth::user()->business_id)->latest()->get();
            if ($viewactivitylog) {
                return response()->json([
                    'status' => true,
                    'message' => $viewactivitylog,
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'You dont have any activity log yet',
                ]);
            }

        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function generaltemp()
    {
        if (Auth::check()) {
            $viewagenetem = template::where('template_type', 'general')->latest()->get();
            if ($viewagenetem) {
                return response()->json([
                    'status' => true,
                    'message' => $viewagenetem,
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'No template have been uploaded yet yet',
                ]);
            }

        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function usertemplate(Request $request)
    {
        if (Auth::check()) {

            $usertemplate = new template();
            $usertemplate->business_id = Auth::user()->business_id;
            $usertemplate->template_name = $request->template_name;
            $usertemplate->template_describ = $request->template_describ;
            $usertemplate->design_content = $request->design_content;
            $usertemplate->design_html = $request->design_html;
            $usertemplate->template_type = $request->template_type;
            $usertemplate->save();
            if ($usertemplate->save()) {
                return response()->json([
                    'status' => true,
                    'message' => 'Your template has been saved!',
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'Unable to save Template',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function viewusertemp()
    {
        if (Auth::check()) {
            $viewausertem = template::where('business_id', Auth::user()->business_id)->latest()->get();
            if ($viewausertem) {
                return response()->json([
                    'status' => true,
                    'message' => $viewausertem,
                ]);
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'You dont have any template yet',
                ]);
            }

        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

    public function subscribermail()
    {
        if (Auth::check()) {
            $subscrib = subscriber::where('business_id', Auth::user()->business_id)->where('status', 1)->get();
            if ($subscrib) {
                foreach($subscrib as $sub) {
                    return response()->json([
                        'status' => true,
                        'message' => $sub->email,
                    ]);
                }
                
            } else {
                return response()->json([
                    'status' => true,
                    'message' => 'Your email was not found in the subscriber list',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }

    }

    public function recentcamp()
    {
        if (Auth::check()) {
            $camp = campaign::where('business_id', auth::user()->business_id)->latest()->take(1)->get();
            return response()->json([
                'status' => true,
                'message' => $camp,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized',
            ]);
        }
    }

}
