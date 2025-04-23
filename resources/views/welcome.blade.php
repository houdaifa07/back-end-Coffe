<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        <!-- Styles / Scripts -->
        @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
            @vite(['resources/css/app.css', 'resources/js/app.js'])
        @else
            <style>
                /* Tailwind CSS styles here */
                @layer theme {
                    :root {
                        --font-sans: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif;
                        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
                        --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    }
                    /* Other base styles */
                }
            </style>
        @endif
    </head>
    <body>
        <div class="container">
            <h1>from view : welcome </h1>
            {{-- @if (@empty($list))
                    <div>data not found </div>
            @else 
                  @foreach ($list as $item)
                    <ul>
                        <li>{{$item }}</li>
                    </ul>
            @endforeach
          
        
            @endif
            @isset($list) 
                <div>yes </div> 
            @endisset --}}
           
            


        
        
             
        </div>  
    </body>
</html>
