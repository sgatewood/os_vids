import yaml,markdown
import os,sys

path = sys.argv[1]

print("Making " + path)

def get_attrs():
    return yaml.safe_load(open(path + "/" + path + ".yaml"))

def print_t(tab_level,*args,**kwargs):
    print("\t" * tab_level,end="",**kwargs)
    print(*args,**kwargs)

def print_video_tag(src,start,stop,file=sys.stdout):
    src = "%s#t=%s,%s" % (src,str(start),str(stop))
    print_t(2,"<div class='vid-placeholder' url='%s' style='display: none;'></div>" % src,file=file)
    # print_t(2,"<video controls src='%s'>" % src,file=file)
    # print_t(3,'<source src="%s#t=%s,%s"' ,file=file)
    # print_t(3,"type='video/webm;codecs=\"vp8, vorbis\"'/>",file=file)
    # print_t(2,"</video>",file=file)

def print_intro(file=sys.stdout):
    print_t(0,"<!DOCTYPE html>",file=file)
    print_t(0,"<html>",file=file)
    print_t(0,"<head>",file=file)
    print_t(1,"<title></title>",file=file)
    print_t(1,'<link rel="stylesheet" href="../styles.css">',file=file)
    print_t(1,'<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>',file=file)
    print_t(1,'<script type="text/javascript" src="../script.js"></script>',file=file)
    print_t(0,"</head>",file=file)
    print_t(0,"<body>",file=file)

def print_closing(file=sys.stdout):
    print_t(0,"</body>",file=file)
    print_t(0,"</html>",file=file)

def get_markdown_html(filepath):
    with open(filepath) as y:
        md = y.read()
    return markdown.markdown(md)

def time_format(seconds):
    hours = str(seconds // 3600)
    seconds %= 3600
    minutes = str(seconds // 60)
    seconds = str(seconds % 60)
    add_zero = lambda i: "0" + i if len(i) == 1 else i
    hours,minutes,seconds = map(add_zero,[hours,minutes,seconds])
    if int(hours) > 0:
        return "%s:%s:%s" % (hours,minutes,seconds)
    else:
        return "%s:%s" % (minutes,seconds)

def time_difference(start,stop):
    start = start.split(":")
    stop = stop.split(":")
    if len(start) == 3:
        start_hours,start_minutes,start_seconds = map(int,start)
        start_time_s = start_hours*3600 + start_minutes * 60 + start_seconds
    else:
        start_minutes,start_seconds = map(int,start)
        start_time_s = start_minutes * 60 + start_seconds

    if len(stop) == 3:
        stop_hours,stop_minutes,stop_seconds = map(int,stop)
        stop_time_s = stop_hours*3600 + stop_minutes * 60 + stop_seconds
    else:
        stop_minutes,stop_seconds = map(int,stop)
        stop_time_s = stop_minutes * 60 + stop_seconds

    return time_format(stop_time_s-start_time_s)


obj = get_attrs()
src = obj["url"]
name = obj["name"]


# file = sys.stdout
output_path = path + "/" + path + ".html"
file = open(output_path,"w")

print_intro(file=file)
print_t(1,"<h1 id='name'>%s</h1>" % name,file=file)

segments = obj["segments"]
for i in range(len(segments)):
    segment = segments[i]

    if "start" in segment:
        start = segment["start"]
    elif i == 0:
        start = ""
    else:
        start = segments[i-1]["stop"]

    if "stop" in segment:
        stop = segment["stop"]
    elif i == len(segments)-1:
        stop = ""
    else:
        stop = segments[i+1]["start"]

    if start == "":
        start = "00:00:00"

    if stop == "":
        stop = "99:00:00"


    print_t(1,'<div class="vid">',file=file)
    print_t(2,"<h1>%s (%s)</h1>" % (segment["name"],time_difference(start,stop)),file=file)
    print_t(2,"<h2 class='go-back'>Go Back</h2>",file=file)

    print_video_tag(src,start,stop,file=file)

    if "notes" in segment:
        print_t(2,"<div class='notes'>",file=file)
        print(get_markdown_html(path + "/" + segment["notes"]),file=file)
        print_t(2,"</div>",file=file)


    print_t(1,'</div> <!-- vid -->',file=file)


print_closing(file=file)

file.close()

if "-o" in sys.argv:
    os.system("open " + output_path)
