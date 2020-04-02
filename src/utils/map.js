
const map = {
    0: {
      n: 10,
      s: 2,
      e: 4,
      w: 1,
      x_coord: 60,
      y_coord: 60
    },
    1: {
      n: null,
      s: null,
      e: 0,
      w: null,
      x_coord: 59,
      y_coord: 60
    },
    2: {
      n: 0,
      s: 6,
      e: 3,
      w: null,
      x_coord: 60,
      y_coord: 59
    },
    3: {
      n: null,
      s: 9,
      e: 5,
      w: 2,
      x_coord: 61,
      y_coord: 59
    },
    4: {
      n: 23,
      s: null,
      e: 13,
      w: 0,
      x_coord: 61,
      y_coord: 60
    },
    5: {
      n: null,
      s: null,
      e: null,
      w: 3,
      x_coord: 62,
      y_coord: 59
    },
    6: {
      n: 2,
      s: null,
      e: null,
      w: 7,
      x_coord: 60,
      y_coord: 58
    },
    7: {
      n: 8,
      s: null,
      e: 6,
      w: 56,
      x_coord: 59,
      y_coord: 58
    },
    8: {
      n: null,
      s: 7,
      e: null,
      w: 16,
      x_coord: 59,
      y_coord: 59
    },
    9: {
      n: 3,
      s: 12,
      e: 11,
      w: null,
      x_coord: 61,
      y_coord: 58
    },
    10: {
      n: 19,
      s: 0,
      e: null,
      w: 43,
      x_coord: 60,
      y_coord: 61
    },
    11: {
      n: null,
      s: null,
      e: 17,
      w: 9,
      x_coord: 62,
      y_coord: 58
    },
    12: {
      n: 9,
      s: 18,
      e: 14,
      w: 21,
      x_coord: 61,
      y_coord: 57
    },
    13: {
      n: null,
      s: null,
      e: 15,
      w: 4,
      x_coord: 62,
      y_coord: 60
    },
    14: {
      n: null,
      s: 34,
      e: 37,
      w: 12,
      x_coord: 62,
      y_coord: 57
    },
    15: {
      n: null,
      s: null,
      e: null,
      w: 13,
      x_coord: 63,
      y_coord: 60
    },
    16: {
      n: 58,
      s: null,
      e: 8,
      w: 67,
      x_coord: 58,
      y_coord: 59
    },
    17: {
      n: 24,
      s: null,
      e: 42,
      w: 11,
      x_coord: 63,
      y_coord: 58
    },
    18: {
      n: 12,
      s: 22,
      e: null,
      w: 25,
      x_coord: 61,
      y_coord: 56
    },
    19: {
      n: 20,
      s: 10,
      e: null,
      w: 77,
      x_coord: 60,
      y_coord: 62
    },
    20: {
      n: 63,
      s: 19,
      e: 27,
      w: 46,
      x_coord: 60,
      y_coord: 63
    },
    21: {
      n: null,
      s: null,
      e: 12,
      w: 29,
      x_coord: 60,
      y_coord: 57
    },
    22: {
      n: 18,
      s: 78,
      e: null,
      w: 36,
      x_coord: 61,
      y_coord: 55
    },
    23: {
      n: null,
      s: 4,
      e: 26,
      w: null,
      x_coord: 61,
      y_coord: 61
    },
    24: {
      n: null,
      s: 17,
      e: null,
      w: null,
      x_coord: 63,
      y_coord: 59
    },
    25: {
      n: null,
      s: null,
      e: 18,
      w: null,
      x_coord: 60,
      y_coord: 56
    },
    26: {
      n: null,
      s: null,
      e: 55,
      w: 23,
      x_coord: 62,
      y_coord: 61
    },
    27: {
      n: 40,
      s: 28,
      e: 30,
      w: 20,
      x_coord: 61,
      y_coord: 63
    },
    28: {
      n: 27,
      s: null,
      e: null,
      w: null,
      x_coord: 61,
      y_coord: 62
    },
    29: {
      n: null,
      s: 45,
      e: 21,
      w: 49,
      x_coord: 59,
      y_coord: 57
    },
    30: {
      n: null,
      s: 31,
      e: 32,
      w: 27,
      x_coord: 62,
      y_coord: 63
    },
    31: {
      n: 30,
      s: null,
      e: 33,
      w: null,
      x_coord: 62,
      y_coord: 62
    },
    32: {
      n: 39,
      s: null,
      e: 54,
      w: 30,
      x_coord: 63,
      y_coord: 63
    },
    33: {
      n: null,
      s: null,
      e: 38,
      w: 31,
      x_coord: 63,
      y_coord: 62
    },
    34: {
      n: 14,
      s: 50,
      e: 35,
      w: null,
      x_coord: 62,
      y_coord: 56
    },
    35: {
      n: null,
      s: 52,
      e: null,
      w: 34,
      x_coord: 63,
      y_coord: 56
    },
    36: {
      n: null,
      s: 48,
      e: 22,
      w: 60,
      x_coord: 60,
      y_coord: 55
    },
    37: {
      n: null,
      s: null,
      e: null,
      w: 14,
      x_coord: 63,
      y_coord: 57
    },
    38: {
      n: null,
      s: 59,
      e: 66,
      w: 33,
      x_coord: 64,
      y_coord: 62
    },
    39: {
      n: 53,
      s: 32,
      e: 51,
      w: 41,
      x_coord: 63,
      y_coord: 64
    },
    40: {
      n: null,
      s: 27,
      e: null,
      w: null,
      x_coord: 61,
      y_coord: 64
    },
    41: {
      n: null,
      s: null,
      e: 39,
      w: null,
      x_coord: 62,
      y_coord: 64
    },
    42: {
      n: 44,
      s: 80,
      e: 118,
      w: 17,
      x_coord: 64,
      y_coord: 58
    },
    43: {
      n: null,
      s: null,
      e: 10,
      w: 47,
      x_coord: 59,
      y_coord: 61
    },
    44: {
      n: null,
      s: 42,
      e: null,
      w: null,
      x_coord: 64,
      y_coord: 59
    },
    45: {
      n: 29,
      s: 60,
      e: null,
      w: null,
      x_coord: 59,
      y_coord: 56
    },
    46: {
      n: null,
      s: null,
      e: 20,
      w: 62,
      x_coord: 59,
      y_coord: 63
    },
    47: {
      n: 71,
      s: null,
      e: 43,
      w: null,
      x_coord: 58,
      y_coord: 61
    },
    48: {
      n: 36,
      s: 105,
      e: null,
      w: 149,
      x_coord: 60,
      y_coord: 54
    },
    49: {
      n: null,
      s: 79,
      e: 29,
      w: 136,
      x_coord: 58,
      y_coord: 57
    },
    50: {
      n: 34,
      s: 89,
      e: null,
      w: null,
      x_coord: 62,
      y_coord: 55
    },
    51: {
      n: 69,
      s: null,
      e: 57,
      w: 39,
      x_coord: 64,
      y_coord: 64
    },
    52: {
      n: 35,
      s: 68,
      e: 75,
      w: null,
      x_coord: 63,
      y_coord: 55
    },
    53: {
      n: 95,
      s: 39,
      e: null,
      w: 88,
      x_coord: 63,
      y_coord: 65
    },
    54: {
      n: null,
      s: null,
      e: null,
      w: 32,
      x_coord: 64,
      y_coord: 63
    },
    55: {
      n: null,
      s: null,
      e: null,
      w: 26,
      x_coord: 63,
      y_coord: 61
    },
    56: {
      n: null,
      s: null,
      e: 7,
      w: 61,
      x_coord: 58,
      y_coord: 58
    },
    57: {
      n: null,
      s: null,
      e: 145,
      w: 51,
      x_coord: 65,
      y_coord: 64
    },
    58: {
      n: null,
      s: 16,
      e: null,
      w: 65,
      x_coord: 58,
      y_coord: 60
    },
    59: {
      n: 38,
      s: 104,
      e: 92,
      w: null,
      x_coord: 64,
      y_coord: 61
    },
    60: {
      n: 45,
      s: null,
      e: 36,
      w: 70,
      x_coord: 59,
      y_coord: 55
    },
    61: {
      n: null,
      s: null,
      e: 56,
      w: 171,
      x_coord: 57,
      y_coord: 58
    },
    62: {
      n: 64,
      s: null,
      e: 46,
      w: 84,
      x_coord: 58,
      y_coord: 63
    },
    63: {
      n: 72,
      s: 20,
      e: null,
      w: 73,
      x_coord: 60,
      y_coord: 64
    },
    64: {
      n: null,
      s: 62,
      e: null,
      w: 82,
      x_coord: 58,
      y_coord: 64
    },
    65: {
      n: 74,
      s: null,
      e: 58,
      w: 139,
      x_coord: 57,
      y_coord: 60
    },
    66: {
      n: 169,
      s: null,
      e: 123,
      w: 38,
      x_coord: 65,
      y_coord: 62
    },
    67: {
      n: null,
      s: null,
      e: 16,
      w: 162,
      x_coord: 57,
      y_coord: 59
    },
    68: {
      n: 52,
      s: null,
      e: 100,
      w: null,
      x_coord: 63,
      y_coord: 54
    },
    69: {
      n: 94,
      s: 51,
      e: 103,
      w: null,
      x_coord: 64,
      y_coord: 65
    },
    70: {
      n: null,
      s: 163,
      e: 60,
      w: 98,
      x_coord: 58,
      y_coord: 55
    },
    71: {
      n: null,
      s: 47,
      e: null,
      w: null,
      x_coord: 58,
      y_coord: 62
    },
    72: {
      n: null,
      s: 63,
      e: null,
      w: 76,
      x_coord: 60,
      y_coord: 65
    },
    73: {
      n: null,
      s: null,
      e: 63,
      w: null,
      x_coord: 59,
      y_coord: 64
    },
    74: {
      n: 87,
      s: 65,
      e: null,
      w: 161,
      x_coord: 57,
      y_coord: 61
    },
    75: {
      n: null,
      s: null,
      e: 85,
      w: 52,
      x_coord: 64,
      y_coord: 55
    },
    76: {
      n: 83,
      s: null,
      e: 72,
      w: 110,
      x_coord: 59,
      y_coord: 65
    },
    77: {
      n: null,
      s: null,
      e: 19,
      w: null,
      x_coord: 59,
      y_coord: 62
    },
    78: {
      n: 22,
      s: 108,
      e: null,
      w: null,
      x_coord: 61,
      y_coord: 54
    },
    79: {
      n: 49,
      s: null,
      e: null,
      w: null,
      x_coord: 58,
      y_coord: 56
    },
    80: {
      n: 42,
      s: 81,
      e: 86,
      w: null,
      x_coord: 64,
      y_coord: 57
    },
    81: {
      n: 80,
      s: null,
      e: null,
      w: null,
      x_coord: 64,
      y_coord: 56
    },
    82: {
      n: 191,
      s: null,
      e: 64,
      w: null,
      x_coord: 57,
      y_coord: 64
    },
    83: {
      n: null,
      s: 76,
      e: 130,
      w: 125,
      x_coord: 59,
      y_coord: 66
    },
    84: {
      n: null,
      s: null,
      e: 62,
      w: 91,
      x_coord: 57,
      y_coord: 63
    },
    85: {
      n: null,
      s: null,
      e: 154,
      w: 75,
      x_coord: 65,
      y_coord: 55
    },
    86: {
      n: null,
      s: 96,
      e: 90,
      w: 80,
      x_coord: 65,
      y_coord: 57
    },
    87: {
      n: null,
      s: 74,
      e: null,
      w: null,
      x_coord: 57,
      y_coord: 62
    },
    88: {
      n: null,
      s: null,
      e: 53,
      w: 122,
      x_coord: 62,
      y_coord: 65
    },
    89: {
      n: 50,
      s: 93,
      e: null,
      w: null,
      x_coord: 62,
      y_coord: 54
    },
    90: {
      n: null,
      s: null,
      e: 178,
      w: 86,
      x_coord: 66,
      y_coord: 57
    },
    91: {
      n: 180,
      s: 101,
      e: 84,
      w: 99,
      x_coord: 56,
      y_coord: 63
    },
    92: {
      n: null,
      s: null,
      e: null,
      w: 59,
      x_coord: 65,
      y_coord: 61
    },
    93: {
      n: 89,
      s: null,
      e: null,
      w: 108,
      x_coord: 62,
      y_coord: 53
    },
    94: {
      n: 152,
      s: 69,
      e: null,
      w: null,
      x_coord: 64,
      y_coord: 66
    },
    95: {
      n: 119,
      s: 53,
      e: null,
      w: 115,
      x_coord: 63,
      y_coord: 66
    },
    96: {
      n: 86,
      s: null,
      e: 97,
      w: null,
      x_coord: 65,
      y_coord: 56
    },
    97: {
      n: null,
      s: null,
      e: 181,
      w: 96,
      x_coord: 66,
      y_coord: 56
    },
    98: {
      n: 102,
      s: 126,
      e: 70,
      w: 109,
      x_coord: 57,
      y_coord: 55
    },
    99: {
      n: 190,
      s: null,
      e: 91,
      w: 146,
      x_coord: 55,
      y_coord: 63
    },
    100: {
      n: null,
      s: 106,
      e: 112,
      w: 68,
      x_coord: 64,
      y_coord: 54
    },
    101: {
      n: 91,
      s: null,
      e: null,
      w: 113,
      x_coord: 56,
      y_coord: 62
    },
    102: {
      n: null,
      s: 98,
      e: null,
      w: 142,
      x_coord: 57,
      y_coord: 56
    },
    103: {
      n: 160,
      s: null,
      e: null,
      w: 69,
      x_coord: 65,
      y_coord: 65
    },
    104: {
      n: 59,
      s: null,
      e: 107,
      w: null,
      x_coord: 64,
      y_coord: 60
    },
    105: {
      n: 48,
      s: null,
      e: null,
      w: 202,
      x_coord: 60,
      y_coord: 53
    },
    106: {
      n: 100,
      s: 111,
      e: null,
      w: 135,
      x_coord: 64,
      y_coord: 53
    },
    107: {
      n: null,
      s: 120,
      e: 121,
      w: 104,
      x_coord: 65,
      y_coord: 60
    },
    108: {
      n: 78,
      s: 117,
      e: 93,
      w: null,
      x_coord: 61,
      y_coord: 53
    },
    109: {
      n: null,
      s: 185,
      e: 98,
      w: 175,
      x_coord: 56,
      y_coord: 55
    },
    110: {
      n: null,
      s: null,
      e: 76,
      w: null,
      x_coord: 58,
      y_coord: 65
    },
    111: {
      n: 106,
      s: 367,
      e: 158,
      w: null,
      x_coord: 64,
      y_coord: 52
    },
    112: {
      n: null,
      s: 141,
      e: 140,
      w: 100,
      x_coord: 65,
      y_coord: 54
    },
    113: {
      n: null,
      s: 114,
      e: 101,
      w: null,
      x_coord: 55,
      y_coord: 62
    },
    114: {
      n: 113,
      s: null,
      e: null,
      w: 176,
      x_coord: 55,
      y_coord: 61
    },
    115: {
      n: 116,
      s: null,
      e: 95,
      w: null,
      x_coord: 62,
      y_coord: 66
    },
    116: {
      n: 132,
      s: 115,
      e: null,
      w: null,
      x_coord: 62,
      y_coord: 67
    },
    117: {
      n: 108,
      s: 131,
      e: 166,
      w: 133,
      x_coord: 61,
      y_coord: 52
    },
    118: {
      n: null,
      s: null,
      e: 137,
      w: 42,
      x_coord: 65,
      y_coord: 58
    },
    119: {
      n: 134,
      s: 95,
      e: null,
      w: null,
      x_coord: 63,
      y_coord: 67
    },
    120: {
      n: 107,
      s: null,
      e: 127,
      w: null,
      x_coord: 65,
      y_coord: 59
    },
    121: {
      n: 128,
      s: null,
      e: 143,
      w: 107,
      x_coord: 66,
      y_coord: 60
    },
    122: {
      n: 124,
      s: null,
      e: 88,
      w: null,
      x_coord: 61,
      y_coord: 65
    },
    123: {
      n: null,
      s: null,
      e: null,
      w: 66,
      x_coord: 66,
      y_coord: 62
    },
    124: {
      n: 157,
      s: 122,
      e: null,
      w: null,
      x_coord: 61,
      y_coord: 66
    },
    125: {
      n: 165,
      s: null,
      e: 83,
      w: 237,
      x_coord: 58,
      y_coord: 66
    },
    126: {
      n: 98,
      s: 129,
      e: null,
      w: null,
      x_coord: 57,
      y_coord: 54
    },
    127: {
      n: null,
      s: null,
      e: 184,
      w: 120,
      x_coord: 66,
      y_coord: 59
    },
    128: {
      n: null,
      s: 121,
      e: 189,
      w: null,
      x_coord: 66,
      y_coord: 61
    },
    129: {
      n: 126,
      s: null,
      e: 194,
      w: 170,
      x_coord: 57,
      y_coord: 53
    },
    130: {
      n: null,
      s: null,
      e: null,
      w: 83,
      x_coord: 60,
      y_coord: 66
    },
    131: {
      n: 117,
      s: 244,
      e: null,
      w: 138,
      x_coord: 61,
      y_coord: 51
    },
    132: {
      n: null,
      s: 116,
      e: null,
      w: null,
      x_coord: 62,
      y_coord: 68
    },
    133: {
      n: null,
      s: null,
      e: 117,
      w: 173,
      x_coord: 60,
      y_coord: 52
    },
    134: {
      n: 147,
      s: 119,
      e: 144,
      w: null,
      x_coord: 63,
      y_coord: 68
    },
    135: {
      n: null,
      s: 150,
      e: 106,
      w: null,
      x_coord: 63,
      y_coord: 53
    },
    136: {
      n: null,
      s: null,
      e: 49,
      w: 148,
      x_coord: 57,
      y_coord: 57
    },
    137: {
      n: null,
      s: null,
      e: null,
      w: 118,
      x_coord: 66,
      y_coord: 58
    },
    138: {
      n: null,
      s: 211,
      e: 131,
      w: 195,
      x_coord: 60,
      y_coord: 51
    },
    139: {
      n: null,
      s: null,
      e: 65,
      w: 188,
      x_coord: 56,
      y_coord: 60
    },
    140: {
      n: null,
      s: null,
      e: null,
      w: 112,
      x_coord: 66,
      y_coord: 54
    },
    141: {
      n: 112,
      s: null,
      e: 156,
      w: null,
      x_coord: 65,
      y_coord: 53
    },
    142: {
      n: null,
      s: null,
      e: 102,
      w: 159,
      x_coord: 56,
      y_coord: 56
    },
    143: {
      n: null,
      s: null,
      e: 212,
      w: 121,
      x_coord: 67,
      y_coord: 60
    },
    144: {
      n: null,
      s: null,
      e: 155,
      w: 134,
      x_coord: 64,
      y_coord: 68
    },
    145: {
      n: 174,
      s: null,
      e: 220,
      w: 57,
      x_coord: 66,
      y_coord: 64
    },
    146: {
      n: 215,
      s: 177,
      e: 99,
      w: 257,
      x_coord: 54,
      y_coord: 63
    },
    147: {
      n: 200,
      s: 134,
      e: 153,
      w: 151,
      x_coord: 63,
      y_coord: 69
    },
    148: {
      n: null,
      s: null,
      e: 136,
      w: 292,
      x_coord: 56,
      y_coord: 57
    },
    149: {
      n: null,
      s: null,
      e: 48,
      w: null,
      x_coord: 59,
      y_coord: 54
    },
    150: {
      n: 135,
      s: null,
      e: null,
      w: 166,
      x_coord: 63,
      y_coord: 52
    },
    151: {
      n: 172,
      s: null,
      e: 147,
      w: 207,
      x_coord: 62,
      y_coord: 69
    },
    152: {
      n: null,
      s: 94,
      e: null,
      w: null,
      x_coord: 64,
      y_coord: 67
    },
    153: {
      n: null,
      s: null,
      e: 329,
      w: 147,
      x_coord: 64,
      y_coord: 69
    },
    154: {
      n: null,
      s: null,
      e: 193,
      w: 85,
      x_coord: 66,
      y_coord: 55
    },
    155: {
      n: null,
      s: 187,
      e: 316,
      w: 144,
      x_coord: 65,
      y_coord: 68
    },
    156: {
      n: null,
      s: 168,
      e: 164,
      w: 141,
      x_coord: 66,
      y_coord: 53
    },
    157: {
      n: 210,
      s: 124,
      e: null,
      w: 182,
      x_coord: 61,
      y_coord: 67
    },
    158: {
      n: null,
      s: 167,
      e: null,
      w: 111,
      x_coord: 65,
      y_coord: 52
    },
    159: {
      n: null,
      s: null,
      e: 142,
      w: 196,
      x_coord: 55,
      y_coord: 56
    },
    160: {
      n: null,
      s: 103,
      e: null,
      w: null,
      x_coord: 65,
      y_coord: 66
    },
    161: {
      n: null,
      s: null,
      e: 74,
      w: null,
      x_coord: 56,
      y_coord: 61
    },
    162: {
      n: null,
      s: null,
      e: 67,
      w: null,
      x_coord: 56,
      y_coord: 59
    },
    163: {
      n: 70,
      s: null,
      e: null,
      w: null,
      x_coord: 58,
      y_coord: 54
    },
    164: {
      n: 217,
      s: null,
      e: 298,
      w: 156,
      x_coord: 67,
      y_coord: 53
    },
    165: {
      n: 203,
      s: 125,
      e: null,
      w: 204,
      x_coord: 58,
      y_coord: 67
    },
    166: {
      n: null,
      s: 198,
      e: 150,
      w: 117,
      x_coord: 62,
      y_coord: 52
    },
    167: {
      n: 158,
      s: 262,
      e: 260,
      w: null,
      x_coord: 65,
      y_coord: 51
    },
    168: {
      n: 156,
      s: null,
      e: 340,
      w: null,
      x_coord: 66,
      y_coord: 52
    },
    169: {
      n: null,
      s: 66,
      e: 186,
      w: null,
      x_coord: 65,
      y_coord: 63
    },
    170: {
      n: null,
      s: null,
      e: 129,
      w: null,
      x_coord: 56,
      y_coord: 53
    },
    171: {
      n: null,
      s: null,
      e: 61,
      w: null,
      x_coord: 56,
      y_coord: 58
    },
    172: {
      n: 267,
      s: 151,
      e: null,
      w: null,
      x_coord: 62,
      y_coord: 70
    },
    173: {
      n: null,
      s: null,
      e: 133,
      w: 214,
      x_coord: 59,
      y_coord: 52
    },
    174: {
      n: 192,
      s: 145,
      e: 224,
      w: null,
      x_coord: 66,
      y_coord: 65
    },
    175: {
      n: null,
      s: 183,
      e: 109,
      w: 179,
      x_coord: 55,
      y_coord: 55
    },
    176: {
      n: null,
      s: null,
      e: 114,
      w: 402,
      x_coord: 54,
      y_coord: 61
    },
    177: {
      n: 146,
      s: null,
      e: null,
      w: 346,
      x_coord: 54,
      y_coord: 62
    },
    178: {
      n: 209,
      s: null,
      e: 243,
      w: 90,
      x_coord: 67,
      y_coord: 57
    },
    179: {
      n: null,
      s: 233,
      e: 175,
      w: 213,
      x_coord: 54,
      y_coord: 55
    },
    180: {
      n: null,
      s: 91,
      e: null,
      w: null,
      x_coord: 56,
      y_coord: 64
    },
    181: {
      n: null,
      s: null,
      e: null,
      w: 97,
      x_coord: 67,
      y_coord: 56
    },
    182: {
      n: null,
      s: null,
      e: 157,
      w: 208,
      x_coord: 60,
      y_coord: 67
    },
    183: {
      n: 175,
      s: 229,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 54
    },
    184: {
      n: null,
      s: null,
      e: 221,
      w: 127,
      x_coord: 67,
      y_coord: 59
    },
    185: {
      n: 109,
      s: null,
      e: null,
      w: null,
      x_coord: 56,
      y_coord: 54
    },
    186: {
      n: null,
      s: null,
      e: 205,
      w: 169,
      x_coord: 66,
      y_coord: 63
    },
    187: {
      n: 155,
      s: null,
      e: null,
      w: null,
      x_coord: 65,
      y_coord: 67
    },
    188: {
      n: null,
      s: null,
      e: 139,
      w: 335,
      x_coord: 55,
      y_coord: 60
    },
    189: {
      n: null,
      s: null,
      e: 255,
      w: 128,
      x_coord: 67,
      y_coord: 61
    },
    190: {
      n: null,
      s: 99,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 64
    },
    191: {
      n: null,
      s: 82,
      e: null,
      w: null,
      x_coord: 57,
      y_coord: 65
    },
    192: {
      n: 201,
      s: 174,
      e: 223,
      w: null,
      x_coord: 66,
      y_coord: 66
    },
    193: {
      n: null,
      s: null,
      e: 251,
      w: 154,
      x_coord: 67,
      y_coord: 55
    },
    194: {
      n: null,
      s: 214,
      e: null,
      w: 129,
      x_coord: 58,
      y_coord: 53
    },
    195: {
      n: null,
      s: 228,
      e: 138,
      w: 225,
      x_coord: 59,
      y_coord: 51
    },
    196: {
      n: 222,
      s: null,
      e: 159,
      w: 197,
      x_coord: 54,
      y_coord: 56
    },
    197: {
      n: 232,
      s: null,
      e: 196,
      w: 276,
      x_coord: 53,
      y_coord: 56
    },
    198: {
      n: 166,
      s: 239,
      e: 199,
      w: null,
      x_coord: 62,
      y_coord: 51
    },
    199: {
      n: null,
      s: 230,
      e: null,
      w: 198,
      x_coord: 63,
      y_coord: 51
    },
    200: {
      n: 227,
      s: 147,
      e: 206,
      w: null,
      x_coord: 63,
      y_coord: 70
    },
    201: {
      n: null,
      s: 192,
      e: null,
      w: null,
      x_coord: 66,
      y_coord: 67
    },
    202: {
      n: null,
      s: null,
      e: 105,
      w: null,
      x_coord: 59,
      y_coord: 53
    },
    203: {
      n: 268,
      s: 165,
      e: 299,
      w: null,
      x_coord: 58,
      y_coord: 68
    },
    204: {
      n: 219,
      s: null,
      e: 165,
      w: 216,
      x_coord: 57,
      y_coord: 67
    },
    205: {
      n: null,
      s: 241,
      e: 479,
      w: 186,
      x_coord: 67,
      y_coord: 63
    },
    206: {
      n: 288,
      s: null,
      e: 380,
      w: 200,
      x_coord: 64,
      y_coord: 70
    },
    207: {
      n: 231,
      s: null,
      e: 151,
      w: 290,
      x_coord: 61,
      y_coord: 69
    },
    208: {
      n: null,
      s: null,
      e: 182,
      w: null,
      x_coord: 59,
      y_coord: 67
    },
    209: {
      n: null,
      s: 178,
      e: null,
      w: null,
      x_coord: 67,
      y_coord: 58
    },
    210: {
      n: null,
      s: 157,
      e: null,
      w: null,
      x_coord: 61,
      y_coord: 68
    },
    211: {
      n: 138,
      s: null,
      e: null,
      w: null,
      x_coord: 60,
      y_coord: 50
    },
    212: {
      n: null,
      s: null,
      e: null,
      w: 143,
      x_coord: 68,
      y_coord: 60
    },
    213: {
      n: null,
      s: null,
      e: 179,
      w: 420,
      x_coord: 53,
      y_coord: 55
    },
    214: {
      n: 194,
      s: null,
      e: 173,
      w: 226,
      x_coord: 58,
      y_coord: 52
    },
    215: {
      n: 246,
      s: 146,
      e: null,
      w: null,
      x_coord: 54,
      y_coord: 64
    },
    216: {
      n: 234,
      s: null,
      e: 204,
      w: 218,
      x_coord: 56,
      y_coord: 67
    },
    217: {
      n: null,
      s: 164,
      e: 247,
      w: null,
      x_coord: 67,
      y_coord: 54
    },
    218: {
      n: null,
      s: 263,
      e: 216,
      w: 242,
      x_coord: 55,
      y_coord: 67
    },
    219: {
      n: null,
      s: 204,
      e: null,
      w: null,
      x_coord: 57,
      y_coord: 68
    },
    220: {
      n: null,
      s: null,
      e: null,
      w: 145,
      x_coord: 67,
      y_coord: 64
    },
    221: {
      n: null,
      s: 253,
      e: 240,
      w: 184,
      x_coord: 68,
      y_coord: 59
    },
    222: {
      n: 305,
      s: 196,
      e: null,
      w: null,
      x_coord: 54,
      y_coord: 57
    },
    223: {
      n: 283,
      s: null,
      e: null,
      w: 192,
      x_coord: 67,
      y_coord: 66
    },
    224: {
      n: null,
      s: null,
      e: null,
      w: 174,
      x_coord: 67,
      y_coord: 65
    },
    225: {
      n: null,
      s: 278,
      e: 195,
      w: null,
      x_coord: 58,
      y_coord: 51
    },
    226: {
      n: null,
      s: 300,
      e: 214,
      w: null,
      x_coord: 57,
      y_coord: 52
    },
    227: {
      n: 269,
      s: 200,
      e: null,
      w: null,
      x_coord: 63,
      y_coord: 71
    },
    228: {
      n: 195,
      s: 281,
      e: null,
      w: null,
      x_coord: 59,
      y_coord: 50
    },
    229: {
      n: 183,
      s: 250,
      e: null,
      w: 236,
      x_coord: 55,
      y_coord: 53
    },
    230: {
      n: 199,
      s: 307,
      e: 297,
      w: null,
      x_coord: 63,
      y_coord: 50
    },
    231: {
      n: null,
      s: 207,
      e: null,
      w: 248,
      x_coord: 61,
      y_coord: 70
    },
    232: {
      n: 272,
      s: 197,
      e: null,
      w: 235,
      x_coord: 53,
      y_coord: 57
    },
    233: {
      n: 179,
      s: null,
      e: null,
      w: 238,
      x_coord: 54,
      y_coord: 54
    },
    234: {
      n: 368,
      s: 216,
      e: null,
      w: 252,
      x_coord: 56,
      y_coord: 68
    },
    235: {
      n: 330,
      s: null,
      e: 232,
      w: 355,
      x_coord: 52,
      y_coord: 57
    },
    236: {
      n: null,
      s: 264,
      e: 229,
      w: null,
      x_coord: 54,
      y_coord: 53
    },
    237: {
      n: null,
      s: null,
      e: 125,
      w: 245,
      x_coord: 57,
      y_coord: 66
    },
    238: {
      n: null,
      s: null,
      e: 233,
      w: null,
      x_coord: 53,
      y_coord: 54
    },
    239: {
      n: 198,
      s: null,
      e: null,
      w: 244,
      x_coord: 62,
      y_coord: 50
    },
    240: {
      n: 249,
      s: null,
      e: 386,
      w: 221,
      x_coord: 69,
      y_coord: 59
    },
    241: {
      n: 205,
      s: null,
      e: 266,
      w: null,
      x_coord: 67,
      y_coord: 62
    },
    242: {
      n: 287,
      s: 259,
      e: 218,
      w: 275,
      x_coord: 54,
      y_coord: 67
    },
    243: {
      n: null,
      s: 293,
      e: 256,
      w: 178,
      x_coord: 68,
      y_coord: 57
    },
    244: {
      n: 131,
      s: null,
      e: 239,
      w: null,
      x_coord: 61,
      y_coord: 50
    },
    245: {
      n: null,
      s: 254,
      e: 237,
      w: null,
      x_coord: 56,
      y_coord: 66
    },
    246: {
      n: null,
      s: 215,
      e: null,
      w: null,
      x_coord: 54,
      y_coord: 65
    },
    247: {
      n: null,
      s: null,
      e: 261,
      w: 217,
      x_coord: 68,
      y_coord: 54
    },
    248: {
      n: 296,
      s: null,
      e: 231,
      w: 280,
      x_coord: 60,
      y_coord: 70
    },
    249: {
      n: 265,
      s: 240,
      e: 282,
      w: null,
      x_coord: 69,
      y_coord: 60
    },
    250: {
      n: 229,
      s: 294,
      e: 289,
      w: null,
      x_coord: 55,
      y_coord: 52
    },
    251: {
      n: null,
      s: null,
      e: 315,
      w: 193,
      x_coord: 68,
      y_coord: 55
    },
    252: {
      n: 284,
      s: null,
      e: 234,
      w: null,
      x_coord: 55,
      y_coord: 68
    },
    253: {
      n: 221,
      s: null,
      e: 258,
      w: null,
      x_coord: 68,
      y_coord: 58
    },
    254: {
      n: 245,
      s: null,
      e: null,
      w: 314,
      x_coord: 56,
      y_coord: 65
    },
    255: {
      n: null,
      s: null,
      e: null,
      w: 189,
      x_coord: 68,
      y_coord: 61
    },
    256: {
      n: null,
      s: 360,
      e: 327,
      w: 243,
      x_coord: 69,
      y_coord: 57
    },
    257: {
      n: 320,
      s: null,
      e: 146,
      w: 364,
      x_coord: 53,
      y_coord: 63
    },
    258: {
      n: null,
      s: null,
      e: 306,
      w: 253,
      x_coord: 69,
      y_coord: 58
    },
    259: {
      n: 242,
      s: null,
      e: null,
      w: 310,
      x_coord: 54,
      y_coord: 66
    },
    260: {
      n: null,
      s: null,
      e: null,
      w: 167,
      x_coord: 66,
      y_coord: 51
    },
    261: {
      n: null,
      s: 277,
      e: 322,
      w: 247,
      x_coord: 69,
      y_coord: 54
    },
    262: {
      n: 167,
      s: 370,
      e: 358,
      w: null,
      x_coord: 65,
      y_coord: 50
    },
    263: {
      n: 218,
      s: null,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 66
    },
    264: {
      n: 236,
      s: 274,
      e: null,
      w: 273,
      x_coord: 54,
      y_coord: 52
    },
    265: {
      n: 279,
      s: 249,
      e: 270,
      w: null,
      x_coord: 69,
      y_coord: 61
    },
    266: {
      n: null,
      s: null,
      e: null,
      w: 241,
      x_coord: 68,
      y_coord: 62
    },
    267: {
      n: 285,
      s: 172,
      e: null,
      w: 271,
      x_coord: 62,
      y_coord: 71
    },
    268: {
      n: null,
      s: 203,
      e: 411,
      w: 312,
      x_coord: 58,
      y_coord: 69
    },
    269: {
      n: 319,
      s: 227,
      e: null,
      w: null,
      x_coord: 63,
      y_coord: 72
    },
    270: {
      n: 416,
      s: null,
      e: 338,
      w: 265,
      x_coord: 70,
      y_coord: 61
    },
    271: {
      n: 337,
      s: null,
      e: 267,
      w: null,
      x_coord: 61,
      y_coord: 71
    },
    272: {
      n: 295,
      s: 232,
      e: null,
      w: null,
      x_coord: 53,
      y_coord: 58
    },
    273: {
      n: 343,
      s: null,
      e: 264,
      w: null,
      x_coord: 53,
      y_coord: 52
    },
    274: {
      n: 264,
      s: null,
      e: null,
      w: 308,
      x_coord: 54,
      y_coord: 51
    },
    275: {
      n: null,
      s: null,
      e: 242,
      w: 456,
      x_coord: 53,
      y_coord: 67
    },
    276: {
      n: null,
      s: null,
      e: 197,
      w: 419,
      x_coord: 52,
      y_coord: 56
    },
    277: {
      n: 261,
      s: null,
      e: 323,
      w: null,
      x_coord: 69,
      y_coord: 53
    },
    278: {
      n: 225,
      s: null,
      e: null,
      w: null,
      x_coord: 58,
      y_coord: 50
    },
    279: {
      n: null,
      s: 265,
      e: null,
      w: null,
      x_coord: 69,
      y_coord: 62
    },
    280: {
      n: 325,
      s: null,
      e: 248,
      w: null,
      x_coord: 59,
      y_coord: 70
    },
    281: {
      n: 228,
      s: 318,
      e: 309,
      w: 317,
      x_coord: 59,
      y_coord: 49
    },
    282: {
      n: null,
      s: null,
      e: null,
      w: 249,
      x_coord: 70,
      y_coord: 60
    },
    283: {
      n: 331,
      s: 223,
      e: 313,
      w: null,
      x_coord: 67,
      y_coord: 67
    },
    284: {
      n: 302,
      s: 252,
      e: null,
      w: 303,
      x_coord: 55,
      y_coord: 69
    },
    285: {
      n: 286,
      s: 267,
      e: null,
      w: null,
      x_coord: 62,
      y_coord: 72
    },
    286: {
      n: 336,
      s: 285,
      e: null,
      w: 291,
      x_coord: 62,
      y_coord: 73
    },
    287: {
      n: null,
      s: 242,
      e: null,
      w: 339,
      x_coord: 54,
      y_coord: 68
    },
    288: {
      n: null,
      s: 206,
      e: null,
      w: null,
      x_coord: 64,
      y_coord: 71
    },
    289: {
      n: null,
      s: null,
      e: null,
      w: 250,
      x_coord: 56,
      y_coord: 52
    },
    290: {
      n: null,
      s: null,
      e: 207,
      w: null,
      x_coord: 60,
      y_coord: 69
    },
    291: {
      n: 410,
      s: null,
      e: 286,
      w: 347,
      x_coord: 61,
      y_coord: 73
    },
    292: {
      n: 301,
      s: null,
      e: 148,
      w: null,
      x_coord: 55,
      y_coord: 57
    },
    293: {
      n: 243,
      s: null,
      e: null,
      w: null,
      x_coord: 68,
      y_coord: 56
    },
    294: {
      n: 250,
      s: 334,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 51
    },
    295: {
      n: null,
      s: 272,
      e: null,
      w: null,
      x_coord: 53,
      y_coord: 59
    },
    296: {
      n: null,
      s: 248,
      e: null,
      w: null,
      x_coord: 60,
      y_coord: 71
    },
    297: {
      n: null,
      s: null,
      e: null,
      w: 230,
      x_coord: 64,
      y_coord: 50
    },
    298: {
      n: null,
      s: 324,
      e: null,
      w: 164,
      x_coord: 68,
      y_coord: 53
    },
    299: {
      n: null,
      s: null,
      e: 311,
      w: 203,
      x_coord: 59,
      y_coord: 68
    },
    300: {
      n: 226,
      s: 377,
      e: null,
      w: 389,
      x_coord: 57,
      y_coord: 51
    },
    301: {
      n: 304,
      s: 292,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 58
    },
    302: {
      n: 422,
      s: 284,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 70
    },
    303: {
      n: 361,
      s: null,
      e: 284,
      w: 405,
      x_coord: 54,
      y_coord: 69
    },
    304: {
      n: null,
      s: 301,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 59
    },
    305: {
      n: 365,
      s: 222,
      e: null,
      w: null,
      x_coord: 54,
      y_coord: 58
    },
    306: {
      n: null,
      s: null,
      e: 397,
      w: 258,
      x_coord: 70,
      y_coord: 58
    },
    307: {
      n: 230,
      s: 373,
      e: 371,
      w: 321,
      x_coord: 63,
      y_coord: 49
    },
    308: {
      n: null,
      s: null,
      e: 274,
      w: null,
      x_coord: 53,
      y_coord: 51
    },
    309: {
      n: null,
      s: 333,
      e: 326,
      w: 281,
      x_coord: 60,
      y_coord: 49
    },
    310: {
      n: null,
      s: null,
      e: 259,
      w: 412,
      x_coord: 53,
      y_coord: 66
    },
    311: {
      n: null,
      s: null,
      e: null,
      w: 299,
      x_coord: 60,
      y_coord: 68
    },
    312: {
      n: 328,
      s: null,
      e: 268,
      w: null,
      x_coord: 57,
      y_coord: 69
    },
    313: {
      n: null,
      s: null,
      e: null,
      w: 283,
      x_coord: 68,
      y_coord: 67
    },
    314: {
      n: null,
      s: null,
      e: 254,
      w: null,
      x_coord: 55,
      y_coord: 65
    },
    315: {
      n: null,
      s: null,
      e: null,
      w: 251,
      x_coord: 69,
      y_coord: 55
    },
    316: {
      n: 344,
      s: null,
      e: null,
      w: 155,
      x_coord: 66,
      y_coord: 68
    },
    317: {
      n: null,
      s: 387,
      e: 281,
      w: 409,
      x_coord: 58,
      y_coord: 49
    },
    318: {
      n: 281,
      s: 487,
      e: null,
      w: null,
      x_coord: 59,
      y_coord: 48
    },
    319: {
      n: 359,
      s: 269,
      e: 345,
      w: null,
      x_coord: 63,
      y_coord: 73
    },
    320: {
      n: 348,
      s: 257,
      e: null,
      w: null,
      x_coord: 53,
      y_coord: 64
    },
    321: {
      n: null,
      s: 413,
      e: 307,
      w: null,
      x_coord: 62,
      y_coord: 49
    },
    322: {
      n: 382,
      s: null,
      e: 435,
      w: 261,
      x_coord: 70,
      y_coord: 54
    },
    323: {
      n: null,
      s: null,
      e: 433,
      w: 277,
      x_coord: 70,
      y_coord: 53
    },
    324: {
      n: 298,
      s: 349,
      e: 354,
      w: null,
      x_coord: 68,
      y_coord: 52
    },
    325: {
      n: 353,
      s: 280,
      e: null,
      w: 374,
      x_coord: 59,
      y_coord: 71
    },
    326: {
      n: null,
      s: 342,
      e: null,
      w: 309,
      x_coord: 61,
      y_coord: 49
    },
    327: {
      n: null,
      s: null,
      e: 427,
      w: 256,
      x_coord: 70,
      y_coord: 57
    },
    328: {
      n: 332,
      s: 312,
      e: 357,
      w: 363,
      x_coord: 57,
      y_coord: 70
    },
    329: {
      n: null,
      s: null,
      e: null,
      w: 153,
      x_coord: 65,
      y_coord: 69
    },
    330: {
      n: 369,
      s: 235,
      e: null,
      w: 383,
      x_coord: 52,
      y_coord: 58
    },
    331: {
      n: null,
      s: 283,
      e: 446,
      w: null,
      x_coord: 67,
      y_coord: 68
    },
    332: {
      n: 350,
      s: 328,
      e: null,
      w: null,
      x_coord: 57,
      y_coord: 71
    },
    333: {
      n: 309,
      s: 378,
      e: null,
      w: null,
      x_coord: 60,
      y_coord: 48
    },
    334: {
      n: 294,
      s: 393,
      e: 341,
      w: 391,
      x_coord: 55,
      y_coord: 50
    },
    335: {
      n: null,
      s: null,
      e: 188,
      w: 366,
      x_coord: 54,
      y_coord: 60
    },
    336: {
      n: null,
      s: 286,
      e: null,
      w: null,
      x_coord: 62,
      y_coord: 74
    },
    337: {
      n: null,
      s: 271,
      e: null,
      w: null,
      x_coord: 61,
      y_coord: 72
    },
    338: {
      n: null,
      s: 379,
      e: null,
      w: 270,
      x_coord: 71,
      y_coord: 61
    },
    339: {
      n: null,
      s: null,
      e: 287,
      w: 445,
      x_coord: 53,
      y_coord: 68
    },
    340: {
      n: null,
      s: null,
      e: null,
      w: 168,
      x_coord: 67,
      y_coord: 52
    },
    341: {
      n: null,
      s: 449,
      e: null,
      w: 334,
      x_coord: 56,
      y_coord: 50
    },
    342: {
      n: 326,
      s: 432,
      e: null,
      w: null,
      x_coord: 61,
      y_coord: 48
    },
    343: {
      n: null,
      s: 273,
      e: null,
      w: 351,
      x_coord: 53,
      y_coord: 53
    },
    344: {
      n: 392,
      s: 316,
      e: 390,
      w: null,
      x_coord: 66,
      y_coord: 69
    },
    345: {
      n: null,
      s: 375,
      e: null,
      w: 319,
      x_coord: 64,
      y_coord: 73
    },
    346: {
      n: null,
      s: null,
      e: 177,
      w: null,
      x_coord: 53,
      y_coord: 62
    },
    347: {
      n: 452,
      s: 442,
      e: 291,
      w: null,
      x_coord: 60,
      y_coord: 73
    },
    348: {
      n: null,
      s: 320,
      e: null,
      w: null,
      x_coord: 53,
      y_coord: 65
    },
    349: {
      n: 324,
      s: 352,
      e: 384,
      w: 356,
      x_coord: 68,
      y_coord: 51
    },
    350: {
      n: 436,
      s: 332,
      e: 404,
      w: null,
      x_coord: 57,
      y_coord: 72
    },
    351: {
      n: null,
      s: 491,
      e: 343,
      w: 478,
      x_coord: 52,
      y_coord: 53
    },
    352: {
      n: 349,
      s: 362,
      e: 485,
      w: null,
      x_coord: 68,
      y_coord: 50
    },
    353: {
      n: null,
      s: 325,
      e: null,
      w: null,
      x_coord: 59,
      y_coord: 72
    },
    354: {
      n: null,
      s: null,
      e: null,
      w: 324,
      x_coord: 69,
      y_coord: 52
    },
    355: {
      n: null,
      s: null,
      e: 235,
      w: null,
      x_coord: 51,
      y_coord: 57
    },
    356: {
      n: null,
      s: null,
      e: 349,
      w: null,
      x_coord: 67,
      y_coord: 51
    },
    357: {
      n: null,
      s: null,
      e: null,
      w: 328,
      x_coord: 58,
      y_coord: 70
    },
    358: {
      n: null,
      s: null,
      e: 401,
      w: 262,
      x_coord: 66,
      y_coord: 50
    },
    359: {
      n: null,
      s: 319,
      e: null,
      w: null,
      x_coord: 63,
      y_coord: 74
    },
    360: {
      n: 256,
      s: null,
      e: 398,
      w: null,
      x_coord: 69,
      y_coord: 56
    },
    361: {
      n: 408,
      s: 303,
      e: null,
      w: null,
      x_coord: 54,
      y_coord: 70
    },
    362: {
      n: 352,
      s: 399,
      e: null,
      w: 463,
      x_coord: 68,
      y_coord: 49
    },
    363: {
      n: 372,
      s: null,
      e: 328,
      w: null,
      x_coord: 56,
      y_coord: 70
    },
    364: {
      n: 429,
      s: 381,
      e: 257,
      w: 448,
      x_coord: 52,
      y_coord: 63
    },
    365: {
      n: null,
      s: 305,
      e: null,
      w: null,
      x_coord: 54,
      y_coord: 59
    },
    366: {
      n: null,
      s: null,
      e: 335,
      w: null,
      x_coord: 53,
      y_coord: 60
    },
    367: {
      n: 111,
      s: null,
      e: null,
      w: null,
      x_coord: 64,
      y_coord: 51
    },
    368: {
      n: null,
      s: 234,
      e: null,
      w: null,
      x_coord: 56,
      y_coord: 69
    },
    369: {
      n: 400,
      s: 330,
      e: null,
      w: 376,
      x_coord: 52,
      y_coord: 59
    },
    370: {
      n: 262,
      s: 434,
      e: 407,
      w: null,
      x_coord: 65,
      y_coord: 49
    },
    371: {
      n: null,
      s: 475,
      e: null,
      w: 307,
      x_coord: 64,
      y_coord: 49
    },
    372: {
      n: 441,
      s: 363,
      e: null,
      w: null,
      x_coord: 56,
      y_coord: 71
    },
    373: {
      n: 307,
      s: 480,
      e: null,
      w: null,
      x_coord: 63,
      y_coord: 48
    },
    374: {
      n: null,
      s: null,
      e: 325,
      w: null,
      x_coord: 58,
      y_coord: 71
    },
    375: {
      n: 345,
      s: null,
      e: 385,
      w: null,
      x_coord: 64,
      y_coord: 72
    },
    376: {
      n: null,
      s: null,
      e: 369,
      w: null,
      x_coord: 51,
      y_coord: 59
    },
    377: {
      n: 300,
      s: null,
      e: null,
      w: null,
      x_coord: 57,
      y_coord: 50
    },
    378: {
      n: 333,
      s: null,
      e: null,
      w: null,
      x_coord: 60,
      y_coord: 47
    },
    379: {
      n: 338,
      s: null,
      e: 395,
      w: null,
      x_coord: 71,
      y_coord: 60
    },
    380: {
      n: 424,
      s: null,
      e: null,
      w: 206,
      x_coord: 65,
      y_coord: 70
    },
    381: {
      n: 364,
      s: null,
      e: null,
      w: 394,
      x_coord: 52,
      y_coord: 62
    },
    382: {
      n: null,
      s: 322,
      e: 388,
      w: null,
      x_coord: 70,
      y_coord: 55
    },
    383: {
      n: null,
      s: null,
      e: 330,
      w: 495,
      x_coord: 51,
      y_coord: 58
    },
    384: {
      n: null,
      s: null,
      e: null,
      w: 349,
      x_coord: 69,
      y_coord: 51
    },
    385: {
      n: null,
      s: null,
      e: null,
      w: 375,
      x_coord: 65,
      y_coord: 72
    },
    386: {
      n: null,
      s: null,
      e: 414,
      w: 240,
      x_coord: 70,
      y_coord: 59
    },
    387: {
      n: 317,
      s: 417,
      e: null,
      w: 431,
      x_coord: 58,
      y_coord: 48
    },
    388: {
      n: null,
      s: null,
      e: 477,
      w: 382,
      x_coord: 71,
      y_coord: 55
    },
    389: {
      n: null,
      s: null,
      e: 300,
      w: null,
      x_coord: 56,
      y_coord: 51
    },
    390: {
      n: null,
      s: null,
      e: null,
      w: 344,
      x_coord: 67,
      y_coord: 69
    },
    391: {
      n: null,
      s: 396,
      e: 334,
      w: 428,
      x_coord: 54,
      y_coord: 50
    },
    392: {
      n: null,
      s: 344,
      e: 462,
      w: null,
      x_coord: 66,
      y_coord: 70
    },
    393: {
      n: 334,
      s: 482,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 49
    },
    394: {
      n: null,
      s: null,
      e: 381,
      w: null,
      x_coord: 51,
      y_coord: 62
    },
    395: {
      n: null,
      s: 403,
      e: 421,
      w: 379,
      x_coord: 72,
      y_coord: 60
    },
    396: {
      n: 391,
      s: null,
      e: null,
      w: null,
      x_coord: 54,
      y_coord: 49
    },
    397: {
      n: null,
      s: null,
      e: null,
      w: 306,
      x_coord: 71,
      y_coord: 58
    },
    398: {
      n: null,
      s: null,
      e: 438,
      w: 360,
      x_coord: 70,
      y_coord: 56
    },
    399: {
      n: 362,
      s: 467,
      e: null,
      w: null,
      x_coord: 68,
      y_coord: 48
    },
    400: {
      n: null,
      s: 369,
      e: null,
      w: null,
      x_coord: 52,
      y_coord: 60
    },
    401: {
      n: null,
      s: null,
      e: null,
      w: 358,
      x_coord: 67,
      y_coord: 50
    },
    402: {
      n: null,
      s: null,
      e: 176,
      w: 451,
      x_coord: 53,
      y_coord: 61
    },
    403: {
      n: 395,
      s: null,
      e: null,
      w: null,
      x_coord: 72,
      y_coord: 59
    },
    404: {
      n: 481,
      s: null,
      e: null,
      w: 350,
      x_coord: 58,
      y_coord: 72
    },
    405: {
      n: 406,
      s: null,
      e: 303,
      w: null,
      x_coord: 53,
      y_coord: 69
    },
    406: {
      n: null,
      s: 405,
      e: null,
      w: 415,
      x_coord: 53,
      y_coord: 70
    },
    407: {
      n: null,
      s: 496,
      e: null,
      w: 370,
      x_coord: 66,
      y_coord: 49
    },
    408: {
      n: 458,
      s: 361,
      e: null,
      w: 423,
      x_coord: 54,
      y_coord: 71
    },
    409: {
      n: null,
      s: null,
      e: 317,
      w: null,
      x_coord: 57,
      y_coord: 49
    },
    410: {
      n: null,
      s: 291,
      e: null,
      w: null,
      x_coord: 61,
      y_coord: 74
    },
    411: {
      n: null,
      s: null,
      e: null,
      w: 268,
      x_coord: 59,
      y_coord: 69
    },
    412: {
      n: null,
      s: 488,
      e: 310,
      w: null,
      x_coord: 52,
      y_coord: 66
    },
    413: {
      n: 321,
      s: null,
      e: null,
      w: null,
      x_coord: 62,
      y_coord: 48
    },
    414: {
      n: null,
      s: null,
      e: null,
      w: 386,
      x_coord: 71,
      y_coord: 59
    },
    415: {
      n: null,
      s: null,
      e: 406,
      w: 418,
      x_coord: 52,
      y_coord: 70
    },
    416: {
      n: null,
      s: 270,
      e: null,
      w: null,
      x_coord: 70,
      y_coord: 62
    },
    417: {
      n: 387,
      s: null,
      e: null,
      w: null,
      x_coord: 58,
      y_coord: 47
    },
    418: {
      n: 425,
      s: 474,
      e: 415,
      w: null,
      x_coord: 51,
      y_coord: 70
    },
    419: {
      n: null,
      s: null,
      e: 276,
      w: null,
      x_coord: 51,
      y_coord: 56
    },
    420: {
      n: null,
      s: 444,
      e: 213,
      w: 437,
      x_coord: 52,
      y_coord: 55
    },
    421: {
      n: 440,
      s: null,
      e: null,
      w: 395,
      x_coord: 73,
      y_coord: 60
    },
    422: {
      n: 426,
      s: 302,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 71
    },
    423: {
      n: null,
      s: null,
      e: 408,
      w: 454,
      x_coord: 53,
      y_coord: 71
    },
    424: {
      n: null,
      s: 380,
      e: 473,
      w: null,
      x_coord: 65,
      y_coord: 71
    },
    425: {
      n: null,
      s: 418,
      e: null,
      w: 469,
      x_coord: 51,
      y_coord: 71
    },
    426: {
      n: 457,
      s: 422,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 72
    },
    427: {
      n: null,
      s: null,
      e: 430,
      w: 327,
      x_coord: 71,
      y_coord: 57
    },
    428: {
      n: null,
      s: null,
      e: 391,
      w: null,
      x_coord: 53,
      y_coord: 50
    },
    429: {
      n: null,
      s: 364,
      e: null,
      w: null,
      x_coord: 52,
      y_coord: 64
    },
    430: {
      n: 443,
      s: null,
      e: 439,
      w: 427,
      x_coord: 72,
      y_coord: 57
    },
    431: {
      n: null,
      s: null,
      e: 387,
      w: 492,
      x_coord: 57,
      y_coord: 48
    },
    432: {
      n: 342,
      s: null,
      e: null,
      w: null,
      x_coord: 61,
      y_coord: 47
    },
    433: {
      n: null,
      s: 455,
      e: 460,
      w: 323,
      x_coord: 71,
      y_coord: 53
    },
    434: {
      n: 370,
      s: null,
      e: null,
      w: null,
      x_coord: 65,
      y_coord: 48
    },
    435: {
      n: null,
      s: null,
      e: null,
      w: 322,
      x_coord: 71,
      y_coord: 54
    },
    436: {
      n: null,
      s: 350,
      e: null,
      w: null,
      x_coord: 57,
      y_coord: 73
    },
    437: {
      n: null,
      s: null,
      e: 420,
      w: 497,
      x_coord: 51,
      y_coord: 55
    },
    438: {
      n: null,
      s: null,
      e: 465,
      w: 398,
      x_coord: 71,
      y_coord: 56
    },
    439: {
      n: null,
      s: null,
      e: null,
      w: 430,
      x_coord: 73,
      y_coord: 57
    },
    440: {
      n: null,
      s: 421,
      e: null,
      w: 476,
      x_coord: 73,
      y_coord: 61
    },
    441: {
      n: null,
      s: 372,
      e: null,
      w: null,
      x_coord: 56,
      y_coord: 72
    },
    442: {
      n: 347,
      s: null,
      e: null,
      w: null,
      x_coord: 60,
      y_coord: 72
    },
    443: {
      n: null,
      s: 430,
      e: 471,
      w: null,
      x_coord: 72,
      y_coord: 58
    },
    444: {
      n: 420,
      s: null,
      e: null,
      w: 490,
      x_coord: 52,
      y_coord: 54
    },
    445: {
      n: 447,
      s: null,
      e: 339,
      w: 450,
      x_coord: 52,
      y_coord: 68
    },
    446: {
      n: null,
      s: null,
      e: 466,
      w: 331,
      x_coord: 68,
      y_coord: 68
    },
    447: {
      n: null,
      s: 445,
      e: null,
      w: null,
      x_coord: 52,
      y_coord: 69
    },
    448: {
      n: null,
      s: null,
      e: 364,
      w: null,
      x_coord: 51,
      y_coord: 63
    },
    449: {
      n: 341,
      s: null,
      e: null,
      w: null,
      x_coord: 56,
      y_coord: 49
    },
    450: {
      n: null,
      s: null,
      e: 445,
      w: null,
      x_coord: 51,
      y_coord: 68
    },
    451: {
      n: null,
      s: null,
      e: 402,
      w: 453,
      x_coord: 52,
      y_coord: 61
    },
    452: {
      n: null,
      s: 347,
      e: null,
      w: null,
      x_coord: 60,
      y_coord: 74
    },
    453: {
      n: null,
      s: 464,
      e: 451,
      w: null,
      x_coord: 51,
      y_coord: 61
    },
    454: {
      n: 470,
      s: null,
      e: 423,
      w: null,
      x_coord: 52,
      y_coord: 71
    },
    455: {
      n: 433,
      s: null,
      e: null,
      w: null,
      x_coord: 71,
      y_coord: 52
    },
    456: {
      n: null,
      s: null,
      e: 275,
      w: 499,
      x_coord: 52,
      y_coord: 67
    },
    457: {
      n: 461,
      s: 426,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 73
    },
    458: {
      n: null,
      s: 408,
      e: null,
      w: 459,
      x_coord: 54,
      y_coord: 72
    },
    459: {
      n: null,
      s: null,
      e: 458,
      w: null,
      x_coord: 53,
      y_coord: 72
    },
    460: {
      n: null,
      s: null,
      e: null,
      w: 433,
      x_coord: 72,
      y_coord: 53
    },
    461: {
      n: null,
      s: 457,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 74
    },
    462: {
      n: null,
      s: null,
      e: null,
      w: 392,
      x_coord: 67,
      y_coord: 70
    },
    463: {
      n: null,
      s: 468,
      e: 362,
      w: null,
      x_coord: 67,
      y_coord: 49
    },
    464: {
      n: 453,
      s: null,
      e: null,
      w: null,
      x_coord: 51,
      y_coord: 60
    },
    465: {
      n: null,
      s: null,
      e: 498,
      w: 438,
      x_coord: 72,
      y_coord: 56
    },
    466: {
      n: null,
      s: 486,
      e: 472,
      w: 446,
      x_coord: 69,
      y_coord: 68
    },
    467: {
      n: 399,
      s: null,
      e: null,
      w: null,
      x_coord: 68,
      y_coord: 47
    },
    468: {
      n: 463,
      s: null,
      e: null,
      w: null,
      x_coord: 67,
      y_coord: 48
    },
    469: {
      n: null,
      s: null,
      e: 425,
      w: null,
      x_coord: 50,
      y_coord: 71
    },
    470: {
      n: null,
      s: 454,
      e: null,
      w: null,
      x_coord: 52,
      y_coord: 72
    },
    471: {
      n: null,
      s: null,
      e: null,
      w: 443,
      x_coord: 73,
      y_coord: 58
    },
    472: {
      n: null,
      s: null,
      e: null,
      w: 466,
      x_coord: 70,
      y_coord: 68
    },
    473: {
      n: null,
      s: null,
      e: 494,
      w: 424,
      x_coord: 66,
      y_coord: 71
    },
    474: {
      n: 418,
      s: null,
      e: null,
      w: null,
      x_coord: 51,
      y_coord: 69
    },
    475: {
      n: 371,
      s: 484,
      e: null,
      w: null,
      x_coord: 64,
      y_coord: 48
    },
    476: {
      n: null,
      s: null,
      e: 440,
      w: null,
      x_coord: 72,
      y_coord: 61
    },
    477: {
      n: null,
      s: null,
      e: 483,
      w: 388,
      x_coord: 72,
      y_coord: 55
    },
    478: {
      n: null,
      s: null,
      e: 351,
      w: null,
      x_coord: 51,
      y_coord: 53
    },
    479: {
      n: null,
      s: null,
      e: null,
      w: 205,
      x_coord: 68,
      y_coord: 63
    },
    480: {
      n: 373,
      s: null,
      e: null,
      w: null,
      x_coord: 63,
      y_coord: 47
    },
    481: {
      n: null,
      s: 404,
      e: null,
      w: null,
      x_coord: 58,
      y_coord: 73
    },
    482: {
      n: 393,
      s: null,
      e: null,
      w: null,
      x_coord: 55,
      y_coord: 48
    },
    483: {
      n: null,
      s: null,
      e: null,
      w: 477,
      x_coord: 73,
      y_coord: 55
    },
    484: {
      n: 475,
      s: null,
      e: null,
      w: null,
      x_coord: 64,
      y_coord: 47
    },
    485: {
      n: null,
      s: null,
      e: null,
      w: 352,
      x_coord: 69,
      y_coord: 50
    },
    486: {
      n: 466,
      s: null,
      e: null,
      w: null,
      x_coord: 69,
      y_coord: 67
    },
    487: {
      n: 318,
      s: 489,
      e: null,
      w: null,
      x_coord: 59,
      y_coord: 47
    },
    488: {
      n: 412,
      s: null,
      e: null,
      w: null,
      x_coord: 52,
      y_coord: 65
    },
    489: {
      n: 487,
      s: null,
      e: null,
      w: null,
      x_coord: 59,
      y_coord: 46
    },
    490: {
      n: null,
      s: null,
      e: 444,
      w: 493,
      x_coord: 51,
      y_coord: 54
    },
    491: {
      n: 351,
      s: null,
      e: null,
      w: null,
      x_coord: 52,
      y_coord: 52
    },
    492: {
      n: null,
      s: null,
      e: 431,
      w: null,
      x_coord: 56,
      y_coord: 48
    },
    493: {
      n: null,
      s: null,
      e: 490,
      w: null,
      x_coord: 50,
      y_coord: 54
    },
    494: {
      n: null,
      s: null,
      e: null,
      w: 473,
      x_coord: 67,
      y_coord: 71
    },
    495: {
      n: null,
      s: null,
      e: 383,
      w: null,
      x_coord: 50,
      y_coord: 58
    },
    496: {
      n: 407,
      s: null,
      e: null,
      w: null,
      x_coord: 66,
      y_coord: 48
    },
    497: {
      n: null,
      s: null,
      e: 437,
      w: null,
      x_coord: 50,
      y_coord: 55
    },
    498: {
      n: null,
      s: null,
      e: null,
      w: 465,
      x_coord: 73,
      y_coord: 56
    },
    499: {
      n: null,
      s: null,
      e: 456,
      w: null,
      x_coord: 51,
      y_coord: 67
    }
  }