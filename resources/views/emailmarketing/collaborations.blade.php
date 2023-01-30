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
                <th scope="col">Who invited You to Collaborate</th>
                {{-- <th scope="col">Created at</th> --}}
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            @if ($user->count() > 0)
                @foreach ($user as $users)
                    <tr>
                        <th scope="row">{{ $users->name }}</th>
                        {{-- <td>{{ $tags->created_at }}</td> --}}
                        <td><a  type="button" href="{{ url('visitacct/'. $users->id) }}">Visit Account</a></td>
                    </tr>
                @endforeach
             @else
             <p>No Account have invited you to Collaborate with them!!</p>   
            @endif
        </tbody>
    </table>

@endsection
