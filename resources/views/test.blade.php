@extends('layouts.app')

@section('content')

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>

    <form method="POST" action="{{ route('bulksubscribe') }}">
        @csrf


        <input type="file" name="csvfile">
        {{-- <input type="text" name="tag_id" class="form-control mb-5 w-50" placeholder="new"> --}}
        <button type="submit" class="form-control btn btn-primary w-50">upload</button>
    </form>
</body>
<html>
