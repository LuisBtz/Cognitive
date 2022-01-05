export default {
    //
    name: 'synapsisKnowledge',
    title: 'Synapsis knowledge',
    type: 'document',
    icon: () => `💭`,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'synapsisKnowledgeLinks',
        title: 'Synapsis knowledge Links',
        type: 'array',
        of: [
          {type: 'linksSK'}
        ]
      }
  ],
}