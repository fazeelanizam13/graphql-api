let { words, groups } = require('./db')

const resolvers = {
  Query: {
    words: () => words,
    groups: () => groups,
    word: (parent, args) => words.find(word => word.id === args.id),
    group: (parent, args) => groups.find(group => group.id === args.id)
  },
  Mutation: {
    addWord: (parent, args) => {
      const word = {
        id: String(words.length + 1),
        word: args.word,
        meaning: args.meaning || ''
      }
      words.push(word)
      return word
    },
    editWord: (parent, args) => {
      const index = words.findIndex(word => word.id === args.id)
      const newWord = {
        id: args.id,
        word: args.word,
        meaning: args.meaning || ''
      }
      words[index] = newWord
      return newWord
    },
    deleteWord: (parent, args) => {
      const deletedWord = words.find(word => word.id === args.id)
      words = words.filter(word => word.id !== args.id)
      return deletedWord
    },
    addGroup: (parent, args) => {
      let wordsWithNewIDs = []

      if(args.words) 
        args.words.map((word, index) => {
          let newWord = {
            id: words.length + (index + 1),
            word: word.word,
            meaning: word.meaning
          }

          wordsWithNewIDs.push(newWord)
          words.push(newWord)
        })

      const group = {
        id: String(groups.length + 1),
        name: args.name,
        words: wordsWithNewIDs
      }
      groups.push(group)
      return group
    },
    editGroup: (parent, args) => {
      const index = groups.findIndex(group => group.id === args.id)
      const newGroup = {
        id: args.id,
        name: args.name,
        words: groups[index].words
      }
      groups[index] = newGroup
      return newGroup
    },
    deleteGroup: (parent, args) => {
      const deletedGroup = groups.find(group => group.id === args.id)
      groups = groups.filter(group => group.id !== args.id)
      return deletedGroup
    },
  }
}

module.exports = resolvers