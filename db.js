let words = [
  {
    id: '1',
    word: 'Le',
    description: 'Masculine singular',
  },
  {
    id: '2',
    word: 'La',
    description: 'Feminine singular',
  },
  {
    id: '3',
    word: "L'",
    description: 'Followed by a vowel or h',
  },
  {
    id: '4',
    word: 'Les',
    description: 'Plural',
  },
  {
    id: '5',
    word: 'Un',
    description: 'Masculine singular',
  },
  {
    id: '6',
    word: "Une",
    description: 'Feminine singular',
  },
  {
    id: '7',
    word: 'Des',
    description: 'Plural',
  },
]

let groups = [
  {
    id: '1',
    name: 'Definite Articles',
    words: [
      {
        id: '1',
        word: 'Le',
        description: 'Masculine singular',
      },
      {
        id: '2',
        word: 'La',
        description: 'Feminine singular',
      },
      {
        id: '3',
        word: "L'",
        description: 'Followed by a vowel or h',
      },
      {
        id: '4',
        word: 'Les',
        description: 'Plural',
      }
    ]
  },
  {
    id: '2',
    name: 'Indefinite Articles',
    words: [
      {
        id: '5',
        word: 'Un',
        description: 'Masculine singular',
      },
      {
        id: '6',
        word: "Une",
        description: 'Feminine singular',
      },
      {
        id: '7',
        word: 'Des',
        description: 'Plural',
      },
    ]
  }
]

module.exports = {
  words: words,
  groups: groups
}