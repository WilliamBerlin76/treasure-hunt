"""CPU functionality."""

import sys

LDI = 0b10000010
PRN = 0b01000111
HLT = 0b00000001
MUL = 0b10100010
ADD = 0b10100000
CMP = 0b10100111
PUSH = 0b01000101
POP = 0b01000110
CALL = 0b01010000
RET = 0b00010001
JMP = 0b01010100
JNE = 0b01010110
JEQ = 0b01010101
ST = 0b10000100
IRET = 0b00010011
PRA = 0b01001000
XOR = 0b10101011
AND = 0b10101000

class CPU:
    """Main CPU class."""

    def __init__(self):
        """Construct a new CPU."""
        ###### Branchtable ########
        self.branchtable = {}
        self.branchtable[LDI] = self.handle_ldi
        self.branchtable[PRN] = self.handle_prn
        self.branchtable[HLT] = self.handle_hlt
        self.branchtable[MUL] = self.handle_mul
        self.branchtable[ADD] = self.handle_add
        self.branchtable[CMP] = self.handle_cmp
        self.branchtable[PUSH] = self.handle_push
        self.branchtable[POP] = self.handle_pop
        self.branchtable[CALL] = self.handle_call
        self.branchtable[RET] = self.handle_ret
        self.branchtable[JMP] = self.handle_jmp
        self.branchtable[JNE] = self.handle_jne
        self.branchtable[JEQ] = self.handle_jeq
        self.branchtable[ST] = self.handle_st
        self.branchtable[IRET] = self.handle_iret
        self.branchtable[PRA] = self.handle_pra
        self.branchtable[XOR] = self.handle_xor
        self.branchtable[AND] = self.handle_and
        ###########################

        self.reg = [0] * 8
        self.ram = [0] * 256
        self.pc = 0
        self.SP = 7 # R7 is reserved as the stack pointer
        self.reg[self.SP] = 0xF4 # Set the pointer to the correct index in RAM
        self.FL = [0] * 8 # Flags

    def load(self, filename):
        """Load a program into memory."""

        address = 0
        try:
            with open(filename) as f:
                for line in f:
                    comment_split = line.split('#')
                    num = comment_split[0].strip()
                    
                    if num == '':
                        continue
                    
                    val = int(num, 2)
                    self.ram[address] = val
                    address += 1

        except FileNotFoundError:
            print("File not found")
            sys.exit(2)


    def alu(self, op, reg_a, reg_b):
        """ALU operations."""

        if op == "ADD":
            self.reg[reg_a] += self.reg[reg_b]
        elif op == 'MUL':
            self.reg[reg_a] *= self.reg[reg_b]
        elif op == 'CMP':
            if self.reg[reg_a] == self.reg[reg_b]:
                self.FL[-1] = 1
                self.FL[-2] = 0
                self.FL[-3] = 0
            elif self.reg[reg_a] < self.reg[reg_b]:
                self.FL[-1] = 0
                self.FL[-2] = 0
                self.FL[-3] = 1
            elif self.reg[reg_a] > self.reg[reg_b]:
                self.FL[-1] = 0
                self.FL[-2] = 1
                self.FL[-3] = 0
        elif op == 'XOR':
            self.reg[reg_a] = self.reg[reg_a] ^ self.reg[reg_b]
        elif op == 'AND':
            self.reg[reg_a] = self.reg[reg_a] & self.reg[reg_b]
        else:
            raise Exception("Unsupported ALU operation")

    def trace(self):
        """
        Handy function to print out the CPU state. You might want to call this
        from run() if you need help debugging.
        """

        print(f"TRACE: %02X | %02X %02X %02X |" % (
            self.pc,
            #self.fl,
            #self.ie,
            self.ram_read(self.pc),
            self.ram_read(self.pc + 1),
            self.ram_read(self.pc + 2)
        ), end='')

        for i in range(8):
            print(" %02X" % self.reg[i], end='')

        print()
    def ram_read(self, mar):
        return self.ram[mar]
    
    def ram_write(self, mar, mdr):
        self.ram[mar] = mdr

    def handle_prn(self, *argv):
        print(self.reg[argv[0]])
        self.pc += 2

    def handle_ldi(self, *argv):
        self.reg[argv[0]] = argv[1]
        self.pc += 3

    def handle_hlt(self, *argv):
        self.running = False
        self.pc += 1

    def handle_mul(self, *argv):
        self.alu('MUL', argv[0], argv[1])
        self.pc += 3
    
    def handle_add(self, *argv):
        self.alu('ADD', argv[0], argv[1])
        self.pc += 3
    
    def handle_xor(self, *argv):
        self.alu('XOR', argv[0], argv[1])
        self.pc += 3

    def handle_and(self, *argv):
        self.alu('AND', argv[0], argv[1])
        self.pc += 3

    def handle_cmp(self, *argv):
        self.alu('CMP', argv[0], argv[1])
        self.pc += 3

    def handle_push(self, *argv):
        self.reg[self.SP] -= 1
        self.ram[self.reg[self.SP]] = self.reg[argv[0]]
        self.pc += 2
        
    def handle_pop(self, *argv):
        val = self.ram[self.reg[self.SP]]
        self.reg[argv[0]] = val
        self.reg[self.SP] += 1
        self.pc += 2
    
    def handle_jne(self, *argv):
        if self.FL[-1] == 0:
            self.pc = self.reg[argv[0]]
        else:
            self.pc += 2
    
    def handle_jeq(self, *argv):
        if self.FL[-1] == 1:
            self.pc = self.reg[argv[0]]
        else:
            self.pc += 2

    def handle_jmp(self, *argv):
        self.pc = self.reg[argv[0]]

    def handle_st(self, *argv):
        self.ram[self.reg[argv[0]]] = self.reg[argv[1]]
        self.pc += 3

    def handle_iret(self, *argv):
        pass
    def handle_call(self, *argv):
        self.reg[self.SP] -= 1
        self.ram[self.reg[self.SP]] = self.pc + 2
        reg = argv[0]
        self.pc = self.reg[reg]

    def handle_ret(self, *argv):
        self.pc = self.ram[self.reg[self.SP]]
        self.reg[self.SP] += 1
    def handle_pra(self, *argv):
        print(chr(self.reg[argv[0]]))
        self.pc += 2
        
    def run(self):
        """Run the CPU."""
        
        self.running = True

        while self.running:
            
            instruction = self.ram[self.pc]
            operand_a = self.ram_read(self.pc + 1) 
            operand_b = self.ram_read(self.pc + 2)
            
            if instruction in self.branchtable:
                self.branchtable[instruction](operand_a, operand_b)
            else:
                print('did not understand the instruction')
                sys.exit(1)

