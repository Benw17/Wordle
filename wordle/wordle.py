# take word need to use symbols to denote wrong spot or right spot i.e S/POR.T meaning / meaning S is in the right spot and R is in the wrong spot
# associate whether the letters have a yellow or green i.e right spot of wrong spot or not in the word

class Word:
    def __init__(self, word):
        self.first = word[0]
        self.second = word[1]
        self.third = word[2]
        self.fourth = word[3]
        self.fifth = word[4]

attempts = {}
attempt = 0

blacklist = set()

def take_input():

    wordle = input("Please input your word: ")
    wordle = wordle.upper()
    attempts[attempt] = Word(wordle)

    attempt += 1



def main():
    take_input()
    print(attempts)


if __name__ == "__main__":
    main()
