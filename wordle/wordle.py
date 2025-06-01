def data(dictionary):
    blacklist = set()
    letters = dictionary[0]
    colors = dictionary[1]
    send_back = []
    numbers = 0

    for i in colors:
        if colors[i] not in ('green', 'yellow'):
            blacklist.add(letters[i])

    with open('wordle-LA.txt') as words:
        for word in words:
            word = word.strip()
            word = word.upper()

            if len(word) != 5:
                continue

            valid_word = True
            keys = list(letters.keys())

            for key in keys:
                guessed_letter = letters[key]
                color = colors.get(key, 'grey')
                index = int(key[1])

                if color == 'green':
                    if word[index] != guessed_letter:
                        valid_word = False
                        break

                elif color == 'yellow':
                    if guessed_letter not in word or word[index] == guessed_letter:
                        valid_word = False
                        break

                elif color != 'yellow' and color != 'green':
                    if guessed_letter in word:
                        valid_word = False
                        break

            if valid_word:
                send_back.append(word)

    return send_back

def prio_letters():

    letter_list = {}
    important = []

    with open('wordle-LA.txt') as file:
        for word in file:
            word = word.strip()
            for letter in word:

                if letter == '\n':
                    continue

                if letter in letter_list:
                    letter_list[letter] += 1

                elif letter not in letter_list:
                    letter_list[letter] = 1

    sorted_list = sorted(letter_list.items(), key=lambda x: x[1], reverse=True)

    for i in sorted_list:
        important.append(i[0])

    return important

def revise(included_words, prio_letter):

    pool = {}
    sender = []
    give = []

    for word in included_words:
        for letter in word:
            letter = letter.lower()
            if letter in prio_letter:
                pool[word] =+ prio_letter.index(letter)

    keep = sorted(pool.items(), key=lambda x: x[1])

    for i in keep:
        sender.append(i[0])

    return sender




