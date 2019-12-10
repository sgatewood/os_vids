#!/bin/sh
exec <"$0" || exit; read v; read v; exec /usr/bin/osascript - "$@"; exit
delay 1

tell application "Google Chrome"
  activate
  # tell application "System Events"
  #   tell process "Google Chrome"
  #     keystroke "r" using {command down}
  #   end tell
  # end tell
end tell

# tell application "iTerm2" to activate
