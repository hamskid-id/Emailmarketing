@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                {{-- <div class="card"> --}}
                {{-- <div class="card-header">{{ __('Add a Subscriber') }}</div> --}}
                <h2 class="text-center mb-5"><strong><b>Add a Subscriber</b></strong></h2>
                {{-- <div class="card-body"> --}}
                <form method="POST" action="{{ route('createsubscriber') }}">
                    @csrf

                    <div class="row mb-3">
                        <label for="email" class="col-md-6 mb-3" style="font-size:20px;"><b>{{ __('Email') }}</b></label>

                        <div class="col-md-12">
                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                                name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="fname" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Firt Name') }}</b></label>

                        <div class="col-md-12">
                            <input id="fname" type="text" class="form-control @error('fname') is-invalid @enderror"
                                name="fname" value="{{ old('fname') }}" required autocomplete="fname">

                            @error('fname')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="lname" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Last Name') }}</b></label>

                        <div class="col-md-12">
                            <input id="lname" type="text" class="form-control @error('lname') is-invalid @enderror"
                                name="lname" value="{{ old('lname') }}" required autocomplete="lname">

                            @error('lname')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="country" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Select Country') }}</b></label>

                        <div class="col-md-12">
                            <select class="form-select" aria-label="Default select example" name="country" required>

                                @foreach ($country as $countrys)
                                    <option selected>Select Country</option>
                                    <option value="{{ $countrys->name }}">{{ $countrys->name }}</option>
                                @endforeach
                            </select>
                            @error('country')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="state" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('City/State') }}</b></label>

                        <div class="col-md-12">
                            <input id="state" type="text" class="form-control @error('state') is-invalid @enderror"
                                name="state" value="{{ old('state') }}" required autocomplete="state">

                            @error('state')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="phone" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Phone') }}</b></label>

                        <div class="col-md-12">
                            <input id="phone" type="number" class="form-control @error('phone') is-invalid @enderror"
                                name="phone" value="{{ old('phone') }}" required autocomplete="phone">

                            @error('phone')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="dob" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Birthday') }}</b></label>

                        <div class="col-md-12">
                            <input id="dob" type="date" class="form-control @error('dob') is-invalid @enderror"
                                name="dob" value="{{ old('dob') }}" required autocomplete="dob">

                            @error('dob')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="tags" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Select Or Create a Tag') }}</b></label>
                        @if ($tag->count() > 0)
                            <div class="col-md-12">
                                <select class="form-select" aria-label="Default select example" name="tag" required>

                                    @foreach ($tag as $tags)
                                        <option selected>Select Tag</option>
                                        <option value="{{ $tags->name }}">{{ $tags->name }}</option>
                                    @endforeach


                                </select>
                        @else
                                <h4><b><a href="{{ url('addtag') }}">You have not created any tag. Create a Tag</a></b>
                                </h4>
                                @error('tags')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        @endif
                    </div>

                    <div class="row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <button type="submit" class="btn btn-primary">
                                {{ __('Subscribe') }}
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
