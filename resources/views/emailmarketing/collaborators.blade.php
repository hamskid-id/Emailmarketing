@extends('layouts.app')

@section('content')
    {{-- <a href="{{ url('addtag') }}"><button class="btn btn-primary">Create Tag</button></a> --}}

    {{-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Create Tag
    </button> --}}

    @if (Session::has('success'))
        <div class="alert alert-success">
            <p>{{ Session::get('success') }}</p>
        </div>
    @endif

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                {{-- <th scope="col">Action</th> --}}
            </tr>
        </thead>
        <tbody>
            @if ($usersinvited->count() > 0)
                @foreach ($usersinvited as $usersinviteds)
                    <tr>
                        <th scope="row">{{ $usersinviteds->name }}</th>
                        <td>{{ $usersinviteds->email }}</td>
                        {{-- <td><a href="#">Visit Account</a></td> --}}
                    </tr>
                @endforeach
             @else
             <p>You have not invited any account to Collaborate with you!!</p>   
            @endif
        </tbody>
    </table>

@endsection
