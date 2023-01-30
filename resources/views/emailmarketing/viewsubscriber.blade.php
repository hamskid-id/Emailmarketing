@extends('layouts.app')

@section('content')
    <a href="{{ url('addsubsc') }}"><button class="btn btn-primary"> Add Subscriber</button></a>


    <table class="table">
        <thead>
            <tr>
                <th scope="col">Email</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Country</th>
                <th scope="col">State</th>
                <th scope="col">Phone</th>
                <th scope="col">DOB</th>
                <th scope="col">Tag</th>
            </tr>
        </thead>
        <tbody>
        @foreach($subscrib as $subscribs)
             <tr>
                <th scope="row">{{ $subscribs->email }}</th>
                <td>{{ $subscribs->fname }}</td>
                <td>{{ $subscribs->lname }}</td>
                <td>{{ $subscribs->country }}</td>
                <td>{{ $subscribs->state }}</td>
                <td>{{ $subscribs->phone }}</td>
                <td>{{ $subscribs->dob }}</td>
                <td>{{ $subscribs->tag }}</td>
            </tr>
        @endforeach
           
        </tbody>
    </table>
    @endsection