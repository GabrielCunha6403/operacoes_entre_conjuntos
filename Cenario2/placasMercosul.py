valores = {
    "A": 0,
    "B": 1,
    "C": 2,
    "D": 3,
    "E": 4,
    "F": 5,
    "G": 6,
    "H": 7,
    "I": 8,
    "J": 9,
    "K": 10,
    "L": 11,
    "M": 12,
    "N": 13,
    "O": 14,
    "P": 15,
    "Q": 16,
    "R": 17,
    "S": 18,
    "T": 19,
    "U": 20,
    "V": 21,
    "W": 22,
    "X": 23,
    "Y": 24,
    "Z": 25,
}

def gerarValor(placa):
    global valores
    return valores[placa[0]]*26*26 + valores[placa[1]]*26 + valores[placa[2]]


placaInput = input("Digite sua placa: (letras maisculas) ")
placaValue = gerarValor(placaInput)
print(f"valor da placa: {placaValue}")

if placaValue >= gerarValor("NEI") and placaValue <= gerarValor("NFB"):
    print("Amapá Um!")
elif placaValue >= gerarValor("QLN") and placaValue <= gerarValor("QLT"):
    print("Amapá Dois!")
elif placaValue >= gerarValor("SAK") and placaValue <= gerarValor("SAM"):
    print("Amapá Três!")
elif placaValue >= gerarValor("JTA") and placaValue <= gerarValor("JWE"):
    print("Pará Um!")
elif placaValue >= gerarValor("NSE") and placaValue <= gerarValor("NTC"):
    print("Pará Dois!")
elif placaValue >= gerarValor("OBT") and placaValue <= gerarValor("OCA"):
    print("Pará Três!")
elif placaValue >= gerarValor("OFI") and placaValue <= gerarValor("OFW"):
    print("Pará Quatro!")
elif placaValue >= gerarValor("OSW") and placaValue <= gerarValor("OTZ"):
    print("Pará Cinco!")
elif placaValue >= gerarValor("QDA") and placaValue <= gerarValor("QEZ"):
    print("Pará Seis!")
elif placaValue >= gerarValor("QVA") and placaValue <= gerarValor("QVZ"):
    print("Pará Sete!")
elif placaValue >= gerarValor("RWK") and placaValue <= gerarValor("RXD"):
    print("Pará Oito!")
elif placaValue >= gerarValor("NAH") and placaValue <= gerarValor("NBA"):
    print("Roraima Um!")
elif placaValue >= gerarValor("NUH") and placaValue <= gerarValor("NUL"):
    print("Roraima Dois!")
elif placaValue >= gerarValor("RZA") and placaValue <= gerarValor("RZD"):
    print("Roraima Três!")
else:
    print("Não pertence a nenhum dos três estados. (Amapá, Pará e Roraima)")





















