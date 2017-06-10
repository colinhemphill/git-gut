[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url]

# Git Gut: Code Dangerously

## What is it?

Want to add a little danger to your coding life? Need something to keep you on your toes during a long work day? Are you a terrible person?

If you said "yes" to any of the above, Git Gut might be just what you were looking for.

If you accidentally type the command `gut` in your terminal instead of `git`, your intended Git command will be completely ignored. Instead, all of your remote repositories will be gutted back to the initial commit! It's quite a handy tool!

## How do I use it?

```
npm install -g git-gut
```

Then just use Git like usual. One of these days, you'll end up using Git Gut instead!

## Why? Just, why?

Since the letters are right next to each other, I found myself accidentally typing in `gut` when I meant to write `git`. I thought it would be funny if the `gut` command actually did something. What better thing for `gut` to do than to completely gut the repository you were working on!

## DISCLAIMER

This project is meant to be a joke. Seriously. It's incredibly dangerous. Do not use it.

I am not responsible for any accidental damage or loss of Git repository due to the usage of this command line tool.

## CHANGELOG

- 0.1.2 Run a `git gc` command after the push, just to clean out as many files as we can ;)
- 0.1.1 Dependency updates.
- 0.1.0 Initial release. In this version, Git Gut will hard reset your repository to the initial commit, then force push the new version to all remote repositories.

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://github.com/colinhemphill/git-gut/blob/master/LICENSE
[npm-downloads-image]: http://img.shields.io/npm/dm/git-gut.svg?style=flat-square
[npm-url]: https://npmjs.org/package/git-gut
[npm-version-image]: http://img.shields.io/npm/v/git-gut.svg?style=flat-square
