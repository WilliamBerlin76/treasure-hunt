import sys
from cpu import *

cpu = CPU()
if len(sys.argv) != 2:
    print("usage: ls8.py filename")
    sys.exit(1)
        
filename = sys.argv[1]
cpu.load(filename)
cpu.run()