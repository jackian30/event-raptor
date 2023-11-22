# Issue Description

When using `npm run build`, there is an error message
regarding the use of @import in the css files.

The development system is currently using Node v16.20.1 and NPM 8.19.4.

# Steps to reproduce

1. Install Laravel 10: `composer create-project laravel/laravel issue`
2. `cd issue`
3. `composer require filament/filament filament/spatie-laravel-media-library-plugin`
4. Unzip resolve.zip into the root folder, overwriting existing files.
5. `npm install`
6. `npm run build`

You should then see the error message.

Please resolve this so it works.

- Please time yourself - how long did it take you to resolve this?
- Explain what steps you had to take.
- Create a git patch file to show your solution.

Then submit the time it took to resolve, your explanation, and the patch file.
