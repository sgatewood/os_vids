import yaml
import os,sys

path = sys.argv[1]

def get_attrs():
	return yaml.safe_load(open(path))

def print_t(tab_level,*args,**kwargs):
	print("\t" * tab_level,end="",**kwargs)
	print(*args,**kwargs)

def print_video_tag(src,start,stop,file=sys.stdout):
	print_t(2,"<video controls>",file=file)
	print_t(3,'<source src="%s#t=%s,%s"' % (src,str(start),str(stop)),file=file)
	print_t(3,"type='video/webm;codecs=\"vp8, vorbis\"'/>",file=file)
	print_t(2,"</video>",file=file)

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
	

obj = get_attrs()
src = obj["url"]

# file = sys.stdout
output_path = path.split(".")[0] + ".html"
file = open(output_path,"w")

print_intro(file=file)

for segment in obj["segments"]:
	print_t(1,'<div class="vid">',file=file)
	print_t(2,"<h1>%s</h1>" % segment["name"],file=file)
	print_video_tag(src,segment["start"],segment["stop"],file=file)
	print_t(2,"<br/><br/><a class='go-back' href=\"javascript:window.location.href=window.location.href\">Go Back</a><br/>",file=file)
	print_t(1,'</div> <!-- vid -->',file=file)


print_closing(file=file)

file.close()

os.system("open " + output_path)

