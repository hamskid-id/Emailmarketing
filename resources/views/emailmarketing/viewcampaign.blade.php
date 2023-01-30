@extends('layouts.app')

@section('content')
    <a href="{{ url('addcamp') }}"><button class="btn btn-primary"> Create Campaign</button></a>


    <table class="table">
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Recipient</th>
                <th scope="col">From</th>
                <th scope="col">Subject</th>
                <th scope="col">Content</th>
            </tr>
        </thead>
        <tbody>
        @foreach($camp as $camps)
            <tr>
                <th scope="row">{{ $camps->title }}</th>
                <td>{{ $camps->recipient }}</td>
                <td>{{ $camps->from }}</td>
                <td>{{ $camps->subject }}</td>
                <td>{{ $camps->content }}</td>
            </tr>
        @endforeach
            
        </tbody>
    </table>
    @endsection
