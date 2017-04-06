#! /usr/bin/env node

var shell = require('shelljs');
var asciiArt = require('ascii-art');
var async = require('async');

var userArgs = process.argv.slice(2);
var commands = userArgs.join(' ');

if (!shell.which('git')) {
  shell.echo('Sorry, git-gut requires git in order to gut your git');
  shell.exit(1);
}

asciiArt.font('GIT GUTTED', 'Doom', function (rendered) {
  console.log(asciiArt.style(rendered, 'red_bg+white+bold', true));
});

var remotes, initialCommitRef;
shell.exec('git remote', function (code, stdout, stderr) {
  remotes = stdout.trim().split('\n');

  shell.exec('git rev-list --max-parents=0 HEAD', function (code, stdout, stderr) {
    initialCommitRef = stdout.trim();

    async.each(remotes, function (remote, callback) {
      var resetCommand = 'git reset --hard ' + initialCommitRef;
      shell.exec(resetCommand, function (code, stdout, stderr) {
        var pushCommand = 'git push -u ' + remote + ' -f';
        shell.exec(pushCommand, function (code, stdout, stderr) {
          return callback();
        });
      });
    }, function (err) {
      console.log('done with all gutting');
      shell.exit(1);
    });

  });
});
