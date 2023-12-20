# cook your dish here
cases = int(input().strip())

for _ in range(cases):
    m = int(input().strip())
    a = (m + 3) % 6
    b = (m + 2) % 6
    c = (m + 1) % 3
    d = (m + 5) % 6
    e = m % 6
    start = (m - 1) // 12 * 12 + 1
    oppseat = start + 11 - (m - start)
    seattype = ""

    if a == 0 or b == 0:
        seattype = "AS"
    elif c == 0:
        seattype = "MS"
    elif d == 0 or e == 0:
        seattype = "WS"

    print(oppseat, seattype)