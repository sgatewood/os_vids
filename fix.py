import yaml
import sys

_print = print

f = sys.stdout

def write(*args,**kwargs):
    _print(*args,file=f,**kwargs)

for i in range(10,26):
    name = "lecture_%d/lecture_%d.yaml" % (i,i)
    y = yaml.load(open(name),yaml.Loader)
    f = open(name,"w")
    # print(y)
    for key in ("name","url"):
        write('%s: "%s"' % (key,y[key]))
    write("segments:")
    for segment in y["segments"]:
        name = segment["name"].replace('"','\\"')
        write('\n  - %s: "%s"' % ("name",name))
        for key in ("start","notes","stop"):
            if key in segment:
                val = segment[key].replace('"','\\"')
                write('    %s: "%s"' % (key,val))
        # for key in segment:
        #     if key not in ("name","start","notes","stop"):
        #         write("\033[1;31m", key ,"\033[0m")

    write()
    for i in range(10):
        write('#   - name: ""')
        write('#     start: ""')
        write()

    f.close()
                # raise Exception("no")
    # with open(name,"w") as z:

    # exit()
