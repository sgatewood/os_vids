function echo_changed_file(){
  echo $file | grep -ohE "lecture_[0-9]{1,2}" | head -1
}

function wait_then_run(){

	fswatch . | (while read file; do python3 make.py `echo_changed_file $file` && exit; done) || exit
	# ./refresh_chrome.sh
	afplay /System/Library/Sounds/Hero.aiff
	# ls /System/Library/Sounds/
	echo restarting
	wait_then_run $@
}
wait_then_run $@
