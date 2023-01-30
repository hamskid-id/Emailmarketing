@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                @if (Session::has('success'))
                    <div class="alert alert-success">
                        <p>{{ Session::get('success') }}</p>
                    </div>
                @endif
                {{-- <div class="card"> --}}
                {{-- <div class="card-header">{{ __('Add a Subscriber') }}</div> --}}
                <h2 class="text-center mb-5"><strong><b>Collaborator</b></strong></h2>
                {{-- <div class="card-body"> --}}
                <form method="POST" action="{{ url('visitaccount/'. $user->id) }}">
                    @csrf

                    <input type="hidden" name="id" value="{{ $user->id }}">

                    <div class="row mb-3">
                        <label for="email" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Email') }}</b></label>

                        <div class="col-md-12">
                            <input id="email" type="text" class="form-control @error('email') is-invalid @enderror"
                                name="email" value="{{ $user->email }}" required autocomplete="email" autofocus>

                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                     <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" value="{{ $user->password }}" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                    <div class="row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <button type="submit" class="btn btn-primary">
                                {{ __('Visit') }}
                            </button>
                        </div>
                    </div>
                </form>
                {{-- </div> --}}
                {{-- </div> --}}
            </div>
        </div>
    </div>
@endsection
