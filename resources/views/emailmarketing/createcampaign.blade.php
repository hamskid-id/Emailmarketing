@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                {{-- <div class="card"> --}}
                {{-- <div class="card-header">{{ __('Add a Subscriber') }}</div> --}}
                <h2 class="text-center mb-5"><strong><b>Create Campaign</b></strong></h2>
                {{-- <div class="card-body"> --}}
                <form method="POST" action="{{ route('createcampaign') }}">
                    @csrf

                    <div class="row mb-3">
                        <label for="title" class="col-md-6 mb-3" style="font-size:20px;"><b>{{ __('Title') }}</b></label>

                        <div class="col-md-12">
                            <input id="title" type="text" class="form-control @error('title') is-invalid @enderror"
                                name="title" value="{{ old('title') }}" required autocomplete="title">

                            @error('title')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="recipient" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Add Recipient') }}</b></label>

                        <div class="col-md-12">
                            <input id="recipient" type="text"
                                class="form-control @error('recipient') is-invalid @enderror" name="recipient"
                                value="{{ old('recipient') }}" required autocomplete="recipient">

                            @error('recipient')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="from" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Add From') }}</b></label>

                        <div class="col-md-12">
                            <input id="from" type="text" class="form-control @error('from') is-invalid @enderror"
                                name="from" value="{{ old('from') }}" required autocomplete="from">

                            @error('from')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="subject" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Subject') }}</b></label>

                        <div class="col-md-12">
                            <input id="subject" type="text" class="form-control @error('subject') is-invalid @enderror"
                                name="subject" value="{{ old('subject') }}" required autocomplete="subject">

                            @error('subject')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="content" class="col-md-6 mb-3"
                            style="font-size:20px;"><b>{{ __('Content') }}</b></label>

                        <div class="col-md-12">
                            <textarea id="content" type="text" class="form-control @error('content') is-invalid @enderror" cols="30" rows="10"
                                name="content" value="{{ old('content') }}" required autocomplete="content"></textarea>

                            @error('content')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    {{-- <textarea name="" id="" cols="30" rows="10"></textarea> --}}

                    <div class="row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <button type="submit" class="btn btn-primary">
                                {{ __('Create') }}
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
